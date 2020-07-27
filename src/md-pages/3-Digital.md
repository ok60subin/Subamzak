---
path: "/Digital-Signal-Processing"
title: "디지털 신호처리"
published: true
grade: "3"
field: "electronics"
competition: false
cover: "http://kdesignaward.com/files/attach/images/57144/258/059/f02d797ef3f8f963bbff1b273c75f28c.jpg"
---

<h3> 상보필터</h3>
<p>
    LPF와 HPF를 조합한 상보필터를 설계한다.
</p>
<h4>개요</h4>
<p>
    차후에 개발자로서 한번쯤 자율주행 세그웨이를 만들어 보고 싶다는 생각에 가속도, 자이로, 기울기 센서가 탑재된 시스템을 구성했다.
    모터를 제어하는 과정은 포함되지 않았고, 센서를 통해 들어온 raw data에 필터를 거쳐 노이즈를 제거한다.
    <br>
    가속도 센서를 통해 입력된 가속도는 Low pass filter를 거치고, 자이로 센서를 통해 입력된 각가속도는 High pass filter를 거친다.
    이 때, 서로 필터링 되는 주파수 경계를 잘 정해 Complementary filter가 되게 한다.
    가속도와 각가속도를 통해 각도를 구하는 식을 이용해 출력은 각도로 나오게 된다.
    이 각도가 차후에 제어과정의 입력이 된다.
</p>
<h4>발표 자료</h4>
<p>
    아래 발표자료 영상에 직접 구성한 MATLAB Simulink 필터 시스템과 sin파로 발생시킨 input에 따른 ouput이 비교되어 있다.
    Analog filter가 아닌 digital filter를 사용하기 위해 sampling한 data 이므로 continuous한 input에 비해 discrete한 ouput이 나온것을
    볼 수 있다.
</p>
<div class="box alt multi">
    <iframe src="https://www.youtube.com/embed/xxslEjCgYFM?list=PLxdB5m160EjRX6fsFnJJ2dcFpma_ApuIS" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>