import styles from "./Realisation.module.css";
import { useState } from "react";
import NavBarDesktop from "../navBarDesktop/NavBarDesktop";
import AtservicesHeader from "../aboutATservices/atservicesHeader/AtservicesHeader";
import AtservicesImg from "../assets/AtservicesHeader.jpg";
import Footer from "../footer/Footer";

export default function Realisations() {
  const [selectedPhoto, setSelectedPhoto] = useState(null); // État pour la photo sélectionnée
  const [isModalOpen, setIsModalOpen] = useState(false); // État pour afficher ou non le modal

  const photo = [
    AtservicesImg,
    AtservicesImg,
    AtservicesImg,
    AtservicesImg,
    AtservicesImg,
    AtservicesImg,
    AtservicesImg,
    AtservicesImg,
    AtservicesImg,
    AtservicesImg,
    AtservicesImg,
    AtservicesImg,
    AtservicesImg,
    AtservicesImg,
    AtservicesImg,
    AtservicesImg,
    AtservicesImg,
    AtservicesImg,
    AtservicesImg,
    AtservicesImg,
    AtservicesImg,
  ];

  // Fonction pour ouvrir le modal avec la photo sélectionnée
  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
    console.log("openModal");
  };

  // Fonction pour fermer le modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  return (
    <>
      <NavBarDesktop />
      <AtservicesHeader />
      <section className={styles.galeryContainer}>
        <h2 className={styles.galeryTitle}>Galerie</h2>
        <div className={styles.mapPhotoContainer}>
          {photo.map((photo, index) => (
            <div
              key={index}
              className={styles.photoContainer}
              onClick={() => openModal(photo)} // Ajout du clic pour ouvrir le modal
            >
              <img src={photo} alt="" className={styles.photo} />
            </div>
          ))}
        </div>
      </section>

      {/* Modal pour afficher la photo en plein écran */}
      {isModalOpen && (
        <div
          className={`${styles.fullscreenOverlay} ${
            isModalOpen ? styles.show : ""
          }`}
          onClick={closeModal}
        >
          <img
            src={selectedPhoto}
            alt=""
            className={`${styles.fullscreenImage} ${
              isModalOpen ? styles.show : ""
            }`}
            onClick={(e) => e.stopPropagation()}
          />
          <button className={styles.closeButton} onClick={closeModal}>
            Fermer
          </button>
        </div>
      )}
      <Footer />
    </>
  );
}
