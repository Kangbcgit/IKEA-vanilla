window.addEventListener('DOMContentLoaded', function () {
  // 작성 방식 변수선언 / 함수선언 / 이벤트 순서
  // common function
  function throttle(callback, wait) {
    let waiting = true;

    return function () {
      if (waiting == true) {
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
    gnbATags = header.querySelectorAll('.wrapGnb > a'),
    gnbDiv = header.querySelectorAll('.wrapGnb > div'),
    gnbIcons = header.querySelectorAll('.wrapSideIcons a img'),
    // subMenus = header.querySelectorAll('.wrapGnb > a+.subMenu'),
    // subMenuATags = header.querySelectorAll('.wrapGnb > a + .subMenu > a'),
    gnbItem = gnb.querySelectorAll('a');
  for (let i = 0; i < gnbDiv.length; i++) {
    gnbDiv[i].addEventListener('mouseover', () => {
      dropDown(i)
    })
    gnbDiv[i].addEventListener('mouseleave', () => {
      dropDownReverse(i);
    })

  }
  function headerOn () {
    let src = `img/icon/icon`;
    header.classList.add('active');
    for (let i = 0; i < gnbIcons.length; i++) {
      gnbIcons[i].setAttribute('src', `${src}${i+1}rv.svg`);
    }
  }
  function headerOff () {
    if (scrollY <= 30) {
      let src = `img/icon/icon`;
      header.classList.remove('active');
      for (let i = 0; i < gnbIcons.length; i++) {
        gnbIcons[i].setAttribute('src', `${src}${i+1}.svg`);
      }
    }
  }
  header.addEventListener('mouseover', () => {
    headerOn();
  })
  header.addEventListener('mouseleave', () => {
    headerOff();
  })
  function dropDown (i) {
    gnbDiv[i].lastElementChild.classList.add('active');
  }
  function dropDownReverse (i) {
    gnbDiv[i].lastElementChild.classList.remove('active');
  }
  this.window.addEventListener('scroll', () => {
    if (scrollY >= 90) {
      headerOn();
    } else {
      headerOff();
    }
  });
  window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
      header.style.cssText = `top: ${-90}px`;
    } else if (e.deltaY < 0) {
      header.style.cssText = `top: ${0}px`;
    }
  })
  gnbIcons[0].addEventListener('click', () => {
    this.document.querySelector('.wrapSideIcons > form').classList.add('active');
  })
  this.document.querySelector('.search').addEventListener('mouseleave', () => {
    this.document.querySelector('.wrapSideIcons > form').classList.remove('active');
  })
    
  // subMenuATags[0].style.cssText = `height: ${gnbATags[0].clientHeight}px`
  // for(let i = 0; i < subMenuATags.length; i++) {
  //   subMenuATags[i].style.cssText = `height: ${gnbATags[0].clientHeight / 2}px`;
  // }

  /* 서브메뉴 구현 방식..
    1. 각 a태그 밑에 + 연산선택자로써 묶어서 중복태그 많이 발생..하지만 직관적인 작업
    2. 서브메뉴 섹션을 하나 만들고 호버하면 호버한 엘레먼트 좌표값을 불러와서 거기 붙게...하고 안의 내용물을 innerHTML으로 정의...
      조건문을 연달아서 사용하여 ... 렌더링
  */

  // function subMenuAddActive() {
  //   subMenu.classList.add('active');
  // }

  // function subMenuRemoveActive() {
  //   subMenu.classList.remove('active');
  // }

  // gnb.addEventListener('mouseover', subMenuAddActive)
  // gnb.addEventListener('mouseleave', subMenuRemoveActive)
  // mainBanner
  let info = document.querySelector('.info');

  let mainBannerBackground = document.querySelector('.wrapBackgroundContent'),
    mainBannerVid = mainBannerBackground.querySelector('video');
  window.addEventListener('scroll', () => {
    if (info.getBoundingClientRect().top <= 0) {
      mainBannerVid.classList.add('active');
    } else {
      mainBannerVid.classList.remove('active');
    }
  })
  // info
  // homeFunishingIdeas
  let wrapIdeas = this.document.querySelector('.wrapIdeas');
  let spotInfo = document.querySelector('.homeFunishingIdeas .item .spotInfo');
  let createInnerHTML = ``;
  let homeFunishingItem = {};
  let hoverSpotInfo = i => {
    // homeFunishingItem[`item${i}`][]
  };
  // 데이터 생성
  for (let i = 1; i <= 12; i++) {
    homeFunishingItem[`item${i}`] = {
      src: `img/home/home${i}.jpg`,
      spotInfo: {
        top: 0,
        left: 0,
        title: '',
        desc: ''
      },
    }
  }
  // 하드 코딩 ..쩔수 시작
  // item1
  homeFunishingItem[`item${1}`]['spotInfo']['top'] = 28;
  homeFunishingItem[`item${1}`]['spotInfo']['left'] = 74;
  // item2 
  homeFunishingItem[`item${2}`]['spotInfo']['top'] = 63;
  homeFunishingItem[`item${2}`]['spotInfo']['left'] = 33;
  homeFunishingItem[`item${3}`]['spotInfo']['top'] = 35;
  homeFunishingItem[`item${3}`]['spotInfo']['left'] = 72;
  homeFunishingItem[`item${6}`]['spotInfo']['top'] = 43;
  homeFunishingItem[`item${6}`]['spotInfo']['left'] = 81;
  homeFunishingItem[`item${5}`]['spotInfo']['top'] = 33;
  homeFunishingItem[`item${5}`]['spotInfo']['left'] = 57;
  homeFunishingItem[`item${4}`]['spotInfo']['top'] = 47;
  homeFunishingItem[`item${4}`]['spotInfo']['left'] = 53;
  homeFunishingItem[`item${9}`]['spotInfo']['top'] = 35;
  homeFunishingItem[`item${9}`]['spotInfo']['left'] = 24;
  homeFunishingItem[`item${8}`]['spotInfo']['top'] = 23;
  homeFunishingItem[`item${8}`]['spotInfo']['left'] = 32;
  homeFunishingItem[`item${7}`]['spotInfo']['top'] = 67;
  homeFunishingItem[`item${7}`]['spotInfo']['left'] = 74;
  homeFunishingItem[`item${12}`]['spotInfo']['top'] = 86;
  homeFunishingItem[`item${12}`]['spotInfo']['left'] = 55;
  homeFunishingItem[`item${11}`]['spotInfo']['top'] = 16;
  homeFunishingItem[`item${11}`]['spotInfo']['left'] = 38;
  homeFunishingItem[`item${10}`]['spotInfo']['top'] = 47;
  homeFunishingItem[`item${10}`]['spotInfo']['left'] = 48;
  // 하드 코딩 ..쩔수 끝
  
  // 데이터 할당
  for (let i = 1; i <= 12; i++) {
    createInnerHTML += `
    <a href="#none" class='item'>
      <img src=${homeFunishingItem[`item${i}`]['src']}>
      <div class="spotInfo" style="top: ${homeFunishingItem[`item${i}`]['spotInfo']['top']}%; left: ${homeFunishingItem[`item${i}`]['spotInfo']['left']}%;">
        <i class="fa fa-plus"></i>
      </div>
    </a>`
  }
  
  createInnerHTML += `<div class='moreButton'>더 보기</div>`
  wrapIdeas.innerHTML = createInnerHTML;

  let homeItems = wrapIdeas.querySelectorAll('.item');
  for (let i = 0; i < homeItems.length; i++) {
    homeItems[i].addEventListener('mouseover', (e) => {
      e.currentTarget.classList.add('active');
    })  
    homeItems[i].addEventListener('mouseleave', (e) => {
      e.currentTarget.classList.remove('active');
    })  
  }

  // eventBanner
  let eventBanner = document.querySelector('.eventBanner'),
    eventBgImg = eventBanner.querySelector('.background > img'),
    eventWrapText = eventBanner.querySelector('.wrapText'),
    eventImg = eventBanner.querySelector('.wrapImg img');
  // 프로그레스바
  let eventProgressBar = eventBanner.querySelector('.wrapProgressBar'),
    eventProgressBg = eventBanner.querySelector('.progressBackground'),
    eventCurrentProgress = eventBanner.querySelector('.currentProgress'),
    eventPauseBtn = eventBanner.querySelector('.wrapPauseButton'),
    eventPauseBtnImg = eventBanner.querySelector('.wrapPauseButton img');
  // next,prev 버튼
  let prevBtn = eventBanner.querySelector('.prevButton'),
    nextBtn = eventBanner.querySelector('.nextButton');

  let index = 0,
    textData = {
      text1: {
        h3: '우리 집의 주인공은 바로 나',
        p: '고정관념은 버리고 내가 생각하는 아름다움을 표현해 보세요. 감각적인 디자인, 다양한 수납 솔루션, 다채로운 색상의 텍 스타일 그리고 대담한 콤비네이션에서 아이디어를 얻어보세요. 나만의 스타일로 우리 집을 꾸며봐요!'
      },
      text2: {
        h3: '전기세 걱정 없이 온종일 시원하게',
        p: '하루종일 습하고 더운 요즘, 체감온도를 낮춰주는 IKEA 쿨링 제품으로 에너지도 절약하고 환경 보호에도 동참해 보세요.'
      },
      text3: {
        h3: '비즈니스 인테리어 디자인 서비스 할인 혜택',
        p: '7월 4일부터 21일까지, 비즈니스 인테리어 디자인 서비스 구매 후 500만원 이상 구매 시 총 구매 금액의 5%를 할인해드려요!'
      },
      text4: {
        h3: '매주 목요일 오후 2시, IKEA Live!',
        p: '매주 다른 주제의 IKEA Live를 통해 다양한 홈퍼니싱 아이디어를 알아보고 마응메 드는 제품을 쇼핑하세요. 라이브 중 공개되는 🎁스페셜 할인 쿠폰🎁의 기회도 놓치지 마세요!'
      }
    };
  let imgNum = 1,
    srcCommonImg = () => {
      return `img/banner/event_banner${imgNum}.jpg`;
    },
    pause = false;

  function areaChanger(action) {

    // 1. 배경 이미지 변경 ,이미지 박스 이미지 변경
    srcChanger(action);
    eventBgImg.setAttribute('src', srcCommonImg());
    eventImg.setAttribute('src', srcCommonImg());
    // 3. textWrap 안의 p, h2 변경
    textChanger();
    // 4. progressbar 진행도 변경
    eventCurrentProgress.style.cssText = `width: ${progressChanger()}`;
  }
  /** src를 변경하라고 order를 내리는 함수 imgNumAdd,imgNumMinus 호출 */
  function srcChanger(action = true) {
    if (action) {
      imgNumAdd();
    } else {
      imgNumMinus();
    }
  }
  /** srcChanger에 의해 호출되어 최대값 판별후 imgNum을 NumCalc메소드로 바꿔주는 함수*/
  function imgNumMinus() {
    if (imgNum <= 1) {
      imgNum = 4;
    } else {
      imgNum--
    }
  }
  /** srcChanger에 의해 호출되어 최솟값 판별후 imgNum을 NumCalc메소드로 바꿔주는 함수*/
  function imgNumAdd() {
    if (imgNum >= 4) {
      imgNum = 1;
    } else {
      imgNum++;
    }
  }
  /** currenProgress의 진행도에 따른 width값을 반환 */
  function progressChanger() {
    return `${100 * 0.25 * imgNum}%`;
  }
  /** 미리 선언된 text들을 불러오는 함수 */
  function textChanger() {
    eventWrapText.innerHTML = `
    <h3>${textData[`text${imgNum}`]['h3']}</h3>
    <p>${textData[`text${imgNum}`]['p']}</p>
    `;
  }
  /** 변수 pause로 상황을 판단해 slidePause() or slideStart()를 실행하고, 버튼의 이미지(재생/멈춤)를 바꾸는 함수 */
  function pauseControll() {
    !pause ? slidePause() : slideStart();
    eventPauseBtnImg.setAttribute('src', `${!pause ? 'img/icon/pause.svg' : 'img/icon/play.svg'}`);
  }
  let slideInterval;
  /** 자동 슬라이드 중지 */
  function slidePause() {
    clearInterval(slideInterval);
    pause = true;
  }
  /** 자동 슬라이드 시작 */
  function slideStart() {
    slideInterval = setInterval(areaChanger, 2750);
    pause = false;
  }
  //렌더링시 최초 자동재생. 후에 스크롤 도달시 자동재생으로 변경할 예정.
  slideStart();

  // text (h2, p) change object 데이터 방식 이용
  // progressbar change
  nextBtn.addEventListener('click', () => areaChanger(true));
  prevBtn.addEventListener('click', () => areaChanger(false));
  eventPauseBtn.addEventListener('click', pauseControll);
  // // storeLocation
  // footer
  // common
  let scrolling = false;
  let viewPortScroll = (e) => {
    e.preventDefault();
    if (scrolling == false) {
      if (e.deltaY > 0) {
        scrollTo({
          top: scrollY + window.innerHeight,
          behavior: "smooth"
        })
      } else {
        scrollTo({
          top: scrollY - window.innerHeight,
          behavior: "smooth"
        })
      }
      scrolling = true;
      setTimeout(() => (scrolling = false), 500);
    }
  }
  // window.addEventListener('wheel', viewPortScroll, {
  //   passive: false
  // })
})