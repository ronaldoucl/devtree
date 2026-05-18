
import { Link } from "react-router-dom";

export default function RegisterView() {
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <h1 className="text-4xl font-bold">Register View</h1>
            </div>
            <nav className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-4">
                <div className="container mx-auto flex justify-center space-x-4">
                    <Link to="/auth/login" className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition">
                        ¿Ya tienes una cuenta? Inicia sesión
                    </Link>
                </div>
            </nav>
        </>
    );
}