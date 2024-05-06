import React, { useState, useEffect } from 'react';
import logo from './Assets/logo_big.png';
import cart from './Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Uparrow from "./Assets/uparrow.jpg";
import SearchProduct from './SearchProduct'
import p1_img from "./Assets/product_1.png";
import p2_img from "./Assets/product_2.png";
import p3_img from "./Assets/product_3.png";
import p4_img from "./Assets/product_4.png";
import p5_img from "./Assets/product_5.png";
import p6_img from "./Assets/product_6.png";
import p7_img from "./Assets/product_7.png";
import p8_img from "./Assets/product_8.png";
import p9_img from "./Assets/product_9.png";
import p10_img from "./Assets/product_10.png";
import p11_img from "./Assets/product_11.png";
import p12_img from "./Assets/product_12.png";
import p13_img from "./Assets/product_13.png";
import p14_img from "./Assets/product_14.png";
import p15_img from "./Assets/product_15.png";
import p16_img from "./Assets/product_16.png";
import p17_img from "./Assets/product_17.png";
import p18_img from "./Assets/product_18.png";
import p19_img from "./Assets/product_19.png";
import p20_img from "./Assets/product_20.png";
import p21_img from "./Assets/product_21.png";
import p22_img from "./Assets/product_22.png";
import p23_img from "./Assets/product_23.png";
import p24_img from "./Assets/product_24.png";
import p25_img from "./Assets/product_25.png";
import p26_img from "./Assets/product_26.png";
import p27_img from "./Assets/product_27.png";
import p28_img from "./Assets/product_28.png";
import p29_img from "./Assets/product_29.png";
import p30_img from "./Assets/product_30.png";
import p31_img from "./Assets/product_31.png";
import p32_img from "./Assets/product_32.png";
import p33_img from "./Assets/product_33.png";
import p34_img from "./Assets/product_34.png";
import p35_img from "./Assets/product_35.png";
import p36_img from "./Assets/product_36.png";

const Navbar = () => {

  const products = [
    {
      id: 1,
      name: "Striped Flutter Sleeve Black",
      category: "women",
      image: p1_img,
      new_price: 50.0,
      old_price: 80.5,
    },
    {
      id: 2,
      name: "Striped Flutter Sleeve Flower",
      category: "women",
      image: p2_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 3,
      name: "Striped Flutter Sleeve Pink",
      category: "women",
      image: p3_img,
      new_price: 60.0,
      old_price: 100.5,
    },
    {
      id: 4,
      name: "Striped Flutter Sleeve Plain",
      category: "women",
      image: p4_img,
      new_price: 100.0,
      old_price: 150.0,
    },
    
    {
      id: 5,
      name: "Men Green Solid Zippered",
      category: "men",
      image: p13_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 6,
      name: "Men Orange Solid Zippered",
      category: "men",
      image: p14_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 7,
      name: "Men Red Solid Zippered",
      category: "men",
      image: p15_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 8,
      name: "Men Black Solid Zippered",
      category: "men",
      image: p16_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 9,
      name: "Men Grey Solid Zippered",
      category: "men",
      image: p17_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 10,
      name: "Men White Solid Zippered",
      category: "men",
      image: p18_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 11,
      name: "Men Blue Solid Zipperedt",
      category: "men",
      image: p19_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 12,
      name: "Men Yellow Solid Zippered",
      category: "men",
      image: p20_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 13,
      name: "Men Brown Solid Zippered",
      category: "men",
      image: p21_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 14,
      name: "Men Pink Solid Zippered",
      category: "men",
      image: p22_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 15,
      name: "Men White Solid Zippered",
      category: "men",
      image: p23_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 16,
      name: "Men Black Solid Zippered",
      category: "men",
      image: p24_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 17,
      name: "Boys Blue Hooded Sweatshirt",
      category: "kid",
      image: p25_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 18,
      name: "Boys Black Hooded Sweatshirt",
      category: "kid",
      image: p26_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 19,
      name: "Boys White Hooded Sweatshirt",
      category: "kid",
      image: p27_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 20,
      name: "Boys Gree Hooded Sweatshirt",
      category: "kid",
      image: p28_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 21,
      name: "Boys Green Hooded Sweatshirt",
      category: "kid",
      image: p29_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 22,
      name: "Boys Green Hooded Sweatshirt",
      category: "kid",
      image: p30_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id:23,
      name: "Boys Black Hooded Sweatshirt",
      category: "kid",
      image: p31_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 24,
      name: "Boys Blue Hooded Sweatshirt",
      category: "kid",
      image: p32_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 25,
      name: "Boys Blue Hooded Sweatshirt",
      category: "kid",
      image: p33_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 26,
      name: "Boys Blue Hooded Sweatshirt",
      category: "kid",
      image: p34_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 27,
      name: "Boys Blue Hooded Sweatshirt",
      category: "kid",
      image: p35_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 28,
      name: "Boys Blue Hooded Sweatshirt",
      category: "kid",
      image: p36_img,
      new_price: 85.0,
      old_price: 120.5,
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    if (term.trim() === '') {
      setSearchResults([]);
    } else {
      const results = products.filter(product =>
        product.name.toLowerCase().includes(term)
      );
      setSearchResults(results);
    }
  };

  const scrollToSection = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const [showModal, setShowModal] = useState(false);
  const [showUpArrow, setShowUpArrow] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setShowUpArrow(scrollTop > 100); // Adjust the threshold as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <>
      <div className='Navbar'>
        <div className='nav_logo'>
          <Link to='/logo'><img src={logo} alt="" /></Link>
          <p>Shopper</p>
        </div>
        <ul className='nav_menu'>
          <li onClick={() => scrollToSection("womens")}>Women</li>
          <li onClick={() => scrollToSection("mens")}>Men</li>
          <li onClick={() => scrollToSection("kids")}>Kids</li>
          <input type="text" placeholder='Search for your Products' value={searchTerm} onChange={handleSearch} />
        </ul>

        <div className='nav_login_cart'>
          <button onClick={toggleModal}>Login</button>
          <Link to='cart'><img src={cart} alt="" /></Link>
          <div className='nav_cart_count'>0</div>
          {showModal && (
            <div className="modal">
              <div className='loginsignup' id="login">
                <div className="loginsignup_container">
                  <h1>Sign Up <span className="close" onClick={toggleModal}>&times;</span></h1>
                  <div className="loginsignup_fields">
                    <input type="text" placeholder='Your Name' />
                    <input type="email" placeholder='Email Address' />
                    <input type="Password" placeholder='Password' />
                  </div>
                  <button>Continue</button>
                  <p className='loginsignup_login'>Already have an account? <span>Login here</span></p>
                  <div className='loginsignup_agree'>

                    <p style={{ textAlign: 'center' }}> <input type="checkbox" /> By continuing, I agree to the terms of use and privacy policy</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>


        {/* Up arrow button */}
        {showUpArrow && (
          <button className="up_arrow" onClick={scrollToTop}>
            <img src={Uparrow} alt="Up Arrow" width={30} height={30} />
          </button>
        )}
      </div>
      {searchResults.length > 0 && <SearchProduct searchResults={searchResults} />}
    </>
  );
};

export default Navbar;
