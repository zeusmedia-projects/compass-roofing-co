// Sitemap Database for Pre-Rendering 80+ SEO Pages

export interface ServiceItem {
  slug: string;
  name: string;
  tag: string;
  shortDesc: string;
  longDesc: string;
  symptoms: string[];
  process: string[];
  faqs: { q: string; a: string }[];
}

export interface RoofTypeItem {
  slug: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  lifespan: string;
  symptoms: string[];
  floridaSpecs: string[];
  faqs: { q: string; a: string }[];
}

export interface CityItem {
  slug: string; // e.g. "fort-lauderdale-roofing"
  cityName: string;
  shortDesc: string;
  longDesc: string;
  neighborhoods: string[];
  commonRoofs: string;
  weatherThreat: string;
  faqs: { q: string; a: string }[];
}

export interface ProjectItem {
  slug: string;
  title: string;
  city: string;
  type: string; // Residential or Commercial
  roofType: string;
  service: string;
  problem: string;
  solution: string;
  result: string;
}

export interface ResourceItem {
  slug: string;
  title: string;
  excerpt: string;
  bodyOutline: string[];
  relatedServices: string[];
  faqs: { q: string; a: string }[];
}

export const servicesData: Record<string, ServiceItem> = {
  'roof-repair': {
    slug: 'roof-repair',
    name: 'Roof Repair',
    tag: 'Popular',
    shortDesc: 'Stops active leaks and replaces damaged shingles or tiles to extend the lifespan of your roof.',
    longDesc: 'Our roof repair services are designed to address active leak vectors, storm damage, and structural degradation immediately. Instead of pushing for a costly replacement, we target the specific failure points—such as cracked flashing, missing tiles, or decayed sealants—to protect your South Florida home and save you money.',
    symptoms: [
      'Water stains or damp spots on ceiling plaster',
      'Missing shingles, cracked tiles, or bubbling asphalt on the roof deck',
      'Corroded metal flashing valleys near chimneys and wall connections',
      'Water entering attic spaces during heavy Florida downpours'
    ],
    process: [
      'Multi-point diagnostic inspection to find the source of moisture entry.',
      'Clear photo evidence report detailing damaged shingles, tiles, or sealants.',
      'Prep and cleanup of the repair zone, replacing decayed plywood if necessary.',
      'Installation of premium secondary water barrier seals and high-grade matching tiles/shingles.',
      'Final inspection and leak warranty sign-off.'
    ],
    faqs: [
      { q: 'How long does a typical roof repair take?', a: 'Most residential repairs are completed within 1 to 2 days, depending on the availability of matching materials and the extent of any wood rot found under the surface.' },
      { q: 'Can a repair fix a roof that is leaking in multiple places?', a: 'If leaks are localized (e.g., concentrated around one valley or pipe boot), repairs are highly effective. However, if leaks are widespread across the entire roof surface, a restoration coating or complete replacement is usually more cost-effective.' }
    ]
  },
  'roof-replacement': {
    slug: 'roof-replacement',
    name: 'Roof Replacement',
    tag: 'Guaranteed',
    shortDesc: 'A complete roof rebuild using storm-ready underlayment and high-performance tiles or metal.',
    longDesc: 'When repairs are no longer viable, a full roof replacement provides structural safety and longevity. We install complete, wind-rated roof systems engineered specifically for the extreme conditions of Broward County, utilizing advanced self-adhering underlayments, high-strength nails, and premium tiles, metal, or shingles.',
    symptoms: [
      'The roof is approaching or has exceeded its lifespan (15 years for shingle, 25 for tile/metal)',
      'Widespread leaks that have compromised the structural integrity of the roof deck',
      'Major structural sagging or rotting in the roof rafters',
      'Repeated leak repairs that fail to stop moisture entrance during hurricane season'
    ],
    process: [
      'Complete strip-off of existing shingles, tiles, or flat roof membrane.',
      'Inspection and repair of underlying plywood decking, replacing rotten panels.',
      'Installation of premium self-adhering secondary water barrier underlayment.',
      'Lay down of high-performance tile, metal standing-seam, or shingle shingles.',
      'Flashing sealing and county building inspector verification.'
    ],
    faqs: [
      { q: 'What is the average cost of a roof replacement in South Florida?', a: 'Costs vary widely based on material and size. Asphalt shingles generally run $9,000–$16,000, concrete tiles run $22,000–$45,000, and metal standing-seam systems run $28,000–$60,000.' },
      { q: 'How long does a roof replacement last in Florida?', a: 'A professionally installed shingle roof lasts 15–20 years in Florida. Concrete tiles last 30–40 years, and metal standing-seam roofs can exceed 50 years under proper maintenance.' }
    ]
  },
  'residential-roofing': {
    slug: 'residential-roofing',
    name: 'Residential Roofing',
    tag: 'Homeowners',
    shortDesc: 'Tailored roofing systems designed to secure and beautify single-family homes across Broward County.',
    longDesc: 'Residential homes in South Florida face unique weather pressures. Our residential division focuses on delivering high-end tile, shingle, and metal roofs that protect your family, increase your home value, and lower your property insurance rates through validated wind mitigation profiles.',
    symptoms: [
      'Curled or warped shingle edges from heat exposure',
      'Cracked concrete or clay barrel tiles',
      'Faded roof surfaces and moss accumulation near gutters',
      'Absence of hurricane clip records on older Broward homes'
    ],
    process: [
      'Free initial residential diagnostics and roof age evaluation.',
      'Custom color and material matching to comply with HOA guidelines.',
      'Tear-off and deck prep protecting landscaping and property.',
      'System installation with reinforced perimeter wind-locking nails.',
      'Filing wind mitigation documentation for your insurance provider.'
    ],
    faqs: [
      { q: 'Will a new roof lower my homeowner\'s insurance?', a: 'Yes. In Florida, installing a new roof with up-to-date wind attachments and a secondary water barrier can qualify you for significant wind mitigation credits, saving 20% to 50% on premiums.' },
      { q: 'Do you help with HOA approvals?', a: 'Yes. We provide complete material submittals, license information, and liability documents to help you secure fast approval from your HOA board.' }
    ]
  },
  'commercial-roofing': {
    slug: 'commercial-roofing',
    name: 'Commercial Roofing',
    tag: 'Properties',
    shortDesc: 'Heavy-duty roofing solutions for industrial, retail, and commercial flat roofs with certified warranties.',
    longDesc: 'We install and maintain premium commercial flat roofs, including warehouses, retail strip malls, multi-family complexes, and office parks. Our services include single-ply TPO/PVC installations, built-up roofing repairs, and commercial silicone restoration coatings that reflect UV rays and lower HVAC loads.',
    symptoms: [
      'Ponding water standing on the roof deck for more than 48 hours',
      'Split, blistered, or open seams on flat roof membranes',
      'Water intrusion in retail or office spaces',
      'Skyrocketing energy bills due to absorption of solar heat'
    ],
    process: [
      'Commercial roof core sampling to check for underlying deck moisture.',
      'Surface prep including power washing, seam reinforcement, and flashing repair.',
      'Installation of energy-efficient TPO membrane or high-solids silicone coating.',
      'Sealing of all penetrations, pipes, and commercial scupper systems.',
      'Delivery of manufacturer material and workmanship warranty documents.'
    ],
    faqs: [
      { q: 'What is a commercial roof coating?', a: 'A commercial coating is a seamless, liquid-applied silicone or elastomeric membrane rolled directly over your existing flat roof. It creates a complete waterproof barrier and defers replacement costs.' },
      { q: 'How long does a commercial TPO roof last?', a: 'TPO membranes generally last 20 to 25 years with proper drainage maintenance and annual inspections.' }
    ]
  },
  'flat-roofing': {
    slug: 'flat-roofing',
    name: 'Flat Roofing',
    tag: 'Specialist',
    shortDesc: 'TPO, PVC, and modified bitumen installations engineered for flat slopes and optimal ponding-water drainage.',
    longDesc: 'Flat roofs require specialized materials and slopes to ensure that heavy rain drains quickly. We specialize in TPO, PVC, and modified bitumen systems that prevent ponding water from creating leaks, focusing on Broward County residential additions and commercial buildings.',
    symptoms: [
      'Cracked, bubbled, or dry-rotted flat roof membranes',
      'Standing water pools that remain days after rain has ended',
      'Leaking joints where the flat roof meets a pitched tile roof'
    ],
    process: [
      'Drainage audit to check slope and scupper clearances.',
      'Removal of decayed flat decking and reinforcing sub-structures.',
      'Application of self-adhered base sheets and reinforced cap membranes.',
      'Hot-air welding of TPO/PVC seams for a complete seamless bond.',
      'Installation of perimeter drip edges and gutter seals.'
    ],
    faqs: [
      { q: 'Why do flat roofs leak more than sloped roofs?', a: 'Flat roofs do not benefit from gravity drainage. If the roof slope has settled (creating "low spots"), water ponds. This standing water accelerates membrane decay.' },
      { q: 'Which is better: TPO or PVC?', a: 'TPO is highly reflective and cost-effective. PVC offers superior resistance to chemical exposure and grease, making it the preferred choice for restaurants.' }
    ]
  },
  'roof-coatings': {
    slug: 'roof-coatings',
    name: 'Roof Coatings',
    tag: 'Restoration',
    shortDesc: 'Elastomeric and silicone liquid membranes that restore waterproofing integrity and defer replacement costs.',
    longDesc: 'Roof coatings offer a cost-effective alternative to complete roof replacements. By applying a high-performance liquid silicone or elastomeric layer, we seal micro-cracks on your tile, metal, or flat roof, reflecting UV rays and adding 7 to 10 years of life to the system.',
    symptoms: [
      'Granule loss on shingles or hairline cracking on roof tiles',
      'Metal roofing showing signs of surface rust but strong structural sheets',
      'Aging flat roof membranes that are intact but showing surface dry-rot'
    ],
    process: [
      'High-pressure power washing of the entire roof surface to remove dirt.',
      'Spot repair of failed seams, flashings, and active leak points.',
      'Application of specialized adhesive primer to ensure molecular bonding.',
      'Uniform rolling or spraying of high-solids silicone or elastomeric coating.',
      'Quality assurance verification of coating thickness.'
    ],
    faqs: [
      { q: 'Can you coat a roof that is currently leaking?', a: 'Yes, but the active leak must be repaired structurally first. The coating acts as a secondary protective skin, not a patch for structural wood rot.' },
      { q: 'Do roof coatings reflect heat?', a: 'Yes. White silicone coatings reflect up to 85% of solar heat, reducing roof surface temperatures by up to 50°F and lowering indoor cooling bills.' }
    ]
  },
  'roof-inspections': {
    slug: 'roof-inspections',
    name: 'Roof Inspections',
    tag: 'Diagnostic',
    shortDesc: 'Comprehensive visual and physical inspections with digital photography and detailed health reports.',
    longDesc: 'Our certified roofing inspectors evaluate the true health of your roof. We provide detailed digital reports with photo evidence of shingle wear, tile cracks, and flashing gaps, helping you make informed decisions before storm season.',
    symptoms: [
      'Preparing to buy or sell a home in South Florida',
      'Your insurance carrier is threatening cancellation due to roof age',
      'Noticing damp odors or ceiling discoloration after storms'
    ],
    process: [
      'Visual inspection of interior ceilings, attic structures, and ventilation.',
      'Physical inspection of roof perimeter, drip edges, and gutters.',
      'Close-up check of flashing around pipes, skylights, and chimneys.',
      'Generation of a detailed report with annotated photographs and a prioritized action plan.',
      'Filing official Wind Mitigation documents if requested.'
    ],
    faqs: [
      { q: 'Do you charge for roof inspections?', a: 'Our diagnostic inspection is free for homeowners in Broward County who are seeking estimates for repairs, coatings, or replacements.' },
      { q: 'How long does a roof inspection take?', a: 'A standard residential roof inspection takes 45 to 90 minutes depending on roof size and accessibility.' }
    ]
  },
  'roof-installation': {
    slug: 'roof-installation',
    name: 'Roof Installation',
    tag: 'New Build',
    shortDesc: 'Professional roof installations for new construction homes and commercial buildings.',
    longDesc: 'We install premium, high-durability roofs for new residential construction and commercial buildings. Working closely with general contractors, we deliver custom concrete tile, metal, or shingle roof installations built strictly to the High Velocity Hurricane Zone (HVHZ) Florida codes.',
    symptoms: [
      'New residential home under construction',
      'Commercial building extension or structural upgrade',
      'Complete replacement that involves replacing roof rafters and framing'
    ],
    process: [
      'Blueprints review and wind uplift calculation checks.',
      'Coordination with framing crews to ensure flat, solid decking surfaces.',
      'Installation of structural ice & water shield barriers.',
      'Placement of tile, metal, or shingle roofing systems.',
      'Handling all municipal permits and final structural inspections.'
    ],
    faqs: [
      { q: 'What is the HVHZ code?', a: 'The High Velocity Hurricane Zone (HVHZ) is a strict building code standard in Broward and Miami-Dade counties requiring roofing systems to withstand wind speeds of 170+ mph.' },
      { q: 'Can I choose a different roof material than what was originally planned?', a: 'Often yes, but it may require structural framing checks since concrete tiles are much heavier than asphalt shingles.' }
    ]
  },
  'roof-renovation': {
    slug: 'roof-renovation',
    name: 'Roof Renovation',
    tag: 'Restoration',
    shortDesc: 'Restores the aesthetic and functional properties of older tile, shingle, or flat roofs.',
    longDesc: 'Roof renovation involves restoring the structural security and visual beauty of an older roof. By replacing rotten fascia boards, repointing tile mortar, and power cleaning tile surfaces, we restore the home\'s curb appeal and water resistance without the expense of a replacement.',
    symptoms: [
      'Mold, mildew, or black staining on concrete tiles',
      'Rotten wood on fascia boards or under-soffits',
      'Cracked or crumbly mortar bedding along hips and ridges'
    ],
    process: [
      'Safe removal of mold and dirt using low-pressure chemical cleaning.',
      'Repointing of all hip and ridge tiles with high-adhesion structural mortar.',
      'Replacement of decayed wood fascia boards and soffit panels.',
      'Fungicide coating application to prevent future organic growth.',
      'Sealant application to restore tile color.'
    ],
    faqs: [
      { q: 'Is chemical roof cleaning safe for my tiles?', a: 'Yes, we use low-pressure chemical cleaning (soft washing) that safely breaks down algae without eroding the concrete tile surface like high-pressure washing can.' },
      { q: 'Will painting my roof tiles extend their life?', a: 'Applying a premium tile sealer or acrylic coating waterproofs the surface and reflects UV rays, extending tile life and restoring color.' }
    ]
  },
  'emergency-roof-repair': {
    slug: 'emergency-roof-repair',
    name: 'Emergency Roof Repair',
    tag: 'Emergency',
    shortDesc: 'Fast-response dispatch for active storm leaks, wind damage, and structural tarping services.',
    longDesc: 'During hurricane season, a roof leak can quickly destroy home interior structures. Our emergency crew is on standby 24/7 to provide rapid water-tight tarping, wind damage mitigation, and emergency leak sealants to prevent damage to your Broward County home.',
    symptoms: [
      'Active water pouring into the home during a storm',
      'A tree branch or debris has punctured the roof deck',
      'A section of shingles or tiles has blown off during high winds'
    ],
    process: [
      'Emergency dispatch response within 2 hours of call-in.',
      'On-site evaluation of safety hazards and damage areas.',
      'Installation of heavy-duty, UV-stabilized emergency tarps secured with wood furring strips.',
      'Application of temporary wet-patch sealants to stop immediate leaks.',
      'Scheduling a permanent structural repair estimate.'
    ],
    faqs: [
      { q: 'Can you repair a roof while it is actively raining?', a: 'We cannot lay down permanent shingles or hot coatings during rain. However, our emergency crews can install tarps and wet-surface sealants to stop active water flow until the storm passes.' },
      { q: 'Does insurance cover emergency tarping?', a: 'Yes. Most homeowner policies cover the cost of emergency tarping services under the "mitigation of damages" clause.' }
    ]
  }
};

