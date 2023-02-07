import { Button, Textarea } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

const TextCompare = () => {
  const { currentText } = useSelector((store) => store.AppReducer);

  const [inputText, setInputText] = useState("");
  const [currentLetter, setCurrentLetter] = useState(currentText[0]);

  const color = useRef(null);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
    if (!currentText.includes(event.target.value)) {
      color.current.style.color = "red";
    } else {
      color.current.style.color = "white";
      if (currentText.includes(event.target.value)) {
        setCurrentLetter(currentText[event.target.value.length]);
      }
    }
    if (
      currentText.includes(event.target.value) &&
      event.target.value.length === currentText.length
    ) {
      setTimeout(() => {
        alert("done");
      }, 300);
    }
  };


  function calculateWPM(words, timeInMinutes) {
    return (words / timeInMinutes) * 60;
  }
  
  return (
    <div>
      <Textarea
        rows={4}
        cols={50}
        value={inputText}
        onChange={handleInputChange}
        ref={color}
      />
      <p>
        Press:-
        <Button color={"red"}>
          {currentLetter == " " ? "Space" : currentLetter}
        </Button>
      </p>
    </div>
  );
};

export default TextCompare;
