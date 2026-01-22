import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elco Dev | Custom Software & Software Rescue Services",
  description: "Expert custom software development and software rescue services. We build MVPs, enterprise solutions, and finish abandoned projects.",
  keywords: ["custom software development", "MVP development", "software rescue", "web development", "mobile app development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Apollo Tracking */}
        <Script
          id="apollo-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function initApollo(){
                var n=Math.random().toString(36).substring(7),
                o=document.createElement("script");
                o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,
                o.async=!0,
                o.defer=!0,
                o.onload=function(){
                  window.trackingFunctions.onLoad({appId:"${process.env.NEXT_PUBLIC_APOLLO_APP_ID}"})
                },
                document.head.appendChild(o)
              }
              initApollo();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
