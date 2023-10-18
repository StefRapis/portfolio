import styles from "@/components/header/header.module.scss";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.Header}>
      {/* <section className={styles.logo}>
        <h1>
          <Link href="/">SR.</Link>
        </h1>
      </section> */}

      <Link href="/">
        <div className={styles.logo}>
          <Image src="/images/5.gif" alt="signature" width={200} height={80} />
        </div>
      </Link>
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
