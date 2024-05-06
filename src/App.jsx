import { useState } from "react";
import "./App.scss";
import { Card, Header } from "./components";
import brisbaneImage from "./assets/brisbane_vgpzva.jpg";

const cardData = [
  {
    id: 0,
    imageSrc: brisbaneImage,
    heading: "Heading 1",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    buttonLabel: "Button 1",
  },
  {
    id: 1,
    imageSrc: brisbaneImage,
    heading: "Heading 2",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    buttonLabel: "Button 2",
  },
  {
    id: 2,
    imageSrc: brisbaneImage,
    heading: "Heading 3",
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris`,
    buttonLabel: "Button 3",
  },
];

const App = () => {
  const [activeCardId, setActiveCardId] = useState(1);
  const handleClick = (id) => {
    setActiveCardId(id);
  };
  return (
    <>
      <Header />
      <main>
        {cardData.map((card) => (
          <Card {...card} active={activeCardId} onClick={handleClick} />
        ))}
      </main>
    </>
  );
};

export default App;
