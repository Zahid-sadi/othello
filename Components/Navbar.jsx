"use client";

import Link from "next/link";
import { useScroll } from "./Use-scroll";

export function Navbar() {
    const scrolled = useScroll();

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
                scrolled ? "bg-white shadow-lg shadow-gray-500" : "bg-transparent"
            }`}
        >
            <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl text-yellow-500 font-bold">
                 Othello
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="/services" className="hover:text-primary transition-colors">
                        サービス
                    </Link>
                    <Link href="/cases" className="hover:text-primary transition-colors">
                        事例紹介
                    </Link>
                    <Link href="/company" className="hover:text-primary transition-colors">
                        会社案内
                    </Link>
                    <Link href="/careers" className="hover:text-primary transition-colors">
                        採用案内
                    </Link>
                    <Link href="/news" className="hover:text-primary transition-colors">
                        お知らせ
                    </Link>
                    <button className="text-sm">English/日本語</button>
                    <Link
                        href="/contact"
                        className="bg-[#F5A623] text-white px-6 py-2 rounded hover:bg-[#F5A623]/90 transition-colors"
                    >
                        お問い合わせ
                    </Link>
                </div>
            </nav>
        </header>
    );
}
