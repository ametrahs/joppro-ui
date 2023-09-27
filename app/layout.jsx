import Footer from "@/components/Footer";
import "./globals.css";
import "../public/css/style.css";
import "../public/css/animate.css";
import "../public/css/flaticon.css";
import "../public/css/magnific-popup.css";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
