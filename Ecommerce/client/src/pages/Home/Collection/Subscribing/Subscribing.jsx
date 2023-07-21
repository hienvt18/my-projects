import classNames  from 'classnames/bind'
import styles from './Subscribing.module.scss'

import {GoPaperAirplane} from 'react-icons/go'

const cx = classNames.bind(styles)

const Subscribing = () => {
  return (
    <div className={cx('wrapper')}>
        <div className={cx('left')}>
            <h3 className={cx('heading')}>By Subscribing To Our Newsletter You Can Get 30% Off</h3>
            <p className={cx('text')}>
                Details to details is what makes Hexashop different from the other themes.
            </p>
            <input className={cx('input')} type="text" placeholder='Your Name'/>
            <input className={cx('input')}  type="email" placeholder='Your Email Address'/>
            <button className={cx('btn')}>
                <GoPaperAirplane/>
            </button>
        </div>
        <div className={cx('right')}>
          <div className={cx('rightItems')}>
           
              <p className={cx('heading')}>Store Locaiton</p>
              <p className={cx('text')}>Sunny Isles Beach, FL 33160, United States</p> 
              <br/>
              <p className={cx('heading')}>Phone:</p>
              <p className={cx('text')}>010-020-0340</p> 
              <br/>
              <p className={cx('heading')}>Office Location:</p>
              <p className={cx('text')}>North Miami Beach</p>     
          </div>
          <div className={cx('rightItems')}>   
              <p className={cx('heading')}>Work Hours:</p>
              <p className={cx('text')}>07:30 AM - 9:30 PM Daily</p>
              <br/>
              <p className={cx('heading')}>Email:</p>
              <p className={cx('text')}>info@company.com</p>
              <br/>
              <p className={cx('heading')}>Social Media:</p>
              <span className={cx('textSocial')}>Facebook, </span>
              <span className={cx('textSocial')}>Instagram</span> <br />
              <span className={cx('textSocial')}>Behance, </span>
              <span className={cx('textSocial')}>Linkedin</span>
          </div>
        </div>
    </div>
  )
}

export default Subscribing