import React from 'react'
import { Link } from 'react-router-dom'

const CityCard = ({ item }) => {
  return (
    <Link to={`/city/${item.id}`} className='city-card'>
        <figure>
            <img src={item.img} alt={item.title} />
        </figure>
        <div className="city-text">
            <h3>{item.title}</h3>
            <p className="info">
                <span className='tag'>{item.tags.join("·")}</span>
            </p>
            <p className="desc">{item.desc}</p>
            <p className="recom">{item.recommended&&<span className='badeg'>추천</span>}</p>
        </div>
    </Link>
  )
}

export default CityCard