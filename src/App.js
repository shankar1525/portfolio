import "./App.css";
import Iframe from 'react-iframe'
import RouterComponent from "./Router";

function App() {
  return (
    <div className="App">
      <RouterComponent />
    </div>
    // <iframe src="http://192.168.0.199:5601/app/r/s/wbuTu" sandbox="allow-same-origin allow-scripts allow-forms allow-storage-access-by-user-activation allow-top-navigation allow-presentation" referrerPolicy="same-origin" width={1000} height={500}></iframe>
  );
}

export default App;
