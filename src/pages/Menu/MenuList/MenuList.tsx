import { FC } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { MenuListProps } from "./MenuList.props";
import styles from './MenuList.module.css'

const MenuList: FC<MenuListProps> = ({ products }) => {
    return (
        <div className={styles['wrapper']}>
            {products.map(p => (

                <ProductCard
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    description={p.ingredients.join(', ')}
                    rating={p.rating}
                    price={p.price}
                    image={p.image} />
            ))}
        </div>
    )

}

export default MenuList;