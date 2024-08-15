import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const dmSans = DM_Sans({ subsets: ["latin"] });

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
        <meta property="og:title" content="Clases particulares: Encuentra al profesor que estás buscando" />
        <meta property="og:description" content="¿Estás buscando una clase particular para tu hijo? Agenda tu clase con nosotros!" /> 
        <meta property="og:image" content="https://i.postimg.cc/P5zvwKDr/prev-1.webp" />
        <meta property="og:url" content="https://www.tuclaseparticular.cl" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Clases particulares: Encuentra al profesor que estás buscando" />
        <meta name="google-site-verification" content="Ly-TmlUdu7rszX6sk9wDLwa1InQykc3_2Syaop4Q1ro" />

        <link rel="icon" type="image/svg+xml" href="/logo.webp" />
        <title>Tu Clase Particular</title>
      </head>
      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
