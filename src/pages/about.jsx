import styles from "@/styles/About.module.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";

function About() {
  return (
    <div className={styles.About}>
      <Header />
      <div className="container">
        <div className={styles.title}>
          <h1>Stefania Rapisarda</h1>
          <p>BRANDING, UI, WEB DESIGN</p>
        </div>
        <div className={styles.intro}>
          <div className={styles.project}>
            <h2>The Project</h2>
            <p>
              Siccia Fish Bar is a seafood restaurant nestled in the heart of
              Catania. I had the privilege of creating their brand identity and
              crafting the landing page, drawing inspiration from the vibrant
              colors and captivating atmospheres of the Mediterranean. <br />{" "}
              <br /> I wanted to convey the freshness and authenticity of their
              seafood offerings, the warmth of the Sicilian culture, and the
              stunning coastal landscapes that surround Catania. To achieve
              this, I chose a color palette dominated by shades of azure blue
              and bright yellow, reminiscent of the sea and sandy beaches. These
              colors not only evoke the Mediterranean aesthetic but also elicit
              a sense of calm and relaxation, inviting customers to embark on a
              culinary journey by the sea.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
