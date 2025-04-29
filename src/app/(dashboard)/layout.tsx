import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/Menu"
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    <div className="h-screen flex">

        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] "> {/* Left */}

            <Link href="/" className="flex items-center jc lg:justify-start gap-2 p-4">
             <Image src="/logo.png" alt="logo" width={32} height={32} ></Image>
             <span className="hidden lg:block">Madrasti</span>
            </Link>
            <Menu userRole={"admin"}/>

           
        </div>
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">{/* Right */}
            <Navbar/>
            {children}
        </div>
    </div>
    );
  }