import './App.css';
import TurkishWeatherBlock from './TurkishWeatherBlock';
import ChatGpt from './ChatGpt';
// import Weather from './api/Weather';
// import Search from './search';


function App() {

  //to do sposobu nr.2 ( Search )
  // const handleOnSearchChange = (searchData) => {
  //   console.log("kajdkjlakldjaskljdakljsdjklasdjklakljdjksld");
  // }
  

  return (
    <div className="App">
        <TurkishWeatherBlock />
        <ChatGpt />
    </div>
  );
}

export default App;