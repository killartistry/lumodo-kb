import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";

export const metadata: Metadata = {
  title: "Lumodo Knowledge Base",
  description: "Private internal product documentation for Lumodo.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased overflow-hidden h-dvh">
        <div className="flex h-full w-full">
          <Sidebar />
          <div className="flex-1 flex flex-col min-w-0 h-full">
            <TopBar />
            <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-6 md:p-8 lg:p-10">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
