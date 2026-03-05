import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";

export const metadata: Metadata = {
  title: "Lumodo Knowledge Base",
  description: "Private internal product documentation for Lumodo.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className="antialiased overflow-hidden h-dvh">
        <div className="flex h-full">
          <Sidebar />
          <div className="flex-1 flex flex-col min-w-0 bg-[var(--background)] relative z-10">
            <TopBar />
            <main className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-10">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
