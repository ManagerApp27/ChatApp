import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "globalStyles";
import Error404 from "containers/Error404";
import SignIn from "containers/SignIn";
import Home from "containers/Home";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
