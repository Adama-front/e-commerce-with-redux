"use client";
import OptimizedImage from "@/components/ui/OptimizedImage";
import {
  clearCart,
  removeFromCart,
  updateQuantity
} from "@/store/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/types";
import Link from "next/link";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { items, total, shippingCost } = useAppSelector((state) => state.cart);

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateTotal = () => {
    return total + shippingCost;
  };

  if (items.length === 0) {
    return (
      <div className="flex w-full items-center bg-white text-black justify-center pt-28 pb-12">
        <div className="flex w-full shadow-xl items-center justify-center flex-col gap-y-5 min-h-[70vh] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:w-28 md:h-28 w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              className="md:w-16 md:h-16 w-10 h-10"
              viewBox="0 -0.5 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3147 30.9442C11.9424 30.9442 13.2618 29.6247 13.2618 27.9971C13.2618 26.3695 11.9424 25.05 10.3147 25.05C8.68712 25.05 7.36768 26.3695 7.36768 27.9971C7.36768 29.6247 8.68712 30.9442 10.3147 30.9442Z"
                fill="#2ECC71"
              />
              <path
                d="M26.5232 30.9442C28.1509 30.9442 29.4703 29.6247 29.4703 27.9971C29.4703 26.3695 28.1509 25.05 26.5232 25.05C24.8956 25.05 23.5762 26.3695 23.5762 27.9971C23.5762 29.6247 24.8956 30.9442 26.5232 30.9442Z"
                fill="#2ECC71"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30.526 5.89412H7.44717L6.60911 2.28116C6.45421 1.61335 6.1084 1.0662 5.57167 0.63972C5.03494 0.21324 4.42381 0 3.73827 0H1.47353C0.659722 0 0 0.659722 0 1.47353C0 2.28733 0.659722 2.94706 1.47353 2.94706H3.73827L4.42186 5.89412H4.42059L8.21564 22.4326C8.29244 22.7673 8.46515 23.0416 8.73378 23.2556C9.0024 23.4695 9.30842 23.5765 9.65183 23.5765H26.8066C27.1441 23.5765 27.4459 23.4728 27.7121 23.2654C27.9783 23.0581 28.1527 22.7908 28.2354 22.4635L31.9547 7.72829C32.0103 7.50802 32.0147 7.28674 31.968 7.06443C31.9212 6.84212 31.828 6.64136 31.6884 6.46214C31.5488 6.28293 31.377 6.14345 31.1728 6.04372C30.9688 5.94399 30.7532 5.89412 30.526 5.89412Z"
                fill="url(#paint0_linear_103_1445)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_103_1445"
                  x1="0"
                  y1="0"
                  x2="19.7144"
                  y2="29.6608"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#A3BE8C" />
                  <stop offset="1" stopColor="#2ECC71" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-center">
            Votre panier est actuellement vide
          </h2>
          <p className="text-center">
            Parcourez notre sélection et trouvez les articles parfaits pour vous
            !
          </p>
          <Link href="/#products">
            <button className="text-white cursor-pointer md:text-sm bg-[#2ECC71] px-4 py-2 hover:bg-[#A3BE8C] transition-colors duration-300 flex items-center gap-2">
              Explorer nos produits
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-white text-black pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col gap-y-6">
          <div className="flex w-full items-start justify-between">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Mon Panier
            </h2>
            <button
              onClick={handleClearCart}
              className="text-red-500 hover:text-red-700 transition-colors duration-300"
            >
              Vider le panier
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Produit
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Prix
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Quantité
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Total
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {items.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-16 w-16 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                                <OptimizedImage
                                  src={item.image}
                                  alt={item.name}
                                  className="h-16 w-16"
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-900">
                            {item.price.toFixed(2)} €
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) =>
                                handleQuantityChange(
                                  item.id,
                                  parseInt(e.target.value)
                                )
                              }
                              className="w-20 text-center border-gray-300 rounded-md shadow-sm focus:ring-[#2ECC71] focus:border-[#2ECC71]"
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-900">
                            {(item.price * item.quantity).toFixed(2)} €
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <button
                              onClick={() => handleRemoveItem(item.id)}
                              className="text-red-500 hover:text-red-700 transition-colors duration-300"
                            >
                              <svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Résumé de la commande
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sous-total</span>
                    <span className="text-gray-900">{total.toFixed(2)} €</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Frais de livraison</span>
                    <span className="text-gray-900">
                      {shippingCost.toFixed(2)} €
                    </span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-semibold text-gray-900">
                        Total
                      </span>
                      <span className="text-lg font-semibold text-[#2ECC71]">
                        {calculateTotal().toFixed(2)} €
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <Link href="/checkout">
                    <button className="w-full bg-[#2ECC71] text-white py-3 px-4 rounded-md hover:bg-[#A3BE8C] transition-colors duration-300">
                      Passer à la caisse
                    </button>
                  </Link>
                  <Link href="/products">
                    <button className="w-full border border-[#2ECC71] text-[#2ECC71] py-3 px-4 rounded-md hover:bg-gray-50 transition-colors duration-300">
                      Continuer les achats
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
