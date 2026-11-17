// Single source of truth for the team. Used by the homepage Team section and the About page.
// Portraits live in /public/team: transparent background, 640x800, every head framed at the same size and height.
// To add someone, cut out the background and match that framing so the row stays aligned.

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
  focus: string;
};

export const team: TeamMember[] = [

  {
    name: "Moses Chileshe",
    role: "Human Resource Manager",
    image: "/team/moses.webp",
    bio: "Looks after people, talent development, and the collaborative culture that lets the team do its best work.",
    focus: "People & Talent",
  },
  {
    name: "Chiko Mwiinga",
    role: "Finance & Accounting Manager",
    image: "/team/chiko.webp",
    bio: "Oversees financial planning, accounting, and commercial operations so NestQuest grows sustainably.",
    focus: "Finance & Commercial",
  },
  {
    name: "Hamuzala Muzandu",
    role: "Strategy & Partnerships Manager",
    image: "/team/hamuzala.webp",
    bio: "Sets NestQuest's strategic direction and builds the partnerships that help our products and services reach more businesses and communities.",
    focus: "Strategy & Partnerships",
  },
  {
    name: "Aubrey Chilambwe",
    role: "Software Developer & Tech Lead",
    image: "/team/aubrey.webp",
    bio: "Leads technical development across NestQuest's products, from mobile apps and cloud backends to the experiences people use every day.",
    focus: "Product & Architecture",
  },
  {
    name: "Patson Tembo",
    role: "Associate Software & Web Developer",
    image: "/team/patson.webp",
    bio: "Builds and maintains NestQuest's web-based services and supports the IT systems the team relies on.",
    focus: "Web & IT Support",
  },
];
