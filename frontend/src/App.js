import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Components/Navbar/Navbar';
import Home from './Routes/Home';

function App() {

  // const store=useSelector(store=>store.AppReducer)
  // console.log(store)
  // const dispatch=useDispatch();
  // if(store.count==0){

  //   dispatch({type:"ADD"})
  // }


  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
