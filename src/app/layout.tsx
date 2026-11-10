import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nestquesttechnologies.com"),
  title: "NestQuest Technologies | Unfolding Your Household Settlement",
  description:
    "NestQuest Technologies Limited is Zambia's leading PropTech company, revolutionizing rental property search, landlord advertising, and secure tenancy settlement in Lusaka and beyond.",
  keywords: [
    "NestQuest",
    "NestQuest Technologies Limited",
    "Rental Property Zambia",
    "Houses for rent Lusaka",
    "PropTech Zambia",
    "Landlord Advertising Lusaka",
    "Apartments in Zambia",
    "Chiko Mwiinga",
    "Aubrey Chilambwe",
    "Moses Chileshe",
  ],
  authors: [{ name: "NestQuest Technologies Limited" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/nestquest_logo.png",
  },
  openGraph: {
    title: "NestQuest Technologies | Pioneering PropTech Solutions",
    description:
      "Revolutionizing rental property search in Zambia with verified listings, smart filtering, and landlord advertising.",
    url: "https://nestquesttechnologies.com",
    siteName: "NestQuest Technologies",
    images: [
      {
        url: "/nestquest_app_preview.jpg",
        width: 1200,
        height: 630,
        alt: "NestQuest Technologies Mobile App Platform",
      },
    ],
    locale: "en_ZM",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased text-gray-900 bg-white selection:bg-primary selection:text-gray-950">
        {children}
      </body>
    </html>
  );
}
