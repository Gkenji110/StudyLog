import { Link, Outlet } from "react-router-dom";

export function Layout() {
    return (
        <div className="flex justify-center items-center flex-col">
            <nav className="flex gap-3">
                <Link to="/">Home</Link>
                <Link to="/add">Nova Sessão</Link>
            </nav>

            <main>
                <Outlet />
            </main>

        </div>
    );
}