"use client";

import Link from "next/link";
import { useScroll } from "./UseScroll";

export function Navbar() {
    const scrolled = useScroll();

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
                scrolled ? "bg-white shadow-md shadow-gray-500" : "bg-transparent"
            }`}
        >
            <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl text-yellow-500 font-bold">
                    Othello
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="/services" className="hover:text-primary transition-colors">
                       home
                    </Link>
                    <Link href="/cases" className="hover:text-primary transition-colors">
                        service
                    </Link>
                    <Link href="/company" className="hover:text-primary transition-colors">
                        about
                    </Link>
                    <Link href="/careers" className="hover:text-primary transition-colors">
                        more
                    </Link>
                    <Link href="/news" className="hover:text-primary transition-colors">
                        more
                    </Link>
                    <button className="text-sm">English</button>
                    <Link
                        href="/contact"
                        className="bg-[#F5A623] text-white px-6 py-2 rounded hover:bg-[#F5A623]/90 transition-colors"
                    >
                        contact
                    </Link>
                </div>
            </nav>
        </header>
    );
}
