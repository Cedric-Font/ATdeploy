import styles from "./EnterprisesLinkPictures.module.css";
import ATservices from "../assets/ATservices.jpg";
import ATimmobilier from "../assets/ATimmobilier.jpg";
import ATpromotion from "../assets/ATpromotion.jpg";
import { Link } from "react-router-dom";

export default function EnterprisesLinkPictures({ pictures }) {
  const linkPictures = {
    ATservices: {
      src: ATservices,
      alt: "AT services",
      overlayText:
        "Prestation de service dans le bâtiment - aménagement - construction - et notamment le montage de panneaux et isolants, charpente, étude et engineering de la construction, aménagement intérieur et isolation thermique.",
    },
    ATimmobilier: {
      src: ATimmobilier,
      alt: "AT immobilier",
      overlayText: "Discover AT Immobilier",
    },
    ATpromotion: {
      src: ATpromotion,
      alt: "AT promotion",
      overlayText:
        "Propriété, acquisition, de biens ou droits immobiliers, exploitation, administration et mise en valeur par voie de location nue ou meublée de ces biens ou droits immobiliers; acquisition de biens meubles, équipements et aménagements destinés à équiper lesdits biens immobiliers",
    },
  };

  return (
    <div className={styles.linksPictures}>
      <Link className={styles.link} to={pictures}>
        <img
          src={linkPictures[pictures].src}
          alt={linkPictures[pictures].alt}
          className={styles.ATpicture}
        />
        <div className={styles.hoverOverlay}>
          {linkPictures[pictures].overlayText}
        </div>
        <h2 className={styles.ATtitle}>{linkPictures[pictures].alt}</h2>
      </Link>
    </div>
  );
}
