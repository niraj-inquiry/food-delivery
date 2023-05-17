import React, { useEffect, useState } from 'react'
import './css/navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const divClassName = scrolled ? 'stickt-top' : '';
    return (
        <>
            <div className="top-sec">

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="top-sec-container">
                                <div className="top-sec-item">
                                    <span>Welcome to our online store...</span>
                                </div>
                                <div className="top-sec-item">
                                    <Link to=""><i class="fa fa-facebook-square" aria-hidden="true"></i></Link>
                                    <Link to=""><i class="fa fa-instagram" aria-hidden="true"></i></Link>
                                    <Link to=""><i class="fa fa-twitter-square" aria-hidden="true"></i></Link>
                                    <Link to=""><i class="fa fa-youtube-play" aria-hidden="true"></i></Link>
                                    <div className="lang-dpd">
                                        <select name="" id="">
                                            <option value="">English</option>
                                            <option value="">English</option>
                                            <option value="">English</option>
                                            <option value="">English</option>
                                            <option value="">English</option>

                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`top-middle ${divClassName}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="top-middle-container">
                                <div className="top-middle-item">
                                    <img src="/assets/images/logo.png" width={160} height={56} alt="" />
                                    <i className="fa fa-bars" aria-hidden="true" />

                                </div>
                                <div className="top-middle-item">
                                    <div className="top-middle-search-container">
                                        <div className='search-cont'>
                                            <div className='dpw1' ><i className="fa fa-chevron-circle-down" aria-hidden="true" /></div>
                                            <div className='dpw2'>
                                                <input type="search" placeholder="Search For Product..." />
                                                <button><i className="fa fa-search" aria-hidden="true" /></button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="top-middle-item">
                                    <div>
                                        <button type="button" className="btn btn-primary position-relative">
                                            <i className="fa fa-cart-plus" aria-hidden="true" />
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                0
                                            </span>
                                        </button>
                                        <span>Cart</span>
                                    </div>
                                    <div>
                                        <button type="button" className="btn btn-primary position-relative">
                                            <i className="fa fa-heart-o" aria-hidden="true" />

                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                0
                                            </span>
                                        </button>
                                        <span>Wishlist</span>
                                    </div>
                                    <div>
                                        <button type="button" className="btn btn-primary position-relative">
                                            <i className="fa fa-refresh" aria-hidden="true" />

                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                0
                                            </span>
                                        </button>
                                        <span>Compare</span>
                                    </div>
                                    <div>
                                        <i class="fa fa-user-o" aria-hidden="true"></i>
                                        <span>Account</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar