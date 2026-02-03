import { Cart } from "@/app/assets/icons";

const CartDrawer = () => {
    return (
        <div>
            <button className="cursor-pointer">
                <Cart />
            </button>

            <div className="bg-white border border-neutral-500/20 fixed right-1 z-9999 w-100 shadow-2xl p-4">
                <span className="text-sm text-neutral-500">Seu carrinho</span>

                <div>
                    <div className="mt-4">
                        <div className="border-b border-b-neutral-500/30 w-full mb-2 flex justify-between">
                            <div className="mb-2">
                                <span className="font-bold text-xl mb-2">Nome do Produto</span>
                                <button className="block text-secondary text-sm text-neutral-600 cursor-pointer">Remover</button>
                            </div>
                            <div>
                                <span>R$ 46,50</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <div className="border-b border-b-neutral-500/30 w-full mb-2 flex justify-between">
                            <div className="mb-2">
                                <span className="font-bold text-xl mb-2">Nome do Produto</span>
                                <button className="block text-secondary text-sm text-neutral-600 cursor-pointer">Remover</button>
                            </div>
                            <div>
                                <span>R$ 46,50</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 text-sm text-neutral-500">
                    <div className="flex justify-between items-center mb-1">
                        <span>Subtotal</span>
                        <span>R$ 59,90</span>
                    </div>

                    <div className="flex justify-between items-center mb-1">
                        <span>Frete</span>
                        <span className="text-green-600">Grátis</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span>Total</span>
                        <span>R$ 59,90</span>
                    </div>
                </div>

                <button className="bg-black text-white text-xl w-full py-2 mt-3 cursor-pointer">
                    Ir para o pagamento
                </button>
            </div>
        </div>
    )
}

export default CartDrawer;