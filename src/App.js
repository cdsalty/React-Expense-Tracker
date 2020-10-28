import { Header } from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';

import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
      </div>
    </div>
  );
}

export default App;
