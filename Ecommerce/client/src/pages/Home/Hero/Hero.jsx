import classNames  from 'classnames/bind'
import styles from './Hero.module.scss'
import hero1 from '../../../assets/images/hero1.jpg'
import hero2 from '../../../assets/images/hero2.jpg'
import hero3 from '../../../assets/images/hero3.jpg'
import hero4 from '../../../assets/images/hero4.jpg'
import hero5 from '../../../assets/images/hero5.jpg'
import {Link} from 'react-router-dom'

const cx = classNames.bind(styles);

const rightHero = [
  {
    name: "Women",
    images: hero2,
    text: "Best Clothes For Women"
  },
  {
    name: "Men",
    images: hero3,
    text: "Best Clothes For Men"
  },
  {
    name: "Kids",
    images: hero4,
    text: "Best Clothes For Kids"
  },
  {
    name: "Accessories",
    images: hero5,
    text: "Best Trend Accessories"
  },
]

const Hero = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('left')}>
        <img className={cx('images')} src={hero1} alt="" />
        <div className={cx('content')}>
          <h3 className={cx('heading')}>We Are Hexashop</h3>
          <p className={cx('text')}>
            Awesome,clean & creative <br/>
            HTML5 Template
          </p>
          <Link to='shop' className={cx('btn')}>Purchase Now</Link>
        </div>
      </div>
      <div className={cx('right')}> 
        {rightHero.length > 0 && rightHero.map((item, index) => (
          <div key={index} className={cx('items')}>
          <img className={cx('images')} src={item.images} alt={item.name}/>
          <div className={cx('content')}>
            <h3 className={cx('heading')}>{item.name}</h3>
            <p className={cx('text')}>
              {item.text}
            </p>
            <Link to='shop' className={cx('btn')}>Purchase Now</Link>
          </div>
        </div>
        ))}
      </div>

      </div>
  )
}

export default Hero