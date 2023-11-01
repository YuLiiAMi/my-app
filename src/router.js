import Login from "./containers/Login/Login";
import ProductTable from "./containers/ProductTable/ProductTable";
import ProductPreview from "./containers/ProductPreview/ProductPreview";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import Product from "./containers/Product/Product";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/products/table" element={<ProductTable />} />
        <Route path="/products/preview" element={<ProductPreview />} />
        <Route path="/products/preview/:productId" element={<Product />} />
      </Route>
      <Route path="*" element={<div> 404. Page is not found</div>} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
