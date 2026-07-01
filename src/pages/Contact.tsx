import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquareCode, ShieldQuestion, Star, Instagram, Facebook, Twitter, Linkedin, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data';
import { ContactForm } from '../types';
import SEO from '../components/SEO';

export default function Contact() {
  const [formState, setFormState] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [faqOpen, setFaqOpen] = useState<string | null>('faq-1');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API storage transmission or log action
    setShowSuccessModal(true);
  };

  const resetForm = () => {
    setShowSuccessModal(false);
    setFormState({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  // Toggle FAQ accordion item
  const handleToggleFaq = (id: string) => {
    setFaqOpen(faqOpen === id ? null : id);
  };

  return (
    <div className="bg-neutral-900 text-neutral-100 min-h-screen pt-28 pb-16">
      {/* Contact page SEO */}
      <SEO
        title="Get In Touch & Customer Support FAQs"
        description="Contact Urban Monarch support team. Reach our New Delhi office via email support@urbanmonarch.com, call +91 98765 43210, or learn about our 15-day return policy."
        keywords="urban monarch contact, concierge desk support, premium customer care, clothing store returns policy, fashion store New Delhi"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Title and Introduction */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="font-mono text-xs tracking-[0.4em] text-amber-500 uppercase block font-bold">
            CONCIERGE DESK
          </span>
          <h1 className="font-sans font-black text-4xl sm:text-6xl uppercase tracking-tighter text-white leading-none">
            Contact Concierge
          </h1>
          <p className="text-neutral-400 font-light text-sm max-w-lg mx-auto leading-relaxed">
            We'd love to hear from you. Whether you have questions about products, orders, or partnerships, our team is here to help.
          </p>
          <div className="w-16 h-[2px] bg-amber-500 mx-auto mt-4" />
        </div>

        {/* Core Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Grid Column: Brand contact options */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-neutral-950 border border-white/10 rounded-none space-y-6">
              <h3 className="font-sans font-black text-lg text-white uppercase tracking-tighter">
                Contact Information
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
                Connect with our concierge department directly or visit our office at Connaught Place during Customer Care hours.
              </p>

              <div className="space-y-4 pt-2">
                {/* Brand Name */}
                <div className="flex items-start gap-3.5 text-xs text-neutral-300">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-510 shrink-0 pt-0.5 font-bold">
                    Brand Name:
                  </span>
                  <strong className="text-white uppercase tracking-wider font-extrabold text-[#c5a059]">Urban Monarch</strong>
                </div>

                {/* Email Address */}
                <div className="flex items-center gap-3.5">
                  <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                  <div className="text-xs">
                    <p className="text-neutral-500 font-mono text-[9px] uppercase font-bold">Email Support</p>
                    <a
                      href="mailto:support@urbanmonarch.com"
                      className="text-neutral-200 hover:text-amber-400 font-medium transition-colors"
                    >
                      support@urbanmonarch.com
                    </a>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-center gap-3.5">
                  <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                  <div className="text-xs">
                    <p className="text-neutral-500 font-mono text-[9px] uppercase font-bold">Phone Line</p>
                    <a
                      href="tel:+919876543210"
                      className="text-neutral-200 hover:text-amber-400 font-medium transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* Customer Care Operating schedule Hours */}
                <div className="flex items-start gap-3.5">
                  <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="text-neutral-500 font-mono text-[9px] uppercase font-bold">Concierge Hours</p>
                    <p className="text-neutral-200">Monday – Saturday: 9:00 AM – 7:00 PM</p>
                    <p className="text-neutral-510 mt-0.5 font-medium">Sunday: Rest Day</p>
                  </div>
                </div>

                {/* Physical address */}
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="text-neutral-500 font-mono text-[9px] uppercase font-bold">Corporate Office Address</p>
                    <p className="text-neutral-200 leading-relaxed font-light">
                      Urban Monarch Fashion Pvt. Ltd. <br />
                      Level 5, Business Tower, Connaught Place, <br />
                      New Delhi, India – 110001
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels precisely listed */}
              <div className="border-t border-neutral-900 pt-6 space-y-3">
                <p className="text-neutral-510 font-mono text-[9px] uppercase tracking-wider">
                  Social Channels
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs text-neutral-400">
                  <a
                    href="https://instagram.com/urbanmonarchofficial"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-amber-550 shrink-0" />
                    <span>@urbanmonarchofficial</span>
                  </a>
                  <a
                    href="https://facebook.com/UrbanMonarch"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                  >
                    <Facebook className="w-4 h-4 text-amber-550 shrink-0" />
                    <span>Urban Monarch</span>
                  </a>
                  <a
                    href="https://twitter.com/UrbanMonarch"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                  >
                    <Twitter className="w-4 h-4 text-amber-550 shrink-0" />
                    <span>@UrbanMonarch</span>
                  </a>
                  <a
                    href="https://linkedin.com/company/urban-monarch-fashion"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-amber-550 shrink-0" />
                    <span>Urban Monarch Fashion</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Grid Column: Message transmission Form */}
          <div className="lg:col-span-7 bg-neutral-950 p-8 border border-white/10 rounded-none">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center gap-2 mx-auto pb-4 border-b border-white/10">
                <MessageSquareCode className="w-4 h-4 text-amber-400" />
                <h2 className="font-sans font-black text-sm tracking-widest text-white uppercase select-none">
                  Send Us a Message
                </h2>
              </div>

              {/* Form Input fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-mono tracking-widest text-neutral-450 uppercase mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-neutral-900 border border-white/10 hover:border-white/20 focus:border-amber-400 text-xs p-3 rounded-none text-white focus:outline-hidden"
                    placeholder="e.g. Rahul Sharma"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono tracking-widest text-neutral-450 uppercase mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-neutral-900 border border-white/10 hover:border-white/20 focus:border-amber-400 text-xs p-3 rounded-none text-white focus:outline-hidden"
                    placeholder="e.g. rahul@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-mono tracking-widest text-neutral-450 uppercase mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full bg-neutral-900 border border-white/10 hover:border-white/20 focus:border-amber-400 text-xs p-3 rounded-none text-white focus:outline-hidden"
                    placeholder="e.g. +91 99999 88888"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono tracking-widest text-neutral-450 uppercase mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full bg-neutral-900 border border-white/10 hover:border-white/20 focus:border-amber-400 text-xs p-3 rounded-none text-white focus:outline-hidden"
                    placeholder="e.g. Size replacement advice"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono tracking-widest text-neutral-450 uppercase mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-neutral-900 border border-white/10 hover:border-white/20 focus:border-amber-400 text-xs p-3 rounded-none text-white focus:outline-hidden resize-none"
                  placeholder="How can our royal styling experts support you?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-amber-500 hover:bg-white text-black font-black uppercase tracking-widest text-xs rounded-none transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Verbatim FAQ Accordion Block */}
        <div className="pt-8 max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="font-mono text-[10px] tracking-widest text-amber-500 uppercase block font-bold">
              SUPPORT CENTRE RESOLUTIONS
            </span>
            <h2 className="font-sans font-black text-2xl sm:text-4xl text-white uppercase tracking-tighter">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-[2px] bg-amber-500 mx-auto mt-4" />
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => {
              const isOpen = faqOpen === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-neutral-950 border border-white/10 rounded-none overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => handleToggleFaq(faq.id)}
                    className="w-full p-5 flex justify-between items-center text-left hover:bg-neutral-900 transition-colors"
                  >
                    <span className="font-sans font-bold text-sm sm:text-base text-neutral-200">
                      {faq.question}
                    </span>
                    <span className="text-amber-500 font-bold text-lg select-none">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="overflow-hidden border-t border-white/10 bg-neutral-950"
                      >
                        <div className="p-5 text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Success transmission Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={resetForm}
              className="fixed inset-0 bg-neutral-950 z-50 backdrop-blur-xs"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm bg-neutral-950 border border-white/10 p-6 rounded-none text-center space-y-4 shadow-2xl z-50 text-neutral-250"
            >
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-none flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-sans font-black uppercase text-white text-base">Transmission Active!</h4>
                <p className="text-xs text-neutral-300 leading-relaxed font-light">
                  Thank you, <strong>{formState.name}</strong>. Your inquiry has been registered instantly in our database. Our experts based in Delhi will reach out back to you at <strong>{formState.email}</strong> shortly.
                </p>
              </div>
              <button
                onClick={resetForm}
                className="w-full py-2.5 bg-amber-500 hover:bg-white text-black text-xs font-black uppercase tracking-widest rounded-none transition-all cursor-pointer"
              >
                Acknowledge & Close
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
