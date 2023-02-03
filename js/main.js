/*메인텍스트 스크롤업 올라오기*/

const options = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.5,  // 50%가 viewport에 들어와 있어야 callback 실행
  }
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {      
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
const $collectionTextBoxList = document.querySelectorAll('div.collection_text > div.collection_text_box');
const $imgCollectionPhoto = document.querySelector('#img_collection_photo');

$collectionTextBoxList.forEach(item => {

  item.addEventListener('mouseover', e => {
    $imgCollectionPhoto.setAttribute('src', `../img/main_collection/${item.dataset.photo}.png`);
  });

})



  