import styles from "@/styles/About.module.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";

function About() {
  return (
    <div className={styles.About}>
      <Header />
      <div className="container">
        <div className={styles.aboutContainer}>
          <div className={styles.image}>
            <Image
              src="/images/stefania.jpg"
              alt="photo of Stefania Rapisarda"
              width={800}
              height={600}
            />
          </div>
          <div className={styles.info}>
            <div className={styles.title}>
              <h1>Stefania Rapisarda</h1>
              <p>Hello! Welcome to my portfolio!</p>
            </div>

            <div className={styles.intro}>
              <div className={styles.project}>
                <p>
                  After graduating in Musical Theatre, I discovered the field of
                  UX/UI Design, and it was love at first sight! My passion for
                  the tech world led me to first train as a Frontend Web
                  Developer and then as a UX Designer. <br />
                  My ultimate goal is to create seamless and user-centric
                  digital experiences that not only meet the needs of users but
                  also delight and engage them. <br /> <br />
                  In my free time I like to paint, sing and spend time in nature
                  with my dogs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
