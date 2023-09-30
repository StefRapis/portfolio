import styles from "@/components/projects/projects.module.scss";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <div className={styles.Projects}>
      <div className="containerHome">
        <div className={styles.wrapper}>
          <div className={styles.case}>
            <Link href="/floasis">
              <div className={styles.image}>
                <Image
                  src="/images/floasis-banner.png"
                  alt="banner"
                  width={800}
                  height={600}
                />
              </div>
            </Link>

            <div className={styles.text}>
              <Link href="/floasis">
                {" "}
                <h2>FLOASIS</h2>{" "}
              </Link>
              <p>UX/UI Design</p>
            </div>
            <div className={styles.spec}>
              <p>
                User research, wireframing, prototyping, usability testing,
                Hi-Fi Mockups
              </p>
            </div>
          </div>

          <div className={styles.case}>
            <Link href="/siccia">
              <div className={styles.image}>
                <Image
                  src="/images/siccia mockup.png"
                  alt="banner"
                  width={800}
                  height={600}
                />
              </div>{" "}
            </Link>
            <div className={styles.text}>
              <Link href="/siccia">
                <h2>SICCIA</h2>{" "}
              </Link>
              <p>Web Design</p>
            </div>
            <div className={styles.spec}>
              <p>Branding, UI, Web design</p>
            </div>
          </div>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.case}>
            {/* <Link href="/cocktail"> */}
            <div className={styles.image}>
              <a href="https://cocktail-parade.vercel.app/" target="_blank">
                {" "}
                <Image
                  src="/images/Mockup-parade.png"
                  alt="banner"
                  width={800}
                  height={600}
                />
              </a>
            </div>
            {/* </Link> */}
            <div className={styles.text}>
              <Link href="/cocktail">
                <h2>COCKTAIL PARADE</h2>{" "}
              </Link>
              <p>Front-end | React</p>
            </div>
            <div className={styles.spec}>
              <p>Html, Css, Javascript</p>
            </div>
          </div>

          <div className={styles.case}>
            <Link href="/eventhub">
              <div className={styles.image}>
                <Image
                  src="/images/eventhub mockup.png"
                  alt="banner"
                  width={800}
                  height={600}
                />
              </div>
            </Link>
            <div className={styles.text}>
              <Link href="/eventhub">
                <h2>EVENTHUB</h2>{" "}
              </Link>
              <p>Front-end | Next.js</p>
            </div>
            <div className={styles.spec}>
              <p>Ticket platform developed in Next.js</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
