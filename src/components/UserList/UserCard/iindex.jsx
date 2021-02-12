const UserCard = (props) => {
  const {
    user: { id, firstName, lastName, age, isSelected },
  } = props;
  const { hendlerSelect } = props;
  let ageMsg;
  if (age > 90) {
    ageMsg = "You so OLD";
  } else {
    ageMsg = "ok";
  }

  const styles = {
    //border: isSelected ? "4px solid" : undefined,
    maxWidth: "230px",
    padding: "10px",
    backgroundColor: isSelected? "gray": undefined,
  };

  const setStyle = () => {
    hendlerSelect(id);
  };

  return (
    <article style={styles}>
      <p>ID: {id}</p>
      <h1>
        User Name: {firstName} {lastName}
      </h1>
      <h3>
        User Age: {age} ... {ageMsg}
      </h3>
      <button onClick={setStyle}>Select ME!</button>
    </article>
  );
};

export default UserCard;
