import Layout from "../layout/Layout";
import { FaTrash, FaPlus } from "react-icons/fa";
import { useCart, useCartActions } from "../providers/CartProvider";

const CartPage = () => {
  const cartState = useCart();
  const dispatch = useCartActions();
  const { cart, total } = cartState;

  const incrementHandler = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const decrementHandler = (item) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: item });
  };

  if (!cart.length) {
    return (
      <Layout>
        <main className="container mx-auto flex flex-col items-center justify-center">
          <h2>there's no item in your cart.</h2>
        </main>
      </Layout>
    );
  }

  return (
    <Layout>
      <main className="container pt-8 flex flex-col flex-wrap mx-auto lg:flex-row-reverse max-w-7xl justify-around">
        {/* the summery section */}
        <section className="basis-2/6 p-2">
          <h2 className="text-4xl font-bold mx-4 mb-4">SUMMERY</h2>
          <section className="bg-slate-700 text-white flex flex-col rounded-md mx-2  items-center justify-between h-auto p-4 mb-12 sm:flex-row sm:mb-20 sm:max-w-3xl sm:mx-auto ">
            <div>total price: ${total}</div>
          </section>
        </section>

        {/* the cart section */}
        <section className="basis-4/6 p-2">
          <h1 className="text-4xl font-bold mx-4 mb-12">YOUR CART</h1>

          {/* map on cart products */}
          {cart.map((item) => {
            return (
              <div className=" flex flex-col items-center justify-between h-28 mb-44 sm:flex-row sm:mb-20 sm:max-w-3xl sm:mx-auto">
                <div>
                  <img
                    className="w-52 h-44 rounded-t-md sm:rounded-tl-md sm:rounded-tr-none sm:rounded-bl-md"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <div className="flex flex-col w-52 items-center text-white p-1 bg-slate-800 sm:flex-1 sm:h-44 sm:flex-row sm:justify-around">
                  <p>{item.name}</p>
                  <p>${item.price * item.quantity}</p>
                </div>
                <div className="flex justify-between items-center w-52 bg-slate-800 px-3 pb-2 rounded-b-md sm:flex-1 sm:h-44 sm:flex-row sm:justify-around sm:rounded-tr-md sm:rounded-br-md sm:rounded-bl-none">
                  <button
                    onClick={() => decrementHandler(item)}
                    className="text-red-500 bg-white p-2 rounded-md"
                  >
                    <FaTrash />
                  </button>
                  <button className="text-black bg-white px-4 py-1 rounded-md">
                    {item.quantity}
                  </button>
                  <button
                    onClick={() => incrementHandler(item)}
                    className="text-black bg-white p-2 rounded-md"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default CartPage;
