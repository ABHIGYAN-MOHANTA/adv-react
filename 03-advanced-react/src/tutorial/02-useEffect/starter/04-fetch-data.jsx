import { useState, useEffect } from "react";
const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h3>Github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile link</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FetchData;
