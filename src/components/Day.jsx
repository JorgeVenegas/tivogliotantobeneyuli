import styles from "../style";

const Day = ({ name, day, title, paragraphs, images, bgColor }) => {

    return (
        <div className={`${bgColor} ${styles.flexStart} z-0`}>
            <div id={name === "today" ? "today" : ""} className="relative -top-[60px]"></div>
            <div className={`${styles.boxWidth}`}>
                <section className={`flex flex-col ${styles.paddingY}`}>
                    <div className="w-full flex justify-center">
                        <p className={`${styles.paragraph} text-light font-night font-extralight ss:text-[36px] text-[24px]`}>
                            <mark className="bg-primary text-light rounded">{day}</mark>
                        </p>
                    </div>
                    <div className={`${name === "prox" ? "hidden" : ""} flex md:flex-row flex-col mt-8`}>
                        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                            <div className="flex flex-row justify-between items-center w-full">
                                <h1 className="flex-1 font-punk font-normal ss:text-[80px] text-[60px] text-light ss:leading-[55px] leading-[40px] mb-5">
                                    {title}
                                </h1>
                            </div>

                            {paragraphs.map((paragraph, indexp) => {
                                let item = "";
                                paragraph.map((sentence, indexs) => {
                                    if (sentence.marked === true) {
                                        item = (
                                            <p className={`${styles.paragraph} text-light font-night font-extralight ss:text-[24px] text-[18px] mt-5`}>
                                                <mark className="bg-primary text-light rounded">{sentence.text}</mark>
                                            </p>
                                        )
                                    } else if (sentence.underlined === true) {
                                        item = (
                                            <p className={`${styles.paragraph} text-light font-night font-extralight ss:text-[24px] text-[18px] mt-5`}>
                                                <span className="underline underline-offset-4 decoration-4 decoration-primary"> {sentence.text}</span>
                                            </p>
                                        )
                                    } else {
                                        item = (
                                            <p className={`${styles.paragraph} text-light font-night font-extralight ss:text-[24px] text-[18px] mt-5`}>
                                                {sentence.text}
                                            </p>
                                        )
                                    }
                                })
                                return item;
                            }
                            )}
                        </div>

                        <div className={`${name === "prox" ? "hidden" : ""} flex flex-1 flex-col justify-center items-center object-contain ${styles.flexCenter} sm:px-16 px-6 mx-auto max-w-[650px]`}>
                            {images ? images.map((image) => (
                                <img src={image} className={`w-full h-auto sm:py-16 py-6 ${image ? "" : "hidden"}`} />
                            )) : ""
                            }
                            <p className={`${styles.paragraph} text-light font-night font-extralight ss:text-[24px] text-[18px] mt-5`}>
                                {"Vuelve mañana, "} <mark className="bg-primary text-light rounded">{"ti voglio tanto bene, Yuli."}</mark>
                            </p>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default Day