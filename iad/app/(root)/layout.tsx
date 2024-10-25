import Header from "@/components/Header";
import Sidebar from "../../components/Sidebar";
import MobileNav from "@/components/MobileNav";
import Image from "next/image";
import { redirect } from "next/navigation";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-header w-full font-inter bg-slate-100">
        <Sidebar/>
        <div className="flex size-full flex-col">
            <div className="root-layout">
                <MobileNav/>
            </div>
        {children}
        </div>
    </main>
  );
}