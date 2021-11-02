import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [aryData, setAryData] = useState([])

  useEffect(() => {
    function makeRequest() {
      let url = "https://api.unsplash.com/photos/?client_id=812193ef71ca946e361ed541979a0cfd91e9419a19235fd05f51ea14233f020a&per_page=30";
      let xhr = new XMLHttpRequest();
      xhr.onload = function () {
        // setAryData(this.response.split(/[\s\n]/))
        console.log(JSON.parse(this.response))
        let resultData=JSON.parse(this.response)
        setAryData(resultData)
      };
      xhr.open("GET", url, true);
      xhr.send();
    }

    makeRequest();
  }, [])

  function showData() {
    return (
      <div>
        {
          aryData.map((e, key) => (
            <img src={e.urls.regular} alt=''/>
          ))
        }
      </div>
    )
  }

  return (
    <div className="App">
      {aryData.length > 0 && showData()}
    </div>
  );
}

export default App;
