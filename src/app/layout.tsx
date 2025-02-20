import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "MailSnippet",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${ubuntu.className} antialiased text-sm`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
