import classNames from "classnames/bind";

// Styles
import styles from "./CardBody.module.scss";
const cx = classNames.bind(styles);

const CardBody = (props) => {
  const { body } = props;
  const rootClasses = cx("CardBody");

  return <p className={rootClasses}>{body}</p>;
};

export default CardBody;