export const roofTypesData: Record<string, RoofTypeItem> = {
  'tile-roofing': {
    slug: 'tile-roofing',
    name: 'Tile Roofing',
    shortDesc: 'Classic clay and concrete barrel tiles providing high-end durability and historic South Florida style.',
    longDesc: 'Tile roofing is the signature style of South Florida. Concrete and clay barrel tiles provide exceptional durability against wind uplift, reflect solar heat, and last 30 to 50 years under proper maintenance. Our installations focus on using reinforced mortar and mechanical screws for superior hurricane protection.',
    lifespan: '30–50 Years',
    symptoms: [
      'Cracked concrete or clay barrel tiles along hips and ridges',
      'Sliding or displaced tiles showing exposed underlayment',
      'Erosion of structural mortar bedding near valleys'
    ],
    floridaSpecs: [
      'Requires Class A underlayment for fire resistance.',
      'Mechanical screw fastening required on all perimeter zones (170+ mph rating).',
      'Requires concrete structural checks due to high material weight.'
    ],
    faqs: [
      { q: 'Are concrete tiles better than clay tiles?', a: 'Concrete tiles are more affordable, stronger, and offer better impact resistance against falling debris. Clay tiles offer superior color longevity and a more authentic historic appearance.' },
      { q: 'Can any home support a tile roof?', a: 'No. Concrete tiles are heavy. Homes built originally for shingles must undergo a structural framing inspection to verify the rafters can support the weight.' }
    ]
  },
  'shingle-roofing': {
    slug: 'shingle-roofing',
    name: 'Shingle Roofing',
    shortDesc: 'Affordable, versatile asphalt shingles featuring Class 4 impact resistance against storm debris.',
    longDesc: 'Asphalt shingles are the most popular roofing material due to their affordability and versatility. We use architectural, dimensional shingles featuring Class 4 impact ratings and high-velocity wind warranties (up to 130 mph) to ensure that your home remains safe during hurricane season.',
    lifespan: '15–20 Years',
    symptoms: [
      'Missing or loose shingle tabs after high wind events',
      'Curled or warped shingle edges from direct sun heat',
      'Shingle granule loss accumulating in gutters'
    ],
    floridaSpecs: [
      'Requires a self-adhering secondary water barrier over all roof seams.',
      '6-nail fastening patterns required in high wind zones (instead of the standard 4-nail pattern).',
      'Requires algae-resistant copper granules to prevent black mold staining.'
    ],
    faqs: [
      { q: 'What is a dimensional shingle?', a: 'Dimensional (or architectural) shingles feature multiple layers of fiberglass laminated together, creating a thick, textured appearance that is stronger than standard 3-tab shingles.' },
      { q: 'How often should a shingle roof be cleaned in Florida?', a: 'To prevent black algae growth from retaining heat and decaying the surface, shingle roofs should be soft-washed every 2 to 3 years.' }
    ]
  },
  'metal-roofing': {
    slug: 'metal-roofing',
    name: 'Metal Roofing',
    shortDesc: 'Sleek, standing-seam metal panels engineered for maximum wind resistance and energy efficiency.',
    longDesc: 'Metal standing-seam roofing represents the pinnacle of storm protection and modern design. With concealed fasteners that eliminate leak points, metal panels reflect solar radiation, hold a Class 90 wind uplift rating, and can easily exceed 50 years of service.',
    lifespan: '50+ Years',
    symptoms: [
      'Scratched protective coatings showing signs of surface rust',
      'Lifting metal flashing joints around roof corners',
      'Dented panels from severe debris impacts'
    ],
    floridaSpecs: [
      'Concealed clip fastening systems are required to allow for metal thermal expansion.',
      'Galvalume or aluminum coatings required to resist salt-air corrosion near the coast.',
      '170+ mph wind uplift certification.'
    ],
    faqs: [
      { q: 'Is a metal roof noisy during rain?', a: 'No. When installed with solid plywood decking and heavy insulation, metal roofs are no louder than shingle or tile systems.' },
      { q: 'Do metal roofs attract lightning?', a: 'No. Metal roofing is non-combustible and conductive, making it one of the safest materials during a lightning storm.' }
    ]
  },
  'flat-roofing': {
    slug: 'flat-roofing',
    name: 'Flat Roofing',
    shortDesc: 'Reflective TPO and modified bitumen systems designed for low-sloped residential additions.',
    longDesc: 'Low-slope flat roofs require durable membranes to protect against standing water. We install and repair premium single-ply TPO, PVC, and multi-ply modified bitumen systems that seal seams and ensure proper gutter drainage for residential additions and commercial decks.',
    lifespan: '15–25 Years',
    symptoms: [
      'Pools of water remaining on flat surfaces 48 hours after rain',
      'Blistering, splitting, or cracking in bitumen cap sheets',
      'Peeling seams along flat roof edge flashings'
    ],
    floridaSpecs: [
      'Requires minimum 1/4" per foot slope to prevent standing water pools.',
      'TPO seams must be hot-air welded for a seamless molecular bond.',
      'Requires high reflectivity index (CRRC certified) to reduce AC loads.'
    ],
    faqs: [
      { q: 'How do you fix ponding water on a flat roof?', a: 'We install tapered insulation panels under the membrane to create artificial slopes that direct water to gutters and scuppers.' },
      { q: 'Can you walk on a flat roof?', a: 'Yes, TPO and modified bitumen membranes are designed to support foot traffic for maintenance, though walking should be limited to prevent punctures.' }
    ]
  }
};

