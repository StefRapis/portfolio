import Header from "@/components/header";
import Footer from "@/components/footer";
import styles from "@/styles/Amts.module.scss";
import Image from "next/image";

export default function Amts() {
  return (
    <div className={styles.Amts}>
      <Header />
      <div className="container">
        <div className={styles.title}>
          <h1>AMTS-Azienda Metropolitana Trasporti e Sosta</h1>
          <p>UX Design, UI Design</p>
        </div>
        <div className={styles.intro}>
          <div className={styles.project}>
            <h2>The Project</h2>
            <p>
              For the{" "}
              <i>
                <strong>
                  Metropolitan Transport and Parking Company of Catania
                </strong>
              </i>
              , I developed a parking stall tracking platform. <br />
              The objective was to design a desktop platform that would enable
              the company’s operators to easily and intuitively add, modify, or
              delete paid parking stalls within the city of Catania. <br />
              <br />
              To achieve this, I focused on simplicity and essential
              functionality, creating only three main sections tailored to
              accomplish this specific task:
              <ul>
                <li>
                  A <strong>map of Catania</strong> displaying all existing
                  stalls, allowing operators to search for and add new ones.
                </li>
                <li>
                  A <strong>Registry section</strong> that lists all existing
                  stalls in a comprehensive table.
                </li>
                <li>
                  A <strong>User Management</strong> section for overseeing the
                  accounts of operators who will use the platform.
                </li>
              </ul>
              <br />
              The logo was an existing asset, so I aligned the platform with the
              established brand identity, creating a cohesive experience across
              the company’s various tools.
            </p>
          </div>
          <div className={styles.specs}>
            <div className={styles.role}>
              <span>ROLE</span>
              <p>UX/UI Designer </p>
            </div>
            <div className={styles.duration}>
              <span>DURATION</span>
              <p>May 2024</p>
            </div>
          </div>
        </div>
        <div className={styles.introImg}>
          <Image
            src="\images\intro amts.png"
            alt="homepage for amts catania"
            width={800}
            height={600}
          />
        </div>
        <div className={styles.images}>
          <Image
            src="\images\screen amts.png"
            alt="mockup screens for amts catania"
            width={800}
            height={600}
          />
        </div>
        <div className={styles.images}>
          <Image
            src="\images\amts1.png"
            alt="mockup screens for amts catania"
            width={800}
            height={600}
          />
        </div>
        <div className={styles.images}>
          <Image
            src="\images\amts2.png"
            alt="mockup screens for amts catania"
            width={800}
            height={600}
          />
        </div>
        <div className={styles.images}>
          <Image
            src="\images\amts3.png"
            alt="mockup screens for amts catania"
            width={800}
            height={600}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
