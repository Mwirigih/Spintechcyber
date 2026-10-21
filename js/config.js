/* ==========================================================
   SITE CONFIG: the ONLY file you must edit before launch.
   Leave a value as "" and the site shows a clear placeholder.
   ========================================================== */
window.SITE_CONFIG = {
  spintech: {
    // WhatsApp number in international format, digits only. Kenya format: 2547XXXXXXXX
    whatsappNumber: "254712310300",
    phoneDisplay: "0712 310 300",
    email: "spintechcyber@gmail.com",
    location: "Muchatha, Ruaka, Banana Road (opposite Satellite Booster)",
    hours: "Open daily, Monday to Saturday (closed on Sundays)",
    mapEmbedUrl: "https://maps.google.com/maps?q=-1.1933153,36.7780701&z=17&output=embed",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=-1.1933153,36.7780701",
    whatsappMessage: "Hello SpinTech Cyber, I would like to inquire about your services.",
    // Edit, add or delete services. icon: print|scan|type|cv|apply|gov|computer|star
    services: [
      { icon: "print",    title: "Printing & Photocopying",          text: "Clear black-and-white and colour prints and copies for school, office and personal use." },
      { icon: "scan",     title: "Scanning & Document Services",     text: "Turn paper into clean digital files you can save, email or upload." },
      { icon: "type",     title: "Typing & Document Preparation",    text: "Letters, reports and forms typed and formatted neatly, ready to use." },
      { icon: "cv",       title: "CV & Resume Assistance",           text: "Help presenting your experience clearly in a professional CV." },
      { icon: "apply",    title: "Online Applications",              text: "Support filling in and submitting applications online." },
      { icon: "gov",      title: "Government e-Services Assistance", text: "Guidance with online government services and the documents they ask for." },
      { icon: "computer", title: "Other Services",     text: "Access Other Services like browsing, Internet access." }
    ]
  },
  studio: {
    whatsappNumber: "254787214095",
    whatsappMessage: "Hello Msingi Web Studio, I would like to discuss a website project.",
    // icon: web|page|portfolio|coin|star
    services: [
      { icon: "web",       title: "Business websites",          text: "Multi-page sites that present your business clearly on phones and computers." },
      { icon: "page",      title: "Landing pages",              text: "One focused page for a product, event or offer, with a clear way to contact you." },
      { icon: "portfolio", title: "Online portfolios",          text: "Show your work or projects in one tidy, shareable place." },
      { icon: "coin",      title: "Crypto payments (optional)", text: "Add cryptocurrency payment options to a site if your business wants them." }
    ],
    // Price ranges (e.g. "KES 6,000 - 8,000"). "" shows "On request".
    pricing: [
      { name: "Landing page",     price: "KES 6,000 - 8,000", note: "A single focused page.",                  features: ["One page, mobile friendly", "Contact / WhatsApp button", "Basic search-engine setup"] },
      { name: "Business website", price: "KES 12,000 - 25,000", note: "For businesses that need several pages.", features: ["Multiple pages", "Services and contact sections", "Hosting setup help"] },
      { name: "Portfolio",        price: "KES 5,000 - 10,000", note: "Show your work online.",                  features: ["Project gallery", "About and contact pages", "Easy to update"] }
    ]
  }
};
