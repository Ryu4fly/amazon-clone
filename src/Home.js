import React from 'react';
import Product from './Product'
import "./Home.css";

function Home() {
  return <div className="home">
      <img
      className="home_image"
      src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

      {/* Product id, title, price, rating, image */}
      <div className="home_row">
        <Product
          id="12321341"
          title="The Pragmatic Programmer: your journey to mastery, 20th Anniversary Edition (English Edition)"
          price={4764}
          rating={5}
          image="https://m.media-amazon.com/images/I/518FqJvR9aL.jpg"
        />

        <Product
          id="12321341"
          title="Logitech MX2200sGR Advanced Wireless Mouse, Graphite"
          price={13500}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61PBIoWr1-L._AC_SX569_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="12321341"
          title="Smart Basic Iris Ohyama Smart Basic RC-MA30AZ-B Rice Cooker, Microcomputer"
          price={4764}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61wgndH0HjL._AC_SL1500_.jpg"
        />

        <Product
          id="12321341"
          title="Tiger Thermos Water Bottle Screw Mug Bottle 6 Hours Hot and Cold Retention, 16.9 fl oz (500 ml)"
          price={4764}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71rirm9z1uL._AC_SL1500_.jpg"
        />

        <Product
          id="12321341"
          title="Nintendo Switch Pro Controller"
          price={4764}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71bKJbGQHJL._AC_SL1309_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="12321341"
          title="Panasonic VIERA TH-55GX755 55 V 4K Double Tuner Built-in LCD TV with Smart TV (Supports Net Video)"
          price={4764}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71v6It3b8VL._AC_SL1500_.jpg"
        />
      </div>

      {/* Product */}

    </div>
}

export default Home
