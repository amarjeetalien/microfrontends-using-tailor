import * as React from "react";
import Contact from "../Contact/index";

import "./styles.scss";

const Contacts = () => {
  const [data, setData] = React.useState( [] );

  React.useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then(response => response.json())
      .then(data => { console.log(data.results); return data.results })
      .then(setData);
  }, []);

  return (
    <div className="contacts">
      {data.map((contact, index) => (
        <Contact key={index} contact={contact} />
      ))}
    </div>
  );
};

export default Contacts;
