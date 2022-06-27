import React, { createContext, useState } from "react";
import camera from "../../assets/imgs/camera.jpg";
import headphones from "../../assets/imgs/headphone.jpg";
import iphone from "../../assets/imgs/iphone.jpg";
import mic from "../../assets/imgs/microphone.jpg";
import perfume from "../../assets/imgs/perfume.jpg";
import ring from "../../assets/imgs/ring.jpg";
import shoes from "../../assets/imgs/shoes.jpg";
import watch from "../../assets/imgs/watch.jpg";

const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products] = useState([
    { id: 1, product: "Camera", price: 300, img: camera, stat: "hot" },
    { id: 2, product: "Headphones", price: 100, img: headphones, stat: "new" },
    { id: 3, product: "Iphone", price: 400, img: iphone, stat: "hot" },
    { id: 4, product: "Microphone", price: 40, img: mic, stat: "hot" },
    { id: 5, product: "Perfume", price: 90, img: perfume, stat: "new" },
    { id: 6, product: "Ring", price: 200, img: ring, stat: "hot" },
    { id: 7, product: "Shoes", price: 110, img: shoes, stat: "new" },
    { id: 8, product: "Watch", price: 200, img: watch, stat: "new" },
  ]);

  return (
    <ProductContext.Provider value={{ products: [...products] }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
