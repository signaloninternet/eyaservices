const products = [
  // ---------------------- FIRST AID KITS (from images) ----------------------
  {
    title: "First Aid Kit – OSHA Compliant",
    description:
      "Compact OSHA-compliant first aid kit designed for workplaces and businesses to meet federal safety requirements.",
    category: "First Aid",
    image: "https://m.media-amazon.com/images/I/81rc31YRgDL.jpg",
    features: ["OSHA Compliant", "Compact", "Workplace Ready"],
    productCode: "FAK-OSHA-001",
  },
  {
    title: "75-Person ANSI First Aid Cabinet",
    description:
      "ANSI-compliant first aid cabinet fully stocked to support up to 75 people, suitable for offices, factories, and warehouses.",
    category: "First Aid",
    image: "https://m.media-amazon.com/images/I/514BXh3zTzL._UF1000,1000_QL80_.jpg",
    features: ["ANSI Compliant", "Supports 75 People", "Wall Mountable"],
    productCode: "FAK-ANSI-075",
  },
  {
    title: "My Medic Moto Medic – Vehicle First Aid Kit",
    description:
      "Portable vehicle first aid kit designed for motorcycles and cars, compact yet comprehensive for emergencies on the road.",
    category: "First Aid",
    image: "https://m.media-amazon.com/images/I/71-PiZAwPRL._UF1000,1000_QL80_.jpg",
    features: ["Compact", "Vehicle Friendly", "Durable Case"],
    productCode: "FAK-MOTO-001",
  },
  {
    title: "LifeVac Adult & Child Choking First Aid Device – EMS Kit",
    description:
      "Emergency suction device designed to clear airway obstructions in choking emergencies. Suitable for adults and children.",
    category: "First Aid",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8tZdc21XihBURqfVzZ8ydGJsFdcp-4ZkD2w&s",
    features: ["For Adults & Children", "Non-Invasive", "EMS Use"],
    productCode: "LVC-EMS-001",
  },
  {
    title: "LifeVac Adult & Child Choking First Aid Device",
    description:
      "Portable anti-choking device for both adults and children. Easy to use and highly effective in choking emergencies.",
    category: "First Aid",
    image: "https://cdn.protectitdental.com/product_attribute_images/production/11381.png",
    features: ["Reusable", "For All Ages", "Portable"],
    productCode: "LVC-STD-001",
  },
  {
    title: "LifeVac Adult & Child Choking First Aid Device – Home Kit",
    description:
      "Home-use choking rescue kit designed for families. Provides peace of mind with a safe and effective airway clearance device.",
    category: "First Aid",
    image: "https://m.media-amazon.com/images/I/71SMl8-jhZL.jpg",
    features: ["Home Use", "For All Ages", "Emergency Ready"],
    productCode: "LVC-HOME-001",
  },
  {
    title: "Mobilize Rescue Systems UTILITY Emergency Kit with App Download",
    description:
      "Utility emergency kit with step-by-step medical instructions via mobile app for guided first aid response.",
    category: "First Aid",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqrRf2Tb2STMpjfKGkueCTUiYIMn-lYRcQqw&s",
    features: ["App Guided", "Utility Design", "Comprehensive Kit"],
    productCode: "MRS-UTIL-001",
  },
  {
    title: "Mobilize Rescue Systems COMPACT Emergency Kit with App Download",
    description:
      "Compact emergency kit offering app-integrated step-by-step instructions for quick lifesaving actions.",
    category: "First Aid",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbVPRKwc40mfnzyQVZkyWKjE5nVRyGRu2Idw&s",
    features: ["Compact", "App Integrated", "Portable"],
    productCode: "MRS-CMP-001",
  },
  {
    title: "Mobilize Rescue Systems COMPREHENSIVE Emergency Rescue Station with App Download",
    description:
      "Fully comprehensive emergency rescue station designed for public and workplace use, with app-guided medical support.",
    category: "First Aid",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO93xXLrQMhaFZP7Vl9oucUXeDbhcHd71LAQ&s",
    features: ["Comprehensive Station", "Wall Mounted", "App Guided"],
    productCode: "MRS-COMP-001",
  },
  {
    title: "Ferno Model 5111 Trauma Airway Management III Bag (Blue)",
    description:
      "Durable trauma bag designed for airway management in emergency situations. Includes organized compartments.",
    category: "First Aid",
    image: "https://ferno.com/Ferno/media/US/Products/Product-Model-5111-Trauma-Air-Management-Bag-III-Blue.jpg?ext=.jpg",
    features: ["Airway Management", "Durable", "Portable"],
    productCode: "FER-5111-BLU",
  },
  {
    title: "Grafco First Aid Kit – 25 Person",
    description:
      "Grafco ANSI-compliant first aid kit for up to 25 people. Compact and portable for workplaces and schools.",
    category: "First Aid",
    image: "https://m.media-amazon.com/images/I/61nKgb7QrXL._UF894,1000_QL80_.jpg",
    features: ["25 Person Capacity", "ANSI Compliant", "Portable"],
    productCode: "GRAF-25P-001",
  },

  // ---------------------- OTHER MEDICAL PRODUCTS (from your code) ----------------------
  {
    title: "Synguard Nitrile Exam Gloves (Medium)",
    description:
      "Latex-free, powder-free, protein-free nitrile examination gloves for medical professionals.",
    category: "Medical Gloves",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tB6zg6iq0HhL3F7j1zJvNyUIDjqTJa.png",
    features: ["Latex Free", "Powder Free", "100 Count"],
    productCode: "NGPF-7002",
  },
  {
    title: "Glucerna Therapeutic Nutrition",
    description:
      "Specialized nutrition designed for people with diabetes to help manage blood sugar response.",
    category: "Nutrition",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PwYFaND9a2y49WBrre8Iz8G4Tb4mVs.png",
    features: ["Diabetes Care", "1.2 CAL", "Vanilla Flavor"],
    productCode: "GLU-VAN-237",
  },
  {
    title: "Prevail Daily Pads",
    description:
      "Ultimate absorbency pads for bladder leaks with MaxSorb Gel Technology and Omni-Odor Guard.",
    category: "Incontinence",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JeV0SbyiqBUbCBxYmoezHsAyGWXu9T.png",
    features: ["33 Count", "Regular", "Breathable"],
    productCode: "PRV-DP-33",
  },
  {
    title: "Ensure Plus Therapeutic Nutrition",
    description:
      "Complete, balanced nutrition with 40% more protein than Ensure Original for therapeutic needs.",
    category: "Nutrition",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Gjt6hZFl2dPQSrnc1g5K6qzjCJiTIR.png",
    features: ["13g Protein", "350 Calories", "Vanilla"],
    productCode: "ENS-PLS-VAN",
  },
  {
    title: "Ensure Original",
    description:
      "Complete, balanced nutrition with 9g protein, 250 calories, and 27 vitamins & minerals.",
    category: "Nutrition",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qj5LJ2QAMdPSaokukFR3NXY1EkIz8f.png",
    features: ["9g Protein", "250 Calories", "Chocolate"],
    productCode: "ENS-ORG-CHO",
  },
  {
    title: "Prevail Underpads",
    description:
      "Moisture-proof barrier underpads with extra strong protection for beds and furniture.",
    category: "Incontinence",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hLj5tGpW7MiThQTOTqEbCCMmH4YwMj.png",
    features: ["10 Count", "Moisture Proof", "Extra Strong"],
    productCode: "PRV-UP-10",
  },
  {
    title: "Synguard Nitrile Exam Gloves (Large)",
    description:
      "Large size latex-free, powder-free, protein-free nitrile examination gloves.",
    category: "Medical Gloves",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sw5sxA2pkN6fQvCdgyJxrXfZawMRYL.png",
    features: ["Latex Free", "Powder Free", "Large Size"],
    productCode: "NGPF-7003",
  },
  {
    title: "Drive Medical Wheelchair",
    description:
      "Standard wheelchair with removable desk arms and swing-away footrests for comfort and mobility.",
    category: "Mobility",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RgmunfhwPXPgJYtbtmH3701i3q1XeF.png",
    features: ["Removable Arms", "Swing-Away Feet", "Standard"],
    productCode: "DRV-WC-STD",
  },
  {
    title: "Drive Medical Mattress",
    description:
      "High-quality medical mattress designed for comfort and pressure relief in healthcare settings.",
    category: "Medical Equipment",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VMaNFK2ExaUiumWQSbmP8htS295xWq.png",
    features: ["Pressure Relief", "Medical Grade", "Durable"],
    productCode: "DRV-MAT-MED",
  },
  {
    title: "Disposable Underpads",
    description:
      "Soft, absorbent disposable underpads with moisture-proof backing for patient care.",
    category: "Incontinence",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ha5tdbEYd8iR6gGEAErlv8qaRj58v7.png",
    features: ["Disposable", "Absorbent", "Moisture Proof"],
    productCode: "DISP-UP-STD",
  },
  {
    title: "ProCare Large Adult Washcloths - 96 Count",
    description:
      "ProCare Large Adult Washcloths are soft, pre-moistened wipes designed for adult care and hygiene.",
    category: "Personal Care",
    image: "/procare.jpeg",
    features: ["Large size", "Soft and gentle", "Disposable"],
    productCode: "PROCARE-ADULT-96",
  }
];

export default products;
