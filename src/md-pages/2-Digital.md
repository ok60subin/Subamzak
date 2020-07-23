---
path: "/Wrek-A-Mole"
title: "디지털회로 실험"
published: true
grade: "2"
field: "electronic"
competition: false
---

<h3>두더지 잡기</h3>
    <p>
        짝이 이뤄진 LED와 스위치를 통한 두더지 잡기 게임이다.
        LED가 켜지는 것이 두더지가 올라왔음을 의미하고, 스위치를 누르는 것을 두더지를 잡는것을 의미한다.
    </p>
    <h4>구성</h4>
    <p>
        디지털 논리 소자들을 조합해 MCU 없이 논리를 조합한다.
        555타이머 3개를 사용 해 주파수가 다른 2개의 펄스를 발생시키고, 2개의 펄스의 비해 느린 주파수의 펄스 하나를 발생시킨다.
        2개의 빠른 펄스는 각각 JK-FlipFlop에 입력되어 0부터 하나씩 증가해 3까지 4bit를 가산기 출력을 뽑아낸다.
        0부터 3까지 서로 다른 속도로 증가하는 두 세트가 느린 펄스를 받는 D-FlipFlop의 입력으로 들어가 값이 capture 된 채 유지된다.
        이 값이 2 to 4 Decoder로 입력되어 한 비트씩 할당받게 되고, 이는 각각 서로 다른 AND 소자의 입력으로 들어간다.
        스위치가 눌리면 VCC, 눌리지 않는 동안은 GND가 연결되게 회로를 연결 해놓고, 이 입력을 AND 소자의 나머지 입력으로 넣는다.
        AND 소자의 출력을 모두 OR 소자로 묶어 하나의 비트로 나오게 한다.
        D-FlipFlop의 출력은 AND 소자의 입력으로 들어가기도 하지만, 할당된 LED에 연결되기도 해 두더지 역할을 한다.
        즉, OR 소자의 출력은 두더지 역할을 하는 LED가 켜졌을 때 사용자가 그에 맞는 스위치를 누를 때 1인 것이다.
    </p>
    <h4>하드웨어</h4>
    <p>
        3T의 MDF 커팅을 위한 레이져 커터를 사용하기 위해 AutoCAD로 작업한 2D 도면과 완성하고 난 후 회로 모습이다.
    </p>
    <div class="box alt twoimg">
        <div class="row gtr-50 gtr-uniform imgs multi">
            <div class="col-6"> <span class="image fit">
                <img src="https://github.com/ok60subin/subamzak/blob/master/src/assets/images/molcad.png?raw=true" alt="molcad">
            </span></div>
            <div class="col-6"> <span class="image fit">
                <img src="https://github.com/ok60subin/subamzak/blob/master/src/assets/images/molecircuit.png?raw=true"alt="moleCIRCUIT">
            </span></div>
        </div>
    </div>
    <h4>시연 영상</h4>
    <p>
        LED가 켜진 곳의 버튼이 눌렸을 때만 정답 LED가 켜지고, 이외에는 반응하지 않는 모습이다.
        사람의 기준에서 랜덤이라 할 수 있는 확률로 한번에 2쌍의 LED가 켜지는 것을 볼 수 있다.
    </p>
    <div class="box alt multi">
   <iframe height="600px"  src="https://www.youtube.com/embed/Ul241KD5F38?list=PLxdB5m160EjRX6fsFnJJ2dcFpma_ApuIS" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>