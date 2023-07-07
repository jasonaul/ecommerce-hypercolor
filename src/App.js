// App.js
import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductPage from "./pages/ProductPage";
import Hero from './components/Hero';
import hero1 from './images/hero1.png'
import hero2 from './images/hero2.png'
import AnimatedSection from "./components/AnimatedSection";
import masks from './images/masks.gif'
import ImageBreak from "./components/ImageBreak";
import break1 from "./images/break1.png"
import break2 from "./images/break2.png"
import break3 from "./images/break3.png"
import break4 from "./images/break4.png"
import break5 from "./images/break5.png"
import ClothingPage from "./pages/ClothingPage";

const CREATE_CHECKOUT = gql`
  mutation {
    checkoutCreate(input: {}) {
      checkout {
        id
        webUrl
      }
    }
  }
`;

const images = [
  break1,
  break2,
  break3,
  break4,
  break5
];

const App = () => {
  const [checkoutId, setCheckoutId] = useState(null);
  const [checkoutUrl, setCheckoutUrl] = useState(null);

  const [createCheckout] = useMutation(CREATE_CHECKOUT, {
    onCompleted: data => {
      setCheckoutId(data.checkoutCreate.checkout.id);
      setCheckoutUrl(data.checkoutCreate.checkout.webUrl);
    }
  });

  const initializeCheckout = async () => {
    // Only create a new checkout if we don't already have one
    if (!checkoutId) {
      await createCheckout();
    }
  };

  const ProductPageWrapper = () => {
    const { productId } = useParams();
    return <ProductPage initializeCheckout={initializeCheckout} checkoutId={checkoutId} productId={productId} />;
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero image={hero1} hoverImage={hero2} />
            <ImageBreak images={images}/>
            <AnimatedSection gifBackground={masks}/>
            <ImageBreak images={images}/>
          </>
        } />
        <Route path="/clothing" element={<ClothingPage collectionId="gid://shopify/Collection/446229446976" />} />
        <Route path="/product/:productId" element={<ProductPageWrapper />} />
      </Routes>
    </Router>
  )
}

export default App;
