import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/footer";
export const metadata: Metadata = {
  title: "Halaqr - Create Stunning Invitations with Hala qr",
  description: "Create Stunning Invitations with Hala qr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.ico" sizes="any" />
      <body className={`antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
