import './App.css';
import ListCard from './components/container/ListCard.jsx';
import Header from './components/container/Header.jsx';
import { FiltersProvider } from './context/filters.jsx';

export default function App() {
  return (
    <FiltersProvider>
      <div className="app">
        <Header />
        <ListCard />
      </div>
    </FiltersProvider>
  )
} 
