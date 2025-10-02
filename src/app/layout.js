
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { Roboto } from 'next/font/google';


export const metadata = {
  title: "SPS-Clone",
  description: 'Clone of SPS site built with Next.js and Tailwind CSS',
  authors: [{ name: 'Attiqa JAbeen', url: 'https://spscopy.netlify.app/' }],
  
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto', // optional CSS variable
});

export default function RootLayout({ children }) {
  return (

    <html lang="en" className={roboto.variable}>
          
 
 
      <body  className="bg-gray-100">

<Navbar />

        {children}
  
    <Footer />
        

      </body>
    </html>
  );
}
