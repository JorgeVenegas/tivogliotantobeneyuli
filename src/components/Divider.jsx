import styles from "../style";

const Divider = ({ text, bgColor }) => {
    return (
        <div className={`${bgColor} ${styles.flexStart} z-0`}>
            <div className={`${styles.boxWidth}`}>
                <section id="divider" className={`flex flex-col ${styles.paddingY}`}>
                    <div className="w-full flex justify-center">
                        <p className={`${styles.paragraph} text-light font-night font-extralight ss:text-[100px] text-[70px]`}>
                            {text}
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Divider