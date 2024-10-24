import Header from "@/components/Header";
import Sidebar from "../../components/Sidebar";
import Image from "next/image";
import { redirect } from "next/navigation";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-header w-full font-inter">
        <Sidebar/>
        <Header/>
        <div className="flex size-full flex-col">
            <div className="root-layout">
            </div>
        {children}
        </div>
    </main>
  );
}