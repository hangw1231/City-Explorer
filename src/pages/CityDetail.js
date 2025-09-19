import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function CityDetail() {
  const { id } = useParams(); //URL에서 id 추출
  const navigate = useNavigate()
  const [item, setItem] = useState(null)

  useEffect(() => {
    fetch('/db.json')
      .then(res => res.json()) //json 형식으로 데이터 변환
      .then(data => {
        const found = data.cities.find(c => String(c.id) === id)
        setItem(found)
      })
  }, [id]) //id가 바뀔 때마다 실행

  if (!item) return <div style={{ padding: 20 }}>Loading...</div>

  return (
    <div className='detail-area' style={{ padding: 20 }}>
      <button onClick={() => navigate(-1)}>← Back</button>
      <h2>{item.title}</h2>
      <img src={item.img} alt={item.title} style={{ width: "100%", borderRadius: 12 }} />
      <p className='desc'>{item.desc}</p>

      <h3>Highlights</h3>
      <div className='highlights-area' style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: 16,
        marginTop: 12
      }}>
        {item.highlights?.map((h, i) => (
          <article
            key={i}
            style={{
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 6px 16px rgba(0,0,0,.08)",
              background: "#fff"
            }}
          >
            <div style={{ aspectRatio: 4/3,background: "#eee" }}>
              <img
                src={h.img}
                alt={h.name}
                style={{ width: "100%", height: "100%",objectFit: "cover" }}
              />
            </div>
            <div style={{ padding: 15 }}>
              <strong style={{ display: "block", marginBottom: 4 }}>{h.name}</strong>
              <p style={{ margin: 0, fontSize: 15, color: "#334155" }}>{h.info}</p>
            </div>
          </article>
        ))}
      </div>

      <h3>Culture</h3>
      <div className="culture-area">
        <p><strong>Food:</strong> {item.culture?.food.join(", ")}</p>
        <p><strong>Festival:</strong> {item.culture?.festival.join(", ")}</p>
        <p><strong>Lifestyle:</strong> {item.culture?.lifestyle}</p>
      </div>
    </div>
  )
}
