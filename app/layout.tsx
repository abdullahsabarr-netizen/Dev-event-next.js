import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import LightRays from "./components/lightRays";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

const schibstedGrotesk = Schibsted_Grotesk({
    variable: "--font-schibsted-grotesk",
    subsets: ["latin"],
});

const martianMono = Martian_Mono({
    variable: "--font-martian-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "DevEvent",
    description: "The hub for the event",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
        <body
            className={`${schibstedGrotesk.variable} ${martianMono.variable} antialiased bg-[#030708] text-white min-h-screen relative overflow-x-hidden`}
        >
        <Navbar />

        {/* Fixed Dark Glow Background */}
        <div
            className="fixed inset-0 top-0 z-0 h-[600px] w-full pointer-events-none opacity-60 overflow-hidden"
            style={{ filter: "invert(1) hue-rotate(180deg)", mixBlendMode: "screen" }}
        >
            <LightRays
                raysOrigin="top-center"
                raysColor="#5dfeca"
                raysSpeed={0.4}
                lightSpread={0.8}
                rayLength={1.2}
                followMouse={true}
                mouseInfluence={0.02}
            />
        </div>

        <main className="relative z-10 container mx-auto px-4 sm:px-8 py-6">
            {children}
        </main>
        </body>
        </html>
    );
}