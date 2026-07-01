import { Product, Blog, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  // --- MEN'S WEAR ---
  {
    id: 'wear-oxford-shirt',
    name: 'Monarch Premium Oxford Shirt',
    price: 1999,
    originalPrice: 2499,
    category: 'Shirt',
    type: 'wear',
    color: 'White',
    material: '100% Cotton',
    sizes: ['S', 'M', 'L', 'XL'],
    imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=600',
    description: 'A classic button-down shirt made with premium high-grade cotton, featuring a refined basket-weave structure. Perfect for transition from boardroom business hours to evening lounges.',
    rating: 4.8,
    isBestSeller: true,
  },
  {
    id: 'wear-slim-blazer',
    name: 'Executive Slim Fit Blazer',
    price: 4999,
    originalPrice: 6499,
    category: 'Blazer',
    type: 'wear',
    color: 'Navy Blue',
    material: 'Polyester Blend',
    sizes: ['M', 'L', 'XL'],
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600',
    description: 'A tailored slim fit blazer featuring structured shoulders, clean notch lapels, and double back venting. Provides an elite silhouette suitable for high-end occasions.',
    rating: 4.9,
    isBestSeller: false,
  },
  {
    id: 'wear-polo-tshirt',
    name: 'Urban Classic Polo T-Shirt',
    price: 1299,
    originalPrice: 1699,
    category: 'T-Shirt',
    type: 'wear',
    color: 'Black',
    material: 'Cotton Pique',
    sizes: ['S', 'M', 'L', 'XL'],
    imageUrl: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=600',
    description: 'Breathable pique knit pattern styled with a modern tailored cut, structured ribbed collar, and signature minimal detailing. Designed for everyday premium comfort.',
    rating: 4.6,
    isBestSeller: false,
  },
  {
    id: 'wear-slim-chinos',
    name: 'Signature Slim Fit Chinos',
    price: 2299,
    originalPrice: 2999,
    category: 'Trousers',
    type: 'wear',
    color: 'Khaki',
    material: 'Stretch Cotton',
    sizes: ['30', '32', '34', '36'],
    imageUrl: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&q=80&w=600',
    description: 'Crafted with premium stretch-woven cotton, offering flexible move-with-you comfort. Features clean seam pockets and an elegant tapered leg styling.',
    rating: 4.7,
    isBestSeller: true,
  },
  {
    id: 'wear-denim-jeans',
    name: 'Heritage Denim Jeans',
    price: 2499,
    originalPrice: 3299,
    category: 'Jeans',
    type: 'wear',
    color: 'Dark Blue',
    material: 'Denim',
    sizes: ['30', '32', '34', '36'],
    imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=600',
    description: 'Woven with high-density premium indigo denim. Offers classical five-pocket design, customized heavy-duty hardware, and a modern straight-taper cut.',
    rating: 4.5,
    isBestSeller: false,
  },

  // --- SHOES ---
  {
    id: 'shoes-elite-sneakers',
    name: 'Urban Elite Sneakers',
    price: 3499,
    originalPrice: 4499,
    category: 'Sneakers',
    type: 'shoes',
    color: 'White',
    material: 'Synthetic Leather',
    sizes: ['7', '8', '9', '10', '11'],
    imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600',
    description: 'Ultra-clean look with thick rubber vulcanized cup-soles and padded ankle lining. Delivers effortless street prestige and durable daily wear.',
    rating: 4.9,
    isBestSeller: true,
  },
  {
    id: 'shoes-leather-loafers',
    name: 'Monarch Leather Loafers',
    price: 4299,
    originalPrice: 5499,
    category: 'Loafers',
    type: 'shoes',
    color: 'Brown',
    material: 'Genuine Leather',
    sizes: ['7', '8', '9', '10'],
    imageUrl: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&q=80&w=600',
    description: 'Handcrafted with select genuine calf leather. Offers rich, hand-burnished details, custom memory-cushion insoles, and versatile slip-on grace.',
    rating: 4.8,
    isBestSeller: false,
  },
  {
    id: 'shoes-formal-dress',
    name: 'Royal Formal Shoes',
    price: 4999,
    originalPrice: 5999,
    category: 'Formal Shoes',
    type: 'shoes',
    color: 'Black',
    material: 'Leather',
    sizes: ['7', '8', '9', '10', '11'],
    imageUrl: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&q=80&w=600',
    description: 'Elite oxford design cut from exquisite dark leather, complete with a fine high-gloss polish coating and premium welted outsoles. Designed for monarchs.',
    rating: 4.9,
    isBestSeller: false,
  },
  {
    id: 'shoes-chelsea-boots',
    name: 'Explorer Chelsea Boots',
    price: 5499,
    originalPrice: 6999,
    category: 'Boots',
    type: 'shoes',
    color: 'Tan',
    material: 'Premium Leather',
    sizes: ['8', '9', '10', '11'],
    imageUrl: 'https://images.unsplash.com/photo-1613425626806-e2db400ced07?auto=format&fit=crop&q=80&w=600',
    description: 'A stylish and durable pair of Chelsea boots crafted from premium high-grade tan leather. Equipped with elastic side panels and durable custom heel loops.',
    rating: 4.7,
    isBestSeller: false,
  },

  // --- ACCESSORIES ---
  {
    id: 'acc-leather-wallet',
    name: 'Royal Leather Wallet',
    price: 1499,
    originalPrice: 1999,
    category: 'Wallet',
    type: 'accessories',
    color: 'Brown',
    material: 'Genuine Leather',
    imageUrl: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600',
    description: 'Ultra-slim bi-fold format crafted with elite full-grain genuine leather. Features dedicated cash pockets and protective RFID-blocking liner tags.',
    rating: 4.8,
    isBestSeller: true,
  },
  {
    id: 'acc-leather-belt',
    name: 'Heritage Leather Belt',
    price: 999,
    originalPrice: 1499,
    category: 'Belt',
    type: 'accessories',
    color: 'Black',
    material: 'Leather',
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600',
    description: 'Smooth black leather with double stitching, finished off with a luxury silver alloy buckle. Adjustable frame fits both trousers and casual denims.',
    rating: 4.7,
    isBestSeller: true,
  },
  {
    id: 'acc-chrono-watch',
    name: 'Urban Chronograph Watch',
    price: 5999,
    originalPrice: 7999,
    category: 'Watch',
    type: 'accessories',
    color: 'Silver',
    strap: 'Stainless Steel',
    waterResistant: true,
    imageUrl: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=600',
    description: 'Precision Japanese movement integrated with triple multi-dial chronograph indicators. Woven with a surgical-grade durable stainless steel band, scratch-resistant mineral glass, and 50m water resistance.',
    rating: 4.9,
    isBestSeller: false,
  },
  {
    id: 'acc-aviator-shades',
    name: 'Monarch Aviator Sunglasses',
    price: 1799,
    originalPrice: 2499,
    category: 'Sunglasses',
    type: 'accessories',
    color: 'Gold/Black',
    uvProtection: true,
    imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=600',
    description: 'Timeless tear-drop style with premium metal alloys, featuring protective polarized dark lenses. Delivers certified 100% UV400 protective filtering with classic charm.',
    rating: 4.6,
    isBestSeller: false,
  },
  {
    id: 'acc-laptop-bag',
    name: 'Executive Laptop Bag',
    price: 3299,
    originalPrice: 4299,
    category: 'Bag',
    type: 'accessories',
    color: 'Black',
    material: 'Vegan Leather',
    imageUrl: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=600',
    description: 'Thoughtfully designed with clean vegan leather. Equipped with premium reinforced laptop sleeves, tablet organizers, and double shoulder padded strap systems.',
    rating: 4.8,
    isBestSeller: false,
  },
];

