import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Laws from "./pages/Laws";
import Policy from "./pages/Policy";
import Procedures from "./pages/Procedures";
import RedFlags from "./pages/RedFlags";
import Faq from "./pages/Faq";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="laws/:anchor?" element={<Laws />} />
        <Route path="policy/:anchor?" element={<Policy />} />
        <Route path="procedures/:anchor?" element={<Procedures />} />
        <Route path="red-flags/:anchor?" element={<RedFlags />} />
        <Route path="faq/:anchor?" element={<Faq />} />
      </Route>
    </Routes>
  );
}
