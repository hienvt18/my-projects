import classNames  from 'classnames/bind';
import styles from './Footer.module.scss'

import logoFooter from '../../../assets/images/logoFooter.png'

import {BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin, BiLogoYoutube} from 'react-icons/bi'

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('left')}>
          <img src={logoFooter} alt="" />
          <p>16501 Collins Ave, Sunny isles Beach, FL 33160, United States</p>
          <p>hexashop@company.com</p>
          <p>010-020-0340</p>
        </div>
        <div className={cx('right')}>
          <div className={cx('rightItems')}>
            <h3>Shopping & Categories</h3>
            <ul className={cx('footerList')}>
              <li className={cx('footerLink')}>Men's Shopping</li>
              <li className={cx('footerLink')}>Women's Shopping</li>
              <li className={cx('footerLink')}>Kid's Shopping</li>
            </ul>
          </div>
          <div className={cx('rightItems')}>
            <h3>Useful Links</h3>
            <ul className={cx('footerList')}>
              <li className={cx('footerLink')}>Homepage</li>
              <li className={cx('footerLink')}>About Us</li>
              <li className={cx('footerLink')}>Help</li>
              <li className={cx('footerLink')}>Contact Us</li>
            </ul>
          </div>
          <div className={cx('rightItems')}>
            <h3>Help & Information</h3>
            <ul className={cx('footerList')}>
              <li className={cx('footerLink')}>Help</li>
              <li className={cx('footerLink')}>FAQ's</li>
              <li className={cx('footerLink')}>Shipping</li>
              <li className={cx('footerLink')}>Tracking ID</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={cx('copyRight')}>
        <hr />
        <p className={cx('title')}>Copyright © 2022 HexaShop Co., Ltd. All Rights Reserved. </p>
        <p>Design: <span className={cx('hightLight')}>TemplateMo</span> </p>
        <p>Distributed By: <span className={cx('hightLight')}>ThemWagon</span></p>
        <div className={cx('social')}>
          <BiLogoFacebook className={cx('socialLink')}/>
          <BiLogoTwitter className={cx('socialLink')}/>
          <BiLogoLinkedin className={cx('socialLink')}/>
          <BiLogoYoutube className={cx('socialLink')}/>
        </div>
      </div>
      
    </div>
  )
}

export default Footer