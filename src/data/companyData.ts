export type ProjectCategory =
  | 'All'
  | 'Signature Residential'
  | 'Hospitality & Resort'
  | 'Multi-Unit Housing';

export interface ProjectMediaItem {
  src: string;
  caption: string;
  kind: 'Exterior' | 'Interior' | 'Floor Plan' | 'Site & Context';
}

export interface ProjectFloorPlan {
  id: string;
  code: string;
  tabLabel: string;
  title: string;
  level: string;
  unitArea: string;
  dimensions: string;
  scale: string;
  description: string;
  highlights: string[];
  imageSrc: string;
  pdfHref?: string;
}

export interface ProjectDocument {
  label: string;
  type: 'Brochure' | 'Floor Plan' | 'Parking & Basement' | 'RAJUK Approval';
  fileSize: string;
  href: string;
}

export interface ArchitecturalProject {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  category: Exclude<ProjectCategory, 'All'>;
  location: string;
  year: string;
  scale: string;
  stories: string;
  status: string;
  structuralSystem: string;
  summary: string;
  designThesis: string;
  coverImage: string;
  heroBackdropImage: string;
  gallery: ProjectMediaItem[];
  floorPlans: ProjectFloorPlan[];
  documents: ProjectDocument[];
  highlights: string[];
  performanceMetrics: {
    label: string;
    value: string;
  }[];
  featured?: boolean;
}

export interface TechnicalArchiveDocument {
  id: string;
  code: string;
  title: string;
  projectId: string;
  project: string;
  category: 'Project Brochure' | 'Architectural Plan' | 'Statutory & RAJUK';
  format: string;
  fileSize: string;
  href: string;
}

export interface CapabilityItem {
  index: string;
  title: string;
  scope: string;
  deliverables: string[];
  highlightMetric: string;
  spanWide?: boolean;
}

export interface ApplianceLine {
  id: string;
  code: string;
  name: string;
  category: string;
  summary: string;
  engineeringFocus: string;
  specs: {
    label: string;
    value: string;
  }[];
  architecturalIntegration: string;
}

export const COMPANY_INFO = {
  name: 'Edifice Consultants',
  developmentArm: 'Edifice Development Ltd.',
  applianceDivision: 'Edifice Home Appliances',
  tagline: 'The Nexus of Art & Technology',
  principal: {
    name: 'Faruk Ahmed',
    credentials: 'Architect, MIAB A-140',
    academic: 'Former Faculty, Department of Architecture, BUET',
    rolePrimary: 'Principal Architect, Edifice Consultants',
    roleSecondary: 'Proprietor & Designer, Edifice Home Appliances',
    phoneDisplay: '+880 1682-947555',
    phoneRaw: '+8801682947555',
    phoneLocal: '01682947555',
    developmentHotline: '+88 01534 320 233',
    personalEmail: 'faruk1207@gmail.com',
  },
  office: {
    email: 'edifice.consultants.bd@gmail.com',
    floor: 'Floor-19',
    building: 'Planners Tower',
    area: 'Bangla Motor / Sonargaon Road',
    city: 'Dhaka-1000',
    country: 'Bangladesh',
    fullAddress: 'Floor-19, Planners Tower, Bangla Motor, Dhaka-1000, Bangladesh',
    coordinates: '23.7461° N, 90.3942° E',
    hours: 'Sunday – Thursday · 10:00 AM – 6:30 PM BST',
  },
  visitingCard: {
    frontPhoto: '/assets/aistudio/WhatsApp_Image_2026-_904e4bb9.jpeg',
    backPhoto: '/assets/aistudio/WhatsApp_Image_2026-11-16_at_12.08.02_PM_26a9b614.jpeg',
  },
} as const;

export const HERO_FEATURED_SLIDES = [
  {
    projectId: 'buruz-bay-resort',
    code: 'EC-RESORT-01',
    title: 'Buruz Bay Hotel & Resort',
    location: 'Kuakata Marine Drive, Patuakhali',
    tagline: '14-Story Coastal A-Frame Landmark · Twin Pool Courtyard & Sky Vault',
    src: '/assets/aistudio/4_efaae877.png',
  },
  {
    projectId: 'edifice-primus',
    code: 'EDL-RES-02',
    title: 'Edifice Primus',
    location: 'Shagufta, Mirpur, Dhaka',
    tagline: 'South-Facing B+G+M+9 Flagship · 1,400 & 2,800 sq. ft. Residences',
    src: '/assets/aistudio/1_4_-_Photo_353476c1.jpg',
  },
  {
    projectId: 'lakefront-terrace-residence',
    code: 'EC-RES-05',
    title: 'Lakefront Terrace Residence',
    location: 'Lakeside Promenade, Dhaka',
    tagline: 'Waterfall Foyer Entry · 3 & 4-Bedroom Full-Floor Sanctuary',
    src: '/assets/aistudio/4_fb1cd8eb.png',
  },
  {
    projectId: 'edifice-genesis',
    code: 'EDL-RES-03',
    title: 'Edifice Genesis',
    location: 'Dhaka Residential Corridor',
    tagline: 'Twin-Core Biophilic Tower · Three-Sided Natural Daylight',
    src: '/assets/aistudio/Edifice_Genesis__Modern_High-Rise_Living_7b5eab79.png',
  },
  {
    projectId: 'lakeside-wave-residence',
    code: 'EC-RES-06',
    title: 'Lakeside Wave Residence',
    location: 'Lakefront Avenue, Dhaka',
    tagline: 'Curved Precast Balconies · Duplex Crown & Mezzanine Community Hall',
    src: '/assets/aistudio/3_a1e49686.png',
  },
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    index: '01',
    title: 'Architectural Design & Masterplanning',
    scope:
      'Climate-responsive spatial planning, coastal resort masterplanning, and RAJUK / BNBC compliant architectural documentation for high-density urban plots and waterfront estates.',
    deliverables: [
      'RAJUK Approval Drawings & FAR Optimization',
      'Schematic & 3D Architectural Visualization',
      'Full Working Drawings & Interior Fit-Out',
      'Turnkey Development via Edifice Development Ltd.',
    ],
    highlightMetric: 'BNBC & RAJUK Approved Practice',
    spanWide: true,
  },
  {
    index: '02',
    title: 'Structural & Smart Material Engineering',
    scope:
      'Seismic-resistant foundations using pre-cast piles, AAC thermal block construction, UV-protected glazing, and coordinated MEP life-safety infrastructure.',
    deliverables: [
      'Square Pre-Cast Pile Foundations',
      'AAC Thermal & Earthquake Block Masonry',
      'MEP Coordination & Fire Safety Systems',
    ],
    highlightMetric: 'Engineered for Seismic & Monsoon Loads',
  },
  {
    index: '03',
    title: 'Hospitality & Multi-Unit Interiors',
    scope:
      'Five-star coastal suite planning, dramatic daylight-filled lobby atriums, and spacious 3- to 4-bedroom residences detailed around family living and acoustics.',
    deliverables: [
      'Presidential & Executive Suite Layouts',
      'Double-Height Atrium & Lobby Design',
      'Dry & Wet Kitchen Zoning',
    ],
    highlightMetric: 'Furniture-Scale Millimeter Precision',
  },
  {
    index: '04',
    title: 'Industrial & Appliance Design',
    scope:
      'Led directly through Edifice Home Appliances, translating architectural proportion and thermal engineering into reliable everyday domestic hardware.',
    deliverables: [
      'Ergonomic Industrial Form Factor',
      'Thermal & Airflow Optimization',
      'Modular Architectural Built-In Fitment',
      'Monsoon Humidity Conditioning',
    ],
    highlightMetric: 'Architecture & Hardware Integration',
    spanWide: true,
  },
];

export const STUDIO_METRICS = [
  {
    value: 'MIAB A-140',
    label: 'Principal Registration',
    detail: 'Institute of Architects Bangladesh',
  },
  {
    value: 'BUET Faculty',
    label: 'Academic Pedigree',
    detail: 'Former Dept. of Architecture',
  },
  {
    value: '7 Commissions',
    label: 'Active Project Portfolio',
    detail: 'Kuakata & Dhaka Metro Developments',
  },
  {
    value: 'Floor-19 Studio',
    label: 'Planners Tower HQ',
    detail: 'Bangla Motor, Dhaka-1000',
  },
];

