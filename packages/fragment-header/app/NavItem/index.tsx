import * as React from "react";
import classnames from "classnames";

import "./styles.scss";
import { Redirect } from "react-router";

type ComponentProps = {
  active: boolean;
  index: number;
  onClick: (index: number) => void;
};
const NavItem = ({ index, active, onClick }: ComponentProps) => (
  <div
    onClick={() => { onClick(index); } } 
    className={classnames({
      "nav-item": true,
      current: active
    })}
  ></div>
);

export default NavItem;
