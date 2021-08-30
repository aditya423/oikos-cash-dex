import React from 'react'
import './Network.css';

export default function Network() {
    return (
        
        <div className="network-page">
            <div className="network">NETWORK</div>
            <div className="outside-box">
                <div className="inside-box">
                    <nav className="oks-price">
                        <div className="logo2">OKS PRICE</div>
                        <input type="radio" name="slider" id="menu-btn" />
                        <input type="radio" name="slider" id="close-btn" />
                        <ul className="nav-links">
                            <label for="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
                            <li><a href="#">D</a></li>
                            <li><a href="#">W</a></li>
                            <li><a href="#">M</a></li>
                            <li><a href="#">Y</a></li>
                        </ul>
                        <label for="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
                    </nav>
                </div>
            </div>
        </div>
    
    )
}
