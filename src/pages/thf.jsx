import Header from "@/components/header";
import Footer from "@/components/footer";
import styles from "@/styles/Thf.module.scss";
import Image from "next/image";

export default function Thf() {
  return (
    <div className={styles.Thf}>
      <Header />
      <div className="container">
        <div className={styles.title}>
          <h1>THF</h1>
          <p>WIREFRAMING, UX/UI DESIGN</p>
        </div>
        <div className={styles.intro}>
          <div className={styles.project}>
            <h2>The Project</h2>
            <p>
              The <strong>THF</strong> platform was created as a matching
              platform between companies and investors. This flow was designed
              from the perspective of the investor who wants to invest in
              potential companies and shows the notification process for a new
              opportunity, starting from the initial dashboard and leading to
              the sharing of that opportunity with other interested investors
              within the platform. <br />
              For this project, the development began with the creation of the
              flow through wireframes, culminating in high-fidelity mockups.
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
            src="/images/thf_wireframes.png"
            alt="thf wireframes"
            width={800}
            height={600}
          />
        </div>
        <div className={styles.real}>
          <Image
            src="/images/homepage.png"
            alt="hi-fi mockups"
            width={800}
            height={600}
          />
        </div>

        <div className={styles.real}>
          <Image
            src="/images/new notification.png"
            alt="hi-fi mockups"
            width={800}
            height={600}
          />
        </div>

        <div className={styles.real}>
          <Image
            src="/images/opportunity details.png"
            alt="hi-fi mockups"
            width={800}
            height={600}
          />
        </div>

        <div className={styles.real}>
          <Image
            src="/images/share opportunity.png"
            alt="hi-fi mockups"
            width={800}
            height={600}
          />
        </div>

        <div className={styles.real}>
          <Image
            src="/images/opportunities page.png"
            alt="hi-fi mockups"
            width={800}
            height={600}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
