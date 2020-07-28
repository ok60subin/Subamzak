---
path: "/Bluetooth-Doorlock"
title: "주니어 창의 경연대회"
published: true
grade: "0"
field: "electronics"
competition: true
cover: "https://github.com/ok60subin/subamzak/blob/master/src/assets/images/doorlockcover.png?raw=true"
---
<h3>절대 혼자가 아니야, <span style="color:red">도어락</span> </h3>

<p>블루투스 통신을 이용해 도어락을 제어한다. 침입자 발생 시, 경고알림과 함께 문을 봉쇄한다.</p>

<h4>개요</h4>
<p>
    혼자 사는 자취생들 같은 경우, 계약이 끝나갈 때 쯤에 집주인들이 집을 보여주기 위해 허락없이 문을 따고 들어오는 경우가 많다.
    이는 불법침입에 해당하지만 학생의 입장으로서 따로 취할 수 있는 조취가 없다.
    혼자 살지 않더라도, 가족 구성원 모두가 집을 비울 때 사생활 공간이나, 귀중품들이 담겨있는 곳은 언제나 불안할 수 있다.
    혹은 아는 사람이 잠시 집에 왔을 때, 비밀번호는 알려주기 싫고 문은 열워줘야 하는 사람을 위해 개발된 도어락의 프로토 타입이다.
</p>
<h4>기능</h4>
<p>
    어플과 블루투스 통신을 이용한다.
    어플을 통해 Lock, Unlock, Close 제어를 할 수 있다.
    도어락이 설치되는 곳마다 조도의 차이가 있으므로 처음 설치 시 센서 튜닝을 실시한다.
    이 튜닝을 통해 문이 열렸을 때와 닫혔을 때의 값을 조정한다.
    사용자가 문을 닫고 나간 후 Detect mode를 시작하면, 조도 변화를 감지해 문이 열렸음을 인식한다.
    인식하면 사용자의 휴대폰으로 침입자가 발생했다는 알림이 가고, Lock 제어에 문을 닫아버리는 Close 제어와 Lock제어가 결합된 기능이 추가된다.
    사용자가 어플에서 침입자가 아님을 알려주면, Close 제어가 초기화 되고 잠금이 풀려 침입자 발생 전 Detect mode로 돌아간다.
</p>

<h4>발표 자료</h4>
<div class="box alt multi">
    <iframe  height="600px"src="https://www.youtube.com/embed/2eX7CrRilpo?list=PLxdB5m160EjRX6fsFnJJ2dcFpma_ApuIS" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<h4>구동 영상</h4>
<div class="box alt multi">
    <iframe  height="600px" src="https://www.youtube.com/embed/TYw64FWQufg?list=PLxdB5m160EjRX6fsFnJJ2dcFpma_ApuIS" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<h4>결과</h4>
<div class="box alt threeimg">
              <div class="row gtr-50 gtr-uniform imgs prize">
                <div class="col-4"><span class="image fit">
            <img src="https://github.com/ok60subin/subamzak/blob/master/src/assets/images/ju_c.png?raw=true" alt="JUNIOR">
        </span></div>
        <div class="col-4"><span class="image fit"> </span></div>
</div>