export const PORTFOLIO_PROJECTS: ArchitecturalProject[] = [
  {
    id: 'buruz-bay-resort',
    code: 'EC-RESORT-01',
    title: 'Buruz Bay Hotel & Resort',
    subtitle: 'Iconic Coastal Seafront Flagship · Kuakata',
    category: 'Hospitality & Resort',
    location: 'Kuakata Marine Drive, Patuakhali',
    year: '2026',
    scale: '14-Story A-Frame Coastal Resort',
    stories: 'G + 13 Levels + Vaulted Sky Roof',
    status: 'Signature Coastal Landmark',
    structuralSystem: 'Aerodynamic Curved RCC Shell & Atrium Diagrid Core',
    summary:
      'An architectural coastal landmark along Kuakata Marine Drive designed as an A-shaped stepped white-concrete resort opening directly toward the Bay of Bengal, complete with twin pool decks, beachfront helipad, and vaulted glass sky-atrium.',
    designThesis:
      'Sculpted to frame uninterrupted ocean vistas from every suite balcony while shielding the central garden courtyard from coastal monsoon winds. Multi-story undulating lobby galleries connect hospitality retail, ocean-view dining, and four signature suite tiers.',
    coverImage: '/assets/aistudio/1_b1761d42.png',
    heroBackdropImage: '/assets/aistudio/4_efaae877.png',
    featured: true,
    highlights: [
      'Stepped A-frame master plan with landscaped central atrium & twin free-form swimming pools',
      'Dedicated beachfront boardwalk promenade and coastal helipad landing pad',
      'Vaulted glass rooftop conservatory overlooking both sunrise and sunset horizons',
      'Four interior hospitality tiers: Presidential, Executive, Premium, and Standard Suites',
    ],
    performanceMetrics: [
      { label: 'Site Plan Form', value: 'Coastal A-Frame' },
      { label: 'Suite Tiers', value: '4 Oceanfront Classes' },
      { label: 'Pools & Recreation', value: 'Twin Deck + Sky Vault' },
      { label: 'Access Feature', value: 'Marine Drive & Helipad' },
    ],
    floorPlans: [
      {
        id: 'buruz-master-site',
        code: 'DWG-BB-01',
        tabLabel: 'Master Site Plan',
        title: 'Buruz Bay A-Frame Coastal Master Plan',
        level: 'Estate Masterplan',
        unitArea: 'Full Seafront Parcel',
        dimensions: 'Twin Pools · Helipad · Beach Promenade · Central Courtyard',
        scale: 'Masterplan',
        description:
          'Complete coastal estate organization aligning the A-frame hotel wings toward the Bay of Bengal, integrating the oceanfront boardwalk, landscaped central court, dual free-form pools, and dedicated helipad pad.',
        highlights: [
          'Stepped A-frame geometry shielding courtyard microclimate',
          'Direct vehicular drop-off from Kuakata Marine Drive',
          'Beachfront helipad pad & continuous coastal timber boardwalk',
        ],
        imageSrc: '/assets/aistudio/6_450e666f.jpg',
        pdfHref: '/assets/aistudio/BROCHURE_BURUZ_BAY_21_9_26_3_copy_9d416a9a.pdf',
      },
      {
        id: 'buruz-suite-module',
        code: 'DWG-BB-02',
        tabLabel: 'Suite Floor Plan',
        title: 'Angled Ocean-View Twin Suite Floor Plan',
        level: 'Typical Hospitality Floors',
        unitArea: 'Bespoke Tapered Module',
        dimensions: 'Twin Queen · Seafront Lounge · Private Timber Balcony',
        scale: 'Suite Module',
        description:
          'Tapered hospitality suite plan splayed along the curved building perimeter to maximize oceanfront glazing, complete with entry wardrobe vestibule, spa-grade bath, and private cantilevered sea-view deck.',
        highlights: [
          'Angled glazing splay expanding peripheral Bay of Bengal views',
          'Acoustically isolated wet-core bathroom & dressing zone',
          'Full-width sliding doors opening onto timber veranda lounge',
        ],
        imageSrc: '/assets/aistudio/Room_Plan-Rendered_2bfc2c5b.jpg',
        pdfHref: '/assets/aistudio/BROCHURE_BURUZ_BAY_21_9_26_3_copy_9d416a9a.pdf',
      },
    ],
    gallery: [
      {
        src: '/assets/aistudio/1_b1761d42.png',
        caption: 'Marine Drive Coastal Perspective — Stepped Terraces & Atrium Podium',
        kind: 'Exterior',
      },
      {
        src: '/assets/aistudio/4_efaae877.png',
        caption: 'Aerial Kuakata Perspective — Twin Pools & Vaulted Glass Roof Canopy',
        kind: 'Exterior',
      },
      {
        src: '/assets/aistudio/5_323687f7.png',
        caption: 'Grand Arrival Pavilion — Curved Double-Height Glass Curtain Wall',
        kind: 'Exterior',
      },
      {
        src: '/assets/aistudio/2_ccf9fcd6.png',
        caption: 'Oceanfront Elevation Along Kuakata Boulevard',
        kind: 'Exterior',
      },
      {
        src: '/assets/aistudio/Lounge_Area_174b4486.png',
        caption: 'Central Atrium Lobby & Curved Balcony Galleries',
        kind: 'Interior',
      },
      {
        src: '/assets/aistudio/Presidential_Suite_28bbfd4f.png',
        caption: 'Presidential Suite — Panoramic Ocean Deck, Lounge & Spa Bath',
        kind: 'Interior',
      },
      {
        src: '/assets/aistudio/Executive_Suite_0b19ec79.png',
        caption: 'Executive Suite — Timber Slats, Ocean Lounge & Deep Soaking Tub',
        kind: 'Interior',
      },
      {
        src: '/assets/aistudio/Premium_Suite_5c0f1f3e.png',
        caption: 'Premium Suite — Oceanfront Bedroom & Living Area',
        kind: 'Interior',
      },
      {
        src: '/assets/aistudio/Standard_Suite_972199d7.png',
        caption: 'Standard Twin Suite — Contemporary Coastal Hospitality Fit-Out',
        kind: 'Interior',
      },
      {
        src: '/assets/aistudio/6_450e666f.jpg',
        caption: 'Master Site Plan — Helipad, Boardwalk, Twin Pools & Atrium Court',
        kind: 'Site & Context',
      },
      {
        src: '/assets/aistudio/Room_Plan-Rendered_2bfc2c5b.jpg',
        caption: 'Rendered Angled Hospitality Suite Floor Plan',
        kind: 'Floor Plan',
      },
    ],
    documents: [
      {
        label: 'Buruz Bay Resort Official Brochure',
        type: 'Brochure',
        fileSize: '336 MB PDF',
        href: '/assets/aistudio/BROCHURE_BURUZ_BAY_21_9_26_3_copy_9d416a9a.pdf',
      },
    ],
  },
  {
    id: 'edifice-primus',
    code: 'EDL-RES-02',
    title: 'Edifice Primus',
    subtitle: 'Flagship Residential Tower · Edifice Development Ltd.',
    category: 'Signature Residential',
    location: 'Shagufta, Mirpur, Dhaka (South Facing)',
    year: '2026',
    scale: '1,400 & 2,800 sq. ft. Units · 5 Katha',
    stories: 'B + G + M + 9 Stories',
    status: 'Flagship Residential Booking',
    structuralSystem: 'Pre-Cast Pile Foundation & AAC Thermal Block Masonry',
    summary:
      'A south-facing B+G+M+9 residential development in Shagufta featuring full-height glazed elevator core shafts, cantilevered green balconies, AAC insulated masonry, 16-ft grand arrival lobby, and rooftop BBQ retreat.',
    designThesis:
      'Engineered with dual flexibility: typical floors configure cleanly as twin 1,400 sq. ft. 3-bedroom residences (Type A) or a continuous 2,800 sq. ft. single-unit mansion floor (Type B) with dedicated study, dry/wet kitchen, and expansive family lounge.',
    coverImage: '/assets/aistudio/1_1_-_Photo_744d443c.jpg',
    heroBackdropImage: '/assets/aistudio/1_4_-_Photo_353476c1.jpg',
    highlights: [
      'Square pre-cast pile foundation & earthquake-resistant AAC block thermal walls',
      'UV-protected glazing, 16-ft high ground floor, and 19 car parking spaces across Ground & Semi-Basement',
      'Built-in Starlink readiness, rooftop BBQ & bonfire terrace overlooking Pallabi corridor',
      'Connected to Hazrat Shahjalal Airport 3rd Terminal via 100-ft road & near Uttara North Metro',
    ],
    performanceMetrics: [
      { label: 'Unit Options', value: '1,400 / 2,800 sft' },
      { label: 'Building Height', value: 'B + G + M + 9' },
      { label: 'Plot & Road', value: '5 Katha · 25 ft South' },
      { label: 'Parking Capacity', value: '19 + 18 Spaces' },
    ],
    floorPlans: [
      {
        id: 'primus-type-a',
        code: 'EDL-PL-A',
        tabLabel: 'Type A · 1,400 sft',
        title: 'Apartment Type A — Twin 3-Bedroom Residence Plan',
        level: 'Typical Floor (Dual-Unit Option)',
        unitArea: '1,400 sq. ft. per Unit',
        dimensions: '3 Bedrooms · 14\'-0" × 11\'-0" Dining · 11\'-0" × 13\'-0" Living · 4 Verandas',
        scale: 'Scale 1:100',
        description:
          'Symmetric 1,400 sq. ft. floor plates mirrored across the central 8\'-3" × 6\'-1" lift and stair lobby. Each unit provides three full bedrooms, dedicated dining and living lounges, compact kitchen, and private corner verandas.',
        highlights: [
          'Two independent 1,400 sq. ft. 3-bedroom apartments per floor',
          'Central Lift (8\'-3" × 6\'-1") and Lobby (8\'-0" × 7\'-11") core',
          'Bedrooms up to 15\'-0" × 11\'-0" with 4 private balconies per unit',
        ],
        imageSrc: '/assets/plans/primus_type_a_unit.png',
        pdfHref: '/assets/aistudio/Edifice_Primus_c17033fa.pdf',
      },
      {
        id: 'primus-type-b',
        code: 'EDL-PL-B',
        tabLabel: 'Type B · 2,800 sft',
        title: 'Apartment Type B — Single-Unit Full-Floor Mansion Plan',
        level: 'Typical Floor (Single-Unit Option)',
        unitArea: '2,300 + 500 = 2,800 sq. ft.',
        dimensions: '4 Bed · Family Living 23\'-6" × 11\'-0" · Study · Dry & Wet Kitchen',
        scale: 'Scale 1:100',
        description:
          'Expansive full-floor single residence combining both wings into one unified luxury home along an existing 7.62m wide south road, complete with 11\'-6" × 6\'-6" foyer, dual walk-in closets (13\'-2" × 5\'-3"), dedicated study room, and separate dry & wet kitchens.',
        highlights: [
          'Master Bed 18\'-5" × 11\'-0" + twin bedrooms with 13\'-2" walk-in closets',
          '23\'-6" × 11\'-0" Family Living + 17\'-3" × 12\'-3" Formal Living + 10\'-7" Study',
          '17\'-0" × 4\'-6" North dining veranda plus full dry & wet culinary zoning',
        ],
        imageSrc: '/assets/plans/primus_type_b_unit.png',
        pdfHref: '/assets/aistudio/single_unit_68af0e2a.pdf',
      },
      {
        id: 'primus-comparison',
        code: 'EDL-PL-AB',
        tabLabel: 'Type A & B Sheet',
        title: 'Typical Floor Plan — Dual vs. Single-Unit Comparison',
        level: 'Brochure Specification Plate',
        unitArea: '1,400 sft / 2,800 sft',
        dimensions: 'Side-by-Side Structural Grid Flexibility',
        scale: 'Brochure Sheet 06',
        description:
          'Official Edifice Primus brochure comparison plate demonstrating how column-free living spans adapt effortlessly between twin 1,400 sq. ft. homes and a unified 2,800 sq. ft. full-floor residence.',
        highlights: [
          'Identical perimeter wet-stack alignment across both configurations',
          'Direct comparison of room dimensions and cross-ventilation flow',
        ],
        imageSrc: '/assets/plans/primus_typical_plans.png',
        pdfHref: '/assets/aistudio/Edifice_Primus_c17033fa.pdf',
      },
      {
        id: 'primus-gf-parking',
        code: 'EDL-GF-01',
        tabLabel: 'Ground Floor (19 Cars)',
        title: 'Ground Floor Parking, Arrival Waiting Zone & Substation',
        level: 'Ground Level (+4\'-0" Datum)',
        unitArea: 'Full 5 Katha Ground Plate',
        dimensions: '19 Car Parking Bays · Car Wash · Twin Guard Rooms · Waiting Lounge',
        scale: 'Scale 1:100',
        description:
          'Street-level entry from the existing 7.62m wide south road featuring dual Up/Down vehicular ramps, 19 organized parking spaces including dedicated car-wash/guest bay, security guard posts, substation, and furnished lobby waiting lounge.',
        highlights: [
          'Total 19 Ground Floor car parking stalls + dedicated Car Wash / Guest bay',
          'Furnished resident waiting lounge beside 8\'-0" × 7\'-11" lift lobby',
          'Dedicated electrical substation & twin flanking guard rooms',
        ],
        imageSrc: '/assets/plans/primus_gf_parking.png',
        pdfHref: '/assets/aistudio/GF_d70b8f26.pdf',
      },
      {
        id: 'primus-semi-basement',
        code: 'EDL-SB-01',
        tabLabel: 'Semi-Basement (18 Cars)',
        title: 'Semi-Basement Parking & Resident Community Facility',
        level: 'Semi-Basement (-4\'-0" Datum)',
        unitArea: 'Lower Parking Plate',
        dimensions: '18 Car Parking Bays · Community Facility Room · Lift Core',
        scale: 'Scale 1:100',
        description:
          'Sub-grade semi-basement level accessed via wide circulation ramp accommodating 18 protected vehicle bays alongside a dedicated enclosed resident community facility space.',
        highlights: [
          '18 covered semi-basement car parking stalls (37 total bays with GF)',
          'Integrated Community Facility room directly adjacent to stair & lift core',
        ],
        imageSrc: '/assets/plans/primus_semi_basement.png',
        pdfHref: '/assets/aistudio/SEMI_0a4b2076.pdf',
      },
    ],
    gallery: [
      {
        src: '/assets/aistudio/1_1_-_Photo_744d443c.jpg',
        caption: 'Front South Elevation — Daylight Glazed Atrium Core & Planters',
        kind: 'Exterior',
      },
      {
        src: '/assets/aistudio/1_2_-_Photo_6397a62e.jpg',
        caption: 'Northwest Perspective — Cantilevered Glass Verandas',
        kind: 'Exterior',
      },
      {
        src: '/assets/aistudio/1_3_-_Photo_55da1ef5.jpg',
        caption: 'East Corner Perspective — Vertical Staggered Balconies',
        kind: 'Exterior',
      },
      {
        src: '/assets/aistudio/1_4_-_Photo_353476c1.jpg',
        caption: 'Twilight Exterior — Illuminated Vertical Signage & Interior Warmth',
        kind: 'Exterior',
      },
      {
        src: '/assets/aistudio/1_5_-_Photo_1a2f50d2.jpg',
        caption: 'Night Facade Detail — Central Glazed Core Lighting',
        kind: 'Exterior',
      },
      {
        src: '/assets/aistudio/1_6_-_Photo_9cba7c53.jpg',
        caption: 'Dusk Front Elevation Study',
        kind: 'Exterior',
      },
      {
        src: '/assets/aistudio/1_7_3fdfbd9b.jpg',
        caption: 'Upper Penthouse & Sky-Frame Detail',
        kind: 'Exterior',
      },
      {
        src: '/assets/aistudio/1_8_ff5857e6.jpg',
        caption: 'Evening Balcony Louver & Glazing Articulation',
        kind: 'Exterior',
      },
      {
        src: '/assets/plans/primus_type_b_unit.png',
        caption: 'Type B Single-Unit 2,800 sq. ft. Floor Plan',
        kind: 'Floor Plan',
      },
    ],
    documents: [
      {
        label: 'Edifice Primus Full Project Brochure',
        type: 'Brochure',
        fileSize: '19.7 MB PDF',
        href: '/assets/aistudio/Edifice_Primus_c17033fa.pdf',
      },
      {
        label: 'Type B Single-Unit Plan (2,800 sq. ft.)',
        type: 'Floor Plan',
        fileSize: '19.7 MB PDF',
        href: '/assets/aistudio/single_unit_68af0e2a.pdf',
      },
      {
        label: 'Ground Floor Plan (19 Car Parking)',
        type: 'Parking & Basement',
        fileSize: '985 KB PDF',
        href: '/assets/aistudio/GF_d70b8f26.pdf',
      },
      {
        label: 'Semi-Basement Plan (18 Car Parking & Community)',
        type: 'Parking & Basement',
        fileSize: '986 KB PDF',
        href: '/assets/aistudio/SEMI_0a4b2076.pdf',
      },
    ],
  },
  {
    id: 'edifice-genesis',
    code: 'EDL-RES-03',
    title: 'Edifice Genesis',
    subtitle: 'Modern High-Rise Living · Twin-Core Biophilic Tower',
    category: 'Signature Residential',
    location: 'Dhaka Residential Corridor',
    year: '2025',
    scale: '10-Story Twin-Core Residences',
    stories: 'G + 9 Stories',
    status: 'Architectural Commission',
    structuralSystem: 'Reinforced Concrete Twin-Shear Core & Cantilever Slabs',
    summary:
      'A crisp off-white modern high-rise anchored by twin vertical architectural portals, dark slatted ground-level boundary screening, and rhythmic staggered balcony gardens.',
    designThesis:
      'By splitting the primary mass into two sculpted structural volumes linked by a recessed glazed stairwell and lift bay, every apartment gains three-sided natural daylight and cross-ventilation.',
    coverImage: '/assets/aistudio/Edifice_Genesis__Modern_High-Rise_Living_7b5eab79.png',
    heroBackdropImage: '/assets/aistudio/Edifice_Genesis__Modern_High-Rise_Living_7b5eab79.png',
    highlights: [
      'Split twin-tower massing creating deep self-shading light wells along the facade',
      'Dark vertical steel security screen at ground arrival framed by bamboo landscaping',
      'Corner cantilevered glass verandas with integrated cascading planter troughs',
      'Roof pergola deck engineered for shaded evening resident gatherings',
    ],
    performanceMetrics: [
      { label: 'Elevation Concept', value: 'Split Twin-Portal' },
      { label: 'Stories', value: 'G + 9 Levels' },
      { label: 'Daylight Access', value: '3-Sided Exposure' },
      { label: 'Facade Material', value: 'Matte Plaster & Glass' },
    ],
    floorPlans: [],
    gallery: [
      {
        src: '/assets/aistudio/Edifice_Genesis__Modern_High-Rise_Living_7b5eab79.png',
        caption: 'Three-Quarter Perspective — Edifice Genesis Twin-Core Elevation',
        kind: 'Exterior',
      },
      {
        src: '/assets/aistudio/1_1_-_Photo_041f541c.jpg',
        caption: 'Direct Front Elevation — Symmetric Planter Balcony Rhythm',
        kind: 'Exterior',
      },
      {
        src: '/assets/aistudio/1_2_-_Photo_39dcc98d.jpg',
        caption: 'Side Perspective — Slatted Boundary Entry & Corner Balconies',
        kind: 'Exterior',
      },
    ],
    documents: [],
  },
  {
    id: 'edifice-01-modhucity',
    code: 'EC-DEV-04',
    title: 'Edifice-01 · Modhucity',
    subtitle: 'Brick & Concrete Community Apartments with RAJUK Approval',
    category: 'Multi-Unit Housing',
    location: 'Modhucity, Sheyael Road (Near Dhanmondi), Dhaka',
    year: '2025',
    scale: '1,000 sq. ft. Apartments · 8-Story Tower',
    stories: 'G + 8 Stories + Rooftop Pool',
    status: 'RAJUK Approved Development',
    structuralSystem: 'RCC Frame with Exposed Machine-Made Terracotta Brick',
    summary:
      'A signature red-brick and textured grey concrete residential building in Modhucity, located moments from Dhanmondi. Pairs compact 2- and 3-bedroom apartments with a landscaped rooftop swimming pool, gym, and approved RAJUK working drawings.',
    designThesis:
      'Brings Edifice Consultants’ signature terracotta-and-slate material honesty to accessible urban housing without sacrificing private outdoor verandas, cross-ventilation, or communal rooftop leisure.',
    coverImage: '/assets/aistudio/1_18_-_Photo_d71f768f.jpg',
    heroBackdropImage: '/assets/aistudio/1_18_-_Photo_d71f768f.jpg',
    highlights: [
      'Complete RAJUK-approved architectural drawing package with FAR & setback calculations',
      'Rooftop sky deck featuring swimming pool, shaded lounge umbrellas, and planted green roofs',
      'Efficient 1,000 sq. ft. 2/3-bedroom layouts with 3 verandas, drawing, dining & 2 toilets',
      'Single-unit 5th–8th floor plan option stamped by Edifice Consultants',
    ],
    performanceMetrics: [
      { label: 'Unit Footprint', value: '1,000 sq. ft. / Single' },
      { label: 'Roof Amenity', value: 'Pool, Gym & Garden' },
      { label: 'Statutory Status', value: 'RAJUK Approved' },
      { label: 'Location', value: 'Modhucity, Dhaka' },
    ],
    floorPlans: [
      {
        id: 'edifice01-single-unit',
        code: 'DWG-E1-11',
        tabLabel: '5th–8th Floor Plan',
        title: '5th–8th Floor Single-Unit Furniture Layout (50\'-0" × 72\'-0" Plot)',
        level: 'Floors 5 to 8',
        unitArea: 'Full 50\' × 72\' Footprint',
        dimensions: '3 Bed · 15\'-9" Drawing · 17\'-6" Dining · 5 Verandas',
        scale: 'Stamped CAD',
        description:
          'Furniture-detailed upper-level residential plan anchored around a central lift & stair core, offering dual drawing & family living lounges, generous 17\'-6" dining room, and five cantilevered planted verandas.',
        highlights: [
          'Spacious 15\'-9" drawing room flowing toward central family living',
          'Three well-proportioned bedrooms with direct balcony access',
          'Stamped official Edifice Consultants architectural working drawing',
        ],
        imageSrc: '/assets/aistudio/render_f22b5d52.png',
        pdfHref: '/assets/aistudio/11_99189630.pdf',
      },
      {
        id: 'edifice01-rajuk-sheet',
        code: 'RAJUK-E1',
        tabLabel: 'RAJUK Approved Sheet',
        title: 'RAJUK Approved Architectural Elevations, FAR & Typical Plans',
        level: 'Statutory Building Permit',
        unitArea: 'Multi-Unit & GF Parking',
        dimensions: 'South/North/East/West Elevations · Mouza Map · 1st–8th Floor Plan',
        scale: 'Scale 1:100 / 1:400',
        description:
          'Complete statutory drawing package signed and approved by RAJUK authorities including all four architectural elevations, Ground Floor parking, 1st–8th Typical Floor Plans, Section A-A, and official FAR compliance table.',
        highlights: [
          'Official RAJUK approval stamps, Mouza map & FAR calculations',
          'Four full elevations, Section A-A & GF / Roof / Typical floor plates',
        ],
        imageSrc: '/assets/plans/edifice01_rajuk_plan.png',
        pdfHref: '/assets/aistudio/rajuk_approved_drawing-min_compressed_774461c9.pdf',
      },
      {
        id: 'edifice01-brochure-sheet',
        code: 'DWG-E1-BR',
        tabLabel: '1,000 sft Brochure Sheet',
        title: 'Edifice-01 · 1,000 sq. ft. Apartment Marketing Specification',
        level: '2 & 3-Bed Typical Units',
        unitArea: '1,000 sq. ft.',
        dimensions: '3 Verandas · Drawing & Dining · Rooftop Pool & Gym',
        scale: 'Project Sheet',
        description:
          'Official marketing sheet detailing the 1,000 sq. ft. compact family layout, rooftop swimming pool, gymnasium, prayer room, community hall, and 24-hour generator & security infrastructure.',
        highlights: [
          'Rooftop swimming pool, barbecue deck & landscaped green roof',
          'Located near Dhanmondi off Sheyael Road, Modhucity',
        ],
        imageSrc: '/assets/aistudio/EDIFICE_ADD_new-01_158915f9.jpg',
      },
      {
        id: 'edifice01-sitemap',
        code: 'SITE-E1',
        tabLabel: 'Site Location Map',
        title: 'Satellite Plot Orientation — Sheyael Road, Modhucity',
        level: 'Plot Context',
        unitArea: 'Modhucity Land Parcel',
        dimensions: '20m Grid · Direct Access from Sheyael Road',
        scale: 'Satellite Overlay',
        description:
          'Aerial satellite parcel plan pinpointing the Edifice-01 site along the internal road network connected directly to Sheyael Road in Modhucity, Dhaka.',
        highlights: [
          'Clear road connectivity linking directly to Sheyael Road corridor',
          'Verified parcel demarcation in Modhucity residential grid',
        ],
        imageSrc: '/assets/aistudio/SITE_MAP_b5b41445.JPG',
      },
    ],
    gallery: [
      {
        src: '/assets/aistudio/1_18_-_Photo_d71f768f.jpg',
        caption: 'Aerial Axonometric — Terracotta Brick Facade & Rooftop Swimming Pool',
        kind: 'Exterior',
      },
      {
        src: '/assets/aistudio/v4_c757e14d.jpg',
        caption: 'Street-Level Perspective — Edifice-01 Warm Brick Podium Entry',
        kind: 'Exterior',
      },
      {
        src: '/assets/aistudio/2_bec8583e.jpg',
        caption: 'Upward Corner Perspective — Cantilevered Balconies & Sky Terraces',
        kind: 'Exterior',
      },
      {
        src: '/assets/aistudio/EDIFICE_ADD_new-01_158915f9.jpg',
        caption: 'Official Project Marketing Sheet — Modhucity Residences',
        kind: 'Site & Context',
      },
      {
        src: '/assets/aistudio/SITE_MAP_b5b41445.JPG',
        caption: 'Site Location Map — Sheyael Road Plot Coordinates, Modhucity',
        kind: 'Site & Context',
      },
      {
        src: '/assets/aistudio/render_f22b5d52.png',
        caption: '5th–8th Floor Single-Unit Furniture Layout Plan (50\'-0" × 72\'-0" Plot)',
        kind: 'Floor Plan',
      },
    ],
    documents: [
      {
        label: 'RAJUK Approved Building Drawing',
        type: 'RAJUK Approval',
        fileSize: '174 KB PDF',
        href: '/assets/aistudio/rajuk_approved_drawing-min_compressed_774461c9.pdf',
      },
      {
        label: '5th–8th Floor Single-Unit CAD Plan (Stamped)',
        type: 'Floor Plan',
        fileSize: '509 KB PDF',
        href: '/assets/aistudio/11_99189630.pdf',
      },
    ],
  },
  {
    id: 'lakefront-terrace-residence',
    code: 'EC-RES-05',
    title: 'Lakefront Terrace Residence',
    subtitle: 'Waterfront Concrete Tower & Feature Waterfall Entry',
    category: 'Signature Residential',
    location: 'Lakeside Promenade, Dhaka',
    year: '2026',
    scale: 'Full-Floor 3 & 4-Bed Single-Unit Residences',
    stories: 'G + 8 Stories + Steel Pergola Roof',
    status: 'Bespoke Waterfront Design',
    structuralSystem: 'Board-Formed Architectural Concrete & Structural Steel Roof Grid',
    summary:
      'Set along a tranquil landscaped lakefront and mosque promenade, this 9-story residence pairs alternating double-height tree balconies with a dramatic black-marble waterfall arrival feature at street level.',
    designThesis:
      'Vertical garden pockets alternating across the west-facing balconies cool incoming lake breezes before air enters the expansive 28\'-8" × 15\'-1" central dining hall and dual living lounges.',
    coverImage: '/assets/aistudio/1_41c4a5af.png',
    heroBackdropImage: '/assets/aistudio/4_fb1cd8eb.png',
    highlights: [
      'Black Portoro marble cascade waterfall anchored beside the glass residential foyer',
      'Steel pergola sky-canopy and shaded roof terrace overlooking the lakefront promenade',
      'Two single-unit floor layouts available: 3-Bedroom Plan with Study Corners and 4-Bedroom Typical Plan',
      'Dedicated Pantry, Dry Kitchen, Wet Kitchen, and Service Quarter with independent entry',
    ],
    performanceMetrics: [
      { label: 'Plan Configuration', value: 'Full-Floor Single Unit' },
      { label: 'Dining Spine', value: '28\'-8" × 15\'-1"' },
      { label: 'Signature Entry', value: 'Marble Waterfall Wall' },
      { label: 'Roof Frame', value: 'Structural Steel Pergola' },
    ],
    floorPlans: [
      {
        id: 'lakefront-4bed-plan',
        code: 'DWG-LT-04',
        tabLabel: '4-Bed Typical Plan',
        title: '4-Bedroom Full-Floor Single-Unit Residence',
        level: 'Typical Floor Plate',
        unitArea: 'Full-Floor Residence',
        dimensions: '4 En-Suite Bedrooms · 28\'-8" Dining Hall · Dry & Wet Kitchen',
        scale: 'Scale 1:100 Rendered',
        description:
          'Expansive lakeside full-floor apartment organized along a grand 28\'-8" central dining spine connecting formal and family living zones, flanked by four corner en-suite bedrooms and discrete back-of-house service wing.',
        highlights: [
          '28\'-8" × 15\'-1" central dining gallery linking formal & family living',
          'Four corner en-suite bedrooms with alternating lakeside tree balconies',
          'Dedicated dry pantry, wet kitchen, and independent service quarter',
        ],
        imageSrc: '/assets/aistudio/PLAN_2626f5f0.jpg',
        pdfHref: '/assets/aistudio/PLAN_d9b3a10f.pdf',
      },
      {
        id: 'lakefront-3bed-plan',
        code: 'DWG-LT-03',
        tabLabel: '3-Bed + Study CAD',
        title: '3-Bedroom Luxury Single-Unit Plan with Study Corners',
        level: 'Alternative Typical Plate',
        unitArea: 'Full-Floor Option',
        dimensions: '22\'-1" Foyer · 18\'-6" Living · 21\'-1" Family Living · Dual Study Corners',
        scale: 'CAD Working Sheet',
        description:
          'Three-bedroom alternative CAD layout trading the fourth suite for oversized dual-aspect sleeping quarters (22\'-9" × 11\'-9" master), dual bespoke window study corners, and expansive formal foyer arrival.',
        highlights: [
          'Grand 22\'-1" × 5\'-7" formal foyer welcoming guests toward 18\'-6" Living',
          'Twin rear bedrooms featuring dedicated 6\'-3" × 3\'-9" glazed study corners',
          'Full Pantry / Dry Kitchen / Wet Kitchen + independent S.Room',
        ],
        imageSrc: '/assets/plans/lakefront_3bed_plan.png',
        pdfHref: '/assets/aistudio/3_bed_plan_94d03ca8.pdf',
      },
    ],
    gallery: [
      {
        src: '/assets/aistudio/1_41c4a5af.png',
        caption: 'Front Perspective — Alternating Veranda Trees & Marble Waterfall Entrance',
        kind: 'Exterior',
      },
      {
        src: '/assets/aistudio/2_6f291e68.png',
        caption: 'Corner Elevation — Deep Recessed Windows & Steel Roof Pergola',
        kind: 'Exterior',
      },
      {
        src: '/assets/aistudio/5_ccbc10c7.png',
        caption: 'Ground Arrival Study — Timber Soffit Driveway & Cascade Wall',
        kind: 'Exterior',
      },
      {
        src: '/assets/aistudio/6_840d4a7d.png',
        caption: 'Street Entrance Perspective — Vehicular Entry & Landscaped Planters',
        kind: 'Exterior',
      },
      {
        src: '/assets/aistudio/4_fb1cd8eb.png',
        caption: 'Lakeside Promenade Master View — Mosque & Cycle Path Setting',
        kind: 'Site & Context',
      },
      {
        src: '/assets/aistudio/PLAN_2626f5f0.jpg',
        caption: 'Typical Floor Plan — 4-Bedroom Full-Floor Single-Unit Residence',
        kind: 'Floor Plan',
      },
    ],
    documents: [
      {
        label: '3-Bedroom Luxury Single-Unit CAD Plan',
        type: 'Floor Plan',
        fileSize: '233 KB PDF',
        href: '/assets/aistudio/3_bed_plan_94d03ca8.pdf',
      },
      {
        label: '4-Bedroom Rendered Master Floor Plan',
        type: 'Floor Plan',
        fileSize: '32.8 MB PDF',
        href: '/assets/aistudio/PLAN_d9b3a10f.pdf',
      },
    ],
  },
  {
    id: 'lakeside-wave-residence',
    code: 'EC-RES-06',
    title: 'Lakeside Wave Residence',
    subtitle: 'Curved Precast Concrete Balconies & Duplex Penthouse',
    category: 'Signature Residential',
    location: 'Lakefront Avenue, Dhaka (11.5m Road)',
    year: '2026',
    scale: 'Full-Floor Luxury Residences + Mezzanine Hall',
    stories: 'G + M + 7 Stories (Duplex Crown)',
    status: 'Signature Waterfront Tower',
    structuralSystem: 'Exposed Architectural Concrete with Sculpted Parapet Ribs',
    summary:
      'Defined by sweeping opposing concrete balcony waves housing mature veranda trees, this boutique lakeside tower culminates in a double-height duplex penthouse beneath a monolithic portal roof frame.',
    designThesis:
      'Architectural documentation extends from the 9-car Ground Floor driveway & Waiting Lounge up through a dedicated 41\'-0" × 14\'-0" Mezzanine Community Hall to expansive 4-bedroom full-floor homes.',
    coverImage: '/assets/aistudio/1_40e800f8.png',
    heroBackdropImage: '/assets/aistudio/3_a1e49686.png',
    highlights: [
      'Ground Floor engineered along an 11.5m wide road with 9 parking bays, Guard Room & E.M.R.',
      'Dedicated Mezzanine Floor hosting a 41\'-0" × 14\'-0" Community Space and curved Veranda',
      'Typical Floor Plan features 18\'-8" × 13\'-6" Dining Room, Foyer, Family Living & 4 En-Suite Bedrooms',
      'Double-height glass duplex living volume crowned by a minimalist concrete frame',
    ],
    performanceMetrics: [
      { label: 'Road Frontage', value: '11.5m Wide Avenue' },
      { label: 'Community Hall', value: '41\'-0" × 14\'-0" Mezz.' },
      { label: 'Parking Slots', value: '9 Covered Bays' },
      { label: 'Bedrooms / Floor', value: '4 En-Suite + Family' },
    ],
    floorPlans: [
      {
        id: 'wave-typical-plan',
        code: 'DWG-LW-03',
        tabLabel: 'Typical 4-Bed Plan',
        title: 'Typical Floor Plan — 4-Bedroom Luxury Single-Unit Layout',
        level: 'Floors 1 to 7',
        unitArea: 'Full-Floor Residence',
        dimensions: '15\'-10" Drawing · 18\'-8" Dining · Foyer · 4 En-Suite Bedrooms · 5 Verandas',
        scale: 'Scale 1:100 Rendered',
        description:
          'Bespoke full-floor apartment separating public entertaining rooms (foyer, 15\'-10" × 13\'-0" drawing, 18\'-8" × 13\'-6" dining) from private bedroom quarters and pantry-linked wet kitchen.',
        highlights: [
          'Formal arrival foyer buffering the 15\'-10" Drawing & 18\'-8" Dining halls',
          'Private Family Living lounge centered between four en-suite bedrooms',
          'Five sculpted veranda terraces matching the undulating facade profile',
        ],
        imageSrc: '/assets/aistudio/1_3380e6a4.png',
        pdfHref: '/assets/aistudio/plan_render_23e74daf.pdf',
      },
      {
        id: 'wave-mezzanine-plan',
        code: 'DWG-LW-02',
        tabLabel: 'Mezzanine Community',
        title: 'Mezzanine Floor Plan — 41\'-0" × 14\'-0" Community Hall',
        level: 'Mezzanine Level',
        unitArea: 'Amenity Level',
        dimensions: '41\'-0" × 14\'-0" Column-Free Hall · 25\'-10" Lobby · Curved Veranda',
        scale: 'Mezzanine Plate',
        description:
          'Dedicated resident social and celebration level featuring an unobstructed 41-ft wide community hall, curved outdoor veranda overlooking the avenue, dual toilets, and private elevator access.',
        highlights: [
          'Uninterrupted 41\'-0" × 14\'-0" Community Space for resident gatherings',
          '25\'-10" × 4\'-4" gallery lobby opening onto 8\'-6" × 5\'-0" curved veranda',
        ],
        imageSrc: '/assets/aistudio/mez_3d11f705.png',
        pdfHref: '/assets/aistudio/plan_render_23e74daf.pdf',
      },
      {
        id: 'wave-gf-plan',
        code: 'DWG-LW-01',
        tabLabel: 'Ground Floor & Parking',
        title: 'Ground Floor Plan — 11.5m Avenue Access & 9 Parking Bays',
        level: 'Ground Level',
        unitArea: 'Street Podium',
        dimensions: '9 Parking Bays · 13\'-0" × 9\'-0" Waiting Lounge · Caretaker Quarters',
        scale: '11.5m Front Road',
        description:
          'Smooth vehicular circulation off the 11.5m Lakefront Avenue serving 9 covered parking bays, air-conditioned arrival waiting lounge, guard room, E.M.R. utility room, and self-contained caretaker unit.',
        highlights: [
          'Direct vehicular access off an existing 11.5m wide avenue',
          '9 covered car bays + dedicated 13\'-0" × 9\'-0" resident Waiting Lounge',
          'Dedicated Guard Room, Electrical Meter Room (E.M.R.) & Driver facilities',
        ],
        imageSrc: '/assets/aistudio/GF_6b088ab9.png',
        pdfHref: '/assets/aistudio/plan_render_23e74daf.pdf',
      },
    ],
    gallery: [
      {
        src: '/assets/aistudio/1_40e800f8.png',
        caption: 'Front Elevation — Sculpted Opposing Concrete Balcony Parapets',
        kind: 'Exterior',
      },
      {
        src: '/assets/aistudio/2_ccdc27c2.png',
        caption: 'Street Perspective — Timber-Clad Podium Soffit & Perimeter Lighting',
        kind: 'Exterior',
      },
      {
        src: '/assets/aistudio/3_8b744041.png',
        caption: 'Side Elevation Study — Deep Sun-Shade Fins & Duplex Glass',
        kind: 'Exterior',
      },
      {
        src: '/assets/aistudio/4_9bc12018.png',
        caption: 'Entry Gate & Driveway Detail — Warm Architectural Uplighting',
        kind: 'Exterior',
      },
      {
        src: '/assets/aistudio/5_39710ac4.png',
        caption: 'Podium Terrace Detail — Alternating Corner Planters',
        kind: 'Exterior',
      },
      {
        src: '/assets/aistudio/3_a1e49686.png',
        caption: 'Aerial Lakeside Corridor Context — Waterfront Promenade',
        kind: 'Site & Context',
      },
      {
        src: '/assets/aistudio/GF_6b088ab9.png',
        caption: 'Ground Floor Plan — 11.5m Road Access, 9 Parking Bays & Waiting Lounge',
        kind: 'Floor Plan',
      },
      {
        src: '/assets/aistudio/mez_3d11f705.png',
        caption: 'Mezzanine Floor Plan — 41\'-0" × 14\'-0" Community Space & Veranda',
        kind: 'Floor Plan',
      },
      {
        src: '/assets/aistudio/1_3380e6a4.png',
        caption: 'Typical Floor Plan — 4-Bedroom Luxury Single-Unit Layout',
        kind: 'Floor Plan',
      },
    ],
    documents: [
      {
        label: 'Complete Rendered Floor Plan Package',
        type: 'Floor Plan',
        fileSize: '41.5 MB PDF',
        href: '/assets/aistudio/plan_render_23e74daf.pdf',
      },
    ],
  },
  {
    id: 'shagufta-multi-unit-housing',
    code: 'EC-MUH-07',
    title: 'Shagufta Timber-Core & 4-Unit Housing',
    subtitle: 'High-Efficiency Corner Plot Multi-Unit Residential Complex',
    category: 'Multi-Unit Housing',
    location: 'Shagufta Housing, Dhaka (12.19m & 7.62m Roads)',
    year: '2025',
    scale: '5,252 sq. ft. / Floor · 4-Unit & 3-Unit Options',
    stories: 'B + G + M + 9 Stories',
    status: 'Multi-Unit Complex',
    structuralSystem: 'Dual-Core RCC Frame with Timber Louver Atrium Screen',
    summary:
      'A multi-unit residential complex pairing dark textured slate cladding and terracotta reveals around a continuous 9-story timber-louver stairwell lantern, supported by engineered 3-unit and 4-unit floor plates.',
    designThesis:
      'Maximizes corner-plot ventilation with Open-to-Sky light shafts between Units A–D (`1,410` to `1,472 sq. ft.`), while split-level mezzanine parking ensures effortless dual-road vehicular ingress.',
    coverImage: '/assets/aistudio/3d_42a7ef70.png',
    heroBackdropImage: '/assets/aistudio/3d_42a7ef70.png',
    highlights: [
      '4-Unit floor plate totaling 5,252 sq. ft.: Units A (1,440 sft), B (1,472 sft), C (1,410 sft), D (1,413 sft)',
      'Alternative 3-Unit Typical Floor Plan (Units A, B & C) with central dual lifts',
      'Open-to-Sky internal air wells guaranteeing natural ventilation to kitchens and toilets',
      'Dual road frontage (12.19m & 7.62m) with split-level Ground, Semi-Basement & Mezzanine parking',
    ],
    performanceMetrics: [
      { label: 'Floor Plate', value: '5,252 sq. ft. Gross' },
      { label: 'Unit Range', value: '1,410 – 1,472 sft' },
      { label: 'Road Access', value: '12.19m & 7.62m Corner' },
      { label: 'Light Shafts', value: '3 Open-to-Sky Wells' },
    ],
    floorPlans: [
      {
        id: 'shagufta-4unit-plan',
        code: 'DWG-SH-04',
        tabLabel: '4-Unit (5,252 sft)',
        title: '1st to 9th Floor — 4-Unit Multi-Residential Plan',
        level: '1st – 9th Floors',
        unitArea: '5,252 sq. ft. Gross (Units A–D)',
        dimensions: 'Apt A: 1,440 · Apt B: 1,472 · Apt C: 1,410 · Apt D: 1,413 sft',
        scale: 'Scale 1:100',
        description:
          'Corner-plot 4-apartment floor plate served by dual elevators and a spacious 46\'-10" × 5\'-0" central corridor, with three strategically placed Open-to-Sky shafts bringing daylight and stack ventilation to every interior room.',
        highlights: [
          'Apartment A (1,440 sft) & Apartment B (1,472 sft) front residences',
          'Apartment C (1,410 sft) & Apartment D (1,413 sft) along 7.62m road',
          '3 Open-to-Sky light & air wells + dual high-speed passenger lifts',
        ],
        imageSrc: '/assets/plans/sagufta_4unit_plan.png',
        pdfHref: '/assets/aistudio/SAGUPTA_HOUSING_4_UNIT_adb9af63.pdf',
      },
      {
        id: 'shagufta-3unit-plan',
        code: 'DWG-SH-03',
        tabLabel: '3-Unit Alternative',
        title: '3-Unit Typical Multi-Residential Floor Plan',
        level: 'Alternative Typical Plate',
        unitArea: 'Units A, B & C Configuration',
        dimensions: 'Symmetric Dual-Lift Core · Large Verandas',
        scale: 'Scale 1:100',
        description:
          'Alternative three-unit residential configuration dividing the building volume into larger 2- and 3-bedroom apartments around a symmetric dual-elevator lobby with expanded front & rear verandas.',
        highlights: [
          'Generous 3-apartment plate minimizing shared corridor length',
          'Corner balconies along every exterior elevation',
        ],
        imageSrc: '/assets/aistudio/FOR_BACK_PLANs_f55f969d.jpg',
        pdfHref: '/assets/aistudio/SAGUPTA_HOUSING_4_UNIT_adb9af63.pdf',
      },
      {
        id: 'shagufta-parking-plan',
        code: 'DWG-SH-PK',
        tabLabel: 'Split-Level Parking',
        title: 'Ground, Semi-Basement & Mezzanine Parking Plan',
        level: 'Parking Podium (-5\' to +8\'-6")',
        unitArea: 'Dual-Road Vehicular Core',
        dimensions: 'Ground (+3\' / +4\' / +8\'-6") & Mezzanine (-5\' / +6\'-0") Levels',
        scale: 'Scale 1:100',
        description:
          'Multi-level staggered parking engineered specifically for the corner plot, leveraging the 12.19m and 7.62m roadways with dual ramps, central reception hall, and dual lifts extending down to both parking decks.',
        highlights: [
          'Split-level datum slabs maximizing car capacity without deep excavation',
          'Dual corner road entry separating ingress and egress traffic',
        ],
        imageSrc: '/assets/plans/sagufta_parking_plan.png',
        pdfHref: '/assets/aistudio/SAGUPTA_HOUSING_parking_24fa3ea7.pdf',
      },
    ],
    gallery: [
      {
        src: '/assets/aistudio/3d_42a7ef70.png',
        caption: 'Front Facade Render — Vertical Timber-Louver Stair Core & Slate Stone',
        kind: 'Exterior',
      },
      {
        src: '/assets/plans/sagufta_4unit_plan.png',
        caption: '4-Unit 1st–9th Floor Plan (5,252 sq. ft. Total Area)',
        kind: 'Floor Plan',
      },
      {
        src: '/assets/aistudio/FOR_BACK_PLANs_f55f969d.jpg',
        caption: '3-Unit Typical Floor Plan — Units A, B & C Dual-Lift Core',
        kind: 'Floor Plan',
      },
    ],
    documents: [
      {
        label: 'Sagufta Housing 4-Unit 1st–9th Floor Plan (5,252 sft)',
        type: 'Floor Plan',
        fileSize: '914 KB PDF',
        href: '/assets/aistudio/SAGUPTA_HOUSING_4_UNIT_adb9af63.pdf',
      },
      {
        label: 'Sagufta Ground, Semi-Basement & Mezzanine Parking Plan',
        type: 'Parking & Basement',
        fileSize: '289 KB PDF',
        href: '/assets/aistudio/SAGUPTA_HOUSING_parking_24fa3ea7.pdf',
      },
    ],
  },
];

