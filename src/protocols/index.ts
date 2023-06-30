
export type Products = {
    id?: number;
    name: string;
    descricao: string;
    valor: string;
    image: string;
}


export type createProducts = Omit<Products, "id">