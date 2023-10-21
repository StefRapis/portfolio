import styles from "@/components/skills/skills.module.scss";
import Image from "next/image";
import Link from "next/link";

const Skills = () => {
  return (
    <div className={styles.Skills}>
      <hr />
      <div className={styles.wrapper}>
        <h2>Skills & Tools</h2>
        <div className={styles.icons}>
          <div className={styles.icon1}>
            <Image
              src="/images/html.png"
              alt="skill"
              width={800}
              height={600}
            />
            <p>HTML</p>
          </div>
          <div className={styles.icon1}>
            <Image src="/images/css.png" alt="skill" width={800} height={600} />
            <p>CSS</p>
          </div>
          <div className={styles.icon1}>
            <Image src="/images/js.png" alt="skill" width={800} height={600} />
            <p>Javascript</p>
          </div>
          <div className={styles.icon1}>
            <Image
              src="/images/sass.png"
              alt="skill"
              width={800}
              height={600}
            />
            <p>Sass</p>
          </div>
          <div className={styles.icon1}>
            <Image src="/images/npm.png" alt="skill" width={800} height={600} />
            <p>Npm</p>
          </div>
          <div className={styles.icon1}>
            <Image
              src="/images/github2.png"
              alt="skill"
              width={800}
              height={600}
            />
            <p>GitHub</p>
          </div>
          <div className={styles.icon1}>
            <Image src="/images/git.png" alt="skill" width={800} height={600} />
            <p>Git</p>
          </div>
          <div className={styles.icon1}>
            <Image
              src="/images/react.png"
              alt="skill"
              width={800}
              height={600}
            />
            <p>React</p>
          </div>
          <div className={styles.icon1}>
            <Image
              src="/images/vscode.png"
              alt="skill"
              width={800}
              height={600}
            />
            <p>VsCode</p>
          </div>
          <div className={styles.icon1}>
            <Image
              src="/images/wordpress.png"
              alt="skill"
              width={800}
              height={600}
            />
            <p>Wordpress</p>
          </div>{" "}
          <div className={styles.icon1}>
            <Image
              src="/images/figma.png"
              alt="skill"
              width={800}
              height={600}
            />
            <p>Figma</p>
          </div>
          <div className={styles.icon1}>
            <Image
              src="/images/illustrator.png"
              alt="skill"
              width={800}
              height={600}
            />
            <p>
              Adobe <br /> Illustrator
            </p>
          </div>
          <div className={styles.icon1}>
            <Image
              src="/images/designer.png"
              alt="skill"
              width={800}
              height={600}
            />
            <p>
              Affinity <br /> Designer
            </p>
          </div>
          <div className={styles.icon1}>
            <Image
              src="/images/photo.png"
              alt="skill"
              width={800}
              height={600}
            />
            <p>
              Affinity <br />
              Photo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
