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
  title: "ARKiva - Web Design Agency",
  description: "ARKiva - Elevate Your Digital Presence with Expert Web Design & Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${giest.className} ${inter.className} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
