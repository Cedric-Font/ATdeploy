import style from "./AboutUs.module.css";
import ProjectPicture from "../assets/salleBlanche1.jpg";
import ProjectPicture2 from "../assets/salleBlanche2.jpg";

export default function AboutUs() {
  return (
    <>
      <section className={style.aboutSection}>
        <div className={style.aboutPart1}>
          <div className={style.aboutContainer}>
            <h2 className={style.titleABout}>ATpartners</h2>
            <p className={style.aboutText}>
              ATpartners est reconnue pour son expertise dans la conception et
              la réalisation de salles blanches adaptées aux environnements
              exigeants. Nous travaillons en étroite collaboration avec nos
              clients pour offrir des solutions innovantes et personnalisées qui
              répondent aux standards les plus stricts en matière de contrôle de
              contamination. Que ce soit pour des laboratoires, des industries
              pharmaceutiques, des sites de production électronique ou des
              hôpitaux, nos équipes s'assurent de maîtriser chaque aspect de la
              construction, depuis les cloisons et portes jusqu'aux systèmes de
              ventilation et de régulation de l'air. ATpartners garantit des
              installations durables, fiables et conformes aux normes en vigueur
              pour assurer le bon fonctionnement de vos opérations sensibles.
            </p>
          </div>
          <div className={style.pictureOver}>
            <img src={ProjectPicture} alt="" className={style.backPicture} />
            <div className={style.textContainer}>
              <p className={style.overText}>Salles blanches</p>
              {/* <p className={style.overSubText}>projets à notre actif</p> */}
            </div>
          </div>
        </div>
        <div className={style.aboutPart2}>
          <div className={style.pictureOver2}>
            <img src={ProjectPicture2} alt="" className={style.backPicture} />
            <div className={style.textContainer2}>
              <p className={style.overText}>Salles grises</p>
              {/* <p className={style.overSubText}>
                collaborateurs qui nous font confiance
              </p> */}
            </div>
          </div>
          <div className={style.aboutContainer2}>
            <p className={style.aboutText}>
              ATpartners se distingue également dans la conception de salles
              grises, des environnements de travail nécessitant un contrôle
              spécifique des particules, mais avec des exigences moindres que
              les salles blanches. Nos solutions sont pensées pour répondre aux
              besoins de secteurs tels que l'industrie médicale, électronique ou
              encore agroalimentaire, où une gestion stricte de la propreté est
              primordiale. Grâce à notre savoir-faire, nous offrons des
              infrastructures sur mesure, assurant une régulation optimale de
              l'air, de la température et de l'humidité, tout en garantissant
              une flexibilité dans la production et un respect des normes en
              vigueur. ATpartners vous accompagne pour créer un espace contrôlé,
              performant et adapté à vos processus industriels.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
