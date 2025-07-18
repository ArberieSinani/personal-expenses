import { Bell, Settings } from "lucide-react";
import DropDownAvatar from "./DropDownAvatar";

const Topbar = ({ title }) => {
  return (
    <header className="h-16 w-full bg-white flex items-center justify-between px-6">
      <div className="relative w-full max-w-sm">
        <h2 className="font-bold size-7">{title}</h2>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-muted transition">
          <Settings className="size-5" />
        </button>
        <button className="relative p-2 rounded-full hover:bg-muted transition">
          <Bell className="size-5" />
        </button>
        <DropDownAvatar />
      </div>
    </header>
  );
};

export default Topbar;
