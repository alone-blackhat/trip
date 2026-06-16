/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Destination, TravelMode, TraditionalDish } from './types';

// Declare Unsplash image fallback strings for smooth compilation
export const heroMandapSunset = 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2400&auto=format&fit=crop';
export const traditionalFeast = 'https://images.unsplash.com/photo-1586016413664-864c0dd76f53?q=80&w=2400&auto=format&fit=crop';

export const DESTINATIONS: Destination[] = [
  {
    id: 'kashmir',
    name: 'Kashmir',
    state: 'Jammu & Kashmir',
    image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1200&auto=format&fit=crop',
    description: 'Paradise on Earth, showcasing pristine high-altitude lakes, misty conifer valleys, and majestic snow passes.',
    longDescription: 'Immerse yourself in the tranquility of the Himalayas. Kashmir offers an other-worldly exploration retreat with its historic Dal Lake houseboats, snow-kissed peaks, and warm wooden architecture that defines mountain luxury.',
    bestTime: 'March to October (Spring valleys) & December to February (Peak winter ski adventures)',
    seasonalHighlights: [
      'Tulip Gardens in full vibrant bloom (April)',
      'High-altitude alpine skiing in Gulmarg (January)',
      'Terraced saffron fields harvesting under cedar trees (Autumn)'
    ],
    tourSpecialties: [
      {
        title: 'Cinematic Shikara Cruise on Dal Lake',
        description: 'Glide on silent mirrored waters in a beautifully hand-carved wooden boat under the majestic Pir Panjal heights.',
        tamilName: 'ஏரி மிதவை பயணம்'
      },
      {
        title: 'Saffron Tea (Kahwa) in a Cedar Houseboat',
        description: 'Sip authentic Kashmiri Kahwa brewed with sliced almonds, cardamoms, and handpicked organic saffron on cedarwood decks.',
        tamilName: 'காஷ்மீரி குங்குமப்பூ தேநீர்'
      },
      {
        title: 'Private Gondola Ascent in Gulmarg',
        description: 'Soar on Asia’s highest cable car systems to capture breathtaking panoramic snowy peaks with a certified alpine guide.',
        tamilName: 'பனிமலை கேபிள் கார் சவாரி'
      }
    ],
    basePricePerTourist: 22000
  },
  {
    id: 'manali',
    name: 'Manali & Shimla',
    state: 'Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200&auto=format&fit=crop',
    description: 'Snowy high pass loops, endless deodar cedar forests, and cozy mountain stone luxury cottages.',
    longDescription: 'Experience winter magic amidst roaring valleys and silent alpine roads. Perfect for trekking advocates, wildlife explorers, and families looking for clean mountain air, high elevation paragliding, and historic toy train rides.',
    bestTime: 'October to February (For pure snowfall) & March to June (Comfortable breeze)',
    seasonalHighlights: [
      'Paragliding and skiing in Solang Valley wilderness',
      'The Mall Road Shimla glittering with local winter markets',
      'Atal Tunnel scenic loops - high-altitude engineering marvel'
    ],
    tourSpecialties: [
      {
        title: 'Glacial Valley Riverside Exploration Camp',
        description: 'Set up an elite basecamp alongside the roaring Beas river, enjoying hot-beverage tastings under star-filled skies.',
        tamilName: 'நதிக்கரை முகாம்'
      },
      {
        title: 'High-Altitude Paragliding in Solang Mountain Range',
        description: 'Soar above pine canopies with an experienced dual-flyer certified captain for incredible valley pictures.',
        tamilName: 'வானூர்தி சவாரி'
      }
    ],
    basePricePerTourist: 18500
  },
  {
    id: 'ooty',
    name: 'Ooty & Kodaikanal',
    state: 'Tamil Nadu',
    image: 'https://images.unsplash.com/photo-1594411130761-0b5c19be8f94?q=80&w=1200&auto=format&fit=crop',
    description: 'Emerald green terraced tea gardens, mist-shrouded peaks, and vintage steam toy trains.',
    longDescription: 'The crown jewels of South Indian hill stations. Blessed with endless rolls of eucalyptus forests, terraced tea valleys, and misty weather, Ooty and Kodaikanal offer a serene sanctuary for sightseeing and botanical exploration.',
    bestTime: 'Year-round comfortable breeze, especially September to May',
    seasonalHighlights: [
      'Nilgiri Botanical Gardens annual botanical show (May)',
      'Boating inside Kodaikanal Star Lake surrounded by early morning mist',
      'Nilgiri Mountain Railway - UNESCO heritage steam engine journey'
    ],
    tourSpecialties: [
      {
        title: 'Nilgiri Heritage Steam Engine Journey',
        description: 'A historic vintage train transit crossing ancient stone bridges, deep dark valleys, and gorgeous hillside waterfalls.',
        tamilName: 'மலை ரயில் பாரம்பரிய பயணம்'
      },
      {
        title: 'Private Estate Tea Leaves Harvesting & Tasting',
        description: 'Walk through century-old tea trails, master the craft of picking silver tips, and taste local dark hand-made chocolates.',
        tamilName: 'தேயிலை தோட்டம் & சாக்லேட் தயாரிப்பு'
      }
    ],
    basePricePerTourist: 12000
  },
  {
    id: 'goa',
    name: 'Goa Coastline',
    state: 'Goa & Western Coast',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    description: 'Sundrenched coastal roads, Portuguese heritage architecture, and premium sunset sailing.',
    longDescription: 'Where historical European elements blend onto tropical golden shores. Explore pastel-toned heritage streets, hike to hidden jungle waterfalls, board a luxury sunset cruise, and indulge in pristine coastal road trips.',
    bestTime: 'November to February (Cool trade winds) & June to September (Peaceful lush green monsoon roads)',
    seasonalHighlights: [
      'Ocean spotting cruises and catamaran charters in Panaji',
      'Fontainhas Latin Quarters photography walks',
      'The majestic Dudhsagar fall loops inside lush railway ridges'
    ],
    tourSpecialties: [
      {
        title: 'Sunset Catamaran Cruise with Coastal Tasting',
        description: 'Sail the Arabian waves on a high-end stable catamaran with expert local guides describing nautical logs.',
        tamilName: 'மாலை நேர சொகுசு படகு சவாரி'
      },
      {
        title: 'Heritage Latin Quarter Walk of Fontainhas',
        description: 'Traverse bright yellow and indigo cobbled streets containing centuries-old tiled villas and cozy cafes.',
        tamilName: 'பாரம்பரிய போர்த்துகீசிய தெருக்கள்'
      }
    ],
    basePricePerTourist: 15000
  },
  {
    id: 'kerala',
    name: 'Kerala Backwaters',
    state: 'God’s Own Country',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200&auto=format&fit=crop',
    description: 'Emerald lagoon labyrinths, eco-friendly houseboat cruises, and spice mountains of Munnar.',
    longDescription: 'Enter a state of total tranquility. Float inside hand-crafted luxury houseboats built of wood and coir, listen to rain pattering on mango woods, and experience authentic Ayurveda wellness techniques in certified eco-resorts.',
    bestTime: 'September to March (Dry breeze) & June to August (Ayurvedic monsoon restoration)',
    seasonalHighlights: [
      'Multi-day houseboat excursions inside Alappuzha canals',
      'Tea landscape trail hikes in Munnar peaks',
      'Sunset sightseeing at the iconic Varkala ocean cliffs'
    ],
    tourSpecialties: [
      {
        title: 'Overnight Heritage Houseboat (Kettuvallam)',
        description: 'Drift past endless palm rows while an onboard chef prepares deep-regional specialties like fresh pearl spot curry.',
        tamilName: 'சொகுசு இல்லப் படகு பயணம்'
      },
      {
        title: 'Certified Ayurvedic Holistic Therapy Sessions',
        description: 'Reinvigorate muscle and nerve pathways with a traditional herbal hot-oil therapy at an eco-sanctuary.',
        tamilName: 'பாரம்பரிய ஆயுர்வேத மசாஜ்'
      }
    ],
    basePricePerTourist: 16000
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan Heritage',
    state: 'Land of Forts & Palaces',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop',
    description: 'Shimmering sand dunes, grand architecture forts, and beautiful lakes of Udaipur.',
    longDescription: 'Trace the paths of kings. Rajasthan delivers majestic sand dune stargazing camps, high battlements overlooking pink and blue towns, royal camel caravans, and heritage palace hospitality featuring pristine Mewari gastronomy.',
    bestTime: 'October to March (Pleasant desert breeze)',
    seasonalHighlights: [
      'Boating during dusk around Udaipur Lake Palace with sitar accompaniment',
      'Camel safaris and folk campfire nights inside Jaisalmer golden dunes',
      'Hot air ballooning over Jaipur mountain forts'
    ],
    tourSpecialties: [
      {
        title: 'Royal Mewari Gastronomy Feast in Udaipur',
        description: 'Enjoy a legendary local platter overlooking the starry waters of Lake Pichola with folk musicians.',
        tamilName: 'ராஜபுதன ஏரிக்கரை விருந்து'
      },
      {
        title: 'Stargazing Dunes Camp in Thar Desert',
        description: 'An overnight desert stay in premium custom tents, complete with folk fire dances under clean cloudless skies.',
        tamilName: 'பாலைவன சொகுசு முகாம்'
      }
    ],
    basePricePerTourist: 24000
  },
  {
    id: 'andaman',
    name: 'Andaman Cruise',
    state: 'Tropical Islands',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1200&auto=format&fit=crop',
    description: 'Turquoise marine bays, white sand beaches, coral scuba reef dives, and mangrove kayaking.',
    longDescription: 'Explore a tropical heaven untouched by congestion. Discover coral gardens, wreck diving sites, and bioluminescent bays, and take a long forest road drive down Radhanagar, Asia’s finest white shoreline.',
    bestTime: 'October to May (Favorable wind & crystal ocean visibility)',
    seasonalHighlights: [
      'Coral Scuba Dive and Snorkel around Havelock coral walls',
      'Midnight ocean walk to view magical bioluminescent glowing waters',
      'Glass-bottom boat eco-tours around uninhabited island reserves'
    ],
    tourSpecialties: [
      {
        title: 'Private Sea View Canopy Feast',
        description: 'A special beachfront table lit by tiki torches next to dynamic waves, served by specialized local culinary guides.',
        tamilName: 'கடற்கரை தனிநபர் விருந்து'
      },
      {
        title: 'Underwater Guided Deep Reef Scuba Diving',
        description: 'Explore thriving aquatic coral parks with turtles, parrotfish, and dolphins with full HD camera footage.',
        tamilName: 'ஆழ்கடல் நீச்சல் சவாரி'
      }
    ],
    basePricePerTourist: 26000
  },
  {
    id: 'ladakh',
    name: 'Leh-Ladakh Heights',
    state: 'Ladakh High Frontier',
    image: 'https://images.unsplash.com/photo-1544085311-11a028465b03?q=80&w=1200&auto=format&fit=crop',
    description: 'Vast high-altitude golden mountain passes, cobalt-blue salt lakes, and majestic old Buddhist monasteries.',
    longDescription: 'Journey to the land of high passes. Marvel at the crystal reflecting waters of Pangong Tso extending into the horizon, navigate double-humped camel caravans inside Nubra dune valleys, and stay in premium solar-heated luxury dome camps.',
    bestTime: 'May to September (Pleasant weather & clear highways) & January to February (For bold frozen river treks)',
    seasonalHighlights: [
      'Stunning reflecting shifts on Pangong Lake (July)',
      'Scenic dual-humped camel rides in Nubra valley sand dunes',
      'Ancient Thiksey Monastery morning chanting ceremonies'
    ],
    tourSpecialties: [
      {
        title: 'Pangong Tso Lakeside Luxury Dome Camp',
        description: 'Stay in insulated, transparent high-luxury geodesic domes right next to the shimmering saltwater lakes under clear starry skies.',
        tamilName: 'பங்கோங் ஏரி சொகுசு முகாம்'
      },
      {
        title: 'High Khardung-La Pass 4x4 Jeep Descent',
        description: 'Drive down from one of the highest motorable roads on earth with a certified Himalayan route-marshal team.',
        tamilName: 'இமயமலை உயர கணவாய் பயணம்'
      }
    ],
    basePricePerTourist: 28000
  },
  {
    id: 'munnar_tea',
    name: 'Munnar Tea Valleys',
    state: 'Western Ghats Ridge',
    image: 'https://images.unsplash.com/photo-1593693411515-c202e974eb27?q=80&w=1200&auto=format&fit=crop',
    description: 'Endless velvet-green terraced estates, early-morning valley cloudbeds, and wild wildlife sanctuaries.',
    longDescription: 'Immerse yourself within the emerald-carpeted heaven of the South. Munnar rises high into mist-blanketed sub-tropical forests, presenting legendary organic single-estate tea tastings, hidden mountain rapids, and high-altitude luxury tree cabins.',
    bestTime: 'September to May (Aromatic cool breezes) & June to August (Romantic heavy rain mist retreats)',
    seasonalHighlights: [
      'Spectacular sunrise views over spectacular cloudbeds at Top Station',
      'Rare Nilgiri Tahr mountain species spotting inside Eravikulam',
      'Fresh forest cardamom and wild clove harvesting walks'
    ],
    tourSpecialties: [
      {
        title: 'Single-Estate Reserve Tea Lounge Pairing',
        description: 'Savor small-batch hand-rolled white tea brews curated with native mountain honeys and handmade hot cedar-smoked pastries.',
        tamilName: 'தேயிலை எஸ்டேட் சிறப்பு பானம்'
      },
      {
        title: 'Hidden Valley Bamboo Rafting Excursion',
        description: 'Glide on beautiful emerald waters surrounded by giant bamboo canopies and sweet singing endemic birds.',
        tamilName: 'காட்டு மூங்கில் படகு சவாரி'
      }
    ],
    basePricePerTourist: 13500
  }
];

