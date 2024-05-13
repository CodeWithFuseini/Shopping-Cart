
export interface Item{
    id: string,
    brand: string,
    description: string,
    price: number,
    rating: number,
    stock: number,
    thumbnail: string,
    title: string,
    category: string,
    discountPercentage: number,
    images: string[],
    quantity: number
}

export interface Load {
    loading: boolean
}

export interface Product extends Load {
    product: Item[]
    carts?: Item[]
}














