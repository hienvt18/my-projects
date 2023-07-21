import './Date.css'
import moment from 'moment'

const DateDisplay = ({date}) => {
  return (
    <section className="date-display">My date is: {moment(date).format('LL')}</section>
  )
}

export default DateDisplay