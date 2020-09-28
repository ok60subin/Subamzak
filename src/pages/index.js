import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import MetaHelmet from '../components/MetaHelmet'
import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import banner from '../assets/images/banner.jpg';
import config from '../../config';
import './index.css'



const IndexPage = () => (
  <Layout>
    <MetaHelmet 
      title="수밤작"
    />
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
            대전광역시 유성구에 위치한 4년제 국립대학교이다. 14개의 단과대학, 2개의 학부와 14개의 대학원을 가진다. 
            국가와 인류사회의 발전에 필요한 학술의 심오한 이론과 그 응용방법을 교수ㆍ연구하는 동시에 창의ㆍ개발ㆍ봉사정신이 풍부한 지도적 인격을 갖춘 인재를 양성함을 교육 목표로 한다.
            <br/>
                <a href="javascript:window.open('http://plus.cnu.ac.kr/html/kr/','CNU!','')" style={{float:'right'}}>학교 바로가기</a>
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
                메카트로닉스(Mechatronics)는 <mark>기계공학(Mechanics)과 전자공학(Electronics)의
                합성어</mark>로 컴퓨터 제어 및 정보처리 기술 등과 같은 전자공학에서 발전시킨 기술을 기계공학에 적용하는 새로운 기술 분야이다.
                <br/>
                교양과목(수학, 물리학, 프로그래밍언어 등)을 통해 공학의 기초 소양을 쌓고, 동역학, 고체역학, 기계공작법, 전자회로실험, 디지털회로실험 등을 전공 기초과목으로 이수한 후
                기계시스템, 전기전자시스템, 컴퓨터시스템, 융합시스템 분야로 나누어진 메카트로닉스공학의 응용기술을 배운다.
                이처럼 메카트로닉스공학과 전공과정에서는 기계 및 전자시스템의 특성을 이해하고 컴퓨터제어시스템 분석 및 설계에 관한 체험적 전문지식을 습득할 수 있도록 이론과 실습을 겸비한 종합적인 교육을
                실시한다.
                <br/>
                <a href="javascript:window.open('https://mec.cnu.ac.kr/medc/index.do','Mecha!','')" style={{float:'right'}}>학과 바로가기</a>
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
              국방 무인 시스템과 관련한 <mark>기계 및 전기/전자 요소 기술에 대한 기본적 이해를 바탕으로 관련된 SW를 창의적으로 설계
              제작</mark>할 수 있는 실무형 인력 양성을 목표로 하는 과정이다.
              <br/>
              2개 이상의 학과·학부·전공 간 합의하여 융합학문 교육을 위해 운영하는 전공과정으로 본 과인 메카트로닉스공학과와 컴퓨터 융합학부의 교육과정을 연계해 듣는 과정이다.
              메카트로닉스공학과에서는 수치해석, 디지털 회로실습, 인공지능 개론등이 속하며 컴퓨터 융합학부 과정에서는 모바일 프로그래밍, 웹 프로그래밍, 고급JAVA 프로그램 등이 있다.
              <br/>
              <a href="javascript:window.open('http://wise.cnu.ac.kr/','Gukbang!','')" style={{float:'right'}}>사업단 바로가기</a>
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
            <br/>
            <div className="korean">맛보기에요. 더 자세한 설명은 메뉴에서 원하시는 영역을 선택해주세요.</div>
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Bluetooth Doorlock</h3>
            <p className="korean"> 
              무단 주거침입과 도둑 방지를 위한 블루투스 통신 원격 조종 도어락 으로 침입 알림, 원격 잠금제어, 원격으로 문닫기 기능 탑재하여 침입시 알림과 침입자 가두기를 제공합니다.
              <br/>
              <Link to="/Bluetooth-Doorlock" style={{float:'right'}}>더 알아보기</Link>
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Linetracer</h3>
            <p className="korean">
              선을 따라 달리는 자율 주행 자동차로 적외선 신호를 감지하는 센서부, 이를 통해 PID 제어를 하는 제어부, 열심히 달리는 구동부로 구성.
              <br/>
              <Link to="/Tracer" style={{float:'right'}}>더 알아보기</Link>
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Knock talk</h3>
            <p className="korean"> 
              Android studio를 이용한 첫 어플리케이션 개발 프로젝트로 교수님과 학생간의 원활한 미팅을 장려합니다.<br/>
              <Link to="/Knock-Talk" style={{float:'right'}}>더 알아보기</Link>
            </p>
          </li>
          <li className="icon fa-heart ">
            <h3>Spicy Subamzak</h3>
            <p className="korean"> 
              HTML, CSS, JAVASCRIPT 만을 이용 해 도전한 첫 웹 개발 프로젝트. <br/><br/>

              <a href="javascript:window.open('https://spicy-subamzak.netlify.app/','spicy!','')" style={{float:'right', text:'blue'}}>수밤작 매운맛</a>
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
