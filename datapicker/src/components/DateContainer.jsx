import { useEffect, useState } from 'react'
import './Date.css'
import DateDisplay from './DateDisplay'

const DateContainer = () => {
    const [ date, setDate ] = useState(Date.now())
    useEffect(() => {

    },[date])
  return (
    <div>
        <input type="date" className="date-input" onChange={(e) => setDate(e.target.value)}/>
        <DateDisplay date={date}/>
    </div>
  )
}

export default DateContainer