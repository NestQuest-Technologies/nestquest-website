import type { Metadata } from "next";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://nestquesttechnologies.com"),
  title: "NestQuest Technologies | Digital Products & Technology Services",
  description:
    "NestQuest Technologies is a Zambian technology company building digital products, web and mobile applications, and software services for businesses.",
  keywords: [
    "NestQuest",
    "NestQuest Technologies Limited",
    "Technology company Zambia",
    "Software development Zambia",
    "Web development Lusaka",
    "Mobile applications Zambia",
    "Digital products",
    "Cloud and backend development",
  ],
  authors: [{ name: "NestQuest Technologies Limited" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/nestquest_logo.png",
  },
  openGraph: {
    title: "NestQuest Technologies | Digital Products & Technology Services",
    description:
      "A Zambian technology company building digital products and software services for businesses and communities.",
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
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
