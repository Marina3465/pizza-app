import { forwardRef } from "react";
import { SearchProps } from "./Search.props";
import cn from "classnames";
import styles from './Search.module.css'

const Search = forwardRef<HTMLInputElement, SearchProps>(function Input({ isValid = true, className, ...props }, ref) {
    return (
        <div className={styles['input-wrapper']}>

            <input ref={ref} className={cn(styles['input'], className, {
                [styles['invalid']]: isValid
            })} {...props} />
            <img className={styles['icon']} src="/search.svg" alt="search-icon" />
        </div>
    )
});

export default Search;