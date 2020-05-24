import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getProducts } from './apiCore';
import Card from './Card';
import Search from './Search';

const Home = () => {
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [error, setError] = useState(false);

  const loadProductsBySell = () => {
    getProducts('sold').then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsBySell(data);
      }
    });
  };

  const loadProductsByArrival = () => {
    getProducts('createdAt').then((data) => {
      console.log(data);
      if (data.error) {
        setError(data.error);
      } else {
        setProductsByArrival(data);
      }
    });
  };

  useEffect(() => {
    loadProductsByArrival();
    loadProductsBySell();
  }, []);

  return (
    <Layout
      title='Ply Furniture'
      description='Hand crafted, high-quality furniture constructed from plywood.'
      className='container-fluid'
    >
      <Search />

      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-sm-8 col-md-12 col-lg-8 col-xl-10'>
            <h2 className='mb-4'>New Arrivals</h2>
            {/* <div className='row'> */}
            {productsByArrival.map((product, i) => (
              <div key={i} className=''>
                <Card product={product} />
              </div>
            ))}
            {/* </div> */}
          </div>
        </div>
      </div>

      <br />

      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-sm-8 col-md-12 col-lg-8 col-xl-10'>
            <h2 className='mb-4'>Best Sellers</h2>
            {/* <div className='row'> */}
            {productsBySell.map((product, i) => (
              <div key={i} className=''>
                <Card product={product} />
              </div>
            ))}

            {/* </div> */}
          </div>
        </div>
      </div>

      {/* 
<div className="container">
      <div className='row'>



        {productsBySell.map((product, i) => (
          <div key={i} className='col-4 mb-3'>
            <Card product={product} />
          </div>
        ))}
      </div>

      </div> */}
    </Layout>
  );
};

export default Home;
