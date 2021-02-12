import React from "react";
import Aloha from "../Aloha";

function AlohaList(props) {
  const { users, setUsers } = props;

  const deleteAlohaItem = (deletedId) => {
    const usersCopy = JSON.parse(JSON.stringify(users));
    let ind = -1;

    usersCopy.forEach((user, index) => {
      if (user.id === deletedId) {
        ind = index;
      }
    });

    usersCopy.splice(ind, 1);

    setUsers(usersCopy);
   
  };

  const mapAloha = ({ firstName, lastName, id }) => (
    <Aloha
      key={id}
      id={id}
      name={`${firstName} ${lastName}`}
      deleteAlohaItem={deleteAlohaItem}
    />
  );
  return <section>{users.map(mapAloha)}</section>;
}

export default AlohaList;
