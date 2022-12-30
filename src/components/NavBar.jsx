import { useState } from 'react'
import { close, logo, menu } from '../assets';
import styles from "./../style";

import { navLinks } from './../constants/index';

const NavBar = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <div className={`w-full flex justify-center border-b-8 border-secondary ${styles.paddingX}`}>
            <nav className={`w-full flex py-3 justify-between items-center navbar ${styles.boxWidth}`}>
                <img src={logo} alt='Oh My Wedding Logo' className='w-[148px] h-[37px]' />
                <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                    {navLinks.map((nav, index) => (
                        <li key={nav.id} className={`font-regasto font-normal cursor-pointer text-[18px] text-primary ${index === navLinks.length - 1 ? 'mr-0' : ' mr-10'}`}>
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))
                    }
                </ul>

                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain z-50' onClick={() => setToggle(prev => !prev)} />

                    <div className={`${toggle ? 'flex' : 'hidden'} w-full h-screen absolute right-0 top-0 z-0 overflow-y-clip z-0`}>
                        <div className='bg-white w-screen h-screen'>
                            <ul className='list-none flex flex-col justify-between items-center flex-1 h-full py-24'>
                                {navLinks.map((nav, index) => (
                                    <li key={nav.id} className={`font-regasto font-normal cursor-pointer text-[24px] text-primary`}>
                                        <a href={`#${nav.id}`}>{nav.title}</a>
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar