import { Poppins, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import CartSidebar from "@/Components/BuyProductPage/CartSidebar/CartSidebar";
import { CartProvider } from "./CartContext";
import { TransitionProvider } from "./TransitionContext";
import PageTransitionOverlay from "@/Components/PageTransition/PageTransitionOverlay";
import PageFadeIn from "@/Components/PageTransition/PageFadeIn";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Beyvora Decor | Premium Home Decor",
  description: "Shop the best premium home decor and furniture at Beyvora Decor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable} ${playfair.variable}`}>
      <body>
        <CartProvider>
          <TransitionProvider>
            <PageTransitionOverlay />
            <main className="MainContainerBeyvoraDecor">
              <Header />
              <PageFadeIn>{children}</PageFadeIn>
              <CartSidebar />
              <Footer />
            </main>
          </TransitionProvider>
        </CartProvider>
      </body>
    </html>
  );
}