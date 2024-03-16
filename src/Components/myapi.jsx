import React, { useState, useEffect } from 'react'
import h from './houssam.json'
function Api() {

  const [joke, setJoke] = useState([]);
  useEffect(() => {

    fetch("https://official-joke-api.appspot.com/jokes/programming/random")
      .then(Response => Response.json())
      .then((data) => {
        setJoke(data[0])
      })
      .catch(error => console.error(error));

  }, []);
  h[0].type = "hhhhhhhhhhhhhhhhh";
  return (
    <>
      <div>
        <p>{joke.setup}</p>
        <p>{joke.punchline}</p>
        <p>{h[0].type}</p>
      </div>
    </>
  )
}
export default Api
