import { pizzaDataType } from "../data";

type PizzaProps = {
  item: pizzaDataType;
};

export default function Pizza({ item }: PizzaProps) {
  // if (item.soldOut) {
  //   return null
  // }

  return (
    <li className={`pizza ${item.soldOut ? "sold-out" : ""}`}>
      <img src={item.photoName} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <p>{item.ingredients}</p>
        {item.soldOut ? <span>SOLD OUT</span> : <span>{item.price}$</span>}
      </div>
    </li>
  );
}
