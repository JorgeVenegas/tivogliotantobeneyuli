import { dic31, dic31_2, ene1 } from "./assets";
import { NavBar, Hero, Divider, Day } from "./components";
import Footer from "./components/Footer";
import TodayButton from "./components/TodayButton";
import styles from "./style";

const App = () => {

  return (
    <div className="w-full overflow-hidden ">
      <div className="fixed sm:bottom-8 bottom-4 sm:right-8 right-2">
        <TodayButton />
      </div>
      <div className={`${styles.flexCenter} z-50`}>
        <NavBar />
      </div>

      <div className={`bg-secondary ${styles.flexStart}} z-0`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <Divider text={"2022"} bgColor="bg-primary" />
      <Day bgColor="bg-third" name="DIC3122" day="Dic. 31, 2022"
        title="Se va un 2022 muy bonito..."
        paragraphs={[[{ text: "Holaaaa,", underlined: true }], [{ text: "La verdad es que es muchísimo lo que puedo decir de este año. Sin lugar a dudas has sido una bendición gigantesca para mi vida, has llegado a cambiarlo todo y siempre estaré agradecido con Dios por permitirnos coincidir y ser parte de una historia tan bonita como la nuestra. ", }], [{ text: "A pesar de nosotros, Dios ha sido bueno y estoy feliz por el lugar en el que nos encontramos hoy en día. ", marked: true }], [{ text: "Hoy termina un a;o de mucho aprendizaje, de momentos buenos y momentos malos, de muchas risas y muchas lágrimas. Deseo con todo el corazón que te quedes tanto con lo bueno como con lo malo. Lo bueno para recordar momentos felices que viviste, y lo malo para recordar que a pesar de todo no estamos solos y que al final del día..." }], [{ text: "Todo estará bien :)", marked: true }], [{ text: "Has sido lo más bonito de mi 2022; el impacto que has generado en mi vida es inmesurable, y espero de todo corazón que de tu parte exista un sentimiento similar hacia mi. Te quiero tantisimo e intento aportar tanto a tu vida como tu lo haces conmigo." }], [{ text: "Me quedo contigo hasta el día que Dios me lo permita, y hasta ese día, usaré todos los medios posibles (como este) para hacerte saber que te llevo en el fondo de mi corazón siempre, en donde quiera que esté." }], [{ text: "Espero que en tu 2023 puedas...", marked: true }], [{ text: "1. Vivir en una misión, con un propósito que honre y agrade a Dios. Acercarte cada vez más a Él.", underlined: true }], [{ text: "2. Lograr todas tus metas académicas, profesionales y personales." }], [{ text: "3. Conocer a personas que te hagan bien y te quieran mucho :)", underlined: true }], [{ text: "4. Bendecir a muchas personas con todo tu amor y tu talento." }], [{ text: "5. Disfrutar a tus seres queridos al máximo; que vivas con ellos momentos inolvidables.", underlined: true }], [{ text: "6. Vivir experiencias llenas de aprendizaje que te permitan crecer y desarrollarte en todos los aspectos de tu vida." }], [{ text: "7. Amar y ser amada de la manera más bonita posible.", underlined: true }], [{ text: "8. Cumplir absolutamente todo lo que te propongas. Que tus sueños se hagan realidad :)" }], [{ text: "Cuentas conmigo para todo, siempre, bonita.", marked: true }], [{ text: "Si es que me lo permites, me gustaría caminar contigo este 2023. Somos un equipo muy bonito :) y...." }], [{ text: "¡A tu lado todo es mejor!", underlined: true }], [{ text: "Feliz fin de año y pròspero año nuevo a mi solecito que tanto quiero. Nos vemos pronto, bonita.", marked: true }], [{ text: "Un par de fotos bonitas de este año. Solo 2 por que tengo como 1000 favoritas jejeje" }],]}
        images={[dic31, dic31_2]} />
      <Divider text={"2023"} bgColor="bg-primary" />
      <Day bgColor="bg-fourth" name="today" day="Ene. 01, 2023"
        title="Llega un 2023 de nuevas experiencias..."
        paragraphs={[[{ text: "Holi,", underlined: true }], [{ text: "Hoy empieza un nuevo año, un nuevo ciclo en tu vida, y estoy muuuuuuy emocionado de poder ser parte de.", underlined: true }], [{ text: "Hoy te encuentras ente una nueva oportunidad de cambiar auqellos hábitos que pudieras llegar a considerar 'malos', y comenzar a trabajar en hábitos sanos que te permitan cumplir los objetivos que has definido para este 2023. " }], [{ text: "Estoy bastante expectante por lo que viene y sé que tu también. Sé que lo que Dios tiene preparado para nosotros es algo muy bonito y ansío poder experimentarlo día tras día a lo largo del año. ", marked: true }], [{ text: "Por lo pronto, vayamos un día a la vez, buscando hacer siempre el bien y merjoar en la medida de lo posible. Trabajar en nuestra relación con Él y en el propósito que tiene para nosotros. " }], [{ text: "Estoy muy emocionado por este plan que hemos empezado hoy, espero podamos llevarlo a cabo de inicio a fin. Que el interés individual por conocer de Dios siga creciendo y que podamos ser de apoyo para el crecimiento del otro.", underlined: true }], [{ text: "Espero poder contribuir a la formación de este buen hábito en tí y que cada día busquemos aprender de su palabra de manera individual y en conjunto. " }], [{ text: "Cierro este día mencionando que en mi encontrarás a alguien con quien compartir, meditar, reflexionar y profundizar en lo que vayamos leyendo día con día.", underlined: true }], [{ text: "Adjunto captura de este compromiso que hacemos hoy cada consigo mismo y con Dios, y que compartiremos durante los próximos 365 días, y muchos más, si Dios quiere." }], [{ text: "Te quiero tanto, bonita :)", marked: true }], [{ text: "Hoy en mi oración...", }], [{ text: "Le pido a Dios que te cuide, que te permita reflexionar en lo que escuchaste y aprendiste en el día por medio de las prédicas y las lecturas. Le pido que tu salpullido se vaya reduciendo con el tiempo y que te permita controlar la reacción de mejor manera. Le ruegome permita aportar a reducir tus niveles de estrés en el futuro, y que estés bien en cuestión de salud. También, pido que pronto llegue una oportunidad de trabajo que se acomode a tus tiempos y posibilidades. Que te permita desenvolverte en el ámbito profesional y que con quienes convivas se den cuenta de lo talentosa y valiosa que eres. Agradezco infinitamente por tu vida y ruego por que Dios te de muchos muchos muchos más días aquí en la Tierra.", underlined: true }]]}
        images={[ene1]} />
      <Footer />
    </div>
  )
}

export default App