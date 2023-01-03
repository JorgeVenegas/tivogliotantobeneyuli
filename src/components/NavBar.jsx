import { useState } from 'react'
import { close, menu } from '../assets';
import styles from "./../style";

import { navLinks } from './../constants/index';

const NavBar = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <div className={`fixed top-0 left-0 w-full flex justify-center border-b-8 border-primary bg-light ${styles.paddingX}`}>
            <nav className={`w-full flex py-3 md:justify-between justify-center items-center navbar ${styles.boxWidth}`}>
                <span className='font-night font-normal text-[24px] text-primary'>tivogliotantobeneyuli</span>
                <span className='md:flex hidden font-night font-normal text-[12px] text-primary'>Un detalle para mi solecito. Te quiero millones y millones, nunca lo olvides, preciosa.</span>
            </nav>
        </div>
    )
}

export default NavBar