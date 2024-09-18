import styles from "./Footer.module.css";
import LocationLogo from "../assets/locationLogo.png";
import phoneLogo from "../assets/phoneLogo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <section className={styles.footer}>
        <div className={styles.footerMainContainer}>
          <hr className={styles.hr} />
          <div className={styles.allFooterContent}>
            <div className={styles.allfooterDescriptionContent}>
              <h2 className={styles.footerTitle}>ATPartners</h2>
              <p className={styles.footerDescription}>
                ATpartners, expert en installation de panneaux sandwich et
                menuiseries isothermes, compte 15 ans d'expérience. L'entreprise
                a réalisé plus de 100 chantiers en 2022, couvrant plus de 75,000
                m² en salles propres et chambres froides. Son chiffre d'affaires
                dépasse 2,600,000 € HT, avec des projets en France et à
                l'international.
              </p>
            </div>
            <div className={styles.allIInformationsFooterContent}>
              <h2 className={styles.footerTitle}>INFORMATION</h2>

              <div className={styles.generaleInformation}>
                <div className={styles.logoTitle}>
                  <img src={LocationLogo} alt="" className={styles.adressImg} />
                  <h3 className={styles.evry}>Evry (france)</h3>
                </div>
                <p className={styles.adress}>
                  23 ALL GABRIELLE COLETTE 95330 DOMONT
                </p>
              </div>
              <div className={styles.generaleInformation}>
                <div className={styles.logoTitle}>
                  <img src={phoneLogo} alt="" className={styles.adressImg} />
                  <h3 className={styles.evry}>PHONE NUMBER</h3>
                </div>
                <p className={styles.phoneNumber}>+33 (0)7 89 01 01 94</p>
              </div>
            </div>
            <div className={styles.allSiteMapContent}>
              <h2 className={styles.footerTitle}>SITEMAP</h2>
              <div className={styles.footerLinks}>
                {/* <a className={styles.aLinks} href="/">
                  ATpartners
                </a>
                <a className={styles.aLinks} href="/ATservices">
                  ATservices
                </a>
                <a className={styles.aLinks} href="">
                  ATimmobilier
                </a>
                <a className={styles.aLinks} href="">
                  ATpromotion
                </a>
                <a className={styles.aLinks} href="/contact">
                  Contact
                </a> */}
                <Link
                  className={styles.aLinks}
                  to={{
                    pathname: "/",
                  }}
                >
                  ATpartners
                </Link>
                <Link
                  className={styles.aLinks}
                  to={{
                    pathname: "/ATservices",
                  }}
                >
                  ATservices
                </Link>
                <Link
                  className={styles.aLinks}
                  to={{
                    pathname: "/Atimmobilier",
                  }}
                >
                  ATimmobilier
                </Link>
                <Link
                  className={styles.aLinks}
                  to={{
                    pathname: "/ATpromotion",
                  }}
                >
                  ATpromotion
                </Link>
                <Link
                  className={styles.aLinks}
                  to={{
                    pathname: "/contact",
                  }}
                >
                  Contact
                </Link>
                <a className={styles.aLinks} href="">
                  Politique de cookies (UE)
                </a>
              </div>
            </div>
          </div>
          <hr className={styles.hr} />
          <p className={styles.footerEnding}>
            ©2024 ATpartners –{" "}
            <a className={styles.coloredWords} href="">
              Mentions légales
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
