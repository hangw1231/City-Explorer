import React, { useState, useEffect } from "react";

const Culture = () => {
  const [foods, setFoods] = useState([]);
  const [festivals, setFestivals] = useState([]);
  const [festIndex, setFestIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // db.json 불러오기
  useEffect(() => {
    let active = true;
    async function load() {
      try {
        const res = await fetch("/db.json", { cache: "no-store" });
        if (!res.ok) throw new Error("db.json 요청 실패");
        const json = await res.json();

        if (!Array.isArray(json.foods) || !Array.isArray(json.festivals)) {
          throw new Error("db.json 구조가 올바르지 않습니다.");
        }

        if (active) {
          setFoods(json.foods);
          setFestivals(json.festivals);
          setError("");
        }
      } catch (e) {
        if (active) {
          setError(e.message || "데이터 로드 실패");
        }
      } finally {
        if (active) setLoading(false);
      }
    }
    load();
    return () => {
      active = false;
    };
  }, []);

  // 페스티벌 자동 롤링 (4초)
  useEffect(() => {
    if (!festivals.length) return;
    const id = setInterval(() => {
      setFestIndex((prev) => (prev === festivals.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(id);
  }, [festivals]);

  const prevFest = () => {
    if (!festivals.length) return;
    setFestIndex((prev) => (prev === 0 ? festivals.length - 1 : prev - 1));
  };

  const nextFest = () => {
    if (!festivals.length) return;
    setFestIndex((prev) => (prev === festivals.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="contents">
      {loading && <p className="muted">데이터 불러오는 중…</p>}
      {!loading && error && <p className="muted error">{error}</p>}

      {/* Food & Cuisine */}
      <section className="food-wrap">
        <h2>Food &amp; Cuisine</h2>
        <small>도시별 대표 음식과 로컬 맛집 포인트</small>

        <div className="grid">
          {foods.map((f, idx) => (
            <article className="food-card" key={idx}>
              <figure>
                <img
                  src={f.img}
                  alt={`${f.city} ${f.name}`}
                  loading="lazy"
                  onError={(e) => (e.currentTarget.style.opacity = 0.1)}
                />
              </figure>
              <div className="pad">
                <div className="tags">
                  {(f.tags || []).map((t, i) => (
                    <span className="tag" key={i}>
                      {t}
                    </span>
                  ))}
                </div>
                <h3>
                  {f.city} · {f.name}
                </h3>
                <p>{f.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Festivals & Events */}
      <section className="festival-wrap">
        <h2>Festivals &amp; Events</h2>
        <small>계절/월별로 골라보는 전 세계 축제</small>

        {festivals.length > 0 ? (
          <div className="festivalSlider">
            <button onClick={prevFest} aria-label="이전">
              ◀
            </button>

            <article className="card slide">
              <figure>
                <img
                  src={festivals[festIndex].img}
                  alt={`${festivals[festIndex].city} ${festivals[festIndex].name}`}
                  loading="lazy"
                />
              </figure>
              <div className="pad">
                <div className="tags">{festivals[festIndex].month}</div>
                <h3>
                  {festivals[festIndex].city} · {festivals[festIndex].name}
                </h3>
                <p>{festivals[festIndex].tip}</p>
              </div>
            </article>

            <button onClick={nextFest} aria-label="다음">
              ▶
            </button>
          </div>
        ) : (
          <p className="muted">표시할 축제가 없습니다.</p>
        )}
      </section>
    </div>
  )
}

export default Culture