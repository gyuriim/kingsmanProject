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
        window.onscroll = function () {
            if (window.scrollY > 0) {
                $header.classList.add('scrolled');
                $logoImg.style.display = 'block'
                $logoImgMini.style.display = 'block'
            } else {
                $header.classList.remove('scrolled');
                $logoImg.style.display = 'block'
                $logoImgMini.style.display = 'none'
            }
        };
    
    
        // 햄버거 버튼
        const openBtn = document.querySelector(".open")
        const closeBtn = document.querySelector(".closebtn")
        
        openBtn.addEventListener("click",function(e){
            document.querySelector("#myNav").style.width = "100%"
        })
        
        closeBtn.addEventListener("click",function(e){
            document.querySelector("#myNav").style.width = "0"
        })
    }

        
    

})();