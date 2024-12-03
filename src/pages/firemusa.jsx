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
          <h1>Fire Musa</h1>
          <p>Wordpress, Wireframing, UI Design</p>
        </div>
        <div className={styles.intro}>
          <div className={styles.project}>
            <h2>The Project</h2>
            <p>
              <i>Fire Musa</i> is a research and development project by the
              Ministry. I was asked to create two deliverables: <br /> <br />
              <ol>
                <li>
                  A <strong>WordPress landing page</strong> that would serve as
                  a showcase for the project, allowing interested participants
                  to view the application call and apply through a dedicated
                  form.
                </li>
                <li>
                  A <strong>self-assessment tool</strong> for entrepreneurial
                  skills, intended for the companies invited to participate in
                  the project.
                </li>
              </ol>
              <br />
              The tool needed to include 70 questions divided into 7 sections. I
              opted to design the tool as a wizard, breaking the questions into
              7 separate sections and organizing them into a step-by-step
              process, facilitating easy navigation between sections. A
              draft-saving feature was also implemented, allowing participants
              to return and complete the tool at a later time. Upon completion,
              a PDF was automatically generated with the provided responses and
              sent via email to the participant.
            </p>
            <a href="https://firemusa.it/" target="_blank">
              👉🏼 View the website
            </a>
          </div>
          <div className={styles.specs}>
            <div className={styles.role}>
              <span>ROLE</span>
              <p>UX/UI Designer </p>
            </div>
            <div className={styles.duration}>
              <span>DURATION</span>
              <p>July-September 2024</p>
            </div>
          </div>
        </div>
        <div className={styles.introImg}>
          <Image
            src="\images\sito wordpress.png"
            alt="fire musa wordpress website"
            width={800}
            height={600}
          />
        </div>
        <div className={styles.images}>
          <Image
            src="\images\wireframes sito.png"
            alt="wireframes sito mockup"
            width={800}
            height={600}
          />
          <Image
            src="\images\figma fire.png"
            alt="figma for fire musa"
            width={800}
            height={600}
          />
          <Image
            src="/images/tool.png"
            alt="fire musa mockup"
            width={800}
            height={600}
          />
          <Image
            src="/images/tool mobile.png"
            alt="fire musa mockup"
            width={800}
            height={600}
          />
          <Image
            src="/images/schermate tool.png"
            alt="fire musa mockup"
            width={800}
            height={600}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
