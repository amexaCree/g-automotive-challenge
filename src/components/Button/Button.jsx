import classNames from "classnames/bind";

// Styles
import styles from "./Button.module.scss";
const cx = classNames.bind(styles);

const Button = (props) => {
  const { buttonLabel } = props;
  const rootClasses = cx("Button");

  return <button className={rootClasses}>{buttonLabel}</button>;
};

export default Button;
