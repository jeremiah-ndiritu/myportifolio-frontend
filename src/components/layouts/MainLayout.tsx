import type { ReactNode } from "react";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import PageBody from "./PageBody";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="relative min-h-screen w-full flex flex-col pt-0">
      <Header />
      <div className="flex-1">
        <PageBody>{children}</PageBody>
      </div>
      <Footer />
    </main>
  );
}
