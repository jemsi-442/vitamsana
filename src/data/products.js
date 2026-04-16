const categoryLabels = {
  breakfast: {
    en: 'breakfast',
    sw: 'kifungua kinywa',
  },
  signature: {
    en: 'signature',
    sw: 'maalum',
  },
  grill: {
    en: 'grill',
    sw: 'grill',
  },
  'quick-bites': {
    en: 'quick bites',
    sw: 'chakula cha haraka',
  },
  drinks: {
    en: 'drinks',
    sw: 'vinywaji',
  },
  dessert: {
    en: 'dessert',
    sw: 'dessert',
  },
};

export const products = [
  {
    id: 'prod001',
    name: {
      en: 'Mshikaki Platter',
      sw: 'Sahani ya Mshikaki',
    },
    category: 'grill',
    price: 18000,
    unit: {
      en: '/ plate',
      sw: '/ sahani',
    },
    description: {
      en: 'Tender beef skewers finished on the grill and served with pili pili, kachumbari, and fries.',
      sw: 'Mishikaki laini ya nyama iliyomaliziwa kwenye grill na kuletwa pamoja na pili pili, kachumbari, na chipsi.',
    },
    imageSrc: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'prod002',
    name: {
      en: 'Coconut Fish Curry',
      sw: 'Samaki wa Nazi',
    },
    category: 'signature',
    price: 22000,
    unit: {
      en: '/ bowl',
      sw: '/ bakuli',
    },
    description: {
      en: 'Coastal-style samaki wa nazi with fragrant rice, spinach, and fresh lime on the side.',
      sw: 'Samaki wa nazi wa mtindo wa pwani ukiambatana na wali wenye harufu nzuri, spinach, na limau fresh pembeni.',
    },
    imageSrc: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'prod003',
    name: {
      en: 'Pilau Royal',
      sw: 'Pilau Royal',
    },
    category: 'signature',
    price: 16000,
    unit: {
      en: '/ plate',
      sw: '/ sahani',
    },
    description: {
      en: 'Slow-cooked spiced pilau layered with marinated beef, fried onions, and a cooling kachumbari salad.',
      sw: 'Pilau ya viungo iliyopikwa taratibu ikiwa na nyama iliyorowekwa, vitunguu vya kukaanga, na kachumbari ya kuburudisha.',
    },
    imageSrc: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'prod004',
    name: {
      en: 'Chicken Mishkaki Wrap',
      sw: 'Wrap ya Mishkaki ya Kuku',
    },
    category: 'quick-bites',
    price: 12000,
    unit: {
      en: '/ wrap',
      sw: '/ wrap',
    },
    description: {
      en: 'Chargrilled chicken strips wrapped with crunchy slaw, garlic sauce, and house chilli drizzle.',
      sw: 'Vipande vya kuku vya grill vilivyofungwa kwenye wrap pamoja na salad crunchy, mchuzi wa garlic, na chilli ya nyumbani.',
    },
    imageSrc: 'https://images.unsplash.com/photo-1530469912745-a215c6b256ea?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'prod005',
    name: {
      en: 'Passion Breeze',
      sw: 'Passion Breeze',
    },
    category: 'drinks',
    price: 7000,
    unit: {
      en: '/ glass',
      sw: '/ glasi',
    },
    description: {
      en: 'A cold passion and pineapple cooler blended fresh for hot Dar days and sunset dinners.',
      sw: 'Mchanganyiko baridi wa passion na nanasi uliotengenezwa fresh kwa siku za joto za Dar na dinner za jioni.',
    },
    imageSrc: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'prod006',
    name: {
      en: 'Swahili Breakfast Board',
      sw: 'Breakfast Board ya Kiswahili',
    },
    category: 'breakfast',
    price: 14000,
    unit: {
      en: '/ set',
      sw: '/ seti',
    },
    description: {
      en: 'Chapati, mahamri, eggs, seasonal fruit, and spiced tea plated for a relaxed morning start.',
      sw: 'Chapati, mahamri, mayai, matunda ya msimu, na chai ya viungo vilivyopangwa kwa mwanzo mtulivu wa asubuhi.',
    },
    imageSrc: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'prod007',
    name: {
      en: 'Zanzibar Octopus',
      sw: 'Pweza wa Zanzibar',
    },
    category: 'signature',
    price: 26000,
    unit: {
      en: '/ plate',
      sw: '/ sahani',
    },
    description: {
      en: 'Grilled pweza in a tamarind glaze with coconut greens and soft cassava wedges.',
      sw: 'Pweza wa grill wenye glaze ya ukwaju ukiambatana na mboga za nazi na vipande laini vya muhogo.',
    },
    imageSrc: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'prod008',
    name: {
      en: 'Loaded Viazi Basket',
      sw: 'Basket ya Viazi Special',
    },
    category: 'quick-bites',
    price: 9000,
    unit: {
      en: '/ basket',
      sw: '/ basket',
    },
    description: {
      en: 'Crisp fries tossed with spice dust, melted cheese, and a tangy house sauce.',
      sw: 'Viazi vya kukaanga vilivyochanganywa na viungo, cheese iliyoyeyuka, na mchuzi wa nyumbani wenye ladha ya kuvutia.',
    },
    imageSrc: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'prod009',
    name: {
      en: 'Mango Cheesecake Jar',
      sw: 'Jar ya Mango Cheesecake',
    },
    category: 'dessert',
    price: 8500,
    unit: {
      en: '/ jar',
      sw: '/ jar',
    },
    description: {
      en: 'Silky cheesecake layered with mango compote and biscuit crumble in a chilled glass jar.',
      sw: 'Cheesecake laini yenye layers za compote ya embe na biscuit crumble ndani ya glass jar iliyopoa.',
    },
    imageSrc: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'prod010',
    name: {
      en: 'Tamarind Lemonade',
      sw: 'Lemonade ya Ukwaju',
    },
    category: 'drinks',
    price: 6000,
    unit: {
      en: '/ glass',
      sw: '/ glasi',
    },
    description: {
      en: 'Bright tamarind, lemon, and mint balanced into a refreshing signature cooler.',
      sw: 'Mchanganyiko wa ukwaju, limao, na mnanaa uliosawazishwa kuwa kinywaji fresh cha kipekee.',
    },
    imageSrc: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'prod011',
    name: {
      en: 'Flame Grill Combo',
      sw: 'Combo ya Flame Grill',
    },
    category: 'grill',
    price: 28000,
    unit: {
      en: '/ platter',
      sw: '/ platter',
    },
    description: {
      en: 'A sharing platter of chicken, beef, grilled vegetables, and fries for the table.',
      sw: 'Platter ya kushare yenye kuku, nyama ya ng’ombe, mboga za grill, na fries kwa mezani.',
    },
    imageSrc: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'prod012',
    name: {
      en: 'Chocolate Lava Slice',
      sw: 'Slice ya Chocolate Lava',
    },
    category: 'dessert',
    price: 9500,
    unit: {
      en: '/ slice',
      sw: '/ kipande',
    },
    description: {
      en: 'Warm chocolate cake with a molten center, vanilla cream, and roasted coconut.',
      sw: 'Keki ya chocolate ya moto yenye kiini laini, vanilla cream, na nazi ya kukaanga.',
    },
    imageSrc: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80'
  }
];

export const bestsellerIds = [
  'prod001',
  'prod002',
  'prod006',
  'prod009',
  'prod011'
];

export const getLocalizedProduct = (product, language = 'en') => ({
  ...product,
  name: product.name?.[language] || product.name?.en || '',
  description: product.description?.[language] || product.description?.en || '',
  unit: product.unit?.[language] || product.unit?.en || '',
  categoryLabel: categoryLabels[product.category]?.[language] || product.category,
});
