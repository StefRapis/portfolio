import styles from "@/components/hero/hero.module.scss";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className="container">
        <h1 className={styles.h1}>
          <span className={styles.hand}>👋🏼</span>Hi, I'm Stefania.
        </h1>
        <p>
          I'm a <span className={styles.designer}>Product Designer</span> and
          sometimes, Developer. <br />I enjoy crafting meaningful visual
          experiences that help enriching people's lives. I have a passion for
          colours, shapes and everything visual. <br /> <br />
          <Link href="#projects">
            {" "}
            <a>CHECK OUT MY WORK</a>{" "}
          </Link>
        </p>
        <br />
      </div>
    </div>
  );
};

export default Hero;
