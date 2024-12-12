"use client";

import { useEffect, useState } from "react";

const slides = [
    {
        id: 1,
        title: "Languages × IT Solutions",
        subtitle: "「英語×IT」に特化した、バイリンガルITサポートで",
        description: "お客様の規模や状況に応じて、柔軟にカスタマイズしたITサポートをご提供いたします。",
        image: "https://images.unsplash.com/photo-1573495612077-a689b084faab?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 2,
        title: "Global IT Support",
        subtitle: "世界中のビジネスをサポート",
        description: "24時間365日、グローバルなITサポートを提供します。",
        image: "https://images.unsplash.com/photo-1573495782176-b536322e5ad6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 3,
        title: "Custom Solutions",
        subtitle: "カスタマイズされたソリューション",
        description: "お客様のニーズに合わせた最適なITソリューションを提供します。",
        image: "https://plus.unsplash.com/premium_photo-1675024298717-02d612d9cc82?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

export function Hero() {
    const [ currentSlide, setCurrentSlide ] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <img src={slide.image} alt={slide.title} layout="fill"  />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="relative h-full flex items-center">
                        <div className="container mx-auto px-4">
                            <div className="max-w-3xl text-yellow-500">
                                <h1 className="text-5xl md:text-7xl font-bold mb-4 transform transition-transform duration-700 ease-out translate-y-0 opacity-100">
                                    {slide.title}
                                </h1>
                                <h2 className="text-xl md:text-2xl mb-4 transform transition-transform duration-700 ease-out delay-100 translate-y-0 opacity-100">
                                    {slide.subtitle}
                                </h2>
                                <p className="text-lg opacity-90 transform transition-transform duration-700 ease-out delay-200 translate-y-0 opacity-100">
                                    {slide.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                            currentSlide === index ? "bg-white" : "bg-white/50"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}


