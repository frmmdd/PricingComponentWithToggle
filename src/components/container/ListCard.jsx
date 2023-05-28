import react, { useState } from 'react';
import Card from '../../components/pure/Card.jsx';
import { useFilters } from '../../hooks/useFilters.js';
import subscriptions from '../../data/cardlist.js';
import './ListCard.css';

const ListCard = () => {
  const { filterSubscriptions } = useFilters();

  const filteredSubscriptions = filterSubscriptions(subscriptions);

  return (
    <div className="listCard">
      {filteredSubscriptions.map((subscription) => (
        <Card key={subscription.id} {...subscription} />
      ))}
    </div>
  )
}

export default ListCard;