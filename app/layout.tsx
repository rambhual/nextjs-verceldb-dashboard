// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/providers/modal-provider";
import { ToastProvider } from "@/providers/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className} suppressHydrationWarning={true}>
          <ModalProvider />
          <ToastProvider/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
