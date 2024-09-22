import { FC } from "react";
import { HeadlingProps } from "./Headling.props";
import cn from 'classnames';
import styles from './Headling.module.css';
 
const Headling: FC<HeadlingProps> = ({children, className, ...props}) => {
    return ( 
        <h1 {...props} className={cn(className, styles['h1'])}>{children}</h1>
     );
}
 
export default Headling;