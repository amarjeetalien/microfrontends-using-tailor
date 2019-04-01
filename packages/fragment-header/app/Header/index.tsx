import * as React from "react";
import Logo from "../Logo";
import NavItem from "../NavItem";

import "./styles.scss";
import { withRouter, RouterProps } from "react-router";

const Header = (routerProps : RouterProps) => { 
   
  return <div className="header">
    <Logo />
    {["contacts", "empty"].map((item, index) => (
      <NavItem
        key={index}
        text={item}
        active={routerProps.history.location.pathname.indexOf(item) > 0 }
        onClick={() => { routerProps.history.push(`/${item}`)}}
      />
    ))}
  </div>
}

export default withRouter(Header);
