import React from 'react'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'

const Tips = () => {
  return (
    <div className='contents'>
      <h2>여행 준비 & 실용 가이드</h2>
      <Tabs>
        <TabList className='tabList'>
          <Tab>여행 준비</Tab>
          <Tab>교통 정보</Tab>
          <Tab>안전 & 건강</Tab>
          <Tab>현지 꿀팁</Tab>
        </TabList>

        <TabPanel>
          <div className="tab-box">
            <h2>📝 필수 짐 리스트</h2>
            <ul>
              <li>여권과 비자 서류 → 출국 1주 전 확인 필수</li>
              <li>국제 SIM 혹은 eSIM → 공항보다 온라인 구매가 저렴</li>
              <li>멀티 어댑터 → 국가별 전압 & 콘센트 차이 대비</li>
              <li>휴대용 보조 배터리 → 장거리 이동 시 필수</li>
            </ul>
          </div>
          <div className="tab-box">
            <h2>📌 비행 전 체크리스트</h2>
            <ul>
              <li>비자 필요 여부 확인하기</li>
              <li>여행자 보험 가입 여부 체크</li>
              <li>환전: 공항보다 도심 환전소 이용 권장</li>
              <li>항공사 수하물 규정 미리 확인</li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tab-box">
            <h2>🚍 유럽 도시 교통패스 비교</h2>
            <ul>
              <li>파리 → Paris Navigo Pass: 주 단위로 저렴하게 지하철/버스 무제한 이용 가능</li>
              <li>런던 → Oyster Card: 충전식 교통카드, 여행자 할인도 제공</li>
              <li>로마 → Roma Pass: 교통뿐 아니라 박물관 입장 할인 포함</li>
            </ul>
          </div>
          <div className="tab-box">
            <h2>🚊 아시아 주요 도시 대중교통 앱 소개</h2>
            <ul>
              <li>도쿄 → HyperDia, Japan Transit Planner</li>
              <li>방콕 → Grab (택시 대체용), BTS Skytrain App</li>
              <li>서울 → 카카오맵, 네이버 지도</li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tab-box">
            <h2>✅ 여행자 보험이 필요한 이유</h2>
            <ul>
              <li>해외 병원 진료비는 국내 대비 5~10배 이상</li>
              <li>분실·도난, 항공 지연/취소에 대한 보상 가능</li>
            </ul>
          </div>
          <div className="tab-box">
            <h2>⚠ 여행 중 응급 상황 대처법</h2>
            <ul>
              <li>현지 대사관/영사관 연락처 저장</li>
              <li>현지 긴급 번호 확인 (미국 911, 유럽 112, 한국 112/119 등)</li>
              <li>개인 상비약 준비: 진통제, 소화제, 멀미약, 상처 소독제</li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tab-box">
            <h2>💸 팁 문화가 있는 나라 vs 없는 나라</h2>
            <ul>
              <li>미국, 캐나다 → 식당 15~20% 권장</li>
              <li>유럽 일부 (프랑스/독일) → 영수증에 이미 포함된 경우 있음</li>
              <li>한국, 일본 → 팁 문화 없음</li>
            </ul>
          </div>
          <div className="tab-box">
            <h2>📱 언어 장벽 극복하기: 번역 앱 3종 추천</h2>
            <ul>
              <li>번역 앱 추천 → Google Translate, Papago, DeepL</li>
              <li>비상 상황에서는 미리 준비한 “필수 문장 카드” 활용</li>
              <li>현지인과 대화 시, 영어 단어 + 제스처만으로도 충분히 소통 가능</li>
            </ul>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default Tips