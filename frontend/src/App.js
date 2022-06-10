
import GlobalStyle from "./global/globalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchResults from "./pages/SearchResults";
function App() {

  // const callBackEnd = () => {
  //   fetch("http://localhost:5000/")
  //     .then(response => response.json())
  //     .then(data => console.log(data))

  // }


  // const callBackEndProperties = () => {
  //   fetch("http://localhost:5000/properties")
  //     .then(response => response.json())
  //     .then(data => console.log(data))

  // }



  return (

    <>
      <GlobalStyle></GlobalStyle>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/searchresults" element={<SearchResults/>}></Route>
      </Routes>
    </BrowserRouter>
     
    </>
    // <>
    //   <button onClick={() => callBackEnd()}>click</button>
    //   <button onClick={() => callBackEndProperties()}>properties</button>
    // </>
  );
}

export default App;
