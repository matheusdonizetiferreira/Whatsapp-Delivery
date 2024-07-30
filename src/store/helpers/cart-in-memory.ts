import { ProductCartProps } from "../cart-store";
import { ProductProps } from "../../../utils/data/products";

export function add(products: ProductCartProps[], newProduct: ProductProps) {
    // product.find pelo id e vejo se o newProduct.id é igual ao id do produto já existente aqui
    const existingProduct = products.find(({ id }) => newProduct.id === id)

    // verifica o produto existente da lista e incrementar +1
    if (existingProduct) {
        return products.map(product =>
            product.id === existingProduct.id ? { ...product, quantity: product.quantity + 1 } : product
        )
    }

    return [...products, { ...newProduct, quantity: 1 }]
}