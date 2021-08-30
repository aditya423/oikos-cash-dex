import React from 'react'
import './Header.css';

export default function Header() {
    return (

        <div>
            <nav>
                <div className="wrapper">
                    <div className="logo">
                        <svg height="30px" width="7.59627in" viewBox="0 0 547 139"><path id="Selection #1" fill="white" stroke="white" stroke-width="1" d="M 427.79,32.00
           C 431.09,42.99 430.00,57.39 430.00,69.00
             430.00,91.83 432.66,117.48 410.00,131.53
             406.36,133.79 402.13,135.71 398.00,136.84
             391.59,138.61 387.60,139.07 381.00,139.00
             349.88,138.64 334.35,116.20 334.00,87.00
             334.00,87.00 334.00,63.00 334.00,63.00
             334.00,39.79 335.30,17.12 359.00,5.27
             365.43,2.05 369.10,1.56 376.00,0.43
             399.27,-2.45 420.83,8.78 427.79,32.00 Z
           M 532.96,28.99
           C 530.58,29.30 520.31,23.32 517.00,22.06
             496.27,14.22 472.30,23.33 474.20,41.00
             475.85,56.36 498.05,58.67 510.00,61.21
             525.96,64.61 541.27,69.24 546.07,87.00
             547.29,91.51 547.05,97.28 547.00,102.00
             546.56,139.17 501.48,143.45 474.00,136.12
             467.74,134.44 454.58,128.97 450.33,124.32
             445.46,118.99 458.37,108.15 460.09,107.91
             462.63,107.55 470.08,113.19 473.00,114.63
             479.39,117.78 488.88,119.92 496.00,120.00
             503.94,120.09 512.36,119.16 519.00,114.36
             528.78,107.30 530.31,95.40 520.98,87.21
             506.00,74.06 466.36,83.42 456.55,56.00
             455.39,52.76 454.17,45.48 454.04,42.00
             453.88,37.79 454.81,31.06 455.93,27.00
             463.49,-0.50 501.13,-4.02 524.00,3.52
             532.42,6.29 537.52,9.82 545.00,14.00
             543.25,17.58 536.96,28.46 532.96,28.99 Z
           M 136.00,1.00
           C 136.00,1.00 136.00,137.00 136.00,137.00
             136.00,137.00 0.00,137.00 0.00,137.00
             0.00,137.00 0.00,1.00 0.00,1.00
             0.00,1.00 136.00,1.00 136.00,1.00 Z
           M 189.00,2.00
           C 189.00,2.00 189.00,137.00 189.00,137.00
             189.00,137.00 169.00,137.00 169.00,137.00
             169.00,137.00 169.00,2.00 169.00,2.00
             169.00,2.00 189.00,2.00 189.00,2.00 Z
           M 241.00,2.00
           C 241.00,2.00 241.00,70.00 241.00,70.00
             241.00,70.00 281.58,19.00 281.58,19.00
             284.50,15.25 292.19,4.14 296.09,2.60
             297.90,1.88 301.01,2.00 303.00,2.00
             303.00,2.00 320.00,2.00 320.00,2.00
             320.00,2.00 289.58,40.00 289.58,40.00
             289.58,40.00 278.63,55.00 278.63,55.00
             278.63,55.00 282.00,63.00 282.00,63.00
             282.00,63.00 291.00,78.00 291.00,78.00
             291.00,78.00 311.20,112.00 311.20,112.00
             311.20,112.00 326.00,137.00 326.00,137.00
             326.00,137.00 309.00,137.00 309.00,137.00
             307.09,137.00 303.90,137.12 302.18,136.40
             298.58,134.89 293.39,124.66 291.20,121.00
             291.20,121.00 262.00,72.00 262.00,72.00
             262.00,72.00 241.85,99.00 241.85,99.00
             241.85,99.00 241.00,112.00 241.00,112.00
             241.00,112.00 241.00,137.00 241.00,137.00
             241.00,137.00 221.00,137.00 221.00,137.00
             221.00,137.00 221.00,2.00 221.00,2.00
             221.00,2.00 241.00,2.00 241.00,2.00 Z
           M 16.00,17.00
           C 16.00,17.00 16.00,121.00 16.00,121.00
             16.00,121.00 120.00,121.00 120.00,121.00
             120.00,121.00 120.00,17.00 120.00,17.00
             120.00,17.00 16.00,17.00 16.00,17.00 Z
           M 358.38,34.00
           C 353.97,42.78 355.00,52.50 355.00,62.00
             355.00,62.00 355.00,81.00 355.00,81.00
             355.00,95.76 355.38,111.29 372.00,117.44
             375.05,118.57 377.78,118.91 381.00,118.99
             384.67,119.07 387.44,119.02 391.00,117.96
             412.47,111.55 410.00,88.58 410.00,71.00
             410.00,51.91 413.17,25.22 388.00,20.39
             384.38,19.78 380.64,19.93 377.00,20.39
             368.31,22.27 362.49,25.80 358.38,34.00 Z"></path></svg>
                    </div>
                    <input type="radio" name="slider" id="menu-btn" />
                    <input type="radio" name="slider" id="close-btn" />
                    <ul className="nav-links">
                        <label for="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
                        <li><a href="#">NETWORK</a></li>
                        <li><a href="#">STAKING</a></li>
                        <li><a href="#">TRADING</a></li>
                        <li><a href="#">SYNTHS</a></li>
                    </ul>
                    <label for="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
                </div>
            </nav>
        </div>

    )
}