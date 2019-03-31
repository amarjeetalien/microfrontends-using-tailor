import * as React from "react";
import Logo from "../Logo/index";
import NavItem from "../NavItem/index";

import "./styles.scss";
import { withRouter, RouterProps } from "react-router";

const Header = (routerProps : RouterProps) => { 
   
  return <div className="header">
    <Logo />
    {["contacts", "error"].map((item, index) => (
      <NavItem
        key={index}
        index={index}
        active={routerProps.history.location.pathname.indexOf(item) > 0 }
        onClick={() => { routerProps.history.push(`/${item}`)}}
      />
    ))}
  </div>
}

export default withRouter(Header);
