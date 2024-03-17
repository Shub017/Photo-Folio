import logo from './logo.png'
import style from './Navbar.module.css'
import classNames from 'classnames';
import 'animate.css';

export default function Navbar(){

    let pStyling = classNames('animate__animated', 'animate__zoomInDown');
    return(
        <div className={style.navbar}>
            <img className={style.coverImage} src={logo} alt='Logo of Photofolio'/>
            <p className={pStyling}>Photo Folio</p>
        </div>
    )
}