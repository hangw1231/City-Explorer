import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../App.css';
import RecomCard from '../component/RecomCard';

//상단 스와이퍼
const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const Home = () => {
    const [recs, setRecs] = useState([]);

    useEffect(() => {
        fetch('./db.json')
        .then((r) => r.json()) //요청한 데이터를 json 형태로 바꿔줘
        .then((data) => {
            //console.log("전체데이터: ", data);
            const cities = data.cities || []; //data.cities가 있으면 그 값 그대로 보여주고 없으면 빈 배열로 처리 -> cities 데이터가 항상 배열로 처리되도록 해주는 구문
            console.log("cities 배열: ", cities);

            //db.json에서 recommended라는 값이 true인 요소만 모아서 새 배열로 만든 다음 onlyRecommended에 담음.
            const onlyRecommended = cities.filter((m) => m.recommended);
            //console.log("추천만: ", onlyRecommended)

            const firstFour = onlyRecommended.slice(0, 4);
            //console.log("앞4개: ", firstFour)

            setRecs(firstFour);
        })
        .catch((err) => {
            console.log("db.json 로드 실패: ", err)
        })
    }, []); //[]는 처음 실행했을 때 한 번만 실행
  return (
    <div className='contetns'>
        <Carousel
        responsive={responsive}
        swipeable = {true}
        autoPlay = {true}
        autoPlaySpeed = {2500}
        className = "hero-slide"
        >
            <div>
                <img src="https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="파리, 프랑스" />
            </div>
            <div>
                <img src="https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="도쿄, 일본" />
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1434828927397-62ea053f7a35?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="뉴욕, 미국" />
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="케이프타운, 남아프리카공화국" />
            </div>
            <div>
                <img src="https://plus.unsplash.com/premium_photo-1675975706513-9daba0ec12a8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="로마, 이탈리아" />
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1551352912-484163ad5be9?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="시드니, 호주" />
            </div>
        </Carousel>

        <div className="intro-text">
            <h2>
                <span>Discover Cities,</span>
                <span>Experience Cultures</span>
                </h2>
            <div className="text-area">
                <p>“세계 곳곳의 도시와 문화를 탐험하세요.</p>
                <p>여행자의 시선으로 고른 추천 여행지를 만나보세요.”</p>
            </div>
        </div>

        <div className="recommendArea">
            <h2>Explore Cities</h2>
            <div className="recom-card">
                {
                    recs.map((item) => (
                        <RecomCard key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Home