import React, { Component } from 'react';
import './css/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            <footer className="footerindex">
                <div class="row">
                    <div class="col-2">
                        <p className="footercopy">Copyright © 2021 餵 for me.</p>
                    </div>
                    <div class="col-7 footercenter"></div>
                    <div class="col-1">
                        <Link to='/' className="navbar-brand navLogo footerright">
                            餵for me
                        </Link>
                    </div>
                    <div class="col-1">
                        <Link to='/page1' className="navbar-brand footerright">
                            會員登入/註冊
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;