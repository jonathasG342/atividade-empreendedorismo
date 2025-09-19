import {
  LayoutDashboard,
  Wallet,
  CreditCard,
  TrendingUp,
  PieChart,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "@/components/ui/avatar";


const navigacao = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    current: true,
  },
  { name: "Contas", href: "/contas", icon: Wallet, current: false },
  { name: "Transações", href: "/transacoes", icon: TrendingUp, current: false },
  {
    name: "Cartões de crédito",
    href: "/cartao",
    icon: CreditCard,
    current: false,
  },
  {
    name: "Planejamento",
    href: "/planejamento",
    icon: PieChart,
    current: false,
  },
  { name: "Relatórios", href: "/relatorios", icon: PieChart, current: false },
];

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-[#293042] backdrop-blur-sm flex flex-col z-50 shadow-lg">
      <div className="flex items-center justify-center text-3xl font-bold h-[100px]">
        <h2>Sistema JJ</h2>
      </div>
      <nav className="flex-1 px-4 space-y-2 mt-5">
        {navigacao.map((item, index) => (
          <NavLink
            key={item.name}
            to={item.href}
            style={{ animationDelay: `${index * 0.1}s` }}
            className={({ isActive }) =>
              cn(
                "flex items-center px-4 py-3 text-sm font-medium rounded-sm transition-all duration-300 group animate-fade-in",
                isActive
                  ? "bg-gradient-to-r from-primary/20 to-primary/10 text-primary shadow-md border border-primary/20"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground hover:shadow-sm hover:translate-x-1"
              )
            }
          >
            <item.icon className="h-4 w-4 mr-3 transition-transform duration-300 group-hover:scale-110" />
            {item.name}
          </NavLink>
        ))}
      </nav>
      <div className="bg-blue-600 h-20 flex items-center justify-start p-5">
        <div className="flex flex-row gap-5 items-center">
          <Avatar>
            <AvatarImage
              src="https://github.com/jonathasG342.png"
              alt="@shadcn"
            />
          </Avatar>
          <div>
            <h2 className="text-xl">Jonathas Gomes</h2>
            <p className="text-gray-900">
              Conta: <span className="text-gray-700">Free</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
