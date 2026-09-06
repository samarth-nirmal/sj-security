import { ServiceItem, TrainingArea, TrainingStep, CoreValue, StatutoryRecord, SectorItem } from '../types';

export const COMPANY_INFO = {
  name: "SJ SECURITY & FACILITIES SERVICES",
  shortName: "SJ SECURITY",
  tagline: "Securing Today For A Safer Tomorrow.",
  foundedVision: "Dedicated to disciplined, military-standard private security & facilities management across Maharashtra.",
  experience: {
    leadershipYears: "30+",
    guardsManaged: "60+",
    region: "Statewide Maharashtra",
    compliance: "PSARA Compliant",
  },
  contact: {
    phone: "+91 98220 12345",
    altPhone: "+91 20 2588 4500",
    email: "operations@sjsecurity.in",
    supportEmail: "info@sjsecurity.in",
    headOffice: "Corporate Office, Pune, Maharashtra - 411038",
    hours: "24/7 Central Operations & Quick Response",
    whatsapp: "919822012345",
  },
  founder: {
    name: "Mr. Sudhir Sitaram Jawale",
    title: "Founder & Managing Director",
    militaryTitle: "Retd. Army",
    militaryExperience: "30+ years of distinguished service in the Indian Army",
    corporateExperience: "6+ years of managing teams of 60+ security guards for complex security activities in public sector unit (PSU) organizations.",
    quote: "True security is not merely presence; it is the discipline of continuous vigilance, rapid response, and unyielding integrity instilled through military-grade training.",
  }
};

export const STATUTORY_REGISTRATIONS: StatutoryRecord[] = [
  {
    title: "Maharashtra State Government PSARA License",
    registrationNumber: "PSA/L/84/MH/2023/MAR/3/2888",
    authority: "Home Department, Govt. of Maharashtra (PSARA Act)",
    verified: true,
  },
  {
    title: "Udyam Registration No.",
    registrationNumber: "UDYAM-MH-26-0443443",
    authority: "Ministry of MSME, Govt. of India",
    verified: true,
  },
  {
    title: "Shop Act License No.",
    registrationNumber: "101022412203",
    authority: "Maharashtra Shops and Establishments Act",
    verified: true,
  },
  {
    title: "Permanent Account Number (PAN)",
    registrationNumber: "ABTFM0231F",
    authority: "Income Tax Department, Govt. of India",
    verified: true,
  },
  {
    title: "Provident Fund (PF) Registration",
    registrationNumber: "PUPUN2975217000",
    authority: "Employees' Provident Fund Organisation (EPFO)",
    verified: true,
  },
  {
    title: "Goods & Services Tax (GST) No.",
    registrationNumber: "27BHUPS7886J1ZZ",
    authority: "Central Board of Indirect Taxes and Customs (CBIC)",
    verified: true,
  },
];

