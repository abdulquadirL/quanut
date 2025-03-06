import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white top-0 z-0 p-4 sticky text-green-600">
      <div className="container mx-auto flex justify-between">
        <Image src="/Quanutlogo.jpg" alt="quanut logo" width={100} height={70}/>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/products" className="hover:underline">Products</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  );
}