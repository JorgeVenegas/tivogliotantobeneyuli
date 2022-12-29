import { NavBar, Hero, About, Services, Quote, ContactForm, Testimonials, FAQs, Footer } from "./components";
import styles from "./style";

const App = () => (
  <div className="w-full overflow-hidden">
    <div className={`${styles.flexCenter}`}>
      <NavBar />
    </div>

    <div className={`${styles.flexStart}}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`${styles.paddingX}} ${styles.flexStart}}`}>
      <div className={`${styles.boxWidth}`}>
        <About />
        <Services />
        <Quote />
        <ContactForm />
        <Testimonials />
        <FAQs />
        <Footer />
      </div>
    </div>
  </div>
)

export default App