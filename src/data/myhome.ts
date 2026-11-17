// Content for the /my-home product page. Edit here; the page reads everything from this file.
//
// Anything in [square brackets] is a PLACEHOLDER and shows on the page as written.
// Items marked "CONFIRM" are drafted from the privacy policy or the preview image.
// Check they match what the app really does, and delete any that don't.

export const myHome = {
  name: "My Home",
  tagline: "Find your next home in Zambia, without the runaround.",
  summary:
    "My Home brings rental listings, verified landlords, and direct contact together in one mobile app, so finding a place to rent is simpler for tenants and landlords alike.",
  // Leave a URL as "" until the app is live in that store. With both empty,
  // the page shows "Coming soon" and a "Get notified" button instead of store badges.
  appStoreUrl: "",
  playStoreUrl: "",
  previewImage: "/nestquest_app_preview.jpg",
  previewAlt: "My Home app showing rental listings on a map of Lusaka",
};

export const tenantSteps = [
  {
    title: "Search your area",
    description: "Browse rentals by location, price, and number of bedrooms.",
  },
  {
    title: "Compare listings",
    description: "See photos, rent, and key details for each property before you visit.",
  },
  {
    title: "Contact the landlord",
    description: "Reach verified landlords directly in the app, with no middleman.",
  },
];

export const landlordSteps = [
  {
    title: "Create your account",
    description: "Sign up with your email and get verified as a landlord.",
  },
  {
    title: "List your property",
    description: "Add photos, rent, and the property's location in a few minutes.",
  },
  {
    title: "Hear from tenants",
    description: "Interested tenants contact you directly, so you fill vacancies faster.",
  },
];

// Icons are picked on the page in this order: map, filter, check, chat, image, lock.
export const features = [
  {
    title: "Map-based search", // CONFIRM: map view is shown in the preview image
    description: "See where each rental sits and search the neighbourhoods that suit you.",
  },
  {
    title: "Filters that matter locally", // CONFIRM: filter names come from the preview image
    description: "Narrow results by bedrooms, price, and features like solar power or borehole water.",
  },
  {
    title: "Verified landlords",
    description: "Landlord accounts are verified, so you know who you're dealing with.",
  },
  {
    title: "Direct communication",
    description: "Tenants and landlords talk to each other directly about availability and viewings.",
  },
  {
    title: "Photo-rich listings",
    description: "Every listing includes photos, rental pricing, and location details.",
  },
  {
    title: "Secure accounts",
    description: "Sign-in and data are protected using Google Firebase cloud services.",
  },
];

export const trustPoints = [
  "Landlords are verified before they can list",
  "Your data is never sold or shared with third parties",
  "Accounts and listings are stored securely on Google Firebase",
  "Built and supported by NestQuest, a Lusaka-based team",
];

export const faqs = [
  {
    q: "Is My Home free to use?",
    a: "[Say whether tenants and landlords pay anything, e.g. “Searching and contacting landlords is free for tenants. Landlords can list [one property free / for a fee of …].”]",
  },
  {
    q: "Which areas does My Home cover?",
    a: "[List the cities or areas, e.g. “We're starting in Lusaka and adding more towns as landlords join.”]",
  },
  {
    q: "How are landlords verified?",
    a: "[Explain the check, e.g. “We confirm each landlord's identity and property details before their listings go live.”]",
  },
  {
    q: "Which phones does it work on?",
    a: "[e.g. “My Home is available for Android, with iPhone coming soon.”]",
  },
  {
    q: "How do I get help or report a listing?",
    a: "Contact the NestQuest team through our contact page and we'll get back to you.",
  },
];
