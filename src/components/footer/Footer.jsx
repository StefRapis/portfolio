import styles from "@/components/footer/footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.info}>
        <h3>Get in touch!</h3>
        <div className={styles.allinfo}>
          <p>
            Reach me at <br />
            <span>stefaniarapisarda.itaca@gmail.com</span>
          </p>
          <div className={styles.icons}>
            <a
              href="https://www.linkedin.com/in/stefaniarapisarda/"
              target="_blank"
            >
              <img src="/images/linkedin2.png" alt="" />
            </a>
            <a href="https://github.com/stefRapis" target="_blank">
              <img src="/images/github.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <p className={styles.made}>made with ❤️ in Next.js </p>
      <div className={styles.copyright}>
        <p>Copyright© Stefania Rapisarda</p>
      </div>
    </div>
  );
};

export default Footer;
