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
        <Route path="laws" element={<Laws />} />
        <Route path="policy" element={<Policy />} />
        <Route path="procedures" element={<Procedures />} />
        <Route path="red-flags" element={<RedFlags />} />
        <Route path="faq" element={<Faq />} />
      </Route>
    </Routes>
  );
}