export const TECHNICAL_ARCHIVE_DOCUMENTS: TechnicalArchiveDocument[] = [
  {
    id: 'doc-primus-brochure',
    code: 'DOC-01',
    title: 'Edifice Primus Official Development Brochure (8 Pages)',
    projectId: 'edifice-primus',
    project: 'Edifice Primus · Shagufta',
    category: 'Project Brochure',
    format: 'PDF',
    fileSize: '19.7 MB',
    href: '/assets/aistudio/Edifice_Primus_c17033fa.pdf',
  },
  {
    id: 'doc-buruz-brochure',
    code: 'DOC-02',
    title: 'Buruz Bay Hotel & Resort Master Brochure',
    projectId: 'buruz-bay-resort',
    project: 'Buruz Bay · Kuakata',
    category: 'Project Brochure',
    format: 'PDF',
    fileSize: '336 MB',
    href: '/assets/aistudio/BROCHURE_BURUZ_BAY_21_9_26_3_copy_9d416a9a.pdf',
  },
  {
    id: 'doc-rajuk',
    code: 'DOC-03',
    title: 'RAJUK Approved Architectural & FAR Drawing Sheet',
    projectId: 'edifice-01-modhucity',
    project: 'Edifice-01 · Dhaka',
    category: 'Statutory & RAJUK',
    format: 'PDF',
    fileSize: '174 KB',
    href: '/assets/aistudio/rajuk_approved_drawing-min_compressed_774461c9.pdf',
  },
  {
    id: 'doc-sagufta-4unit',
    code: 'DOC-04',
    title: 'Sagufta Housing 4-Unit 1st–9th Floor Plan (5,252 sq. ft.)',
    projectId: 'shagufta-multi-unit-housing',
    project: 'Shagufta Housing',
    category: 'Architectural Plan',
    format: 'CAD PDF',
    fileSize: '914 KB',
    href: '/assets/aistudio/SAGUPTA_HOUSING_4_UNIT_adb9af63.pdf',
  },
  {
    id: 'doc-sagufta-parking',
    code: 'DOC-05',
    title: 'Sagufta Housing Ground, Semi-Basement & Mezzanine Parking',
    projectId: 'shagufta-multi-unit-housing',
    project: 'Shagufta Housing',
    category: 'Architectural Plan',
    format: 'CAD PDF',
    fileSize: '289 KB',
    href: '/assets/aistudio/SAGUPTA_HOUSING_parking_24fa3ea7.pdf',
  },
  {
    id: 'doc-primus-single',
    code: 'DOC-06',
    title: 'Type B Single-Unit Typical Floor Plan (2,300 + 500 = 2,800 sft)',
    projectId: 'edifice-primus',
    project: 'Edifice Primus · Shagufta',
    category: 'Architectural Plan',
    format: 'PDF',
    fileSize: '19.7 MB',
    href: '/assets/aistudio/single_unit_68af0e2a.pdf',
  },
  {
    id: 'doc-primus-gf',
    code: 'DOC-07',
    title: 'Ground Floor Plan — 19 Car Parking, Substation & Waiting Zone',
    projectId: 'edifice-primus',
    project: 'Edifice Primus · Shagufta',
    category: 'Architectural Plan',
    format: 'PDF',
    fileSize: '985 KB',
    href: '/assets/aistudio/GF_d70b8f26.pdf',
  },
  {
    id: 'doc-primus-semi',
    code: 'DOC-08',
    title: 'Semi-Basement Plan — 18 Car Parking & Community Facility',
    projectId: 'edifice-primus',
    project: 'Edifice Primus · Shagufta',
    category: 'Architectural Plan',
    format: 'PDF',
    fileSize: '986 KB',
    href: '/assets/aistudio/SEMI_0a4b2076.pdf',
  },
  {
    id: 'doc-3bed-cad',
    code: 'DOC-09',
    title: '3-Bedroom Luxury Single-Unit Plan with Study Corners',
    projectId: 'lakefront-terrace-residence',
    project: 'Lakefront Terrace Residence',
    category: 'Architectural Plan',
    format: 'CAD PDF',
    fileSize: '233 KB',
    href: '/assets/aistudio/3_bed_plan_94d03ca8.pdf',
  },
  {
    id: 'doc-plan-4bed',
    code: 'DOC-10',
    title: '4-Bedroom Rendered Master Floor Plan (High-Res)',
    projectId: 'lakefront-terrace-residence',
    project: 'Lakefront Terrace Residence',
    category: 'Architectural Plan',
    format: 'PDF',
    fileSize: '32.8 MB',
    href: '/assets/aistudio/PLAN_d9b3a10f.pdf',
  },
  {
    id: 'doc-wave-render-pdf',
    code: 'DOC-11',
    title: 'Lakeside Wave Full Rendered Plan Package (GF, Mezz & Typical)',
    projectId: 'lakeside-wave-residence',
    project: 'Lakeside Wave Residence',
    category: 'Architectural Plan',
    format: 'PDF',
    fileSize: '41.5 MB',
    href: '/assets/aistudio/plan_render_23e74daf.pdf',
  },
  {
    id: 'doc-edifice01-11',
    code: 'DOC-12',
    title: '5th–8th Floor Furniture Layout Plan (Stamped Drawing 11)',
    projectId: 'edifice-01-modhucity',
    project: 'Edifice-01 · Modhucity',
    category: 'Statutory & RAJUK',
    format: 'PDF',
    fileSize: '509 KB',
    href: '/assets/aistudio/11_99189630.pdf',
  },
];

