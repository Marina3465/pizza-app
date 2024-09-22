import { NavLink, Outlet } from "react-router-dom";
import styles from './Layout.module.css';
import Button from "../../components/Buttons/Button";
import cn from 'classnames';


export function Layout() {



    return <div className={styles['layout']}>
        <div className={styles['sidebar']}>

            <div className={styles['user']}>
                <img className={styles['avatar']} src="/avatar.svg" alt="avatar-icon" />
                <div className={styles['name']}>Марина Кожухар</div>
                <div className={styles['email']}>kozhyxarm12@gmail.com</div>
            </div>

            <div className={styles['menu']}>
                <NavLink to='/' className={({ isActive }) => cn(styles['link'], {
                    [styles.active]: isActive
                })}>
                    <img src='/menu.svg' alt="menu-icon" />
                    Меню</NavLink>

                <NavLink to='/cart' className={({ isActive }) => cn(styles['link'], {
                    [styles.active]: isActive
                })}>
                    <img src='/cart.svg' alt="cart-icon" />
                    Корзина</NavLink>
            </div>

            <Button className={styles['exit']}>
                <img src="/exit.svg" alt="exit-icon" />
                Выйти
            </Button>

        </div>

        <div className={styles['content']}>
            <Outlet />
        </div>
    </div>
}