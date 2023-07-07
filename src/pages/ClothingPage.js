import React from 'react';
import { gql, useQuery } from '@apollo/client';
import './ClothingPage.css';
import { Link } from 'react-router-dom';

const GET_COLLECTION_BY_ID = gql`
  query getCollectionById($id: ID!) {
    collection(id: $id) {
      title
      products(first: 50) {
        edges {
          node {
            id
            title
            priceRange {
              minVariantPrice {
                amount
              }
            }
            images(first: 2) {
              edges {
                node {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;

const ClothingPage = ({ collectionId }) => {
    const { loading, error, data } = useQuery(GET_COLLECTION_BY_ID, {
      variables: { id: collectionId },
    });
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    return (
      <div className="clothing-grid">
        {data.collection.products.edges.map(({ node }) => (
          <Link to={`/product/${node.id.split('/').pop()}`} key={node.id}>
            <div className="clothing-item">
              <div className="clothing-image">
                <img src={node.images.edges[0]?.node.src} alt={node.title} />
                <img src={node.images.edges[1]?.node.src} alt={node.title} />
              </div>
              <h2>{node.title}</h2>
              <p>${node.priceRange.minVariantPrice.amount}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  };
  
  export default ClothingPage;