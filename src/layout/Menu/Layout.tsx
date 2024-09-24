import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styles from './Layout.module.css';
import Button from "../../components/Buttons/Button";
import cn from 'classnames';
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { userActions } from "../../store/user.slice";


export function Layout() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const logout = () => {
        // localStorage.removeItem('jwt');
        dispatch(userActions.logout());

        navigate('/auth/login');
    }

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

            <Button onClick={logout} className={styles['exit']}>
                <img src="/exit.svg" alt="exit-icon" />
                Выйти
            </Button>

        </div>

        <div className={styles['content']}>
            <Outlet />
        </div>
    </div>
}