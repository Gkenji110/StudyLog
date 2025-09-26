import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <nav className="bg-violet-300 w-full py-4 shadow flex justify-center gap-6">
        <Link className="font-bold text-gray-800 hover:underline" to="/">
          Home
        </Link>
        <Link className="font-bold text-gray-800 hover:underline" to="/add">
          Nova Sessão
        </Link>
      </nav>

      <main className="flex flex-col items-center w-full p-6">
        <Outlet />
      </main>
    </div>
  );
}
