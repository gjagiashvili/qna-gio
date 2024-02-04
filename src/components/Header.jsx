import styles from "../modules/Header.module.scss";
import Logo from "../assets/images/icon-star.svg";

const Header = () => {
  return (
    <>
      <header className={styles["logo-text-header"]}>
        <img className={styles["logo"]} src={Logo}></img>
        <h1 className={styles["header-text"]}>FAQs</h1>
      </header>
    </>
  );
};
export default Header;
