import Navbar from "../navbar/Navbar";

export default function Header({ categories, isLoading }) {
    return (
        <header className="w-full bg-blue-700">
            <Navbar categories={categories} isLoading={isLoading} />
        </header>
    );
}