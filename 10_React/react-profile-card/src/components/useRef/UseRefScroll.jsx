import React,{useRef} from 'react'
 import styled from 'styled-components'
 
 const Nav = styled.nav`
     position: fixed;
     top: 0;
     background: #fff;
     width: 100%;
     z-index: 1000;
 `
 
 const NavUl = styled.ul`
     display: flex;
     gap: 12px;
     list-style: none;
     padding: 12px;
     cursor: pointer;
 `
 
 const UseRefScroll = () => {
     const scrollRef = useRef({
         main: null,
         about: null,
         history: null,
     })

     const handleScrollView = (sectionKey) => {
        scrollRef.current[sectionKey]?.scrollIntoView({behavior: "smooth"});
    }

    return (
        <>
            <Nav>
                <NavUl>
                    <li><button onClick={() => handleScrollView("main")}>메인페이지</button></li>
                    <li><button onClick={() => handleScrollView("about")}>회사소개</button></li>
                    <li><button onClick={() => handleScrollView("history")}>회사이력</button></li>
                </NavUl>
            </Nav>
        <div>
        <section ref={(el) => scrollRef.current.main = el} style={{paddingTop: "80px"}}>
                <h1>메인페이지</h1>
                <p>
                    우린 밤새도록 일하고도 웅크려서 자
                    서울 city 사람들 다 미친 듯 물들었어 다
                    그 사이로 널 꺼내 줘 잠시도
                    가만히 못 있는 날 보고 말해 yo 무사시가 또
                    무슨 일을 꾸미려고 나를 보고 웃지
                    리듬은 계속 굴러 가 드럼 쿵 치
                    팍 드르르 팍 칵 우르르 쾅 쾅
                    내 노랜 아무 의미 없지
                    때려 밟아 like a rock star
                    기타를 때려 부숴 baby I'm a rock star
                    Pool party 무료 행사 'cause baby I'm a rock star
                    기타를 때려 부숴 baby I'm a rock star
                    다 찌그러진 범퍼에 우퍼 부신 뒤 skrrt
                    미안해 용서해 오빤 baby I'm a rock star
                    Pool party 비키니 보러 무료 행사 rock star
                    술자리서 이쁜이들 보러 가는 rock star
                    91년생 아저씨 아님 불러봐 오빠
                    Baby I'm a rock star
                    DM 보냈다가 여친한테 걸린 rock star
                    음 yeah 좀 쫄았어도 rock star
                    91년생 아저씨 아님 불러봐 요한
                    Baby I'm a rock star
                </p>
            </section>
            <section ref={(el) => scrollRef.current.about = el} style={{paddingTop: "80px"}}>
                <h1>회사소개</h1>
                <p>

                    Baby I'm a rock star
                    일단 아무런 느낌도 받지 말아 봐
                    쌈마이 우리 식으로 말하면 떡상
                    올라갈 데가 어딨냐고 imma super star
                    그러니까 내 말은 제발 아니 들어봐 정말
                    이건 욕심 아니고 널 데리고 뜰래 여길 루팡
                    푸른 잎과 때깔이 부드러운 속살
                    에 묻혀버린 채로 들이키지 피나콜라타
                    Hol' up 니 잘났다 고우디 바른 shit
                    오늘은 이거 넣어둘 거야 긴장 풀어두길
                    알아봐도 모른척해 줘 아님 퇴장 뻐꾸기
                    니 친구들까지 다 불러 갑자기 싸해 분위기
                    Yo 커피샵처럼 달리자 이디야
                    클럽 시끄러워 쟤네 다 똑같애 보여 지지야
                    Never ever leave me and you love me like a Kiki
                    스튜디오 집 한 켠에 방
                    음 다 괜찮
                </p>
            </section>
            <section ref={(el) => scrollRef.current.history = el} style={{paddingTop: "80px"}}>
                <h1>회사이력</h1>
                <p>
                Rock star I'm a fuckin' rock star
                Grand Theft Auto V처럼 차 박고
                니 대가리는 top down
                니 아구창 털어 안 나온
                금이 내겐 아빠
                우린 같은 성씨 씨알도 안 먹혀
                니 뻐꾸기 a yo fuck it
                차트에서 top 찍지? 장땡
                순수예술 x까 샤넬 백 울 엄마 앞에
                전교 꼴등한 친구들 인맥 갖고 탓해
                야 야 흥칫뿡 메롱 약 오르지?
                이맘때 우린 행사 한 바퀴면 너의 연봉 damn
                줏대 없는 아는 형님 자꾸 수군대
                내가 베꼈다는 게 또 대체 누군데?
                Roommates only 듣고 뻐꾸기 그만 날려 man
                우리 거절하는 여자들은 나빠
                삼시 세끼 우린 현석 chef 파스타
                이랬다저랬다 가사 절었다 아 씨발
                이거 편집해주세요 왜냠 형과 나는 rock star
                </p>
            </section>
        </div>
    </>
  )
}

export default UseRefScroll