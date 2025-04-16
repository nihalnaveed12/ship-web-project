type TourFeature = string;

export type Tour = {
  slug: string;
  image: string;
  hours: number;
  title: string;
  subtitle: string;
  adultFee: number;
  childFee: number;
  route: string;
  destination: string;
  timeline: string;
  cruiseType: string;
  time: string;
  Days: string;
  desc1: string;
  desc2: string;
  desc3?: string;
  desc4?: string
  features: TourFeature[];
};

export const Tours: Tour[] = [
  {
    destination: "Blue Lagoon Latchi",
    timeline: "Day",
    cruiseType: "All Inclusive",
    slug: "celebrity-blue-lagoon-afternoon",
    image: "/tours/tour2.jpg",
    hours: 4,
    title: "Celebrity Blue Lagoon Afternoon",
    subtitle: "Ocean Blue",
    adultFee: 39,
    childFee: 29,
    route: "Latchi Harbour, Blue Lagoon, Latchi Harbour",
    time: "13:30 - 16:30",
    Days: "Wednesday, Sunday (June - October)",
    desc1:
      "Experience the epitome of luxury with our complimentary transfers from Paphos to Latchi harbour, where you will embark on a remarkable journey aboard our state-of-the-art mega yacht.",
    desc2:
      "Departing from the charming Latchi harbour, you will be enveloped by the awe-inspiring beauty of the Mediterranean Sea, passing by the legendary Aphrodite's Baths, a site rich in mythology and history.Our voyage continues to the renowned Blue Lagoon, offering the perfect opportunity to luxuriate in a revitalizing swim in the pristine, azure waters.",
    desc3:
      "This day is dedicated to relaxation, sightseeing, and basking in the sun as we sail through one of Cyprus's most magnificent regions. Join us for a day of opulence and leisure as we treat you to an unforgettable excursion along the captivating coast of Latchi.",
    features: [
      "Enchanting surround music",
      "Complimentary use of canoeing",
      "Enjoyable swim stop",
      "Complementary transfer to and from your hotel",
      "Refreshing welcome drink",
      "Fresh seasonal fruit selection",
      "Complimentary use of swimming noodles",
      "Complimentary Wi-Fi",
    ],
  },

  {
    destination: "ALL Destination",
    timeline: "Afternoon",
    cruiseType: "Adults Only",
    slug: "blue-lagoon-afternoon",
    image: "/tours/pop-tours.jpg",
    hours: 4,
    title: "Blue Lagoon Afternoon",
    subtitle: "Ocean Blue",
    adultFee: 65,
    childFee: 32,
    route: "Latchi Harbour, Blue Lagoon, Latchi Harbour",
    time: "14:00 - 18:00",
    Days: "Monday, Friday, Sunday (May) Monday, Tuesday, Thursday, Friday, Saturday (June - October)",
    desc1:
      "Embark on an enchanting voyage with our complimentary hotel transfer service, whisking you directly from your accommodation to the captivating Latchi Harbour.",
    desc2:
      "Cruise through the mesmerizing Aphrodites Baths and anchor at the renowned Blue Lagoon for an immersive swim stop. Crafted for sightseeing, relaxation, and sun-soaked moments, our journey navigates through Cypruss most famous scenic region.",
    desc3:
      "Indulge in a delectable buffet meal and seasonal fruits during the swim stop, complemented by our open bar offering an array of local drinks. Secure your spot for an unforgettable Lagoon escape.",
    features: [
      
        "Complimentary transfer to/from your hotel (Paphos hotels)",
        "Unlimited local drinks for 4 hours - including cocktails",
        "Freshly prepared BBQ buffet meal on board",
        "Fresh seasonal fruit selection",
        "Delectable desserts",
        "Free use of swimming noodles",
        "Complimentary use of swimming noodles",
        "Complimentary Wi-Fi access",
        "Surround music",
        "Complimentary canoeing",
        "One relaxing swim stop"
      
      
    ],
  },

  {
    destination: "Paphos",
    timeline: "Afternoon",
    cruiseType: "Adults Only",
    slug: "cyprus-international-show-night-with-fireworks",
    image: "/tours/tour3.jpg",
    hours: 4,
    title: "Cyprus & International Show Night with Fireworks",
    subtitle: "Ocean Vision",
    adultFee: 79,
    childFee: 39,
    route: "Paphos harbour, Riccos Bay (Atlantida Bay), Paphos harbour",
    time: "19:00hrs to 23:00hrs (May or August) , 18:00 to 22:00 (September, October)",
    Days: "Wednesday, Sunday (June - October)",
    desc1:
      "Embark on an unforgettable voyage towards Riccos Bay aboard the Ocean Vision, Europes most luxurious coastal cruiser. As the sun begins its majestic descent, ensure your cameras are poised to capture the stunning Paphos sunset, a spectacle of natures beauty. This night cruise is not just an outing—it is the pinnacle of Paphos nightlife!",
    desc2:
      "Prepare for an evening brimming with entertainment as our experienced team delivers an exclusive international singing and dancing show, found only aboard this vessel. Your culinary journey will be just as thrilling, with a sumptuous dinner freshly prepared by our professional onboard chef. As the night unfolds, the vibrant beats of live traditional Cypriot music invite you to dance under the stars, adding a touch of local culture to your experience.",
    desc3:
      "Sip on a selection from our open bar and indulge in delicious desserts as the evening sky prepares to dazzle you with a spectacular fireworks display—a crowning glory to this enchanting evening. The Ocean Vision is not only a ship but a destination in itself, renowned for setting the standard in fireworks night cruises. With waitress service catering to your every need and talented performers setting the stage alive, every moment is designed for your delight.",
    desc4:
      "Experience the magic of the Mediterranean: the golden hues of sunset, the melody of music, and the grandeur of fireworks illuminating the night sky. Join us for an evening where elegance, culture, and entertainment converge on the tranquil waters of Paphos.",
    features: [
      "Complimentary transfer to and from your hotel.",
      "Enjoy an open bar with unlimited local drinks.",
      "Indulge in a Traditional Cypriot Meze Buffet Dinner freshly cooked on board, featuring a variety of delectable dishes.",
      "Savor seasonal fresh fruit and delectable desserts during the cruise.",
      "Delicious desserts",
      "Witness a breathtaking sunset over the water, providing the perfect backdrop for your evening.",
      "Live Traditional Cypriot Music and Dancing",
      "Experience a spectacular fireworks display, adding an extra touch of magic to your evening.",
      "Stay connected with free Wi-Fi on board, allowing you to share your memorable moments with loved ones.",
      "Eco Friendly",
      "Aquarium",
      "4 deck levels",
      "Disabled Access  Main deck"
    ]
    
  },

  {
    destination: "Paphos",
    timeline: "Evening",
    cruiseType: "Half board",
    slug: "celebrity-blue-lagoon-morning",
    image: "/tours/tour4.jpg",
    hours: 3,
    title: "Celebrity Blue Lagoon Morning",
    subtitle: "Ocean Blue",
    adultFee: 39,
    childFee: 29,
    route: "Latchi Harbour, Blue Lagoon, Latchi Harbour",
    time: "10:00 - 13:00",
    Days: "Wednesday, Sunday (June - October)",
    desc1:
      "Experience the epitome of luxury with our complimentary transfers from Paphos to Latchi harbour, where you will embark on a remarkable journey aboard our state-ofthe-art mega yacht.",
    desc2:
      "Departing from the charming Latchi harbour, you will be enveloped by the awe-inspiring beauty of the Mediterranean Sea, passing by the legendary Aphrodites Baths, a site rich in mythology and history.",
    desc3:
      "Our voyage continues to the renowned Blue Lagoon, offering the perfect opportunity to luxuriate in a revitalizing swim in the pristine, azure waters. This day is dedicated to relaxation, sightseeing, and basking in the sun as we sail through one of Cyprus’s most magnificent regions. Join us for a day of opulence and leisure as we treat you to an unforgettable excursion along the captivating coast of Latchi.",
    features: [
      "Hotel transfer included (Paphos hotels)",
      "Complimentary welcome drink",
      "Seasonal fresh fruit provided",
      "Complimentary use of swimming noodles",
      "Free onboard WiFi",
      "Immerse yourself in surround music",
      "Complimentary use of canoeing",
      "Enjoy a refreshing swim stop"
    ]
    
  },

  {
    destination: "Blue Lagoon Latchi",
    timeline: "Day",
    cruiseType: "Family Friendly",
    slug: "blue-lagoon-morning",
    image: "/tours/tour5.jpeg",
    hours: 4,
    title: "Blue Lagoon Morning",
    subtitle: "Ocean Blue",
    adultFee: 65,
    childFee: 32,
    route: "LLatchi harbour, Aphrodites Baths, Blue Lagoon, Latchi harbour",
    time: "10:00 - 14:00",
    Days: "Monday, Wednesday, Friday, Sunday (April) Monday, Tuesday, Friday, Sunday (May) Monday, Tuesday, Thursday, Friday, Saturday (June - October) Wednesday, Saturday (November)",
    desc1:
      "Embark on an enchanting voyage with our complimentary hotel transfer service, whisking you directly from your accommodation to the captivating Latchi Harbour.",
    desc2:
      "Cruise through the mesmerizing Aphrodites Baths and anchor at the renowned Blue Lagoon for an immersive swim stop. Crafted for sightseeing, relaxation, and sun-soaked moments, our journey navigates through Cypruss most famous scenic region.",
    desc3:
      "Indulge in a delectable buffet meal and seasonal fruits during the swim stop, complemented by our open bar offering an array of local drinks. Secure your spot for an unforgettable Lagoon escape.",
    features: [
      "Complimentary transfer to/from your hotel (Paphos hotels)",
      "Unlimited local drinks for 4 hours - including cocktails",
      "Freshly prepared BBQ buffet meal on board",
      "Fresh seasonal fruit selection",
      "Delectable desserts",
      "Free use of swimming noodles",
      "Complimentary use of swimming noodles",
      "Complimentary Wi-Fi access",
      "Surround music",
      "Complimentary canoeing",
      "One relaxing swim stop"
    ]
    
  },

  {
    destination: "Blue Lagoon Latchi",
    timeline: "Day",
    cruiseType: "Family Friendly",
    slug: "blue-lagoon-round-trip",
    image: "/tours/tour6.jpg",
    hours: 4,
    title: "Blue Lagoon Round Trip",
    subtitle: "Sea Stars",
    adultFee: 79,
    childFee: 39,
    route:
      "Latchi harbour, Blue Lagoon, Cape Arnaouti, Akamas, St Georges Island, Sea Caves, Coral Bay, and Paphos harbour.",
    time: "10:00-16:00",
    Days: "Thursday (April, November) Monday, Thursday (May) Monday, Thursday, Saturday (June - October)",
    desc1:
      "Begin your journey with the convenience of our complimentary transfer service, ensuring a seamless transition from your Paphos hotel to the serene Latchi harbour - the only vessel that sails from Latchi to Paphos. Set sail on an unforgettable adventure with our luxurious three-deck yacht for a memorable cruise experience!",
    desc2:
      "Depart from the scenic Latchi Harbour, cruising towards Aphrodites Baths and the renowned Blue Lagoon. Immerse yourself in the crystal-clear waters during our first swim stop - a perfect start to a day. Indulge in delicious canapés, a sumptuous buffet meal, and unlimited local drinks from our open bar. Swim, sunbathe, and enjoy the scenic views as we cruise along the beautiful coastline - an all-inclusive cruise package offers the perfect day of relaxation and exploration.",
    desc3:
      "Cruise Highlights: Scenic Wonders: Glide past Cape Arnaouti, trace the stunning Akamas coastline, and discover the allure of St Georges Island. Marvel at the enchanting Sea Caves, bask in the beauty of Coral Bay, and conclude your journey at the captivating Paphos Harbour.",
    features: [
      "Complimentary transfer to/from your hotel (Paphos hotels)",
      "Unlimited local drinks for 6 hours - including cocktails",
      "Delicious canapés",
      "Freshly prepared BBQ buffet meal on board",
      "Fresh seasonal fruit selection Delectable desserts",
      "Delectable desserts",
      "Two relaxing swim stops",
      "Free use of swimming noodles",
      "Complimentary canoeing",
      "Complimentary Wi-Fi access",
      "Live entertainment from our talented performer",
      "Surround music",
      "Scenic Wonders: Glide past Cape Arnaouti, trace the stunning Akamas coastline, and discover the allure of St Georges Island. Marvel at the enchanting Sea Caves, bask in the beauty of Coral Bay, and conclude your journey at the captivating Paphos Harbour."
    ]
    
  },

  {
    destination: "Blue Lagoon Latchi",
    timeline: "Day",
    cruiseType: "Family Friendly",
    slug: "vision-day-cruise",
    image: "/tours/tour7.jpg",
    hours: 4,
    title: "Vision Day Cruise",
    subtitle: "Ocean Blue",
    adultFee: 65,
    childFee: 32,
    route: "Paphos harbour, Riccos Bay (Atlantida Bay), Paphos harbour",
    time: "11:00 - 15:00",
    Days: "Tuesday, Friday (April, May) Tuesday, Thursday, Friday, Saturday ( June  September ) Tuesday, Thursday, Saturday ( October )",
    desc1:
      "Embark on a unique Mediterranean adventure aboard Europe's largest luxury coastal cruiser, designed for the enjoyment of the entire family. Indulge in the extraordinary facilities, including an exhilarating slide, an enchanting lower deck aquarium offering mesmerizing views into the depths of the Mediterranean, and exclusive sunbeds for ultimate relaxation under the sun.",
    desc2:
      "Take pleasure in a refreshing swim stop amidst crystal-clear blue waters, followed by a delectable barbecue lunch prepared by our expert chefs on board, complemented by an array of fresh seasonal fruits. Immerse yourself in the experience as you savor unlimited local alcoholic and non-alcoholic drinks from our open bar.",
    features: [
      "Hassle-free transfer to and from your hotel",
       "Unlimited local drinks at our Open Bar",
       "Mouthwatering barbecue lunch prepared by our professional chefs",
       "Fresh seasonal fruit selection",
       "Delightful selection of desserts",
       "Enjoyable swim stop",
       "Enchanting surround music",
     "Complimentary Wi-Fi",
       "Live entertainment to elevate your experience",
       "Eco-friendly environment",
       "Captivating aquarium experience",
       "Exciting slide adventure",
       "Exclusive sunbeds (available on a firstcome, first-served basis for adults)",
       "Four spacious deck levels",
       "Main deck with disabled access for added convenience",
    ]
  },
];
