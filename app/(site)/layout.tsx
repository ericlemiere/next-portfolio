import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eric Lemiere Portfolio Website",
  description:
    "Experienced Software Developer showcasing a portfolio of projects that demonstrate proficiency in various programming languages, frameworks, and software development techniques. Explore to see my work, skills, and professional experience.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // get all pages
  const pages = await getPages();

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="py-6 px-4 flex items-start justify-between">
          <Link href={"/"}>
            <h1 className="text-7xl font-extrabold hover:scale-105 hover:translate-x-3 transition-all duration-300 ease-in-out">
              <span className="bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent">
                Eric Lemiere
              </span>
            </h1>
            <p className="mt-3 text-xl text-gray-300">Software Developer</p>
          </Link>

          <div>
            <nav className="mt-6">
              <ul className="flex space-x-16 ">
                {pages.map((page) => (
                  <li key={page.slug}>
                    <Link
                      href={`/${page.slug}`}
                      className="text-gray-100 hover:bg-gradient-to-r hover:from-purple-600 hover:to-orange-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 ease-in-out"
                    >
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
