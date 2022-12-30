import React from 'react'
import styles from '../style'

const Hero = () => (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className="flex flex-row justify-between items-center w-full">
                <h1 className='font-rosmatika text-white text-[81px]'>
                    Plan your perfect wedding with us.
                </h1>
            </div>
        </div>
    </section>
)

export default Hero