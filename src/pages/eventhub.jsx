import Header from "@/components/header";
import styles from "@/styles/Eventhub.module.scss";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Eventhub() {
  return (
    <div className={styles.Eventhub}>
      <Header />
      <div className="container">
        <div className={styles.title}>
          <h1>EventHub</h1>
          <p>UI, WEB DEVELOPMENT</p>
        </div>
        <div className={styles.intro}>
          <div className={styles.project}>
            <h2>The Project</h2>
            <p>
              This project was developed by me and a team of fellow frontend
              developers. The goal of this platform is to allow users to browse
              and purchase tickets for upcoming events. <br /> <br />
              The design and build of the website, involved creating layouts
              that are optimized for small screens first before designing for
              larger screens. This approach ensured that website content is
              easily accessible and readable on mobile devices, such as
              smartphones and tablets, while still being adapted for desktop and
              laptop screens. <br /> <br /> The platform was developed using the
              following technologies:
              {/* <ul>
                <li> HTML</li>
                <li> SASS</li>
                <li> Javascript</li>
                <li> React.js</li>
                <li> Next.js</li>
              </ul>{" "}
              <br />A number of other libraries and tools were also used:
              <ul>
                <li> TicketMaster API</li>
                <li> Local Storage</li>
                <li> UseReducer & UseContext hooks</li>
                <li> GIT / GitHub</li>
                <li> Firebase</li>
                <li> Figma</li>
              </ul> */}
            </p>
            <a
              href="https://project-cb6-terence-hill.vercel.app/"
              target="_blank"
            >
              👉🏼 View the website in action!
            </a>{" "}
            <br />
            <a
              href="https://github.com/casiimir/project-cb6-terence-hill/tree/main"
              target="_blank"
            >
              👉🏼 Go to the repository
            </a>
          </div>
          <div className={styles.specs}>
            <div className={styles.role}>
              <span>ROLE</span>
              <p>Web developer </p>
            </div>
            <div className={styles.duration}>
              <span>DURATION</span>
              <p>April 2023</p>
            </div>
          </div>
        </div>
        <div className={styles.introImg}>
          <Image
            src="/images/eventhub-intro.jpg"
            alt="hero image of eventhub"
            width={800}
            height={600}
          />
        </div>
        <div className={styles.allmockup}>
          <Image
            src="/images/mockup_desktop.jpg"
            alt="all mockups of eventhub"
            width={800}
            height={600}
          />
        </div>
        <div className={styles.figma}>
          <Image
            src="/images/eventhub_figma.png"
            alt="figma file of eventhub"
            width={800}
            height={600}
          />
        </div>
        <div className={styles.mobile}>
          <Image
            src="/images/eventhub_mobile.jpg"
            alt="mobile version of eventhub"
            width={800}
            height={600}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
