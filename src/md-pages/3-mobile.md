---
path: "/Knock-Talk"
title: "모바일 프로그래밍"
published: true
grade: "3"
field: "computer"
competition: false
cover: "https://github.com/ok60subin/subamzak/blob/master/src/assets/images/mop.png?raw=true"
---

<h3>교수 - 학생 소통 어플리케이션</h3>
<p>
    바쁜 일정을 소화하는 교수님과 학생들을 위해 일정을 사전에 약속하고 한눈에 모아볼 수 있는 어플이다. <br>
    교수와 학생의 원할한 소통을 장려합니다.
</p>
<h4>개요</h4>
<p>
    대학교도 학교인 만큼, 학생과 교수 간의 상호 소통이 매우 중요하다. 그러나, 대학교는 중고등학교와 다르게 교수, 학생 모두 바쁘게 이동하기 때문에 대면으로 만나기 매우 힘들다.
    사생활 보호를 위해 메일을 주 연락으로 이용하지만, 메일을 잘 읽지 못하는 교수님들도 계시고 학생들에게는 '만남을 요청한다'는 한 문장을 전달하기 위해 온갖 미사여구를 메일 앞머리에 넣는 것이 큰 부담으로 다가온다. 
 </p>
 <blockquote>
    날씨가 기승을 부리는 N월... 교수님은 잘 지내고 계신지요. <del>저는 잘 못지내요... 교수님을 못 뵈어서...</del>
 </blockquote>
 <p>
    차라리 그 어떤 불필요한 미사여구들을 못 넣게 제한된 간단한 소통법이 있다면 모두가 부담 없이 사용할 수 있지 않을까? 하여 개발해 보았다.
    <del style="color:gray;"><I> 어른들에게 평은 좋지 않았다. </I></del>
 </p>
<h4>도구</h4>
<p>
    안드로이스 스튜디오(Android Studio)를 사용 해 개발했다. 언어는 JAVA를 사용했다. <br>
    어플리케이션에 진입할 때 로딩화면은 스플래쉬 액티비티(Splash activity)를 이용했다.
    교수용 계정과 학생용 계정으로 로그인 하기 위해 Firebase와 연동하였고, 이를 이용해 상호 연락이 가능하다.<br>
    <I style="float:right">by 아델라 김</I> <br><br>
    월간 일정보기는 Material Calendar View와 List View를 배치했다. List View는 적절한 메소드를 구현 해 클릭 이벤트에 따른 리스트 열기 기능을 가진다.
    또한, 길게 눌러 수정 혹은 삭제가 가능하다. <br>
    <I style="float:right">by 숩니</I> <br><br>
    주간 일정보기는 선택된 일정의 주간 시간표처럼 볼 수 있다. Table Layout을 사용했고, 월간 일정의 adb와 연동되어 같은 일정을 볼 수 있다. <br>
    <I style="float:right">by 골드정민 </I>
</p>
<h4>구동 영상</h4>
<div class="box alt multi">
    <iframe height="600px" src="https://www.youtube.com/embed/xxslEjCgYFM?list=PLxdB5m160EjRX6fsFnJJ2dcFpma_ApuIS" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>