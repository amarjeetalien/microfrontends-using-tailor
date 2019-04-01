import * as React from "react";
import classnames from "classnames";

import "./styles.scss";
import { Redirect } from "react-router";

type ComponentProps = {
  active: boolean;
  text: string;
  onClick: () => void;
};
const NavItem = ({  active, text, onClick }: ComponentProps) => (
  <div
    onClick={onClick}
    className={classnames({
      "nav-item": true,
      current: active
    })}
  >{text}</div>
);

export default NavItem;
