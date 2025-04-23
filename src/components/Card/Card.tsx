import "./Card.css";

interface ICardProps {
  title: string;
  subTitle: string;
  description: string;
  backgroundImage: string;
  onClick: () => void;
}

const Card: React.FC<ICardProps> = ({
  title,
  subTitle,
  description,
  backgroundImage,
  onClick,
}) => {
  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      onClick={onClick}
    >
      <>
        <div className="cardHeader">
          <div className="title">{title}</div>
          <div className="sub-title">{subTitle}</div>
        </div>

        <div className="cardBody">
          <p className="description">{description}</p>
        </div>
      </>
    </div>
  );
};

export default Card;
