import Image from "next/image";
import Link from "next/link";
import CartDrawer from "../Cart";

const Navbar = () => {
    return (
        <nav className="fixed bg-white flex items-center justify-between px-16 py-4 w-full">
            <div className="flex items-center">
                <Link href="#" className="mr-8">
                    <Image src="/logo.svg" width={70} height={36} alt="Logo da loja" />
                </Link>

                <ul className="flex gap-4">
                    <li>
                        <Link href="#">Início</Link>
                    </li>
                    <li>
                        <Link href="#">Loja</Link>
                    </li>
                    <li>
                        <Link href="#">Carrinho</Link>
                    </li>
                </ul>
            </div>

            <CartDrawer />
        </nav>
    )
}

export default Navbar;