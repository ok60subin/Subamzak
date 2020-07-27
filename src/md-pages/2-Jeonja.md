---
path: "/Automatic-Pinball"
title: "전자회로 실험"
published: true
grade: "2"
field: "electronic"
competition: false
cover: "https://github.com/ok60subin/subamzak/blob/master/src/assets/images/pincircuit2.png?raw=true"
---
<h3>익스트림 오토매틱 핀볼</h3>
    <p>
        밝기 변화감지를 통해 공이 굴러왔음을 알고 자동으로 게임을 진행하는 핀볼이다.
    </p>
    <h4>구성</h4>
    <p>
        디지털 소자나 MCU 등을 일체 사용하지 않고 아날로그 소자만을 사용해 제작했다.
        조도 센서를 사용 해 핀볼이 막대를 가리면 OP-AMP에 입력되는 전압이 전압분배 법칙에 의해 변화한다.
        이를 통해 비교기에서 일정 센서값이 되면 가렸음을 인식하고, MOSFET에 신호를 준다.
        MOSFET은 솔레노이드에 입력되는 전압을 증폭 시키기 위해 사용된다.
    </p>
    <h4>하드웨어</h4>
    <p>왼쪽은 시뮬레이션 프로그램(orCAD)에 의해 분석된 회로도의 모습이고, 오른쪽은 구성한 실제 회로이다.</p>
    <div class="box alt twoimg">
        <div class="row gtr-50 gtr-uniform imgs multi">
            <div class="col-6"> <span class="image fit">
                <img src="https://github.com/ok60subin/subamzak/blob/master/src/assets/images/pincircuit.png?raw=true" alt="pincircuit">
            </span></div>
            <div class="col-6"> <span class="image fit">
                <img src="https://github.com/ok60subin/subamzak/blob/master/src/assets/images/pincircuit2.png?raw=true" alt="pincircuit2">
            </span></div>
        </div>
    </div>
    <h4>시연 영상</h4>
    <p>
        공이 부딪히며 내려와 막대에 닿으면 자동으로 솔레노이드가 동작 해 공을 다시 튕기는 것을 볼 수 있다.
    </p>
 <div class="box alt multi">
   <iframe height="600px" src="https://www.youtube.com/embed/2rEfMC-9Wng?list=PLxdB5m160EjRX6fsFnJJ2dcFpma_ApuIS" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
   