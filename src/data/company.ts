// Company facts and About-page copy, kept in one place so they are easy to update.
//
// Anything in [square brackets] is a PLACEHOLDER. It shows on the page as written,
// so search this file for "[" and replace each one before going live.
// Delete any item you can't back up rather than leaving a placeholder.

export const company = {
  name: "NestQuest Technologies",
  legalName: "NestQuest Technologies Limited",
  location: "Lusaka, Zambia",
  founded: "[Year]",
};

// Short facts shown as a strip on the About page. Real numbers build trust; vague ones don't.
export const facts = [
  { value: company.founded, label: "Founded in Lusaka" },
  { value: "[0]", label: "Products launched" },
  { value: "[0]", label: "Clients and partners served" },
  { value: "5", label: "People on the core team" },
];

// The story: why NestQuest exists. Two or three short paragraphs work best.
export const story = [
  "[How NestQuest started: who founded it, when, and what problem or opportunity they saw. Example: “NestQuest began in [Year] when our founders saw how hard it was for people in Lusaka to find reliable rental housing online.”]",
  "[What happened next: the first product, first clients, or a turning point. Example: “Building My Home taught us how to design for local realities: patchy connectivity, mobile-first users, and trust between strangers.”]",
  "Today we bring that same thinking to businesses and organisations that need web platforms, mobile applications, and connected systems built for the way people in Zambia and the region actually work.",
];

export const mission =
  "[One sentence on what NestQuest does and for whom. Example: “To build practical, reliable digital products that help Zambian businesses and communities work better.”]";

export const vision =
  "[One sentence on the future NestQuest is working towards. Example: “A Zambia where every business, large or small, has access to technology built for its needs.”]";

// What makes NestQuest different. These replace the repeated "principles" lists.
export const differentiators = [
  {
    title: "We build our own products",
    description:
      "My Home is a NestQuest product. Running our own platform means we understand launch, growth, and support first-hand, not just delivery.",
  },
  {
    title: "Local context, built in",
    description:
      "We design for mobile-first users, varied connectivity, and local payment and business realities from day one.",
  },
  {
    title: "Small team, direct access",
    description:
      "You work with the people building your product. No account-manager layers between your needs and our decisions.",
  },
  {
    title: "Practical over fashionable",
    description:
      "We pick the right tool for the problem and the budget, and we're honest when a simpler solution will do.",
  },
];

// Registration, licences, memberships, awards. This is where "Certified Tech Company" gets backed up.
// Remove the whole list (and the section shows nothing) if there is nothing to show yet.
export const credentials = [
  "[Registered with PACRA: company registration number]",
  "[ZICTA licence or other regulatory registration, if any]",
  "[Industry memberships, certifications, or partner programmes]",
];
