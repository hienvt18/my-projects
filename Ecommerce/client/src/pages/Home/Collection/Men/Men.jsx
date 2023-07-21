import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import classNames  from 'classnames/bind'
import styles from './Men.module.scss'
import men1 from '../../../../assets/images/men1.jpg'
import men2 from '../../../../assets/images/men2.jpg'
import men3 from '../../../../assets/images/men3.jpg'
import {AiFillStar} from 'react-icons/ai'

const cx = classNames.bind(styles);

const menCollection = [
  {
    images: men1,
    name: "Love NaNa '20",
    price: "150,000"
  },
  {
    images: men2,
    name: "Air Force 1X",
    price: "90.00"
  },
  {
    images: men3,
    name: "Classic Spring",
    price: "120.000"
  },
  {
    images: men1,
    name: "Love NaNa '20",
    price: "150,000"
  },
]

const Men = () => {
  return (
    <div className={cx('wrapper')}>
      <h3 className={cx('heading')}>Men's Latest</h3>
      <p className={cx('title')}>Details to details is what makes Hexashop different from the other themes</p>
      <div className="products">
        <Swiper
           // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={window.innerWidth >= 768 ? 3 : 1} 
            spaceBetween={30}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
          {menCollection.length > 0 && menCollection.map((item,index) => (
            <SwiperSlide key={index}>
              <div className={cx('listItems')}>
                <img className={cx('images')} src={item.images} alt="" />
                <div className={cx('content')}>
                  <div className={cx('text')}>
                    <p className={cx('name')}>{item.name}</p>
                    <p className={cx('price')}>${item.price}</p>
                  </div>
                  <div className={cx('rate')}>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                  </div>
                </div>
                <button className={cx('btnCart')}>Add To Cart</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>
    </div>
  )
}

export default Men