export const TRAVEL_MODES: TravelMode[] = [
  {
    id: 'heritage',
    name: 'Classic Heritage Caravan',
    tamilName: 'பாரம்பரிய வரலாற்று பயணம்',
    description: 'For enthusiasts of culture, architecture, and ancient stone carvings. Access historic temple cities, grand red stone forts, and traditional museums with state-certified historical guides.',
    icon: 'Landmark',
    tierOptions: [
      { name: 'Standard Heritage Explorer', tamilName: 'இயல்பு வரலாற்றுப் பயணம்', price: 10000, description: 'Comfortable family hotels with tickets included for core monuments.' },
      { name: 'Private Royal Caravan', tamilName: 'சொகுசு அரச ஊர்வலம்', price: 25000, description: 'Dedicated air-conditioned luxury SUV transit with a private historical guide.' },
      { name: 'Ultra Elite Palace Cruiser', tamilName: 'அரண்மனை உன்னத சொகுசு', price: 50000, description: 'Heritage palace suite accommodations, personalized culinary maps, and private local permissions.' }
    ],
    itineraryDays: [
      { day: 'Day 1: Arrival & Core Architecture', activity: 'Sculpture Walk', description: 'Explore ancient hand-carved stone pillars with a deep historical guide.' },
      { day: 'Day 2: Traditional Craft Trails', activity: 'Local Loom Handcrafts', description: 'Interact with local organic weavers and silk manufacturers to witness centuries-old patterns.' },
      { day: 'Day 3: Sound & Light Tribute', activity: 'Heritage Fort Dusk', description: 'Special row seating under old battlements for a state-of-the-art cinematic laser show.' }
    ],
    basePrice: 50000
  },
  {
    id: 'wilderness',
    name: 'Wild Green Eco Adventure',
    tamilName: 'பசுமை காட்டு வழிப்பயணம்',
    description: 'Immerse in deep mountain ridges, bamboo valleys, forest trail hikes, and morning mist canopy walks. Perfect for active groups and nature enthusiasts.',
    icon: 'Trees',
    tierOptions: [
      { name: 'Forest Cabin & Trek', tamilName: 'மரக்குடில் & காட்டு மலையேற்றம்', price: 8000, description: 'Eco-cottages with mountain guides for custom wildlife valley paths.' },
      { name: 'Premium Safari Glamping', tamilName: 'சொகுசு கானக முகாம்', price: 18000, description: 'Stay in secure custom heavy canvas tents with open-top 4x4 safaris.' },
      { name: 'High Treehouse Sanctuary', tamilName: 'மர உச்சி சொகுசு இல்லம்', price: 35000, description: 'Exclusive high-canopy luxury treehouse stay with 360-degree organic valleys views.' }
    ],
    itineraryDays: [
      { day: 'Day 1: High Elevation Cloud Walk', activity: 'High Ridge Trekking', description: 'Conquer pristine misty peaks and spot unique endemic birds with naturalists.' },
      { day: 'Day 2: River Kayak & Falls Swim', activity: 'Tranquil Waters', description: 'Custom bamboo kayak cruising down quiet back channels with organic picnics next to mountain falls.' },
      { day: 'Day 3: Wildlife Tracking Safari', activity: 'Dawn Safari Loop', description: 'Head deep into national reserves in high clearance jeep cabins to photograph native herds.' }
    ],
    basePrice: 40000
  },
  {
    id: 'coasts',
    name: 'Tropical Coastline Cruise',
    tamilName: 'கடற்கரை சொகுசு பயணம்',
    description: 'Gold sands, maritime history, water excursions, and fresh beachside delicacies. Ride high-speed bridges above waves and feel ocean breezes.',
    icon: 'Compass',
    tierOptions: [
      { name: 'Coastal Beachcomber', tamilName: 'எளிய கடற்கரை உலா', price: 9000, description: 'Seaside resort cottages with guided surf classes and village bike paths.' },
      { name: 'Indigo Yacht Explorer', tamilName: 'சொகுசு படகுப் பயணம்', price: 20000, description: 'Private dusk catamaran cruise with dolphin watch routes and onboard culinary service.' },
      { name: 'Overwater Luxury Pavilion', tamilName: 'கடல் நீர் சொகுசு இல்லம்', price: 42000, description: 'Overwater wooden villa with personal lagoon steps and direct private coral snorkeling guides.' }
    ],
    itineraryDays: [
      { day: 'Day 1: Coast Fortress Walk', activity: 'Old Bastion Exploration', description: 'Hike classic masonry lighthouses with photography guides under dramatic trade-wind skies.' },
      { day: 'Day 2: Lagoon Snorkel Excursion', activity: 'Ocean Reef Dive', description: 'Swim through active coral reefs filled with colorful marine schools alongside qualified rescue divers.' },
      { day: 'Day 3: Waterfront Tiki Spit Dinner', activity: 'Sunset Sand Feast', description: 'A magnificent local fish or vegetarian roast cooked over glowing coconut coals.' }
    ],
    basePrice: 45000
  },
  {
    id: 'wellness',
    name: 'Vedic Healing & Yoga Retreat',
    tamilName: 'ஆயுர்வேத யோகா தியானம்',
    description: 'A holistic wellness journey utilizing daily hot herbal oil steam therapies, morning sunrise meditation, and customized nutritional dietary trails.',
    icon: 'Compass',
    tierOptions: [
      { name: 'Comfort wellness Ashram', tamilName: 'எளிய தியான இல்லம்', price: 7500, description: 'Clean botanical cabins, raw organic culinary tables, and open-air yoga halls.' },
      { name: 'Certified Abhyangam Care', tamilName: 'பாரம்பரிய ஆயுர்வேத சிகிச்சை', price: 16000, description: 'Daily medicated oil therapies with custom herbs formulated by natural doctors.' },
      { name: 'Elite Royal Rejuvenation', tamilName: 'அரச யோக புத்துணர்ச்சி', price: 30000, description: 'Lakeside private boutique spa suites, stress-release sound bowls, and personal wellness coaches.' }
    ],
    itineraryDays: [
      { day: 'Day 1: Personal Constitutional Check', activity: 'Wellness Consul', description: 'Certified specialists determine physical wellness indicators and prescribe personalized therapies.' },
      { day: 'Day 2: Sunrise Yoga on Floating Deck', activity: 'River Flow Yoga', description: 'Gentle stretching and breathing therapies alongside crystal clear mountain rivers.' },
      { day: 'Day 3: Temple Sound-Healing Bath', activity: 'Vibrational Therapy', description: 'Ancient Tibetan copper bowls resonate restorative sound waves for total mental calm.' }
    ],
    basePrice: 35000
  }
];

