import { useEffect, useState } from "react";
function Effect() {
  // const [users, setUsers] = useState([]);
  const [lolo, setLolo] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const data = await response.json();
        console.log(data);
        setLolo(data);
      } catch (err) {
        setError(err.message);
      }finally{
        setloading(false)
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return(    <p>is loading .......</p>
)
  } else {
    return (
      <>
        <div>
          {lolo.map((apis) => {
            return <p key={apis.id}>{apis.name}</p>;
          })}
        </div>
      </>
    );
  }
}

export default Effect;
