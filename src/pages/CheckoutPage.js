import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import { useAuth } from "../providers/AuthProvider";
import { useCart } from "../providers/CartProvider";

const Checkout = () => {
  const Auth = useAuth();
  const { cart, total } = useCart();

  if (!cart.length)
    return (
      <Layout>
        <main className="flex items-center justify-center">
          <Link to="/">
            your cart is empty,{" "}
            <span className="text-blue-600"> go to shopping?</span>
          </Link>
        </main>
      </Layout>
    );

  return (
    <Layout>
      <div className="flex flex-col gap-4 p-2 container mx-auto lg:flex-row w-screen">
        <div className="bg-slate-600 text-white p-4 basis-2/6 rounded-md">
          <h3 className="text-lg mb-6">Checkout detail</h3>
          <p className="mb-2 text-gray-200">{Auth.name}</p>
          <p className="mb-2 text-gray-200">{Auth.email}</p>
          <p className="mb-2 text-gray-200">{Auth.phoneNumber}</p>
        </div>

        <div className="bg-slate-400 p-4 basis-4/6 rounded-md">
          {cart &&
            cart.map((c) => {
              return (
                <div className="bg-slate-100 rounded-md mb-2 p-2">
                  {c.name} * {c.quantity} : {c.quantity * c.offPrice}
                </div>
              );
            })}
          <p className="p-2 border-t-4 text-lg mt-4 text-white bg-slate-600 rounded-b-md">
            total: {total}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
