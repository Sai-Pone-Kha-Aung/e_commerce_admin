import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/providers/modal-provider";
import "./globals.css";
import prismadb from "@/lib/prismadb";
import { ToasterProvider } from "@/providers/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MWE Admin",
  description: "Welcome to store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}
          <ToasterProvider/>
          <ModalProvider/>
        </body>
      </html>
    </ClerkProvider>
  );
}