export const citiesData: Record<string, CityItem> = {
  'fort-lauderdale': {
    slug: 'fort-lauderdale-roofing',
    cityName: 'Fort Lauderdale',
    shortDesc: 'Premium tile repairs and TPO flat roof coatings for coastal homes and businesses.',
    longDesc: 'Fort Lauderdale properties face intense salt air, humidity, and wind uplift from the Atlantic. We specialize in installing salt-corrosion resistant aluminum standing-seam roofs, repairing concrete barrel tiles, and applying commercial silicone coatings to flat roofs from Las Olas to the western suburbs.',
    neighborhoods: ['Las Olas', 'Victoria Park', 'Coral Ridge', 'Rio Vista', 'Tarpon River'],
    commonRoofs: 'Concrete Barrel Tile & Standing-Seam Metal',
    weatherThreat: 'High Salt-Air Corrosion & High Wind Uplift',
    faqs: [
      { q: 'Do you offer roofing permits in Fort Lauderdale?', a: 'Yes. We handle the entire permitting process with the City of Fort Lauderdale Building Department, ensuring full code compliance.' },
      { q: 'How does salt air affect my roof in Fort Lauderdale?', a: 'Salt air accelerates rust on metal fasteners and flashings. We use stainless steel or aluminum fasteners and Galvalume metal to prevent corrosion.' }
    ]
  },
  'hollywood': {
    slug: 'hollywood-roofing',
    cityName: 'Hollywood',
    shortDesc: 'Flat roof repairs, commercial coatings, and residential shingle replacements in Hollywood.',
    longDesc: 'Hollywood homes and commercial flat roofs require active maintenance to survive heavy summer downpours. Our Hollywood crew provides emergency leak repairs, silicone flat roof restorations, and HOA-compliant shingle replacements from Hollywood Beach to Emerald Hills.',
    neighborhoods: ['Emerald Hills', 'Hollywood Lakes', 'Hollywood Hills', 'Beach District', 'Driftwood'],
    commonRoofs: 'Asphalt Shingle & Low-Slope Flat Roofs',
    weatherThreat: 'Ponding Water & Tropical Storm Winds',
    faqs: [
      { q: 'Can you repair commercial flat roofs in Hollywood?', a: 'Yes, we are fully certified in commercial TPO, PVC, and modified bitumen systems for Hollywood warehouses and retail centers.' },
      { q: 'How quickly can your Hollywood crew respond to a leak?', a: 'We offer a 2-hour emergency tarping response for active leaks in Hollywood during storm events.' }
    ]
  },
  'coral-springs': {
    slug: 'coral-springs-roofing',
    cityName: 'Coral Springs',
    shortDesc: 'HOA-compliant shingle and tile roofing replacements in Coral Springs.',
    longDesc: 'Coral Springs neighborhoods feature strict HOA aesthetics. We specialize in providing compatible shingle and concrete tile replacements that meet community standards, using high-velocity wind mitigation attachments to protect inland homes from storm forces.',
    neighborhoods: ['Ramblewood', 'Eagle Ridge', 'Windsor Estates', 'Whispering Woods', 'Maplewood'],
    commonRoofs: 'Dimensional Shingle & Concrete Tile',
    weatherThreat: 'Severe Inland Thunderstorms & High Wind Uplift',
    faqs: [
      { q: 'Do you coordinate with Coral Springs HOAs?', a: 'Yes. We provide complete architectural submittals, catalog sheets, and warranty details to help you secure fast HOA approvals.' },
      { q: 'Are shingle roofs wind-resistant in Coral Springs?', a: 'Yes, we install architectural shingles with a 130 mph wind warranty, secured with 6 nails to withstand inland storm gusts.' }
    ]
  },
  'pompano-beach': {
    slug: 'pompano-beach-roofing',
    cityName: 'Pompano Beach',
    shortDesc: 'Metal roofing installations and flat roof coatings in Pompano Beach.',
    longDesc: 'Pompano Beach buildings face intense UV exposure and coastal wind drag. We specialize in reflective white silicone roof coatings for commercial warehouses and standing-seam metal roofs that resist wind uplift and coastal salt corrosion.',
    neighborhoods: ['Harbor Beach', 'Cypress Bend', 'Highlands', 'Avondale', 'Beachside'],
    commonRoofs: 'Metal standing-seam & Commercial flat roofs',
    weatherThreat: 'Salt-Air Corrosion & High UV Degradation',
    faqs: [
      { q: 'What is the wind code in Pompano Beach?', a: 'Pompano Beach is inside the Broward County HVHZ, requiring roofs to withstand wind uplift speeds of 170+ mph.' },
      { q: 'Can you coat a flat roof on a condo in Pompano Beach?', a: 'Yes. Liquid-applied silicone coatings are ideal for multi-family condominiums to stop leaks and lower energy bills.' }
    ]
  },
  'plantation': {
    slug: 'plantation-roofing',
    cityName: 'Plantation',
    shortDesc: 'Residential tile replacements and gutter sealing under dense canopy in Plantation.',
    longDesc: 'Plantation\'s mature tree canopy creates unique roofing challenges, including leaf accumulation, mold growth, and gutter blockage. We focus on soft washing concrete tiles, clearing drainage blocks, and installing durable tile systems for Plantation homeowners.',
    neighborhoods: ['Jacaranda', 'Hawk\'s Landing', 'Plantation Acres', 'Central Park', 'El Dorado'],
    commonRoofs: 'Concrete barrel tiles & architectural shingles',
    weatherThreat: 'Debris accumulation & organic growth (mold/moss)',
    faqs: [
      { q: 'How do trees affect my roof in Plantation?', a: 'Leaves trap moisture, causing moss and mold to decay concrete tiles and shingles. Overhead branches can also slide and crack tiles during high winds.' },
      { q: 'Do you offer soft-washing services in Plantation?', a: 'Yes. We offer low-pressure chemical washes that safely kill mold without damaging your roofing materials.' }
    ]
  }
};