export const COMPLIANCE_ITEMS = [
  { name: "Provident Fund (PF)", desc: "100% statutory PF compliance deposited monthly via EPFO." },
  { name: "Employees' State Insurance (ESI)", desc: "Full medical coverage and accidental benefits under ESIC regulations." },
  { name: "Gratuity Compliance", desc: "Payment of Gratuity Act provisions adhered to rigorously." },
  { name: "Statutory Bonus", desc: "Annual festival and productivity bonuses disbursed as per the Bonus Act." },
  { name: "Minimum Wages Compliance", desc: "Strict adherence to Maharashtra State notified Minimum Wages rates." },
  { name: "Applicable National & Festival Holidays", desc: "Standard paid holiday and overtime compensations strictly logged." },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "security-guard",
    number: "01",
    title: "Security Guard Services",
    shortDesc: "Professionally trained security personnel for residential, commercial, industrial and institutional environments.",
    fullDesc: "Our frontline security guards undergo rigorous background verification and intensive military-guided drills. Equipped to maintain strict gate vigilance, perimeter security, visitor handling, and incident reporting across diverse facilities.",
    category: "guarding",
    features: [
      "Rigorous pre-deployment physical vetting",
      "Disciplined uniform and ceremonial protocol",
      "Shift handover logs and gate register protocols",
      "Continuous on-site operational oversight"
    ],
    iconName: "Shield"
  },
  {
    id: "residential-security",
    number: "02",
    title: "Residential Security",
    shortDesc: "Security solutions designed to protect residential communities and provide peace of mind to residents.",
    fullDesc: "Tailored protection for housing societies, gated townships, high-rise condominiums, and villas. Focused on visitor screening, child safety, delivery parcel management, and quiet night vigilance.",
    category: "guarding",
    features: [
      "Visitor and vendor vehicle scanning",
      "Society app/intercom gate sync protocols",
      "Nocturnal perimeter foot-patrols",
      "Emergency resident SOS assistance"
    ],
    iconName: "Home"
  },
  {
    id: "corporate-industrial",
    number: "03",
    title: "Corporate & Industrial Security",
    shortDesc: "Security personnel and operational support for corporate offices, factories and industrial facilities.",
    fullDesc: "High-density security management specifically suited for industrial manufacturing zones, logistics hubs, tech parks, and corporate headquarters requiring round-the-clock protection and material movement control.",
    category: "guarding",
    features: [
      "Inward/Outward material gate pass tracking",
      "Worker punch-in & biometric queue monitoring",
      "Dock & loading bay containment",
      "Confidential IP and server room protection"
    ],
    iconName: "Building2"
  },
  {
    id: "access-control",
    number: "04",
    title: "Access Control",
    shortDesc: "Physical security and access management to control movement of people and vehicles.",
    fullDesc: "Systematic movement control protocols combining physical presence with modern barrier gates, boom barriers, baggage scanners, and hand-held metal detectors (HHMD).",
    category: "specialized",
    features: [
      "Vehicle under-carriage mirror inspection",
      "Personnel frisking & metal detection",
      "Badge verification & visitor token issuance",
      "Tailgating and unauthorized access deterrence"
    ],
    iconName: "KeyRound"
  },
  {
    id: "reception-management",
    number: "05",
    title: "Reception Management",
    shortDesc: "Professional front-desk and reception support while maintaining security protocols.",
    fullDesc: "Courteous yet vigilant front-office executive guards who represent your corporate brand warmly while ensuring strict compliance with sign-in protocols and confidentiality requirements.",
    category: "facility",
    features: [
      "Executive front-desk grooming & communication",
      "Visitor badge issuance & NDA compliance",
      "Boardroom & VIP guest escorting",
      "Courier and sensitive document logging"
    ],
    iconName: "Users"
  },
  {
    id: "parking-traffic",
    number: "06",
    title: "Parking & Traffic Management",
    shortDesc: "Parking administration, vehicle checking, traffic control and movement management.",
    fullDesc: "Eliminates bottle-necks and unauthorized parking across basements, surface lots, and drop-off zones with clear signaling, vehicle tagging, and speed enforcement.",
    category: "facility",
    features: [
      "Peak-hour traffic streamlining & lane discipline",
      "Reserved and visitor parking segregation",
      "Vehicle security verification & parking pass check",
      "Basement pedestrian path safeguarding"
    ],
    iconName: "Car"
  },
  {
    id: "patrolling-surveillance",
    number: "07",
    title: "Patrolling & Surveillance",
    shortDesc: "Effective patrolling and monitoring to identify and respond to security risks.",
    fullDesc: "Unpredictable, structured patrol beats across property perimeters, rooftop access points, boundary walls, and secluded areas, backed by CCTV coordination.",
    category: "specialized",
    features: [
      "Synchronized day & night guard tour beats",
      "Perimeter fence & lighting audit rounds",
      "CCTV control room liaising & rapid alerts",
      "Immediate detection of suspicious loitering"
    ],
    iconName: "Eye"
  },
  {
    id: "emergency-response",
    number: "08",
    title: "Emergency Response",
    shortDesc: "Security personnel trained to respond to emergency situations and support incident management.",
    fullDesc: "Disciplined rapid response to medical emergencies, fire alarms, electrical short circuits, structural compromises, and civic disturbances, prioritizing human safety and asset protection.",
    category: "specialized",
    features: [
      "Rapid on-site muster point evacuation",
      "Immediate liaison with local police & fire brigade",
      "Crowd dispersal & perimeter containment",
      "Incident logging & chain-of-custody reporting"
    ],
    iconName: "AlertTriangle"
  },
  {
    id: "fire-safety",
    number: "09",
    title: "Fire Safety Support",
    shortDesc: "Personnel trained in firefighting procedures and fire-related emergency response.",
    fullDesc: "Proactive fire prevention including routine inspection of fire hydrants, smoke detectors, extinguisher pressure gauges, and executing orderly drills during emergencies.",
    category: "facility",
    features: [
      "Proficiency with ABC, CO2, and Foam extinguishers",
      "Riser valve and hose reel deployment capability",
      "Smoke vent clearing and assembly coordination",
      "Preventative hazard identification during rounds"
    ],
    iconName: "Flame"
  },
  {
    id: "first-aid",
    number: "10",
    title: "First Aid Support",
    shortDesc: "Basic first-aid awareness and emergency assistance as part of security personnel training.",
    fullDesc: "Crucial first responder support for workplace injuries, fainting spells, heat exhaustion, minor cuts, burns, or stabilizing individuals until professional paramedic aid arrives.",
    category: "facility",
    features: [
      "Basic life support & CPR awareness",
      "Bleeding control, bandaging & burn dressing",
      "Stretcher handling and medical triage",
      "Maintenance of on-site emergency first-aid kits"
    ],
    iconName: "HeartPulse"
  },
  {
    id: "theft-prevention",
    number: "11",
    title: "Theft Prevention & Control",
    shortDesc: "Proactive security practices designed to discourage theft and protect client assets.",
    fullDesc: "Comprehensive asset safeguarding protocols covering internal pilferage, inventory leakage, scrap yard supervision, and external breach attempts.",
    category: "specialized",
    features: [
      "Surprise audit of staff lockers & exits",
      "Scrap yard loading and truck gross-weight checks",
      "Toolbox & high-value equipment tagging",
      "Investigation assistance for missing inventory"
    ],
    iconName: "Lock"
  }
];

