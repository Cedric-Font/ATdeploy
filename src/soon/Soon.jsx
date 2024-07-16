import styles from "./Soon.module.css";
import {Link} from "react-router-dom";

export default function Soon() {
    return(
        <div className={styles.soonMainContainer}>
        <h1>Bientôt disponible</h1>
        <Link to={{
            pathname: "/",
        }}>
        <button>retour</button>
        </Link>
        </div>
    )
}