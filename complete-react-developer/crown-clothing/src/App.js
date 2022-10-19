import { Routes, Route } from "react-router-dom";

import Nagivation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nagivation />}>
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Home />}></Route>
        <Route path="/authentication" element={<Authentication />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