export const RESIDENTIAL_BENEFITS = [
  {
    title: "Peace of Mind",
    description: "Create a safer, calm living environment for families, children, and elderly residents around the clock.",
    icon: "HeartHandshake"
  },
  {
    title: "Crime Deterrence",
    description: "A visible, smartly uniformed and well-managed guard presence actively discourages trespassers and burglars.",
    icon: "ShieldAlert"
  },
  {
    title: "Protection of Valuables",
    description: "Rigorous oversight over residential common facilities, parking areas, clubhouses, and individual properties.",
    icon: "Gem"
  },
  {
    title: "Professional Access Control",
    description: "Systematic logging of domestic staff, delivery executives, cab drivers, and guest vehicles at entry gates.",
    icon: "ScanFace"
  }
];

export const TRAINING_AREAS: TrainingArea[] = [
  { id: "1", title: "Meaning & Fundamentals of Security", description: "Duties, ethics, chain-of-command, vigilance mindset, and legal boundaries of private guarding.", iconName: "BookOpen" },
  { id: "2", title: "Physical Security & Access Control", description: "Manning entry points, checking gates, perimeter inspections, and unauthorized entry prevention.", iconName: "Shield" },
  { id: "3", title: "Vigilance & Situational Awareness", description: "Spotting anomalies, recognizing suspicious movement, alertness drills during nocturnal hours.", iconName: "Eye" },
  { id: "4", title: "Reception Management", description: "Professional etiquette, greeting visitors, maintaining visitor registers, and phone coordination.", iconName: "UserCheck" },
  { id: "5", title: "Parking Management", description: "Basement and open parking layout control, vehicle slot allocation, and congestion avoidance.", iconName: "Car" },
  { id: "6", title: "Traffic Control", description: "Hand signals, directing commercial trucks and private vehicles at complex gates safely.", iconName: "Navigation" },
  { id: "7", title: "Vehicle Checking", description: "Under-carriage inspection mirror drills, boot opening, engine bay verification, and gate passes.", iconName: "Search" },
  { id: "8", title: "Emergency Situation Management", description: "Evacuation protocol, panic suppression, coordinating with emergency services, and muster calls.", iconName: "AlertOctagon" },
  { id: "9", title: "Theft Control & Loss Prevention", description: "Frisking protocols, inventory surveillance, seal verification, and anti-pilferage procedures.", iconName: "Lock" },
  { id: "10", title: "First Aid & Medical Triage", description: "Immediate resuscitation, stopping severe bleeding, bandaging, heat stroke care, and stretcher transport.", iconName: "Cross" },
  { id: "11", title: "Firefighting & Drill Protocols", description: "Operating fire extinguishers (ABC, CO2), hose reel deployment, and fire hydrant line drills.", iconName: "Flame" },
  { id: "12", title: "Effective Patrolling & Guard Tour", description: "Foot beats, clocking checkpoints, logging blind spots, and communication over two-way wireless.", iconName: "Footprints" }
];

export const TRAINING_PROCESS: TrainingStep[] = [
  {
    step: 1,
    title: "Recruitment",
    description: "Strict physical fitness tests, educational verification, background checks, and police clearance.",
    focus: "Eligibility & Integrity"
  },
  {
    step: 2,
    title: "Initial Training",
    description: "Foundational classroom and drill training instructed by Indian Army veteran trainers.",
    focus: "Drills, Fire & First Aid"
  },
  {
    step: 3,
    title: "Site-Specific Training",
    description: "Custom orientation tailored to the client's plant layout, SOPs, access systems, and hazards.",
    focus: "Client SOP Alignment"
  },
  {
    step: 4,
    title: "On-Site Training",
    description: "Practical mentoring alongside senior supervisors directly on the active assignment site.",
    focus: "Real-world Alertness"
  },
  {
    step: 5,
    title: "Continuous Evaluation",
    description: "Periodic surprise night inspections, refresher training, and performance audits by senior operations.",
    focus: "Standard Uniformity"
  }
];

