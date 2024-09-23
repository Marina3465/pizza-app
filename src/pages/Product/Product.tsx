import { FC } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Product } from "../../interfaces/product.interface";

interface ProductProps {

}

const Product: FC<ProductProps> = () => {
    // const params = useParams();
    const data = useLoaderData() as Product;

    return (
        <div>Product - {data.name}</div>
    );
}

export default Product;