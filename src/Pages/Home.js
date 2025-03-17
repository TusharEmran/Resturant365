import React from 'react';
import Layout from '../Components/Layout';
import Banner from '../Photos/banner.jpeg';
import '../styles/Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="headerContainer">
          <h1>Resturant 365</h1>
          <p>Best Food In Narsingdi</p>
          <Link to={"/Manu"}>
          <button>Order Now</button>
          </Link>
          
        </div>
      </div>
    </Layout>
  );
};

export default Home;
