import classNames from "classnames/bind";

import { Button, CardBody, CardHeader, CardImage } from "../../components";

// Styles
import styles from "./Card.module.scss";
const cx = classNames.bind(styles);

const Card = (props) => {
  const { imageSrc, heading, body, buttonLabel } = props;
  const rootClasses = cx("Card");
  return (
    <div className={rootClasses}>
      <CardImage imageSrc={imageSrc} />
      <div className={cx("content-box")}>
        <div className={cx("content-wrapper")}>
          <CardHeader heading={heading} />
          <CardBody body={body} />
          <Button buttonLabel={buttonLabel} />
        </div>
      </div>
    </div>
  );
};

export default Card;
