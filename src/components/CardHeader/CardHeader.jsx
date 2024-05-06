import classNames from "classnames/bind";

// Styles
import styles from "./CardHeader.module.scss";
const cx = classNames.bind(styles);

const CardHeader = (props) => {
  const { heading } = props;
  const rootClasses = cx("CardHeader");

  return <h2 className={rootClasses}>{heading}</h2>;
};

export default CardHeader;
