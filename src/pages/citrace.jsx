import Header from "@/components/header";
import Footer from "@/components/footer";
import styles from "@/styles/Firemusa.module.scss";
import Image from "next/image";

export default function Firemusa() {
  return (
    <div className={styles.Firemusa}>
      <Header />
      <div className="container">
        <div className={styles.title}>
          <h1>CiTrace</h1>
          <p>UX design, UI Design</p>
        </div>
        <div className={styles.intro}>
          <div className={styles.project}>
            <h2>The Project</h2>
            <p>
              <i>CiTrace</i> offers a reinterpretation of traceability in the
              Agrifood sector, viewing the product as an "Information Carrier"
              that gathers data throughout the entire production chain, from the
              field to the end consumer. <br /> The project aims to support
              agro-food companies in adopting advanced technologies for
              precision agriculture, supply chain traceability, and the creation
              of sustainable innovations, with a particular focus on long-term
              sustainability and citrus supply chains.
              <br /> <br />
              For this project, I was responsible for designing the entire
              platform.
              <br />
              <br />
            </p>
          </div>
          <div className={styles.specs}>
            <div className={styles.role}>
              <span>ROLE</span>
              <p>UX/UI Designer </p>
            </div>
            <div className={styles.duration}>
              <span>DURATION</span>
              <p>February-December 2024</p>
            </div>
          </div>
        </div>
        <div className={styles.introImg}>
          <Image
            src="\images\citrace.png"
            alt="citrace project"
            width={800}
            height={600}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
