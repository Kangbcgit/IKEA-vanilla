window.addEventListener('DOMContentLoaded', function () {
  // 작성 방식 변수선언 / 함수선언 / 이벤트 순서
  // common function
  function throttle (callback, wait) {
    let waiting = true;

    return function () {
      if(waiting == true) {
        callback();
        waiting = false;
        setTimeout(() => {
          waiting = true;
        }, wait)
      }
    }
  }
  // header
  let header = document.querySelector('.wrapper > header'),
      gnb = header.querySelector('.wrapGnb'),
      subMenu= header.querySelector('.subMenu'),
      gnbItem = gnb.querySelectorAll('a');

  function subMenuAddActive () {
      subMenu.classList.add('active');
    }
  function subMenuRemoveActive () {
      subMenu.classList.remove('active');
    }

  gnb.addEventListener('mouseover', subMenuAddActive)
  gnb.addEventListener('mouseleave', subMenuRemoveActive)
  // mainBanner
  let info = document.querySelector('.info');

  let mainBannerBackground = document.querySelector('.wrapBackgroundContent'),
      mainBannerVid = mainBannerBackground.querySelector('video');
  window.addEventListener('scroll', () => {
    if(info.getBoundingClientRect().top <= 0) {
      mainBannerVid.classList.add('active');
    } else {
      mainBannerVid.classList.remove('active');
    }
  })
  // info
  // homeFunishingIdeas
  // eventBanner
  let eventBanner = document.querySelector('.eventBanner'),
      eventBackground= eventBanner.querySelector('.background'),
      eventWrapText = eventBanner.querySelector('.wrapText');
    // 프로그레스바
  let eventProgressBar = eventBackground.querySelector('.wrapProgressBar'),
      eventProgressBg = eventBanner.querySelector('.progressBackground'),
      eventCurrentProgress = eventBanner.querySelector('.currentProgress'),
      eventPauseBtn = eventBanner.querySelector('.wrapPauseButton');
    // next,prev 버튼
  let prevBtn = eventBanner.querySelector('.prevButton'),
      nextBtn = eventBanner.querySelector('.nextButton');
      
  let index = 0,
      textData = {
        text1: {
          h2: '우리 집의 주인공은 바로 나',
          p: '고정관념은 버리고 내가 생각하는 아름다움을 표현해 보세요. 감각적인 디자인, 다양한 수납 솔루션, 다채로운 색상의 텍 스타일 그리고 대담한 콤비네이션에서 아이디어를 얻어보세요. 나만의 스타일로 우리 집을 꾸며봐요!'
        },
        text2: {
          h2: '전기세 걱정 없이 온종일 시원하게',
          p: '하루종일 습하고 덩누 요즘, 체감온도를 낮춰주는 IKEA 쿨링 제품으로 에너지도 절약하고 환경 보호에도 동참해 보세요.'
        },
        text3: {
          h2: '비즈니스 인테리어 디자인 서비스 할인 혜택',
          p: '7월 4일부터 21일까지, 비즈니스 인테리어 디자인 서비스 구매 후 500만원 이상 구매 시 총 구매 금액의 5%를 할인해드려요!'
        },
        text4: {
          h2: '매주 목요일 오후 2시, IKEA Live!',
          p: '매주 다른 주제의 IKEA Live를 통해 다양한 홈퍼니싱 아이디어를 알아보고 마응메 드는 제품을 쇼핑하세요. 라이브 중 공개되는 🎁스페셜 할인 쿠폰🎁의 기회도 놓치지 마세요!'
        }
      };
  function dataSwitch () {
    // src = `event_banner${index}`;
    // img change
  };
    // text (h2, p) change object 데이터 방식 이용
    // progressbar change
  prevBtn.addEventListener('click', dataSwitch);
  // storeLocation
  // footer
  // common
  let scrolling = false;
  let viewPortScroll = (e) => {
    e.preventDefault();
    if(scrolling == false) {
      if (e.deltaY > 0) {
        scrollTo({top: scrollY + window.innerHeight, behavior: "smooth"})
      } else {
        scrollTo({top: scrollY - window.innerHeight, behavior: "smooth"})}
      scrolling= true;
      setTimeout(() => (scrolling = false), 500);
    }
  }
  window.addEventListener('wheel', viewPortScroll, {passive: false})
})