import * as React from "react";
import Logo from "../Logo/index";
import NavItem from "../NavItem/index";

import "./styles.scss";

const Header = () => { 
  const [active, setActive] = React.useState( 0 );
  
  return <div className="header">
    <Logo />
    {[1,2,3,4,5].map((item, index) => (
      <NavItem
        key={index}
        index={index}
        active={index === active}
        onClick={setActive}
      />
    ))}
  </div>
}

export default Header;
