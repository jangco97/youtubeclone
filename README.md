<div align=center>
<img src="https://capsule-render.vercel.app/api?type=wave&color=gradient&height=280&section=header&text=youtube%20clone&fontSize=90">
</div>
<div align=center>
<img src = "https://cdn-icons-png.flaticon.com/512/3128/3128307.png" width="180"/>
</div>
<div align=center>
	<h2> 🏆 프로젝트 제목 🏆</h2>
	<b>YouTube</b>
	<br/>	<br/>
</div>
<div align=center>
	<h2>:pushpin: 프로젝트 소개 :pushpin:</h2>
	Google에서 제공하는 YouTube API를 이용하여 데이터를 받아와 YouTube 앱을 만든다. 
</div>
<div align=center>
<h2> 👤 팀원 소개 👤 </h2>
	[김응열](https://github.com/Valentin1495) | [장건우](https://github.com/jangco97) | <br/>
        [이현정](https://github.com/dochi-dev-tech) | [최우성](https://github.com/No-answerday) 
</div>
<div align=center>
<h2> 📚 기술 스택 📚 </h2>

<img src="https://img.shields.io/badge/antd-E34F2?style=flat-square"/>
<img src="https://img.shields.io/badge/axios-purple?style=flat-square"/>
<img src="https://img.shields.io/badge/moment-black?style=flat-square"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
<img src="https://img.shields.io/badge/React%20Router%20Dom-white?style=flat-square&logo=ReactRouter&logoColor=black%22/%3E"/>
<img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
	
</div>
<div align=center>
<h2> ⏰ 과제 진행 기간 ⏰ </h2>

2023.3.10 ~ 2023.3.16
</div>
<div align=center>
<div class='cover'>
	<div>
<h2> ✏ 작업 영역 및 구현 기능 설명 ✏ </h2>

◾ 김응열 </br> </br>
  🔻 홈페이지 header와 sidebar, sidebar modal 구현 </br>
  🔻 홈페이지 비디오 카드 스타일링 </br>

◾ 장건우 </br> </br>
  🔻 Mainpage, Channelpage, MainComponent 구현 </br>
  🔻 홈페이지 비디오 이미지, 비디오 타이틀, 채널 이름, 날짜 등의 데이터를 렌더링 </br>
  🔻 ChannelPage는 메인페이지의 채널이름을 누르면 이동하도록 구현하였고 </br>
     useEffect로 해당 channelId를 활용하여(useParams로 가져옴) </br> axios로 api 호출을 해서 채널 관련 비디오가 10개 받아지도록 구현 </br>

◾ 최우성 </br> </br>
  🔻 SearchPage, SearchMain 구현 </br>
  🔻 useState와 useEffect를 사용하여 검색어를 저장. 검색어는 useParams를 사용하여 URL에서 가져오고,</br> 그 결과를 SearchMain 컴포넌트에 전달하여 화면에 출력하는 것을 구현 </br>
	
◾ 이현정 </br> </br>
  🔻 DetailPage 구현 시 오류 </br>
  </div>
</div>
</div>

<div align=center>
<h2> 어려웠던 점 :joy_cat: </h2>

🔻 styled-components를 활용할 때 props 이용하여 modal을 열고 닫는 것과 반응형 구현하는 부분이 힘들었습니다. </br></br>

🔻 Youtube api 호출에 제한이 있어서 그 부분을 해결하기 위해 localstorage로 대처하는 부분이 까다롭게 느껴졌습니다. 또한 async await 비동기 처리하는 부분이 조금 까다로웠습니다. </br></br>

🔻 api를 호출하면서 여러가지 오류들이 났었고 이를 해결하는 것이 어려웠습니다.
또 api의 불필요한 호출을 최소화하는 것이나 내가 원하는 검색어만 가져오게 하는 것이 생각보다 까다로웠습니다. useState 나 useEffect 같은 Hook을 적재적소에 잘 사용하는 것이 어려웠습니다. </br></br>
</div>

.cover {
    align=center
    display: flex;
    justify-content: space-between;
    align-items: center;
}

