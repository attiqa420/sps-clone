
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";


export const metadata = {
  title: "SPS-Clone",
  description: 'Clone of SPS site built with Next.js and Tailwind CSS',
  authors: [{ name: 'Attiqa JAbeen', url: 'https://spscopy.netlify.app/' }],
   robots: {
    index: true,
    follow: true,
  },
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
