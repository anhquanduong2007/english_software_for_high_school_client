import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import HomePage from './page/homePage';
import Login from './page/login';
import Register from "./page/register";
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
