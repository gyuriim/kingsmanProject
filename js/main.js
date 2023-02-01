/*메인텍스트 스크롤업 올라오기*/

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
  
  const titleList = document.querySelectorAll('.main_text_box');

  // 반복문을 돌려 모든 DOM에 적용
  titleList.forEach(el => observer.observe(el));




/*마우스 호버*/
  const col_pho_01 = document.querySelector('.collection_photo_01')
  const col_pho_02 = document.querySelector('.collection_photo_02')
  const col_pho_03 = document.querySelector('.collection_photo_03')
  const col_pho_04 = document.querySelector('.collection_photo_04')

  const photo_01 = document.querySelector('.photo_01')
  const photo_02 = document.querySelector('.photo_02')
  const photo_03 = document.querySelector('.photo_03')
  const photo_04 = document.querySelector('.photo_04')

  photo_01.addEventListener('mouseover',function() {
    document.querySelector(".collection_photo_01").style.display = 'block'
  });
  photo_01.addEventListener('mouseout',function() {
    document.querySelector(".collection_photo_01").style.display = 'block'
    document.querySelector(".collection_photo_01").style.display = 'none'
    document.querySelector(".collection_photo_03").style.display = 'none'
    document.querySelector(".collection_photo_04").style.display = 'none'

  });

  photo_02.addEventListener('mouseover',function() {
    document.querySelector(".collection_photo_01").style.display = 'none'
    document.querySelector(".collection_photo_03").style.display = 'none'
    document.querySelector(".collection_photo_04").style.display = 'none'
  });
  photo_02.addEventListener('mouseout',function() {
    document.querySelector(".collection_photo_02").style.display = 'block'
  });

  photo_03.addEventListener('mouseover',function() {
    document.querySelector(".collection_photo_01").style.display = 'none'
    document.querySelector(".collection_photo_02").style.display = 'none'
    document.querySelector(".collection_photo_04").style.display = 'none'
  });
  photo_03.addEventListener('mouseout',function() {
    document.querySelector(".collection_photo_03").style.display = 'block'
  });

  photo_04.addEventListener('mouseover',function() {
    document.querySelector(".collection_photo_01").style.display = 'none'
    document.querySelector(".collection_photo_02").style.display = 'none'
    document.querySelector(".collection_photo_03").style.display = 'none'
  });
  photo_04.addEventListener('mouseout',function() {
    document.querySelector(".collection_photo_04").style.display = 'block'
  });




  