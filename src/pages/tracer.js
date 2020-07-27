import React from 'react';
import './index.css'
import Layout from '../components/Layout';

import running1 from '../assets/images/running1.png';
import running2 from '../assets/images/running2.png';
import running3 from '../assets/images/running3.png';
import lt_second from '../assets/images/lt_second.jpg';
import se_c from '../assets/images/se_c.png';
import se_d from '../assets/images/se_d.png';
import lt_third from '../assets/images/lt_third.jpg';
import th_d from '../assets/images/th_d.png';
import th_s from '../assets/images/th_s.png';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>About Linetracer</h2>
        <p className="korean">라인트레이서가 무엇이냐</p>
      </header>
      <section className="wrapper style5 korean">
        <div className="inner tracer">
           
        <ul>
          <li>
          <h3>라인 트레이서?</h3>
          <blockquote>
              라인 트레이서는 말 그대로, 선을 추적하는 기능을 가진 자동차이다.
              <br/>
              여러가지 알고리즘을 통해, 여러차례 기록을 측정하고, 기록이 빠른 순으로 순위가 결정된다.
            </blockquote>
            <div className="box alt tracerimg threeimg">
              <div className="row gtr-50 gtr-uniform imgs">
                <div className="col-4"><span className="image fit"><img src={running1} alt="running1"/></span></div>
                <div className="col-4"><span className="image fit"><img src={running2} alt="running2"/></span></div>
                <div className="col-4"><span className="image fit"><img src={running3} alt="running3"/></span></div>
              </div>
					  </div>


            <h4>적외선 센서</h4>
            <p>
                센서는 적외선 센서가 이용된다.
                적외선 센서는 수광부와 발광부로 이루어지는데, 발광부는 적외선을 내뿜고 수광부는 적외선을 받아들인다.
                라인트레이서가 달리는 맵이 검은색과 하얀색으로 이루어져 있으므로, 각각 반사하는 적외선의 양이 달라 맵을 돌기 전에 미리 튜닝과정을 통해 하얀색에서의 센서값과 검은색에서의 센서값을 각각
                인식한다.
                적외선은 인식하는 곳의 빛의 파장에 따라 조금씩 영향을 받기 때문에 경기장에서의 최적값을 위해 튜닝 과정을 거친다.
                사용하는 모터의 종류에 따라 Step Motor 부문, DC Motor 부문으로 나뉘는데 Step Motor 부문에서는, 각각 8개의 발광부와 수광부를 가진다.
                이 중 다섯개는 따라가는 선의 위치를 파악하는데 이용되고, 나머지 2개는 맵의 추가적인 정보를 얻는데 사용한다.
            </p>
            <h4>마이크로 컨트롤러</h4>
            <p>
                AVR의 ATmega 시리즈, DSP 등 참가자가 주로 사용하는 마이크로 프로세서를 사용한다. 본인은 ATmega128을 사용한다.
                dc 모터를 사용한다면, encoder 입력을 위해 dsp를 주로 사용한다.
            </p>

            <h4>모터</h4>
            <p>
                모터는 사용하는 모터 종류에 따라 step 모터와 dc 모터를 사용할 수 있다.
                입문자는 대게 step 모터로 시작한다. dc 모터에 비해 느리고 안전하게 주행할 수 있으므로 라인을 벗어날 위험이 적기 때문이다.
                dc모터는 빠르게 달리다가 맵을 살짝 벗어나도 제어가 역동적인 dc 모터의 특성 덕분에 드리프트를 통해 다시 라인을 찾아갈 수 있다.
            </p>
            <h4>알고리즘</h4>
            <p>
                스텝모터 트레이서인 경우 적외선 센서 7개를 이용해 각각의 센서값을 실시간으로 얻는데, 이 센서 중 양 끝에 2개는 '마크'를 인식하는데 사용된다.
                마크는 한번 나왔을 경우, 좌회전 이나 우회전을 알리고 같은 방향으로 한 번 더 나오면 직진으로 바뀜을 알리는 역할이다.
                이를 통해 구간을 직선, 좌회전, 우회전으로 나눌 수 있다.
                가운데 다섯개 센서는 각각의 센서에 가중치를 부여하고, 센서값을 곱한 뒤 사용하는 센서 개수로 나누는 방법을 사용해 현재 인식되는 하얀 선으로 부터 몸체가 어디에 위치해 있는지 계산한다.
                이를 position 값으로 지정하고, PID제어를 통해 position값에 대한 error를 0과 가깝게 하며 선을 따라간다.
                <br/>
                1차 주행 때 이 마크를 통해 구간의 방향과 길이를 MCU에 저장하고, 이를 통해 직선에서 가속하고 커브에서 감속하는 2차 주행으로 시간을 단축할 수 있다.
                참가자에 따라 2차 주행, 3차 주행의 알고리즘은 모두 다르다.
            </p>
            </li>
            <li>
            <h3>대회 규칙?</h3>
            <p>
                일정한 거리를 두고 떨어져 있는 스타트 마크와 엔드 마크를 기준으로 경연 시간을 기록한다.
                폐루프로 이루어진 맵에서 스타트 마크를 지나치고 엔드 마크를 지나치는 기준으로 시간을 기록하는데, 이 때 시작마크를 지나고 나서 멈추는 경우 기록으로 인정하지 않는다.
                선을 이탈하는 라인아웃이 일어난 경우 경연 기록을 인정하지 않고 약 30초 쯤 패널티를 부과하는 곳도 있다.
                각 대회에 따라 3분에서 5분까지 경연 시간이 다르며, 이 시간 안에 자유롭게 맵을 돌며 제일 빠른 기록을 경연 기록으로 인정한다.
            </p>
            </li>
            <li>
            <h3>주행?</h3>
            <h4>1차 주행</h4>
            <p>
                코너에서는 코너의 기울기를 순간적으로 계산해 기울기에 맞춰서 속도를 조절하고, 직선에서는 사전에 지정된 빠른 속도로 가속한다.
                <br/>
                (2019년 단국대학교 라인트레이서 대회)
            </p>
            
            <iframe width="784" height="441" src="https://www.youtube.com/embed/Ck_iRWbGfvs?list=PLxdB5m160EjRX6fsFnJJ2dcFpma_ApuIS" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br/><br/>
            <h4>2차 주행</h4>
            <p>
                코너에서는 1차 주행의 가감속과 같이 주행하고, 직선에서는 남은 거리와 현재 위치를 계산해가며 안정적이면서도 최대의 속도를 낼 수 있는 속도로 가속한다.
                <br/>
                (2019년 단국대학교 라인트레이서 대회)
            </p>
            <iframe width="784" height="441" src="https://www.youtube.com/embed/UgiJ8yBeiCs?list=PLxdB5m160EjRX6fsFnJJ2dcFpma_ApuIS" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </li>
            </ul>

        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
