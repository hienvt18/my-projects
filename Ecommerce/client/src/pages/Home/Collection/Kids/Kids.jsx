import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import classNames  from 'classnames/bind'
import styles from './Kids.module.scss'
import kid1 from '../../../../assets/images/kid1.jpg'
import kid2 from '../../../../assets/images/kid2.jpg'
import kid3 from '../../../../assets/images/kid3.jpg'
import {AiFillStar} from 'react-icons/ai'

const cx = classNames.bind(styles);


const kidsCollection = [
  {
    images: kid1,
    name: "School Collection",
    price: "120,000"
  },
  {
    images: kid2,
    name: "Summer Cap",
    price: "12.00"
  },
  {
    images: kid3,
    name: "Classic Kid",
    price: "30.000"
  },
  {
    images: kid1,
    name: "Classic Kid",
    price: "120,000"
  },
]

const Kids = () => {
  return (
    <div className={cx('wrapper')}>
    <h3 className={cx('heading')}>Kid's Latest</h3>
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
        {kidsCollection.length > 0 && kidsCollection.map((item,index) => (
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

export default Kids