import axios from "axios";
import { useEffect } from "react";
import * as data from "../data";
import Layout from "../layout/Layout";
import { checkInCart } from "../utils/checkInCart";
import { useCart, useCartActions } from "../providers/CartProvider";
import { toast } from "react-toastify";

const HomePage = () => {
  const { cart } = useCart();
  const dispatch = useCartActions();

  // useEffect(() => {
  //   axios
  //     .get("https://nodejs-post-app.herokuapp.com/api/product")
  //     .then((res) => setProducts(res.data));
  // }, []);

  const addProductHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast.success(`${product.name} added to cart`);
  };

  return (
    <Layout>
      <main className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mx-4">SNEAKERS</h1>
        <section className="p-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data.products.map((product) => (
            <section key={product.id}>
              <div>
                <img
                  className="w-full h-56 max-h-56 max-w-sm mx-auto md:h-64 md:max-h-64 rounded-t-md"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="bg-slate-800 text-white max-w-sm rounded-b-md  mx-auto px-4 py-2 flex flex-col justify-between">
                <section className="flex justify-between mb-4">
                  <p className="text-lg">{product.name}</p>
                  <p className="text-lg">${product.price}</p>
                </section>
                <button
                  className="btn"
                  onClick={() => addProductHandler(product)}
                >
                  {checkInCart(cart, product) ? "In cart" : "Add to cart"}
                </button>
              </div>
            </section>
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
