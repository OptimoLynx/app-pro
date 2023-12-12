import React from "react";
import EmoCard from "./EmoCard";
import emos from "../../emo";

function createEmoji(emo) {
  return (
    <EmoCard
      id={emo.id}
      key={emo.id}
      emoji={emo.emoji}
      name={emo.name}
      meaning={emo.meaning.substring(0, 100)}
    />
  );
}

function Emoji() {
  return (
    <div>
      <h1 className="emo">
        <span>emopedia</span>
      </h1>
      <dl className="dictionary">{emos.map(createEmoji)}</dl>
    </div>
  );
}

export default Emoji;
