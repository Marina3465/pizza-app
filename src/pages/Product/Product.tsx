import { FC } from "react";
import { useParams } from "react-router-dom";

interface ProductProps {
    
}
 
const Product: FC<ProductProps> = () => {
    const params = useParams()
    return ( 
        <div>Product - {params.id}</div>
     );
}
 
export default Product;