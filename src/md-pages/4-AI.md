---
path: "/Classify-Hangul"
title: "인공지능 개론"
published: true
grade: "4"
competition: false
cover: "https://github.com/ok60subin/subamzak/blob/master/src/assets/images/ai_cover.png?raw=true"
---
<h3>CNN을 이용한 한글인식</h3>

<h4>개요</h4>
<p>
    보통 text detection과 classification을 진행할 때는 Tesseract-OCR 같은 무료 라이브러리로 많이 진행하지만, 한글은 비교적 정확도가 높지않고 서체에 따라 각 자음의 형태가 달라져 인식이 힘들어진다. <br>
    이를 보완하기 위해 classification 부분만 여러 폰트를 이용해 데이터 셋을 생산 해 진행해보기로 하였다.
    
</p>

<h4>구성</h4>
<p>
    첫 시도인만큼 2D Convolution과 Fully Connected로 간단하게 구성하였고, Adam Optimizer를 사용하였다.<br>
    데이터 수, 데이터 크기등을 조절해 여러 결과를 내고, accuracy를 비교해 보았다.<br><br>
    <a href="https://github.com/IBM/tensorflow-hangul-recognition"> Dataset 출처: [Github] IBM/tensorflow-hangul-recognition </a>
</p>
<h4>발표 자료</h4>
<div class="box alt multi">
    <iframe height="600px" src="https://www.youtube.com/embed/XbFmslNl2_0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>