import styles from "./AtservicesHeader.module.css";
import ATservicesMain from "../../assets/AtservicesHeader.jpg";

export default function AtservicesHeader() {
  const displayed = window.innerWidth;
  function scroll(text) {
    const element = document.getElementById(text);
    if (element) {
      const { top } = element.getBoundingClientRect();
      const offset = top + window.scrollY - 100; // Décalage de 100 pixels au-dessus de l'élément
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        window.scrollTo({ top: offset, behavior: "smooth" });
      }, 100);
      console.log(text);
    }
  }
  return (
    <>
      <section className={styles.ATservicesheader}>
        <div
          className={styles.mainPicture}
          id={displayed > 1000 ? "atserviceshome" : null}
        >
          <img src={ATservicesMain} alt="" className={styles.formBackground} />
          <div className={styles.gradient}></div>
          <div className={styles.textContainer}>
            <h2 className={styles.textIntro}>Nos réalisations</h2>
            <p className={styles.textIntroSecond}>
              ATpartners est une entreprise professionnelle qui a réaliseé
              plusnde 100 projets.
            </p>
          </div>
          <button
            className={styles.discoverButton}
            onClick={() => scroll("references")}
          >
            Découvrir nos réalisations &nbsp; &nbsp; &gt;&gt;
          </button>
        </div>
      </section>
    </>
  );
}
