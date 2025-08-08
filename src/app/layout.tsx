import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const inter = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});

export const metadata: Metadata = {
  title: "FinTrack - Wallet Ledger Dashboard",
  description:
    "Modern wallet ledger dashboard for tracking financial transactions and account balances",
  keywords: [
    "fintech",
    "finance",
    "wallet",
    "ledger",
    "dashboard",
    "transactions",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-gray-50 dark:bg-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
