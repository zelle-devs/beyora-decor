import { Poppins, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "../Components/Header/Header" 
import Footer from "../Components/Footer/Footer" 

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
    // Added playfair.variable to the className list
    <html lang="en" className={`${poppins.variable} ${montserrat.variable} ${playfair.variable}`}>
      <body>
        <main className="MainContainerBeyvoraDecor">
         <Header/>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}