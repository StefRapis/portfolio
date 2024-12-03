import styles from "@/components/projects/projects.module.scss";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <div className={styles.Projects} id="projects">
      <div className="containerHome">
        <div className={styles.wrapper}>
          <div className={styles.case}>
            <Link href="/DipCoe">
              <div className={styles.image}>
                <Image
                  src="\images\coming soon.png"
                  alt="banner"
                  width={800}
                  height={600}
                />
              </div>
            </Link>
            <div className={styles.text}>
              <Link href="/dipcoe">
                <h2>Coming soon</h2>{" "}
              </Link>
              <p>UX/UI Design</p>
            </div>
            <div className={styles.spec}>
              <p>Coming soon!</p>
            </div>
          </div>
          <div className={styles.case}>
            <Link href="/citrace">
              <div className={styles.image}>
                {" "}
                <Image
                  src="/images/preview citrace.png"
                  alt="banner"
                  width={800}
                  height={600}
                />
              </div>
            </Link>
            <div className={styles.text}>
              <Link href="/citrace">
                <h2>CiTrace </h2>{" "}
              </Link>
              <p>UX/UI Design</p>
            </div>
            <div className={styles.spec}>
              <p>Citrus tracking platform</p>
            </div>
          </div>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.case}>
            <Link href="/firemusa">
              <div className={styles.image}>
                <Image
                  src="\images\intro fire.jpg"
                  alt="banner"
                  width={800}
                  height={600}
                />
              </div>
            </Link>
            <div className={styles.text}>
              <Link href="/firemusa">
                <h2>FIRE MUSA</h2>{" "}
              </Link>
              <p>Wordpress | UX/UI Design</p>
            </div>
            <div className={styles.spec}>
              <p>Wordpress website and self-assessment tool design</p>
            </div>
          </div>
          <div className={styles.case}>
            <Link href="/amts">
              <div className={styles.image}>
                {" "}
                <Image
                  src="/images/intro amts.png"
                  alt="banner"
                  width={800}
                  height={600}
                />
              </div>
            </Link>
            <div className={styles.text}>
              <Link href="/amts">
                <h2>AMTS - Azienda Metropolitana Trasporti e Sosta </h2>{" "}
              </Link>
              <p>UX/UI Design</p>
            </div>
            <div className={styles.spec}>
              <p>On-street parking spaces tracking platform</p>
            </div>
          </div>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.case}>
            <Link href="/thf">
              <div className={styles.image}>
                {" "}
                <Image
                  src="/images/intro thf.png"
                  alt="banner"
                  width={800}
                  height={600}
                />
              </div>
            </Link>
            <div className={styles.text}>
              <Link href="/thf">
                <h2>THF</h2>{" "}
              </Link>
              <p>UX/UI Design</p>
            </div>
            <div className={styles.spec}>
              <p>Investing platform</p>
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
                  src="/images/3.gif"
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
      </div>
    </div>
  );
};

export default Projects;
