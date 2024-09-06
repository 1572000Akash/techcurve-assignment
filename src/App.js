import logo from './logo.svg';
import './App.css';
import InputTextField from './Component/InputTextField';
import GeneralInfo from './PurchaseOrder/GeneralInfo';
import Purchase from './PurchaseOrder';
import PODetails from './PoDetails/Index';

function App() {
  return (
    <div className="App">
      <Purchase />
      {/* <PODetails /> */}
    </div>
  );
}

export default App;