// Generate additional stubs dynamically to cover all 20 cities requested
const extraCities = [
  'davie', 'weston', 'pembroke-pines', 'miramar', 'deerfield-beach',
  'boca-raton', 'sunrise', 'lauderhill', 'tamarac', 'wilton-manors',
  'oakland-park', 'margate', 'coconut-creek', 'parkland', 'miami'
];

extraCities.forEach(slug => {
  const formattedName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  citiesData[slug] = {
    slug: `${slug}-roofing`,
    cityName: formattedName,
    shortDesc: `Professional roof repair, replacement, and inspection services in ${formattedName}.`,
    longDesc: `Compass Roofing provides full-service residential and commercial roofing solutions in ${formattedName}, FL. From residential tile leak repairs to commercial flat roof silicone coatings, our local Broward County crews deliver code-compliant, storm-hardened systems built for South Florida\'s hot, humid environment.`,
    neighborhoods: ['Central District', 'North Side', 'South Side', 'Eastern Suburbs', 'Western Suburbs'],
    commonRoofs: 'Concrete Tile & Dimensional Shingles',
    weatherThreat: 'High UV Exposure & Summer Downpours',
    faqs: [
      { q: `Do you serve all neighborhoods in ${formattedName}?`, a: `Yes. Compass Roofing serves all residential communities and commercial business parks in ${formattedName} and adjacent cities.` },
      { q: `How do I request a roof inspection in ${formattedName}?`, a: `You can schedule a free visual diagnostic inspection by calling (555) 123-4567 or filling out our online form.` }
    ]
  };
});

