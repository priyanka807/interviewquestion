



import React, { useState } from "react";

const WeatherCard = () => {
  const hollywoodsong = [
    "Bad Habits - Ed Sheeran",
    "Stay - The Kid LAROI & Justin Bieber",
    "Levitating - Dua Lipa",
    "Kiss Me More - Doja Cat ft. SZA",
    "Montero (Call Me By Your Name) - Lil Nas X",
    "Good 4 U - Olivia Rodrigo",
    "Peaches - Justin Bieber ft. Daniel Caesar & Giveon",
    "Save Your Tears - The Weeknd",
    "Deja Vu - Olivia Rodrigo",
    "Leave The Door Open - Silk Sonic (Bruno Mars & Anderson .Paak)",
    "Dynamite - BTS",
    "Fancy Like - Walker Hayes"
  ];
  const [isClicked, setIsClicked] = useState(false);
  console.log(isClicked);
  const handleClick = () => {
    setIsClicked(true);
  };
  return (
    <>
      <h1>Latest hollywood song</h1>
      <button onClick={handleClick}>Display list of amazing song</button>
      {isClicked && (
        <ul>
          {hollywoodsong.map((items, index) => (
            <li key={index}>{items}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default WeatherCard;