export const BLOGS: Blog[] = [
  {
    id: 'blog-trends-2026',
    title: "Top Men's Fashion Trends for 2026",
    excerpt: 'Explore relaxed tailoring, organic neutral palettes, premium basics, and versatile footwear designed for the modern gentleman.',
    content: `Fashion in 2026 focuses on relaxed tailoring, neutral color palettes, premium basics, and versatile footwear. Investing in timeless pieces helps create a wardrobe that remains stylish throughout the year.

The modern gentleman is shifting away from rigid, hyper-tight fits toward relaxed, flowy silhouettes that support movement and comfort. Structured yet fluid blazers, loose-fit tapered trousers, and breathable organic fabrics such as cotton and linen dominate seasonal wardrobes.

### Key Highlights for 2026:
- **Relaxed Tailoring:** Sophisticated jackets with softer shoulders and broader cuts that balance casual comfort with elegance.
- **Organic Earthy Palettes:** Shades of sage green, warm oatmeal, stone white, and dark espresso are replacing sterile brights.
- **Premium Basics:** Soft cotton-pique polos, heavyweight supima t-shirts, and structured breathable shirts designed to last years.
- **Hybrid Footwear:** Shoes that can bridge the formal-informal split—slip-on leather loafers, minimalist low-top leather premium sneakers, and clean leather boots.`,
    date: 'June 20, 2026',
    readingTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80&w=600',
    category: 'Trends',
  },
  {
    id: 'blog-capsule-wardrobe',
    title: 'How to Build a Capsule Wardrobe',
    excerpt: 'A beginner-friendly blueprint for selecting durable, high-utility essentials that can be mixed and matched effortlessly.',
    content: `A capsule wardrobe includes essential clothing pieces that can be mixed and matched effortlessly. Start with quality shirts, chinos, jeans, sneakers, and a classic blazer.

The philosophy behind a capsule wardrobe is simple: "Less is more." By curating high-utility clothing in classic cuts and neutral shades, you can generate dozes of elegant combinations while saving time and money.

### Core Capsule Essentials:
1. **White Oxford Shirt:** The absolute foundation. Works under a blazer, open over a graphic tee, or simply tucked into khakis.
2. **Neutral Chino Trousers:** Slim-tapered chinos in safari-sand, khaki, or navy blue serve as the perfect alternative to denim.
3. **Dark Wash Indigo Jeans:** Highly durable, versatile, and instantly smart-casual.
4. **Minimalistic White Sneaker:** Keeps looks youthful, active, and clean.
5. **Tailored Navy Blazer:** Instantly elevates any casual wear for semi-formal gatherings or workspace meetings.`,
    date: 'June 18, 2026',
    readingTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&q=80&w=600',
    category: 'Guides',
  },
  {
    id: 'blog-right-shoes',
    title: 'Choosing the Right Shoes for Every Occasion',
    excerpt: 'Mastering the art of shoe selection: from clean vulcanized sneakers to polished leather dress shoes and Chelsea boots.',
    content: `Formal events require leather dress shoes, while casual outings are best suited for clean sneakers. Loafers offer the perfect balance between comfort and sophistication.

Many men struggle with pairing footwear with their trousers. Understanding the baseline formality of shoes will prevent stylistic clashes and save you from footwear mistakes.

### Footwear Formality Breakdown:
- **Highly Formal (Black-Tie, boardrooms, weddings):** Royal leather oxford dress shoes. Always black or dark mahogany. Keep them polished.
- **Smart Casual (Workplace lounge, dinner dates, galleries):** Monarch calfskin loafers or premium tan Chelsea boots. Unbuttons the rigidity of a suit while maintaining clean authority.
- **Casual (Weekends, travel, shopping):** Pristine white leather athletic low-tops. Pair beautifully with rolled chinos, shorts, or raw denim.`,
    date: 'June 15, 2026',
    readingTime: '3 min read',
    imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600',
    category: 'Footwear',
  },
  {
    id: 'blog-essential-accessories',
    title: 'Essential Accessories Every Man Should Own',
    excerpt: 'Add character and elevate your presence with elite finishing touches: watches, wallets, sunglasses, and bags.',
    content: `Every man should own a quality watch, leather wallet, belt, sunglasses, and a versatile bag. These accessories enhance both style and functionality.

While clothes form the body of your aesthetic, accessories are the personality details. They signal that you pay attention to the details.

### Top 5 Accessories to Secure:
1. **The Chronograph Watch:** A steel or leather timepiece is an immediate extension of status and character.
2. **RFID Leather Wallet:** A slim wallet inside your jacket or pocket that prevents bulkiness while protecting cards.
3. **The Perfect Leather Belt:** Matching your belt finish with your shoe color is the ancient rule that still separates the amateurs from style leaders.
4. **Aviator Sunglasses:** Protects your eyes from intense rays while delivering instantly iconic frame styling.
5. **A Premium Laptop Briefcase:** Ditch the cheap nylon backpack for a vegan leather structure that projects leadership at work.`,
    date: 'June 10, 2026',
    readingTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=600',
    category: 'Accessories',
  },
  {
    id: 'blog-smart-casual',
    title: 'Smart Casual Dressing Guide',
    excerpt: 'The ultimate guide to blending formal silhouettes with streetwear comfort. Look perfectly dressed, never overdone.',
    content: `Smart casual combines comfort with sophistication. Pair chinos with polo shirts, layer with a blazer, and complete the look with loafers or premium sneakers.

The trick to conquering the "smart casual" code lies in contrast play. Combining structured pieces with soft, sporty elements strikes an ideal harmony that fits almost any social setting today.

### Master of Smart Casual Combos:
- **The Polo Knit + Chinos + Clean Loafers:** Active yet respectful.
- **The Classic White Tee + Navy Blazer + Denim + White Sneakers:** Cool, commanding, and extremely visual.
- **The Oxford Button-down (Untucked/Styled) + Trousers + Chelsea Boots:** Rugged yet highly refined.`,
    date: 'June 05, 2026',
    readingTime: '3 min read',
    imageUrl: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&q=80&w=600',
    category: 'Lifestyle',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Rahul S.',
    text: 'Urban Monarch has become my go-to brand. The quality of cotton in the Oxford shirt is amazing and the tapered fit is perfect. Absolutely recommended for office wear!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    role: 'Corporate Consultant',
  },
  {
    id: 'test-2',
    name: 'Aman K.',
    text: 'Their sneakers are stylish and incredibly comfortable for all-day use. I wore the Elite Sneakers for a weekend trip and had zero fatigue. Real premium feel.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    role: 'UX Designer',
  },
  {
    id: 'test-3',
    name: 'Vikram P.',
    text: 'Excellent clothing collection with premium finishing. The blazer fit feels custom-tailored right out of the box, and customer service resolved a size swap request within 24 hours!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150',
    role: 'Entrepreneur',
  },
];

export const FAQS = [
  {
    id: 'faq-1',
    question: 'What is your return policy?',
    answer: 'We accept returns within 15 days of delivery. The products must be unused, in their original packaging, with all clothing tags intact. Dynamic returns can be initiated via your order profile page.',
  },
  {
    id: 'faq-2',
    question: 'Do you offer free shipping?',
    answer: 'Yes! We offer free premium standard shipping on all orders nationwide above ₹2,999. For or lower value carts, a minor standard flat handling rate of ₹150 applies.',
  },
  {
    id: 'faq-3',
    question: 'How can I track my order?',
    answer: 'Order tracking details are sent immediately via your registered email address and phone SMS details as soon as the package is dispatched from our Connaught Place business hub.',
  },
  {
    id: 'faq-4',
    question: 'Can I request a custom clothing size replacement?',
    answer: 'Absolutely. If a size is not a matching fit, select "Replace Size" on your email shipping code, and we will initiate details to swap and deliver your new fit within 48 to 72 hours.',
  },
];
