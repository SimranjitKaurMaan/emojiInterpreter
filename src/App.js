import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🚅": "Bullet Train",
  "🗼": "Tokyo Tower",
  "🏯": "Japanese Castle",
  "🏣": "Japanese Post Office",
  "🗻": "Mount Fuji"
};

const knownEmojis = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function onChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "failure to recognise the emoji";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }
  return (
    <div className="App">
      <h1>Inside Out!</h1>
      <input
        placeholder="put an emoji to find its meaning"
        onChange={onChangeHandler}
      ></input>
      <h2>{meaning}</h2>
      <h3>emojis we know</h3>
      <ul>
        {knownEmojis.map((emoji) => (
          <span
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            key={emoji}
            onClick={() => emojiClickHandler(emoji)}
          >
            {emoji}
          </span>
        ))}
      </ul>
    </div>
  );
}
