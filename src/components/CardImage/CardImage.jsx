import classNames from "classnames/bind";

// Styles
import styles from "./CardImage.module.scss";
const cx = classNames.bind(styles);

const CardImage = (props) => {
  const { imageSrc } = props;
  const rootClasses = cx("CardImage");

  return (
    <div className={rootClasses}>
      <img src={imageSrc} />
    </div>
  );
};

export default CardImage;
