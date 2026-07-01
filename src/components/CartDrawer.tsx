import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, CreditCard, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    cartTotal,
    clearCart,
  } = useCart();

  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
  });

  const isFormValid = shippingInfo.name && shippingInfo.email && shippingInfo.address && shippingInfo.city && shippingInfo.zip;

  // Let's do some nice shipping logic: Free above 2,999 INR, otherwise 150 INR.
  const shippingThreshold = 2999;
  const shippingCost = cartTotal >= shippingThreshold || cartTotal === 0 ? 0 : 150;
  const grandTotal = cartTotal + shippingCost;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    setCheckoutStep('success');
  };

  const resetAllState = () => {
    clearCart();
    setCheckoutStep('cart');
    setIsCartOpen(false);
    setShippingInfo({ name: '', email: '', address: '', city: '', zip: '' });
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              if (checkoutStep !== 'success') {
                setIsCartOpen(false);
              }
            }}
            className="fixed inset-0 bg-neutral-950 z-50 backdrop-blur-xs"
          />

          {/* Drawer Frame */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-neutral-900 border-l border-neutral-800 shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-5 border-b border-neutral-800 flex justify-between items-center bg-neutral-950/40">
              <div>
                <h3 className="font-sans font-bold text-base tracking-widest text-white uppercase">
                  {checkoutStep === 'cart' && 'Your Shopping Bag'}
                  {checkoutStep === 'checkout' && 'Secure Checkout'}
                  {checkoutStep === 'success' && 'Order Received!'}
                </h3>
                <p className="text-[10px] font-mono uppercase tracking-wider text-amber-500 mt-0.5">
                  {checkoutStep !== 'success' ? `${cart.length} unique item(s)` : 'Thank you for shopping'}
                </p>
              </div>
              {checkoutStep !== 'success' && (
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1 px-2 text-neutral-400 hover:text-white hover:bg-neutral-800/85 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Scrollable Content Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cart.length === 0 && checkoutStep === 'cart' ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                  <div className="p-4 bg-neutral-800/40 rounded-full border border-neutral-700/50">
                    <Trash2 className="w-8 h-8 text-neutral-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">Your shopping bag is empty</h4>
                    <p className="text-xs text-neutral-400 max-w-xs mt-1">
                      Check out our premium men's collections to find garments crafted for standard modern style.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-neutral-900 font-bold text-xs uppercase tracking-widest rounded"
                  >
                    Start Browsing
                  </button>
                </div>
              ) : checkoutStep === 'cart' ? (
                /* --- STEP 1: CART LIST --- */
                <div className="space-y-4">
                  {cart.map((item, idx) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                      className="flex gap-4 p-3 bg-neutral-800/30 border border-neutral-800 rounded relative group"
                    >
                      <img
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        className="w-16 h-20 object-cover rounded bg-neutral-900 border border-neutral-700/20"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-white truncate pr-6">
                          {item.product.name}
                        </h4>
                        <div className="flex items-center gap-3 text-xs text-neutral-400 mt-1">
                          <span>Size: <strong className="text-neutral-200">{item.selectedSize}</strong></span>
                          <span>Color: <strong className="text-neutral-200">{item.selectedColor}</strong></span>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          {/* Quantity selector */}
                          <div className="flex items-center border border-neutral-700 bg-neutral-900 rounded">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                              className="p-1 px-2 text-neutral-400 hover:text-white"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 font-mono text-xs text-white">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                              className="p-1 px-2 text-neutral-400 hover:text-white"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          {/* Price */}
                          <span className="font-mono text-sm font-bold text-amber-400">
                            ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>

                      {/* Trash action button */}
                      <button
                        onClick={() => removeFromCart(item.product.id, item.selectedSize, item.selectedColor)}
                        className="absolute top-3 right-3 p-1 text-neutral-500 hover:text-red-400 rounded transition-colors"
                        title="Remove Item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}

                  {/* Free shipping progress bar */}
                  <div className="mt-6 bg-neutral-950/50 p-4 border border-neutral-800/80 rounded">
                    {cartTotal >= shippingThreshold ? (
                      <p className="text-xs text-green-400 font-semibold flex items-center gap-1.5">
                        🎉 Congrats! You qualified for Free Premium Shipping.
                      </p>
                    ) : (
                      <div>
                        <p className="text-xs text-neutral-300">
                          Add <span className="font-bold font-mono text-amber-400">₹{(shippingThreshold - cartTotal).toLocaleString('en-IN')}</span> more to qualify for <span className="font-semibold text-white">Free Premium Shipping</span>.
                        </p>
                        <div className="w-full bg-neutral-800 h-1.5 rounded-full mt-2 overflow-hidden">
                          <div
                            className="bg-amber-400 h-full rounded-full transition-all duration-300"
                            style={{ width: `${Math.min((cartTotal / shippingThreshold) * 100, 100)}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : checkoutStep === 'checkout' ? (
                /* --- STEP 2: SHIPPING DETAILS FORM --- */
                <form id="shipping-form" onSubmit={handleCheckoutSubmit} className="space-y-4">
                  <div className="p-3 bg-neutral-950/40 border border-neutral-800 rounded mb-4">
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Please enter your shipping address details to place simulated order with <strong>Cash on Delivery (COD)</strong> option.
                    </p>
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono tracking-widest text-neutral-400 uppercase mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={shippingInfo.name}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
                      className="w-full bg-neutral-950 border border-neutral-800 hover:border-neutral-700 focus:border-amber-400 text-sm p-2.5 rounded text-white focus:outline-hidden"
                      placeholder="e.g. Rahul Sharma"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono tracking-widest text-neutral-400 uppercase mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={shippingInfo.email}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                      className="w-full bg-neutral-950 border border-neutral-800 hover:border-neutral-700 focus:border-amber-400 text-sm p-2.5 rounded text-white focus:outline-hidden"
                      placeholder="e.g. rahul@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono tracking-widest text-neutral-400 uppercase mb-1.5">
                      Delivery Address *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={shippingInfo.address}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                      className="w-full bg-neutral-950 border border-neutral-800 hover:border-neutral-700 focus:border-amber-400 text-sm p-2.5 rounded text-white focus:outline-hidden resize-none"
                      placeholder="e.g. Flat 302, Business Court"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono tracking-widest text-neutral-400 uppercase mb-1.5">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingInfo.city}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                        className="w-full bg-neutral-950 border border-neutral-800 hover:border-neutral-700 focus:border-amber-400 text-sm p-2.5 rounded text-white focus:outline-hidden"
                        placeholder="e.g. New Delhi"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono tracking-widest text-neutral-400 uppercase mb-1.5">
                        ZIP / Postal Code *
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingInfo.zip}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })}
                        className="w-full bg-neutral-950 border border-neutral-800 hover:border-neutral-700 focus:border-amber-400 text-sm p-2.5 rounded text-white focus:outline-hidden"
                        placeholder="e.g. 110001"
                      />
                    </div>
                  </div>
                </form>
              ) : (
                /* --- STEP 3: SUCCESS BLOCK --- */
                <div className="h-full flex flex-col justify-center items-center text-center space-y-6 py-12">
                  <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center animate-bounce">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-white font-serif font-bold text-lg">Thank Your Majesty!</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed max-w-xs">
                      Your premium order was registered instantly. A dispatcher from our office at <strong>Connaught Place, New Delhi</strong> is starting to compile the outfit.
                    </p>
                  </div>
                  <div className="bg-neutral-950/80 p-4 border border-neutral-800 rounded w-full text-left space-y-1 text-xs">
                    <p className="text-neutral-500">Order ID: <span className="font-mono text-neutral-300">UM-{(100000 + Math.floor(Math.random() * 900000))}</span></p>
                    <p className="text-neutral-550">Estimated Delivery: <span className="text-neutral-300">Within 3 Business Days</span></p>
                    <p className="text-neutral-550">Payment Method: <span className="text-amber-400 font-semibold">Cash on Delivery (COD)</span></p>
                  </div>
                  <button
                    onClick={resetAllState}
                    className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-neutral-900 font-bold text-xs uppercase tracking-widest rounded"
                  >
                    Continue Shopping
                  </button>
                </div>
              )}
            </div>

            {/* Sticky Foot Order Panel */}
            {cart.length > 0 && checkoutStep !== 'success' && (
              <div className="p-5 border-t border-neutral-800 bg-neutral-950/70 space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Cart Subtotal</span>
                    <span className="font-mono text-white">₹{cartTotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Premium Shipping</span>
                    <span className="font-mono text-white">
                      {shippingCost === 0 ? <span className="text-emerald-400">FREE</span> : `₹${shippingCost}`}
                    </span>
                  </div>
                  <div className="border-t border-neutral-800 pt-3 flex justify-between font-bold text-base">
                    <span className="text-white">Order Total</span>
                    <span className="font-mono text-amber-400">₹{grandTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {checkoutStep === 'cart' ? (
                  <button
                    onClick={() => setCheckoutStep('checkout')}
                    className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-neutral-990 font-bold uppercase tracking-widest text-xs rounded transition-transform active:scale-95"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Proceed to Checkout</span>
                  </button>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setCheckoutStep('cart')}
                      className="py-3 border border-neutral-800 text-neutral-300 hover:text-white bg-neutral-900 rounded font-bold uppercase tracking-widest text-[10px]"
                    >
                      Back to Bag
                    </button>
                    <button
                      type="submit"
                      form="shipping-form"
                      disabled={!isFormValid}
                      className={`py-3 font-bold uppercase tracking-widest text-[10px] rounded ${
                        isFormValid
                          ? 'bg-amber-500 hover:bg-amber-600 text-neutral-900 hover:cursor-pointer'
                          : 'bg-neutral-800 text-neutral-600 cursor-not-allowed'
                      }`}
                    >
                      Place Order (COD)
                    </button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
