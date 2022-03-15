import {Wrapper, Head, Head_header,
        Head_header_img, Head_header_body, Head_header_profile,
        Head_header_title, Head_header_icon, Head_header_name,
        Div1, Head_header_nav, Header_nav_1, Header_nav_2,
        Header_nav_3, Header_nav_4, Body, Box,
        Question_number, Question, Question_icon, 
        Question_box, Nav, Nav_box, Nav_box_icon, Nav_box_name,
        Nav_box_name4, Nav_box_icon4} from '../../../styles/quiz/01-faq/01Quize'

export default function Home() {
  return (
    <Wrapper>
        <Head>
         <Head_header>
            <Head_header_img>
            <img src="/quiz/search.png" alt='search' />
            </Head_header_img>
         </Head_header>
         <Head_header_body>
             <Head_header_title>마이</Head_header_title>
             <Div1>
                <Head_header_profile>
                    <img src='/quiz/profile.jpg' alt='Profile' />
                </Head_header_profile>
                <Head_header_name>임정아</Head_header_name>
                <Head_header_icon>
                    <img src='/quiz/arrow.png' alt='arrow' />
                </Head_header_icon>
             </Div1>
         </Head_header_body>
         <Head_header_nav>
            <Header_nav_1>공지상항</Header_nav_1>
            <Header_nav_2>이벤트</Header_nav_2>
            <Header_nav_3>FAQ</Header_nav_3>
            <Header_nav_4>Q&A</Header_nav_4>
         </Head_header_nav>
        </Head>
        <Body>
            <Box>
                <Question_box>
                    <Question_number>Q. 01</Question_number>
                    <Question>리뷰작성은 어떻게 하나요?</Question>
                </Question_box>
                <Question_icon>
                    <img src='/quiz/right.png' alt='right' />
                </Question_icon>
            </Box>
            <Box>
                <Question_box>
                    <Question_number>Q. 02</Question_number>
                    <Question>리뷰수정/삭제은 어떻게 하나요?</Question>
                </Question_box>
                <Question_icon>
                    <img src='/quiz/right.png' alt='right' />    
                </Question_icon>
            </Box>
            <Box>
                <Question_box>
                    <Question_number>Q. 03</Question_number>
                    <Question>아이디/비밀번호를 잊어버렸어요.</Question>
                </Question_box>
                <Question_icon>
                    <img src='/quiz/right.png' alt='right' />
                </Question_icon>
            </Box>
            <Box>
                <Question_box>
                    <Question_number>Q. 04</Question_number>
                    <Question>화원을 탈퇴하고 싶어요</Question>
                </Question_box>
                <Question_icon>
                    <img src='/quiz/right.png' alt='right' />
                </Question_icon>
            </Box>
            <Box>
                <Question_box>
                    <Question_number>Q. 05</Question_number>
                    <Question>출발지 설졍은 어떻게 하나요?</Question>
                </Question_box>
                <Question_icon>
                    <img src='/quiz/right.png' alt='right' />
                </Question_icon>
            </Box>
            <Box>
                <Question_box>
                    <Question_number>Q.06</Question_number>
                    <Question>비밀번호를 변경하고 싶어요.</Question>
                </Question_box>
                <Question_icon>
                    <img src='/quiz/right.png' alt='right' />
                </Question_icon>
            </Box>
        </Body>
        <Nav>
            <Nav_box>
                <Nav_box_icon>
                    <img src='/quiz/home.png' alt='home'/>
                </Nav_box_icon>
                <Nav_box_name>홈</Nav_box_name>
            </Nav_box>
            <Nav_box>
                <Nav_box_icon>
                    <img src='/quiz/location.png' alt='location'/>
                </Nav_box_icon>
                <Nav_box_name>잇츠로드</Nav_box_name>
            </Nav_box>
            <Nav_box>
                <Nav_box_icon>
                    <img src='/quiz/unselected.png' alt='unselected'/>
                </Nav_box_icon>
                <Nav_box_name>마이찜</Nav_box_name>
            </Nav_box>
            <Nav_box>
                <Nav_box_icon4>
                <img src='/quiz/selected.png' alt='selected'/>
                </Nav_box_icon4>
                <Nav_box_name4>마이</Nav_box_name4>
            </Nav_box>
        </Nav>
    </Wrapper>
  )
}