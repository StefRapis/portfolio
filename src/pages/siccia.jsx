import Header from "@/components/header";
import Footer from "@/components/footer";
import styles from "@/styles/Siccia.module.scss";
import Image from "next/image";

export default function Siccia() {
  return (
    <div className={styles.Siccia}>
      <Header />
      <div className="container">
        <div className={styles.title}>
          <h1>Siccia</h1>
          <p>BRANDING, UI, WEB DESIGN</p>
        </div>
        <div className={styles.intro}>
          <div className={styles.project}>
            <h2>The Project</h2>
            <p>
              Siccia Fish Bar is a seafood restaurant nestled in the heart of
              Catania, Italy. I had the privilege of creating their brand
              identity and crafting the landing page, drawing inspiration from
              the vibrant colors and captivating atmospheres of the
              Mediterranean. <br /> <br /> I wanted to convey the freshness and
              authenticity of their seafood offerings, the warmth of the
              Sicilian culture, and the stunning coastal landscapes that
              surround Catania. To achieve this, I chose a color palette
              dominated by shades of azure blue and bright yellow, reminiscent
              of the sea and sandy beaches. These colors not only evoke the
              Mediterranean aesthetic but also elicit a sense of calm and
              relaxation, inviting customers to embark on a culinary journey by
              the sea.
            </p>
            <a href="https://www.siccia.it/" target="_blank">
              👉🏼 View the website
            </a>
          </div>
          <div className={styles.specs}>
            <div className={styles.role}>
              <span>ROLE</span>
              <p>Graphic & Web Designer </p>
            </div>
            <div className={styles.duration}>
              <span>DURATION</span>
              <p>June-August 2021</p>
            </div>
          </div>
        </div>
        <div className={styles.introImg}>
          <Image
            src="/images/siccia mockup2.png"
            alt="siccia mockup"
            width={800}
            height={600}
          />
        </div>
        <div className={styles.moodboard}>
          <Image
            src="/images/siccia-moodboard.png"
            alt="siccia moodboard"
            width={800}
            height={600}
          />
        </div>

        <div className={styles.mockups}>
          <Image
            src="/images/siccia-mockup3.gif"
            alt="siccia phone mockup"
            width={800}
            height={600}
          />
          <Image
            src="/images/siccia-mockup4.png"
            alt="siccia phone mockup"
            width={800}
            height={600}
          />
        </div>
        <div className={styles.real}>
          <Image
            src="/images/siccia-real.jpg"
            alt="Siccia exteriors"
            width={800}
            height={600}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
