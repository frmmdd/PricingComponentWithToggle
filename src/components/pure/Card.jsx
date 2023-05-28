import react from 'react';
import './Card.css'

const Card = ({ plan, type, price, priceAnnually, users, size, send }) => {
  return (
    <div className="card">
      <div className="card-plan">{plan}</div>
      <div className="card-price">{type == 'monthly' ? price : priceAnnually}</div>
      <div className="card-size">{size} Storage</div>
      <div className="card-users">{users} User Allowed</div>
      <div className="card-send">Send up to {send} GB</div>
      <button className="card-more">Learn More</button>
    </div>
  )
}

export default Card;