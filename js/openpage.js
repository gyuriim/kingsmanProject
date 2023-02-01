/*텍스트올라오기*/
const options = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.5,  // 50%가 viewport에 들어와 있어야 callback 실행
}

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
    console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
    entry.target.classList.add("active");
    } else {
    entry.target.classList.remove("active");
    }
});
}, options);

const titleList = document.querySelectorAll('.photo_text');

// 반복문을 돌려 모든 DOM에 적용
titleList.forEach(el => observer.observe(el));



/* 풀스크린 */ 
var scroll = function(){
    
    var $cnt = null,
        moveCnt = null,
        moveIndex = 0,
        moveCntTop = 0,
        winH = 0,
        time = false; // 새로 만든 변수

    $(document).ready(function(){
        init();
        initEvent();
    });
    
    var init = function(){
        $cnt = $("#banner");
    };
    
    var initEvent = function(){
        $("html ,body").scrollTop(0);
        winResize();
        $(window).resize(function(){
            winResize();
        });
        $cnt.on("mousewheel", function(e){
            if(time === false){ // time 변수가 펄스일때만 휠 이벤트 실행
              wheel(e);
            }
        });
    };
        
    var winResize = function(){
        winH = $(window).height();
        $cnt.children("div").height(winH);
        $("html ,body").scrollTop(moveIndex.scrollTop);
    };
    
    var wheel = function(e){
        if(e.originalEvent.wheelDelta < 0){
            if(moveIndex < 2){
                moveIndex += 1;
                moving(moveIndex);
            };
        }else{
            if(moveIndex > 0){
                moveIndex -= 1;
                moving(moveIndex);
            };
        };
    };
    
    var moving = function(index){
        time = true // 휠 이벤트가 실행 동시에 true로 변경
        moveCnt = $cnt.children("div").eq(index);
        moveCntTop = moveCnt.offset().top;
        $("html ,body").stop().animate({
            scrollTop: moveCntTop
        }, 1000, function(){
          time = false; // 휠 이벤트가 끝나면 false로 변경
        });
    };
    
};

scroll();


(function() {
    'use strict'
    
    const header = document.querySelector('#header');
    
    fetch('../html/header.html')
    .then(res => res.text())
    .then(data => {
        header.innerHTML = data
        init();
    });
    

    function init() {
        // 스크롤 시 header 높이 줄이기
        const $header = document.querySelector('header');
        const $logoImg = document.querySelector('#logo');
        const $logoImgMini = document.querySelector('#mini_logo');
        window.onscroll = function () {
            if (window.scrollY > 0) {
                $header.classList.add('scrolled');
                $logoImg.style.display = 'none'
                $logoImgMini.style.display = 'block'
            } else {
                $header.classList.remove('scrolled');
                $logoImg.style.display = 'block'
                $logoImgMini.style.display = 'none'
            }
        };
    }
})();