export const TRADITIONAL_DISHES: TraditionalDish[] = [
  { id: 'beverage-1', name: 'Aromatic Jasmine Saffron Panagam', tamilName: 'குங்குமப்பூ பானகம்', category: 'welcome', description: 'Sweet organic jaggery elixir brewed with organic ginger, green cardamom and Kashmiri saffron.', pricePerPlate: 50, selectedByDefault: true },
  { id: 'beverage-2', name: 'Elaneer Payasam Cream Shot', tamilName: 'இளநீர் பாயசம்', category: 'welcome', description: 'Chilled rich traditional cream soup made of tender coconut kernels and organic whole milk.', pricePerPlate: 75, selectedByDefault: true },
  
  { id: 'main-1', name: 'Fragrant Ghee Pongal / Jeeraga Rice', tamilName: 'நெய் பொங்கல் / சீரக சம்பா சாதம்', category: 'main', description: 'Fine native raw rice steam-boiled with yellow lentils, finished with high-grade ghee, black pepper, and cashews.', pricePerPlate: 120, selectedByDefault: true },
  { id: 'main-2', name: 'Heritage Native Thanga Samba Rice', tamilName: 'பாரம்பரிய தங்கச் சம்பா சாதம்', category: 'main', description: 'Organic farm raw rice, highly nutrient-rich, served piping hot on leaf trails as local culinary gold.', pricePerPlate: 80, selectedByDefault: true },
  
  { id: 'side-1', name: 'Chettinad Spicy Potato Kara Curry', tamilName: 'செட்டிநாடு உருளை காரக்கறி', category: 'sides', description: 'Fresh local baby potatoes slow-roasted with hand-ground spicy red chillies, coriander and curry leaves.', pricePerPlate: 60, selectedByDefault: true },
  { id: 'side-2', name: 'Royal Cold Pressed Sodhi Veg Stew', tamilName: 'திருநெல்வேலி சொதி', category: 'sides', description: 'Rich coconut milk stew loaded with organic drumsticks, mountain carrots and peas.', pricePerPlate: 70, selectedByDefault: false },
  { id: 'side-3', name: 'Crispy Madras Pepper Medu Vada', tamilName: 'மெதுவடை', category: 'sides', description: 'Incredibly crunchy skin-fried grain donuts studded with whole black peppers, minced ginger and shallots.', pricePerPlate: 40, selectedByDefault: true },
  { id: 'side-4', name: 'Aromatic Temple Sambar & Rasam Duo', tamilName: 'கோவில் சாம்பார் & தக்காளி ரசம்', category: 'sides', description: 'Tangy tamarind lentil broth and asafoetida spiked warm tomato soup, perfect with hot grains.', pricePerPlate: 50, selectedByDefault: true },
  
  { id: 'sweet-1', name: 'Traditional Melt-in-mouth Mysore Pak', tamilName: 'நெய் மைசூர் பாக்', category: 'dessert', description: 'Melting luxury sweet cooked with fresh-churned cow ghee and high-grade organic chickpea flour.', pricePerPlate: 90, selectedByDefault: true },
  { id: 'sweet-2', name: 'Cool Madurai Jigarthanda Cream', tamilName: 'மதுரை ஜிகர்தண்டா', category: 'dessert', description: 'A legendary sweet dairy cold elixir containing almond tree gum, sweet root syrup, and hand-churned frozen milk.', pricePerPlate: 110, selectedByDefault: false }
];
