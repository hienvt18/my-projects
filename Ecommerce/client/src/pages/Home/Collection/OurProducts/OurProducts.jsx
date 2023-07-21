import classNames  from 'classnames/bind'
import styles from './OurProducts..module.scss'

import explore1 from '../../../../assets/images/explore1.jpg'
import explore2 from '../../../../assets/images/explore2.jpg'

const cx = classNames.bind(styles);


const OurProducts = () => {
  return (
    <div className={cx('wrapper')}>
         <h3 className={cx('heading')}>
                Explore Our Products
            </h3>
       <div className={cx('container')}>
       <div className={cx('left')}>
            <p className={cx('text')}>
            You are allowed to use this HexaShop HTML CSS template. <br />
            You can feel free to modify or edit this layout.  <br />
            You can convert this template as any kind of ecommerce CMS <br /> theme as you wish.  <br /> <br />

            <span className={cx('hightLight1')}>You are not allowed to redistribute this template ZIP file on any  <br />  other website.</span> <br />  <br />

            There are 5 pages included in this HexaShop Template and <br /> we are providing it 
            to you for absolutely free of charge at <br />
            our TemplateMo website. There are web development costs for us. <br />  <br />
            If this template is beneficial for your website or business,  <br />
            please kindly <span className={cx('hightLight2')}>support us</span> a little via PayPal. 
            Please also tell  <br /> your friends about our great website. Thank you.
            </p>
            <button className={cx('btn')}>Discover More</button>
        </div>
        <div className={cx('right')}>
            <div className={cx('rightItems')}>
                <div className={cx('type')}>
                    <p className={cx('heading')}>
                        Leather Bags <br/>
                        <span className={cx('text')}>  Latest Collection</span>
                    </p>
                </div>
            </div>
            <div className={cx('rightItems')}>
                <img className={cx('images')} src={explore1} alt="" />
            </div>
            <div className={cx('rightItems')}>
                <img className={cx('images')} src={explore2} alt="" />
            </div>
            <div className={cx('rightItems')}>
                <div className={cx('type')}>
                    <p className={cx('heading')}>
                        Different Types <br/>
                        <span className={cx('text')}>Over 304 Products</span>
                    </p>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default OurProducts