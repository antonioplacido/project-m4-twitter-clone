import React from "react";
export const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [status, setStatus] = React.useState("loading");
  console.log(currentUser);

  console.log(status);
  function fetchUsers() {
    fetch("api/me/profile")
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data.profile);
        setStatus("idle");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  if (currentUser === null) {
    fetchUsers();
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser, status }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
