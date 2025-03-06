// app/layout.tsx
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar/>
        {children}
        <Footer/>
        </body>
      </html> 
  );
}