export const projectsData: Record<string, ProjectItem> = {
  'project-0': {
    slug: 'project-0',
    title: 'Flashing Restoration near Las Olas',
    city: 'Fort Lauderdale',
    type: 'Residential',
    roofType: 'Concrete Tile',
    service: 'Roof Repair',
    problem: 'Failed lead flashing around the chimney joint was allowing heavy rain to penetrate the attic, resulting in ceiling drywall damage in the master bedroom.',
    solution: 'Removed cracked barrel tiles around the chimney stack, replaced decayed 5/8" structural plywood, installed high-adhesion self-adhering water barrier, laid down custom counter-flashing, and reset the tiles.',
    result: 'Stopped all water penetration. Ceiling drywall was repaired and matching tiles were used, making the repair completely invisible from the street. Passed Fort Lauderdale municipal inspection.'
  },
  'project-1': {
    slug: 'project-1',
    title: 'Warehouse Roof Preservation',
    city: 'Hollywood',
    type: 'Commercial',
    roofType: 'Flat Roof (TPO)',
    service: 'Roof Coatings',
    problem: 'A 12,000 sq ft flat TPO warehouse roof was showing signs of chalking and seam separation, causing minor leaks across the facility floor and increasing cooling bills.',
    solution: 'Power washed the roof surface, reinforced all perimeter seams with polyester fabric and sealant, and rolled out a high-solids white silicone coating system at 22 mils thickness.',
    result: 'Created a seamless, waterproof membrane that stopped all water entry and reflected 85% of UV rays. Reduced indoor temperatures by 12°F and saved the property owner an estimated $24,000 in tear-off costs.'
  },
  'project-2': {
    slug: 'project-2',
    title: 'Storm-Ready Shingle Installation',
    city: 'Coral Springs',
    type: 'Residential',
    roofType: 'Asphalt Shingle',
    service: 'Roof Replacement',
    problem: 'An aging 3-tab shingle roof (17 years old) had suffered severe wind damage, resulting in missing shingle tabs and exposed asphalt underlayment prone to leak risk.',
    solution: 'Stripped the old shingle system to the deck, reinforced rafters with hurricane clips, nailed down new sheathing, applied a self-adhered secondary water barrier, and installed dimensional architectural shingles.',
    result: 'Completed a Class 4 impact-rated roof system with a 130 mph wind warranty. Provided the homeowner with a Wind Mitigation report, reducing their annual insurance premium by $1,800.'
  },
  'project-3': {
    slug: 'project-3',
    title: 'Flat Roof Replacement in Pompano Beach',
    city: 'Pompano Beach',
    type: 'Commercial',
    roofType: 'Flat Roof (TPO)',
    service: 'Commercial Roofing',
    problem: 'Condominium flat roof deck had systemic water saturation in the underlying fiberboard insulation due to severe ponding water.',
    solution: 'Tore off failed membranes, installed a tapered insulation board system to establish a 1/4" drainage slope, and hot-air welded a premium 60-mil white TPO membrane.',
    result: 'Corrected all ponding water issues. Water now drains completely into scuppers within 4 hours of downpours. Backed by a 20-year manufacturer labor and material warranty.'
  }
};

