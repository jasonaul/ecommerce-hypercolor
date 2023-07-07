import React, { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import './ProductPage.css';

const GET_PRODUCT_BY_ID = gql`
  query product($id: ID!) {
    node(id: $id) {
      ... on Product {
        title
        description
        images(first: 10) {
          edges {
            node {
              originalSrc
            }
          }
        }
        variants(first: 10) {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    }
  }
`;

const ADD_ITEMS_TO_CHECKOUT = gql`
  mutation($checkoutId: ID!, $lineItems: [CheckoutLineItemInput!]!) {
    checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
      checkout {
        id
        webUrl
        lineItems(first: 5) {
          edges {
            node {
              title
              quantity
            }
          }
        }
      }
    }
  }
`;

const ProductPage = ({ initializeCheckout, checkoutId }) => { // add `checkoutId` here
    const { productId } = useParams();
    const qualifiedId = `gid://shopify/Product/${productId}`;
    const [addItemsToCheckout] = useMutation(ADD_ITEMS_TO_CHECKOUT);
    
    const addToCart = async (variantId) => {
      // Make sure we have a checkout to add items to
      await initializeCheckout();
  
      // Add the item to the checkout
      await addItemsToCheckout({
        variables: {
          checkoutId: checkoutId,
          lineItems: [
            {
              variantId: variantId,
              quantity: 1,
            },
          ],
        },
      });
    };
    


  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { id: qualifiedId },
  });
  
  const [activeImage, setActiveImage] = useState('');
  
  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Error :(</p>;
  }

  const { title, description, images, variants } = data.node;

  return (
    <div className="product-page">
      <div className="product-images">
        <img
          src={activeImage || images.edges[0].node.originalSrc}
          alt={title}
          className="product-image-large"
        />
        <div className="product-thumbnails">
          {images.edges.map(({ node }, index) => (
            <img
              src={node.originalSrc}
              alt={`${title} ${index + 1}`}
              key={node.originalSrc}
              className="product-thumbnail"
              onClick={() => setActiveImage(node.originalSrc)}
            />
          ))}
        </div>
      </div>
      <div className="product-info">
        <h1>{title}</h1>
        <p>{description}</p>
        <select>
          {variants.edges.map(({ node }) => (
            <option key={node.id} value={node.id}>
              {node.title}
            </option>
          ))}
        </select>
        <button onClick={() => addToCart(variants.edges[0].node.id)}>
            Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