export const RECRUITMENT_STANDARDS = [
  {
    label: "Qualification",
    value: "Minimum 8th Standard Passed",
    detail: "Basic literacy to read and maintain gate registers, identity cards, and emergency signages accurately.",
    icon: "GraduationCap"
  },
  {
    label: "Age Requirement",
    value: "20 – 55 Years",
    detail: "Mature, alert, and responsible candidates capable of enduring active standing and patrol shifts.",
    icon: "UserCheck"
  },
  {
    label: "Physical Fitness",
    value: "Strict Physical & Medical Standards",
    detail: "Physically fit, medically vetted, and reliable personnel with standard height and endurance.",
    icon: "Activity"
  },
  {
    label: "Mandatory Certification",
    value: "Firefighting & First Aid Qualified",
    detail: "Every guard receives comprehensive practical instructions in handling extinguishers and basic life support.",
    icon: "Flame"
  }
];

export const CORE_VALUES: CoreValue[] = [
  {
    title: "ACCOUNTABILITY",
    tagline: "Owning every responsibility on duty",
    description: "We take full ownership of our designated posts, ensuring complete transparency in logs, reporting, and prompt incident escalation.",
    iconName: "CheckCircle2"
  },
  {
    title: "DEPENDABILITY",
    tagline: "Steadfast presence you can count on",
    description: "Our clients rely on our 100% on-time shift reporting and disciplined guard rotations even in challenging weather or remote locations.",
    iconName: "ShieldCheck"
  },
  {
    title: "RELIABILITY",
    tagline: "Consistent standards day after day",
    description: "Uniformity in turnout, professional conduct, alertness, and continuous supervisor inspections across all assigned locations.",
    iconName: "Clock"
  },
  {
    title: "EFFICIENCY",
    tagline: "Optimized deployment without gaps",
    description: "Prompt resolution of client security concerns, agile roster management, and swift mobilization for emergency requests.",
    iconName: "Zap"
  },
  {
    title: "COMMITMENT TO CLIENTS & EMPLOYEES",
    tagline: "Mutual respect, welfare and dedication",
    description: "Upholding statutory welfare for guards to maintain high morale while delivering uninterrupted peace of mind to our client partners.",
    iconName: "Heart"
  }
];

export const CLIENT_SECTORS: SectorItem[] = [
  {
    name: "Corporate Houses",
    description: "Headquarters, IT parks, and corporate offices requiring front-desk poise, access control, and confidential environment security.",
    iconName: "Building2",
    highlight: "Visitor SOPs & Reception"
  },
  {
    name: "Industries",
    description: "Factories, manufacturing units, scrap yards, and warehouses requiring material movement control and gate supervision.",
    iconName: "Factory",
    highlight: "Material In/Out Tracking"
  },
  {
    name: "Banks & BFSI",
    description: "Currency handling branches, vault premises, ATM security, and customer queue order management.",
    iconName: "Landmark",
    highlight: "High Alert & Cash Protocol"
  },
  {
    name: "Telecom Companies",
    description: "Data centers, cell towers, switching hubs, and optical fiber infrastructure perimeter protection.",
    iconName: "Radio",
    highlight: "Asset & Perimeter Watch"
  },
  {
    name: "Hospitals & Healthcare",
    description: "Crowd management in emergency wards, parking coordination, ICU access control, and patient-first sensitivity.",
    iconName: "Stethoscope",
    highlight: "Sensitive Crowd Handling"
  },
  {
    name: "Hotels & Hospitality",
    description: "Discreet guest security, baggage screening, valet parking control, and executive entrance vigilance.",
    iconName: "Hotel",
    highlight: "Discreet Luxury Vigilance"
  },
  {
    name: "Educational Institutions",
    description: "Schools, colleges, and university campuses with strict child safety protocols and visitor regulation.",
    iconName: "GraduationCap",
    highlight: "Campus & Student Safety"
  },
  {
    name: "Public Sector Organizations",
    description: "PSUs, administrative complexes, and municipal utilities demanding seasoned military-grade protocol compliance.",
    iconName: "Building",
    highlight: "Government & PSU Protocol"
  }
];

export const MAHARASHTRA_REGIONS = [
  { region: "Pune & PCMC Metropolitan Area", hub: "Headquarters & Operational Command", coverage: "100% Comprehensive" },
  { region: "Mumbai Metropolitan Region (MMR)", hub: "Corporate & Commercial Hubs", coverage: "Full Deployment" },
  { region: "Nashik & North Maharashtra", hub: "Industrial & Agricultural Corridors", coverage: "Active Network" },
  { region: "Chhatrapati Sambhajinagar (Aurangabad)", hub: "Auto & Engineering Clusters", coverage: "Active Network" },
  { region: "Nagpur & Vidarbha Zone", hub: "Logistics & Industrial Terminals", coverage: "Statewide Fleet" },
  { region: "Kolhapur & Western Maharashtra", hub: "Textile & Manufacturing Belts", coverage: "Active Network" }
];
