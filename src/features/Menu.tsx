import { useState } from "react";
import Pizza from "../pages/Pizza";
import { pizzaData, pizzaDataType } from "../data";

export default function Menu() {
  const [pizzas] = useState<pizzaDataType[]>(pizzaData);
  const numPizzas = pizzas.length


  return (
    <main className="menu">
      <h2>Our menu </h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza item={pizza} key={pizza.name} />
          ))}
        </ul>
      ):<p>We're still working on our menu. Please come back later :) </p>}
    </main>
  );
}
