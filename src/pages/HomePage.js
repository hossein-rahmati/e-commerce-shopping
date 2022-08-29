import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../layout/Layout";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://nodejs-post-app.herokuapp.com/api/product")
      .then((res) => setProducts(res.data));
  }, []);

  const addProductHandler = (product) => {
    console.log(product);
  };

  return (
    <Layout>
      <main className="max-w-5xl mx-auto">
        <section className="p-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <section>
              <div>
                <img
                  className="w-full h-56 max-w-sm mx-auto md:h-64 rounded-t-sm"
                  src={p.image}
                  alt={p.name}
                />
              </div>
              <div className="bg-black text-white max-w-sm rounded-b-sm  mx-auto px-4 py-2 flex flex-col justify-between">
                <section className="flex justify-between mb-4">
                  <p>{p.name}</p>
                  <p>${p.price}</p>
                </section>
                <button className="btn" onClick={() => addProductHandler(p)}>
                  Add To Cart
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
