import Sidebar from "@/components/shared/sidebar/Sidebar";
import Topbar from "@/components/shared/topbar/Topbar";

export default function Layout({ children, title }) {
  return (
    <div className="flex h-screen w-full text-slate-900">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0">
        <Topbar title={title} />
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50 border-t">
          {children}
        </main>
      </div>
    </div>
  );
}
