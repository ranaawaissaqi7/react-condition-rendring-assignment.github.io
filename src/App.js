
import './App.css';
import AverageNumber from './averageNumber/AverageNumber';
import Auth from './components/auth/Auth';
import DateTime from './components/dateTime/DateTime';
import Form from './components/form/Form';
import Greeting from './components/greeting/Greeting';
import ProgressBar from './components/progressBar/ProgressBar';
import PriceCheker from './priceCheker/PriceCheker';
function App() {
  return (
    <>
    <DateTime/>
    <Form/>
    <Greeting/>
    <Auth/>
    <ProgressBar/>
    <AverageNumber/>
    <PriceCheker/>
    </>
  );
}

export default App;
