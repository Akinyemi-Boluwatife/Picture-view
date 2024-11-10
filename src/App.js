import { useState } from "react";

const product = [
  { id: 1, description: "Spiderman 1", loca: "sp1.jpg" },
  { id: 2, description: "Spiderman 2", loca: "sp2.jpg" },
  { id: 3, description: "Spiderman 3", loca: "sp3.jpg" },
  { id: 4, description: "Spiderman 4", loca: "sp4.jpg" },
];

function App() {
  return (
    <div className="container">
      <List />
    </div>
  );
}

function List() {
  return (
    <ul className="list-cont">
      {product.map((info) => (
        <Item info={info} key={info.id} />
      ))}
    </ul>
  );
}

function Item({ info }) {
  const [selected, setSelected] = useState();

  function handleClick(id) {
    setSelected(id === selected ? "" : id);
  }

  return (
    <div className="list" onClick={() => handleClick(info.id)}>
      {info.id === selected ? (
        <img src={info.loca} alt="imag" />
      ) : (
        info.description
      )}
    </div>
  );
}

export default App;