export const APPLIANCE_LINES: ApplianceLine[] = [
  {
    id: 'airflow-hoods',
    code: 'EHA-01',
    name: 'Architectural Perimeter Extraction Hoods',
    category: 'Kitchen Ventilation',
    summary:
      'Low-decibel, baffle-filtered range hoods proportioned to sit flush within modern architectural cabinetry without protruding visual bulk.',
    engineeringFocus:
      'Engineered for high-heat South Asian culinary workflows with heavy oil-mist separation and static-pressure ducting for multi-story residential towers.',
    specs: [
      { label: 'Airflow Capacity', value: '1,450 m³/hr' },
      { label: 'Acoustic Rating', value: '48 dBA Low Mode' },
      { label: 'Chassis Material', value: '304 Brushed Steel' },
      { label: 'Installation', value: 'Flush / Island Mount' },
    ],
    architecturalIntegration:
      'Specified directly into Edifice Consultants residential kitchen drawings with zero exposed ducting.',
  },
  {
    id: 'climate-control',
    code: 'EHA-02',
    name: 'Precision Thermal & Dehumidification Units',
    category: 'Climate Hardware',
    summary:
      'High-efficiency climate conditioning and monsoon humidity control systems calibrated for Dhaka’s 85%+ relative humidity seasons.',
    engineeringFocus:
      'Protects fine architectural woodwork, artwork, and interior finishes while maintaining crisp indoor air quality with washable multi-stage filtration.',
    specs: [
      { label: 'Moisture Extraction', value: '50 L / 24 Hours' },
      { label: 'Compressor Type', value: 'Twin-Rotary Inverter' },
      { label: 'Power Efficiency', value: 'COP 4.15 Rated' },
      { label: 'Enclosure', value: 'Powder-Coated Matte' },
    ],
    architecturalIntegration:
      'Concealed slot-diffuser grille compatibility for minimalist plaster and concrete ceilings.',
  },
  {
    id: 'culinary-hobs',
    code: 'EHA-03',
    name: 'Modular Glass & Cast-Iron Culinary Hobs',
    category: 'Built-In Cooking',
    summary:
      'Heavy-gauge tempered ceramic glass and precision brass-burner modular hobs engineered for thermal durability and effortless surface cleaning.',
    engineeringFocus:
      'Flame-failure thermocouple safety valves paired with ergonomic knurled metallic control dials designed by Architect Faruk Ahmed.',
    specs: [
      { label: 'Burner Output', value: '4.5 kW Triple-Ring' },
      { label: 'Surface Plate', value: '8mm Schott Ceramic' },
      { label: 'Pan Supports', value: 'Matte Cast Iron' },
      { label: 'Cutout Standard', value: '730 × 410 mm Flush' },
    ],
    architecturalIntegration:
      'Bevel-free flush countertop mounting aligns cleanly with granite, quartz, and terrazzo slabs.',
  },
  {
    id: 'water-filtration',
    code: 'EHA-04',
    name: 'Under-Counter Pure Hydration & Thermal Systems',
    category: 'Utility & Water',
    summary:
      'Compact under-sink multi-stage mineral filtration and instant-temperature dispensing units eliminating countertop appliance clutter.',
    engineeringFocus:
      'Designed around urban municipal water profiles with high-recovery RO + UV sterilization and solid stainless architectural faucets.',
    specs: [
      { label: 'Purification', value: '6-Stage RO + UV-C' },
      { label: 'Flow Rate', value: '2.2 L / Minute' },
      { label: 'Footprint', value: '140 mm Slim Chassis' },
      { label: 'Faucet Finish', value: 'Anodized Charcoal' },
    ],
    architecturalIntegration:
      'Fits inside standard 600mm sink base modules while keeping storage drawers unobstructed.',
  },
];
