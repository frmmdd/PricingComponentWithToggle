import { useContext } from 'react';
import { FiltersContext } from '../context/filters.jsx';

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterSubscriptions = (subscriptions) => {
    return subscriptions.filter(subscription =>
      subscription.type = filters.type
    );
  };

  return { filters, filterSubscriptions, setFilters };
}
