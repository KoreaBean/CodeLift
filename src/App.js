import './App.css';
import Home from './components/home/Home';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Error from "./components/errorComponent/Error";
import UserRequirement from './components/course/UserRequirement';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/"element={<Home/>}/>
                <Route path="/course" element={<UserRequirement/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
