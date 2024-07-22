import React from "react";
import Order from "../features/Order";

export default function Footer() {
  const hour:number = new Date().getHours();
  const openHour:number = 12;
  const closeHour:number = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // if (!isOpen) {
  //   return <p>we're happy to welcome you between {openHour}:00 and {closeHour}:00</p>
  // }

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          we're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}
