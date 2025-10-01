import { Link } from "react-router";
import { Container } from "../../components/container/container";

export function NotFound() {
    return (
        <Container>
            <div className="w-full min-h-screen flex flex-col justify-center items-center gap-14 py-20">
                <h1 className="text-6xl font-medium text-center text-gray-800">
                    404 - Página não encontrada
                </h1>

                <Link to="/">
                    <div className="w-fit bg-red-500 hover:bg-red-600 transition-colors duration-300 rounded-lg cursor-pointer px-6 py-3 border-2 border-gray-900">
                        <span className="text-white text-xl font-semibold">Voltar para o início</span>
                    </div>
                </Link>
            </div>
        </Container>
    )
}