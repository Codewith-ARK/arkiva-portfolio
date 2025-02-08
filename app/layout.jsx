import { Geist, Inter } from "next/font/google";
import "./globals.css";

const giest = Geist({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ['latin']
})

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ['latin']
})

export const metadata = {
  title: "ARKiva - Software Development Agency",
  description: "ARKiva - Elevate Your Digital Presence with Expert Web Design, App Design & Development",
  keywords: "Full-Stack, Web-Development, Full Stack Web Development, ARKiva, ARKIVA, arkiva, web dev agency, web development, web development agency, app development, app development agency, arkiva web dev, front end development, backend development"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="7Sg-y85emZMlSdMGQNXvPZxt85SXUa36wnoOalQPN8k" />
      </head>
      <body
        className={` ${giest.className} ${inter.className} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
