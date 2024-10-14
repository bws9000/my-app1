import React, { useEffect, useRef, useState } from "react";

function App() {
  const githubAppRef = useRef();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const element = githubAppRef.current;

    const handleDataSent = (event) => {
      console.log("Received:", event.detail);
    };

    /* notice here how "dataSent" is the Output
      event emitter on the Angular side */
    if (element) {
      element.addEventListener("dataSent", handleDataSent);
    }

    return () => {
      if (element) {
        element.removeEventListener("dataSent", handleDataSent);
      }
    };
  }, []);

  const handleSendMessage = () => {
    setMessage("Hello from React!");
  };

  return (
    <div className="App">
      <h1>React App with Angular Custom Element</h1>
      <button onClick={handleSendMessage}>Send Message to Angular</button>
      <github-app
        ref={githubAppRef}
        title="Custom GitHub Authentication"
        message-from-react={message}
      ></github-app>
    </div>
  );
}
export default App;
