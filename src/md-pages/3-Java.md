---
path: "/CNU-GPS"
title: "고급 JAVA Progamming"
published: true
grade: "3"
field: "computer"
competition: false
cover: "https://github.com/ok60subin/subamzak/blob/master/src/assets/images/java_main.png?raw=true"
---

<h3> 충남대학교 편의시설 위치 서비스</h3>
<h4>개요</h4>
<p>
    충남대학교 사이트에 등록된 지도에는 각각의 건물들이 위치한 지도는 볼 수 있지만, 그 건물 내부도는 알 수 없다.
    처음 가보는 건물의 화장실이나, 정수기의 위치를 몰라 교양을 들을 때 난감했던 기억을 토대로 건물의 층별로 편의시설 위치를 표시하는 프로그램을 만들었다.
</p>
<h4>구성</h4>
<div class="box alt threeimg">
            <div class="row gtr-50 gtr-uniform imgs prize">
                <div class="col-3"><span class="image fit">
                    <img src="https://github.com/ok60subin/subamzak/blob/master/src/assets/images/java_main.png?raw=true" alt="java_main">
                </span></div>
                <div class="col-3"><span class="image fit">
                    <img src="https://github.com/ok60subin/subamzak/blob/master/src/assets/images/java_map.png?raw=true" alt="java_map">
                </span></div>
                <div class="col-3"><span class="image fit">
                    <img src="https://github.com/ok60subin/subamzak/blob/master/src/assets/images/java_list.png?raw=true" alt="java_list" >
                </span></div>
                <div class="col-3"><span class="image fit">
                    <img src="https://github.com/ok60subin/subamzak/blob/master/src/assets/images/java_build.png?raw=true" alt="java_build" >
                </span></div>
            </div>
</div>
<p>
    첫번째 사진은 서비스가 로딩되었을 때의 메인화면이다.
    이후에 이후에는 선택에 따라 지도에서 건물을 선택하거나, 목록에서 건물을 선택하면 마지막 사진으로 넘어가 전체 정보를 보거나 원하는 편의시설의 정보만 볼 수 있다.
    기본적인 자바 GUI에서는 안드로이드 처럼 GPS 기반 구글맵이 되지 않아 캡쳐된 사진에 절대좌표를 이용한 지도이다.
    전체 프로젝트 중 편의 시설에 따라 이미지의 색깔을 뽑아내는 부분을 담당했다.
    이는 자바의 Bufferd Image 라이브러리를 이용했다.
</p>