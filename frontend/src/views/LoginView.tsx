import {Link} from "react-router-dom";

export default function LoginView() {
    return (
        <>
            <div className="bg-slate-800 min-h-screen">
                <div className="max-w-lg mx-auto pt-10 px-5">
                    <img src="/logo.svg" alt="Logotipo DevTree" />
                    <div className="py-10">
                        <h1 className="text-white">Login</h1>
                    </div>
                </div>
                
            </div>

            <nav className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-4">
                <div className="container mx-auto flex justify-center space-x-4">
                    <Link to="/auth/register" className="px-4 py-2 bg-green-500 rounded hover:bg-green-600 transition">
                        ¿No tienes una cuenta? Regístrate
                    </Link>
                </div>
            </nav>
        </>
    );
}