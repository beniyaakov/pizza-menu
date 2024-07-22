
type hoursProps = { 
    closeHour:number
}

export default function Order({closeHour}: hoursProps) {


    return (
    <div className="order">
      <p>We're open until {closeHour}:00 Come visit us or order online </p>
      <button className="btn">order</button>
    </div>
  );
}
