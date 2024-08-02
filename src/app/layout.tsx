import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tu Clase Particular",
  description: "¿Estás buscando una clase particular para tu hijo? Agenda tu clase con nosotros!",
  openGraph: {
    title: "Tu Clase Particular",
    description: "¿Estás buscando una clase particular para tu hijo? Agenda tu clase con nosotros!",
    url: "https://www.tuclaseparticular.cl",
    type: "website",
    images: [
      {
        url: "https://i.postimg.cc/P5zvwKDr/prev-1.webp",
        alt: "Tu Clase Particular",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="7P_f8EA2asYmee8a4EC6KZEfY21ffBRCi1WkZ3q0Hks" />
      </head>
      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
