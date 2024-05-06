import classNames from "classnames/bind";

import { Button, CardBody, CardHeader, CardImage } from "../../components";

// Styles
import styles from "./Card.module.scss";
const cx = classNames.bind(styles);

const Card = (props) => {
  const { imageSrc, heading, body, buttonLabel, id, active, onClick } = props;
  const rootClasses = cx({ active: active == id }, "Card");
  return (
    <div className={rootClasses} onClick={() => onClick(id)}>
      <CardImage imageSrc={imageSrc} />
      <div className={cx("content-box")}>
        <div className={cx("content-wrapper")}>
          <div>
            <CardHeader heading={heading} />
            <CardBody body={body} />
          </div>
          <Button buttonLabel={buttonLabel} />
        </div>
      </div>
    </div>
  );
};

export default Card;
