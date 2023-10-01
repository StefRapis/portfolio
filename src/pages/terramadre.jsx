import Header from "@/components/header";
import Footer from "@/components/footer";
import styles from "@/styles/Terramadre.module.scss";
import Image from "next/image";

export default function Terramadre() {
  return (
    <div className={styles.Terramadre}>
      <Header />
      <div className="container">
        <div className={styles.title}>
          <h1>Terra Madre</h1>
          <p>BRANDING</p>
        </div>
        <div className={styles.intro}>
          <div className={styles.project}>
            <h2>The Project</h2>
            <p>
              Terra Madre is a pizzeria located in Catania, Sicily. They make
              pizza the “old way”, using only sicilian unrefined flours and
              pursuing the kilometre 0 philosophy. <br /> <br /> I used hand
              drawn illustrations and a natural colour palette to convey a sense
              of organicity and genuineness.
            </p>
            <a
              href="https://www.thefork.it/ristorante/terramadre-pizzeria-biologica-e-senza-glutine-r696919"
              target="_blank"
            >
              👉🏼 View the pizzeria
            </a>
          </div>
          <div className={styles.specs}>
            <div className={styles.role}>
              <span>ROLE</span>
              <p>Graphic Designer </p>
            </div>
            <div className={styles.duration}>
              <span>DURATION</span>
              <p>March-May 2021</p>
            </div>
          </div>
        </div>
        <div className={styles.introImg}>
          <Image
            src="/images/terramadre-banner.jpg"
            alt="siccia mockup"
            width={800}
            height={600}
          />
        </div>
        <div className={styles.images}>
          <Image
            src="/images/terramadre1.jpg"
            alt="siccia mockup"
            width={800}
            height={600}
          />
          <Image
            src="/images/terramadre2.jpg"
            alt="siccia mockup"
            width={800}
            height={600}
          />
          <Image
            src="/images/terramadre3.jpg"
            alt="siccia mockup"
            width={800}
            height={600}
          />
          <Image
            src="/images/terramadre4.png"
            alt="siccia mockup"
            width={800}
            height={600}
          />
          <Image
            src="/images/terramadre5.jpg"
            alt="siccia mockup"
            width={800}
            height={600}
          />
          <Image
            src="/images/terramadre6.jpg"
            alt="siccia mockup"
            width={800}
            height={600}
          />
          <Image
            src="/images/terramadre7.jpg"
            alt="siccia mockup"
            width={800}
            height={600}
          />
          <Image
            src="/images/terramadre8.jpg"
            alt="siccia mockup"
            width={800}
            height={600}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
