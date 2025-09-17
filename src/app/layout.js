
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";


export const metadata = {
  title: "SPS-Clone",
  description: "this is a clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

<Navbar />

        {children}
  
    <Footer />
        

      </body>
    </html>
  );
}
