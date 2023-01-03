import styles from "../style";

const Footer = () => {

    return (
        <div className={`bg-light ${styles.flexStart} z-0 border-t-8 border-primary`}>
            <div className={`${styles.boxWidth}`}>
                <section id="divider" className={`flex flex-col py-2`}>
                    <div className="w-full flex flex-col justify-center items-center">
                        <p className={`${styles.paragraph} text-center text-primary font-night font-extralight ss:text-[12px] text-[10px]`}>
                            Esta página fue creada y desarrollada completamente por:
                        </p>
                        <p className={`${styles.paragraph} text-center text-primary font-night font-extralight ss:text-[8px] text-[6px]`}>
                            El amor de tu vida, preciosa. ¿Quén más? Tqm.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Footer