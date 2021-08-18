//import logo from './logo.svg';
import './App.css';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import ProfilePhoto from './Component/Profile/ProfilePhoto';

function App() {
  return (
    <div className="App" style={{backgroundColor:"ButtonHighlight" , border:"2"}}>
      <FullName/>
      <Address/>
      <ProfilePhoto/>
    </div>
  );
}

export default App;
