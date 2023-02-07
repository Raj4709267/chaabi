import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./RandomText.module.css";

const randomText= ["Text 1", "Text 2", "Text 3", "Text 4", "Text 5"]

const RandomText = () => {
    const {currentText} = useSelector(store=>store.AppReducer);
    const disptach=useDispatch();
    // console.log(randomText)
  const [selectedText, setSelectedText] = useState(randomText[0]);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * randomText.length);
    setSelectedText(randomText[randomIndex]);
    disptach({type:"CHANGE",payload:randomText[randomIndex]})

  };

  return (
    <div className={style.textBox}>
      <div>{currentText}
      
      </div>
      <Button marginTop={"30px"} bg={"red"} onClick={handleClick}>
        Show Random Text
      </Button>
    </div>
  );
};

export default RandomText;
