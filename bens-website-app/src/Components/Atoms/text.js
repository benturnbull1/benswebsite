import React, { useEffect, useState } from "react";
import axios from "axios";

function TestText() {
  const [text, setText] = useState("");

  useEffect(() => {
    axios
      .get("/api/test")
      .then((response) => {
        // Process the received data
        console.log(response.data);
        // Update the state with the received text
        setText(response.data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Text from API:</h1>
      <p>{text}</p>
    </div>
  );
}

export default TestText;
