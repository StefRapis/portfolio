import styles from "@/components/header/header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.Header}>
      <section className={styles.logo}>
        <h1>
          <Link href="/">SR.</Link>
        </h1>
      </section>
      <nav>
        <ul>
          <li>
            <Link href="/">WORK</Link>
          </li>
          <li>
            {" "}
            <Link href="/about">ABOUT</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;