export const resourcesData: Record<string, ResourceItem> = {
  'roof-repair-vs-replacement': {
    slug: 'roof-repair-vs-replacement',
    title: 'Roof Repair vs. Replacement: South Florida Guide',
    excerpt: 'Understand when a targeted repair or liquid coating makes sense, and when Florida codes mandate a full replacement.',
    bodyOutline: [
      'The 25% Rule: Understanding Florida Building Code requirements for roof repairs.',
      'Analyzing surface wear: checking shingle granule loss and tile cracking.',
      'Checking age: when asphalt shingles, concrete tiles, and metal panels reach their half-life.',
      'Active leak counts: deciding based on localized vs. systemic moisture intrusion.',
      'Cost comparisons: evaluating repair budgets against replacement financing.'
    ],
    relatedServices: ['roof-repair', 'roof-replacement'],
    faqs: [
      { q: 'What is the Florida 25% roof repair rule?', a: 'Under the Florida Building Code, if more than 25% of a roof section is damaged or repaired within a 12-month period, the entire roof section must be brought up to current code standards, which often triggers a full replacement.' },
      { q: 'Can I coat my roof instead of replacing it?', a: 'If your roof deck is dry and structurally sound, applying a liquid silicone coating can seal surface cracks and add 10 years of life, avoiding a tear-off.' }
    ]
  },
  'signs-you-need-a-new-roof': {
    slug: 'signs-you-need-a-new-roof',
    title: '5 Warning Signs You Need a New Roof in Broward County',
    excerpt: 'Don\'t wait for hurricane season to check your roof. Look for these critical warnings signs of roof decay.',
    bodyOutline: [
      'Ceiling discoloration and plaster staining in living areas.',
      'Erosion of concrete tile color and mortar cracking along ridges.',
      'Curling, buckling, or missing shingles along the roof perimeter.',
      'Clogged scuppers and standing water pooling on flat roof additions.',
      'Rising indoor utility bills indicating failed thermal reflectivity.'
    ],
    relatedServices: ['roof-replacement', 'roof-inspections'],
    faqs: [
      { q: 'Should I replace cracked tiles immediately?', a: 'Yes. Cracked tiles allow rainwater to seep directly onto the underlying organic underlayment, rotting the wood deck below.' },
      { q: 'How do I check for roof damage safely?', a: 'Avoid climbing ladders yourself. Use binoculars to inspect ridge lines from the ground, check attic rafters for dampness, or call a professional inspector.' }
    ]
  },
  'how-to-prepare-your-roof-for-hurricane-season': {
    slug: 'how-to-prepare-your-roof-for-hurricane-season',
    title: 'How to Prepare Your Roof for Florida Hurricane Season',
    excerpt: 'Storm-proofing your roof starts before June. Follow this checklist to verify wind uplift resistance.',
    bodyOutline: [
      'Inspect perimeter tiles and shingle edges for lifting seals.',
      'Verify hurricane strap attachments in the attic space.',
      'Clear gutters, downspouts, and valley channels of leaves.',
      'Trim overhanging tree branches back at least 6 feet from the roofline.',
      'Schedule a professional Wind Mitigation inspection for insurance savings.'
    ],
    relatedServices: ['roof-inspections', 'emergency-roof-repair'],
    faqs: [
      { q: 'What is wind mitigation?', a: 'A wind mitigation inspection verifies how resistant a roof is to wind uplift, looking at roof deck attachment, nail spacing, clips, and water barriers.' },
      { q: 'Do hurricane straps make a difference?', a: 'Yes. Hurricane straps anchor your roof structure directly to the masonry walls of the house, preventing the roof from detaching during heavy wind loads.' }
    ]
  }
};

// Generate stubs for the remaining 7 resource articles to satisfy the 10-page list
const extraResources = [
  'flat-roof-problems-south-florida',
  'roof-coatings-for-south-florida-buildings',
  'how-long-does-a-roof-last-in-florida',
  'what-to-ask-before-hiring-a-roofing-contractor',
  'tile-roof-leaks-broward',
  'commercial-flat-roof-maintenance',
  'insurance-wind-mitigation-credits'
];

extraResources.forEach(slug => {
  const formattedTitle = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  resourcesData[slug] = {
    slug,
    title: `${formattedTitle}: Complete Broward Guide`,
    excerpt: `A detailed guide covering the best practices for managing ${formattedTitle.toLowerCase()} on residential and commercial South Florida properties.`,
    bodyOutline: [
      'Understanding the local environment and weather pressures.',
      'Cost-benefit analysis of coatings vs. structural upgrades.',
      'Compliance with local Broward County building codes.',
      'Preventative checklists for annual property maintenance.'
    ],
    relatedServices: ['roof-inspections', 'roof-repair'],
    faqs: [
      { q: `How does this impact properties in Broward County?`, a: `Proactive management according to local weather dynamics extends the roof lifespan and protects the structure from expensive moisture damage.` }
    ]
  };
});
