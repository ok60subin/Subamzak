---
path: "/Pill-Dispenser"
title: "졸업 작품"
published: true
grade: "4"
field: "electronics"
competition: true
cover: "https://github.com/ok60subin/subamzak/blob/master/src/assets/images/gdcover.png?raw=true"
---
<h3>SVM을 이용한 처방전 인식과 카트리지 방식 디스펜서를 이용한 알약 제조 시스템  </h3>

<p>블루투스 통신을 이용해 도어락을 제어한다. 침입자 발생 시, 경고알림과 함께 문을 봉쇄한다.</p>

<h4>개요</h4>
<p>
    세계적으로 문제가 되는 약화사고는 주로 '의사의 처방실수' 나 '약사의 조제실수'로 일어난다. <br>
    본 작품은 약사의 조제실수를 최대한 막기 위해 제작하였다.
</p>
<h4>작동</h4>
<p>
    1. SVM 알고리즘으로 Hog feature를 계산 뒤 OpenCV를 이용해 처방전의 지정된 위치에서 컨투어를 찾아 인식한다.<br>
    2. 인식된 정보를 데이터베이스에 업로드 하고, 블루투스를 통해 MCU에 송신한다.<br>
    3. 수신받은 MCU는 모터를 제어 해 약을 분배하고, 사용자에게 전달한다.
</p>
<h4>분담</h4>
<p>
    김보섭 - 프로파일과 아크릴을 이용 해 전체 하드웨어 골격을 구성하고, CREO를 이용한 3D Modeling으로 디스펜서 제작<br>
    윤지애 - SVM과 OpenCV, pi Camera를 이용한 처방전 인식<br>
    정수빈 - Atmega128을 이용한 모터 제어 및 회로 제작, pymongo와 mongoDB를 이용한 데이터베이스 구축
</p>
<h4>발표</h4>
<div class="box alt multi">
    <iframe height="600px" src="https://www.youtube.com/embed/iUfOv0agd-Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<h4>작동</h4>
<div class="box alt multi">
    <iframe height="600px" src="https://www.youtube.com/embed/8c8eYZokNOs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>