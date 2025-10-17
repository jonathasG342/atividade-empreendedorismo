import { Input } from "@/components/ui/input";
import { AlarmClock, BellRing, Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full h-[70px] z-40 p-4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white transition-colors shadow-md">
      <div className="flex items-center h-full">
        <div className="flex items-center gap-5 ml-auto">
          <div className="relative w-full max-w-xs">
            <Input placeholder="Pesquisa..." type="search" className="pl-10" />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <Search size={20} />
            </span>
          </div>
          <BellRing />
          <AlarmClock />
        </div>
      </div>
    </nav>
  );
}
