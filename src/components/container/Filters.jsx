import { useId } from 'react';
import { useFilters } from '../../hooks/useFilters.js';
import './Filters.css';

const Filters = () => {
  const { filters, setFilters } = useFilters();

  const handleClickSupscriptionsType = (event) => {
    setFilters(prevState => ({
      ...prevState,
      type: prevState.type == 'monthly' ? 'priceAnnually' : 'monthly'
    }));
  }

  return (
    <section className='filters'>
      <div>Annually</div>
      <label 
        className="switch" 
        htmlFor="checkbox" 
      >
      </label>
        <input
          type="checkbox"
          id="checkbox"
          defaultChecked={filters.type == 'monthly' ? true : false}
          onClick={handleClickSupscriptionsType}
        />
      <div>Monthly</div>
    </section>

  )
}

export default Filters;