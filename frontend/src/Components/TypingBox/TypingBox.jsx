import React from "react";
import RandomText from "../RamdomText/RandomText";
import TextCompare from "../TextCompare/TextCompare";
import Timer from "../Timer/Timer";

function TypingBox() {
  return (
    <div>
      <Timer />
      <RandomText />
      <TextCompare />
    </div>
  );
}

export default TypingBox;
