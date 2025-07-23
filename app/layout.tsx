import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/navbar/NavBar";
import Container from "@/components/global/Container";
import { Toaster } from "sonner";
import {ClerkProvider} from "@clerk/nextjs"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next store",
  description: "A nifty store build by Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider  attribute={'class'} defaultTheme="system" enableSystem disableTransitionOnChange>

    <ClerkProvider>
        <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        
          <NavBar />
          <Container  className="py-20 ">
            {children}
          </Container>
          
        
        
      </body>
    </html>
    </ClerkProvider>
  </ThemeProvider>
  );
}
