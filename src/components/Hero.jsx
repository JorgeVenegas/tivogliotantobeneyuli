import styles from "../style";
import { espejo } from "../assets";
import TodayButton from "./TodayButton";

const Hero = () => {
    return (
        <section id="home" className={`flex flex-col ${styles.paddingY} mt-16`}>
            <div className={`flex lg:flex-row flex-col mb-16`}>
                <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                    <div className="flex flex-row justify-between items-center w-full">
                        <h1 className="flex-1 font-punk font-normal ss:text-[140px] text-[120px] text-light ss:leading-[100.8px] leading-[75px] mb-5">
                            Hola, bonita.
                        </h1>
                    </div>

                    <p className={`${styles.paragraph} text-light font-night font-extralight ss:text-[24px] text-[18px] mt-5`}>
                        {"No sé hasta cuándo Dios me permita estar en tu vida, ni sé si vaya a llegar al final del 2023 contigo; no tengo la certza de que estaremos el día de mañana y "} <span className="underline underline-offset-4 decoration-4 decoration-primary"> {"es por eso que hice esta página."}</span>
                    </p>
                    <p className={`${styles.paragraph} text-light font-night font-extralight ss:text-[24px] text-[18px] mt-5`}>
                        {"Quiero decirte todos los días lo mucho que te quiero, lo mucho que siento por ti. Quiero que sin importar el tiempo y el espacio en el que nos encontremos recuerdes en todo momento que yo "} <mark className="bg-primary text-light rounded">{"ti voglio tanto bene, Yuli."}</mark> {" Quiero dejar todo esto plasmado en un lugar al que puedas volver las veces que quieras, cuando quieres y donde quieras <3."}
                    </p>
                    <p className={`${styles.paragraph} text-light font-night font-extralight ss:text-[24px] text-[18px] mt-5`}>
                        {"Sin importar cuando leas esto, quiero que sepas que hay alguien que piensa en ti "} <span className="underline underline-offset-4 decoration-4 decoration-primary"> {"todos los días"}</span> {", alguien que se preocupa en sobremanera por tu bienestar y que te desea una vida "} <span className="underline underline-offset-4 decoration-4 decoration-primary"> {"centrada en Cristo"}</span> {"llena de bendiciones. Alguien que quiere apoyarte en todos tus planes, que se deshace y se derrite por ti en todos los aspectos. "} <mark className="bg-primary text-light rounded">{"Te quiero tanto tanto tanto"}</mark> {" que no me son suficientes las palabras para dimensionarlo."}
                    </p>
                    <p className={`${styles.paragraph} text-light font-night font-extralight ss:text-[24px] text-[18px] mt-5`}>
                        {"Aquí nuestra primera fotito juntos."} <span className="underline underline-offset-4 decoration-4 decoration-primary"> {" ¡Vamos por un millón mas!"}</span>
                    </p>
                </div>

                <div className={`flex flex-1 flex-col justify-center items-center object-contain ${styles.flexCenter} my-10 sm:px-16 px-6 mx-auto max-w-[650px]`}>
                    <img src={espejo} alt="tu y yo bien bonitos conociendonos en vivo. te quiero <3" className="w-full h-auto py-3" />
                    <p className={`${styles.paragraph} text-light font-night font-extralight ss:text-[24px] text-[18px] py-3`}>
                        {"Vuelve "} <mark className="bg-primary text-light rounded">{"al final de cada día"}</mark> {" para una linda sorpresa :)"}
                    </p>
                    <div className="py-3">
                        <TodayButton />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
                <p className={`${styles.paragraph} text-light font-night font-extralight ss:text-[24px] text-[18px] pb-6`}>
                    {"Aquí empieza todo..."}
                </p>
            </div>
        </section>
    );
};

export default Hero;