import css from "./ImageCard.module.css";

const ImageCard = ({ imageUrl, imageUrlFull, title, onModalOpen }) => {
  return (
    <div className={css.imgContainer}>
      <img
        className={css.image}
        src={imageUrl}
        alt={title}
        width="250"
        onClick={() => {
          onModalOpen(imageUrlFull, title);
        }}
      />
    </div>
  );
};

export default ImageCard;
