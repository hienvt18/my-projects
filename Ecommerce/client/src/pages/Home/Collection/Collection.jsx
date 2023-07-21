
import classNames  from 'classnames/bind'
import styles from './Collection.module.scss'

import Men from './Men'
import Women from './Women'
import Kids from './Kids'
import OurProducts from './OurProducts'
import Subscribing from './Subscribing'

const cx = classNames.bind(styles);


const Collection = () => {
  return (
    <div className={cx('wrapper')}>
        <Men/>
        <Women/>
        <Kids/>
        <OurProducts/>
        <Subscribing/>
    </div>
  )
}

export default Collection