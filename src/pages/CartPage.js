import Layout from "../layout/Layout";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useCart, useCartActions } from "../providers/CartProvider";
import { Link } from "react-router-dom";

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
        {/* the summery component */}
        <CartSummery total={total} />

        {/* the cart section */}
        <section className="basis-4/6 p-2">
          <h1 className="text-4xl font-bold mx-4 mb-24 sm:mb-12">YOUR CART</h1>

          {/* map on cart products */}
          {cart.map((item) => {
            return (
              <div
                className="centerItem flex-col h-28 mb-44 sm:flex-row sm:mb-20 sm:max-w-3xl sm:mx-auto"
                key={item.id}
              >
                <div>
                  <img
                    className="w-52 h-44 rounded-t-md sm:rounded-tl-md sm:rounded-tr-none sm:rounded-bl-md"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <div className="flex flex-col w-52 items-center text-white p-1 bg-slate-800 sm:flex-1 sm:h-44 sm:flex-row sm:justify-around">
                  <p>{item.name}</p>
                  <p>${item.offPrice * item.quantity}</p>
                </div>

                <div className="flex items-center justify-between pt-3 px-2 w-52 bg-slate-800 pb-2 rounded-b-md sm:flex-1 sm:h-44 sm:flex-row sm:justify-around sm:rounded-tr-md sm:rounded-br-md sm:rounded-bl-none">
                  <button
                    onClick={() => decrementHandler(item)}
                    className="text-red-500 bg-white p-2 rounded-md"
                  >
                    <FaMinus />
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

const CartSummery = () => {
  const { total, cart } = useCart();

  const originalTotalPrice = cart.length
    ? cart.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
    : 0;

  return (
    <section className="basis-2/6 p-2">
      <h2 className="title mx-4">SUMMERY</h2>
      <section className="bg-slate-700 text-white flex flex-col rounded-md mx-2 gap-y-4 justify-between h-auto p-4 mb-12 sm:mb-20 sm:max-w-3xl sm:mx-auto ">
        <div className="centerItem">
          <p>Subtotal</p>
          <p>${originalTotalPrice}</p>
        </div>

        <div className="centerItem mb-2 pb-1 border-b-2 border-gray-500">
          <p>discount</p>
          <p>{originalTotalPrice - total}</p>
        </div>

        <div className="centerItem mb-2">
          <p>Total</p>
          <p>{total}</p>
        </div>

        <Link to="/checkout">
          <button className="btn w-full">Checkout</button>
        </Link>
      </section>
    </section>
  );
};
