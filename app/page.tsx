import Image from "next/image";
import Layout from "./layout";
import { NextSeo } from 'next-seo';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold">Welcome to Quanut Agro</h1>
      <p className="mt-4 text-lg">Providing quality agricultural raw materials.</p>
    </main>
  );
}

