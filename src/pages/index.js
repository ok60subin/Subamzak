import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';


import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import config from '../../config';
import './index.css'
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p className="korean">{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="three">
              <a href="/#" className="button primary korean">
                구경하기
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="two">
        <a href="/#" className="more korean">
          수빈이 소개
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            Project Blog
            <br />
            <div className="korean">작품 자랑하는 곳</div>
          </h2>
          <p>
            You can read the posts about study on BLOG or watch them on YOUTUBE. 
            <br />
            <div className="korean">개발 공부는 유튜브나 블로그에 있어요. 빨리 궈궈씽</div>
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
          충남대학교
          </h2>
          <h4>
            Chungnam National University
          </h4>
          <p className="korean">
            학교설명~
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
           메카트로닉스공학과
          </h2>
          <h4>
           Mechatronics Engineering
          </h4>
          <p className="korean">
          학과설명~!
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            국방무인시스템공학과 
          </h2>
          <h4>
            Unmanned Miliatary System Engineering
          </h4>
          <p className="korean">
            학과설명~!
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Preview</h2>
          <p>
            Here is preview. If you want more, Click the menu and category.
            <br />
            <div className="korean">맛보기에요. 더 자세한 설명은 메뉴에서 원하시는 영역을 선택해주세요.</div>
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Bluetooth Doorlock</h3>
            <p className="korean"> 
              무단 주거침입과 도둑 방지를 위한 블루투스 통신 원격 조종 도어락 으로 침입 알림, 원격 잠금제어, 원격으로 문닫기 기능 탑재
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Linetracer</h3>
            <p className="korean">
              선을 따라 달리는 자율 주행 자동차로 적외선 신호를 감지하는 센서부, 이를 통해 PID 제어를 하는 제어부, 열심히 달리는 구동부로 구성.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Knock talk</h3>
            <p className="korean"> 
              Android studio를 이용한 첫 어플리케이션 개발 프로젝트로 교수님과 학생간의 원활한 미팅을 장려합니다.
            </p>
          </li>
          <li className="icon fa-heart ">
            <h3>spicy Subamjak</h3>
            <p className="korean"> 
              HTML, CSS, JAVASCRIPT 만을 이용 해 도전한 첫 웹 개발 프로젝트. <br/><br/>

              <a href="https://subamjak.netlify.app/" style={{float:'right', text:'blue'}}>수밤작 매운맛</a>
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Another posts</h2>
          <p className="korean">
            수빈이 다른 흔적들 보기
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="https://blog.naver.com/60subin" className="button fit primary">
              BLOG
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCAMO0Hp7B8_UXH4A-kwkr5w" className="button fit">
              YouTUBE
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
