(function() {
    'use strict'


const footer = document.querySelector('#footer');

fetch('../html/footer.html')
.then(res => res.text())
.then(data => {
    footer.innerHTML = data
    init2();
});


    


function init2() {

    /*모달창*/
    const modal = document.getElementById("modal")
    function modalOn() {
        modal.style.display = "flex"
    }
    function isModalOn() {
        return modal.style.display === "flex"
    }
    function modalOff() {
        modal.style.display = "none"
    }
    const btnModal = document.getElementById("btn-modal")
    btnModal.addEventListener("click", e => {
        modalOn()
    })
    const closeBtn = modal.querySelector(".close-area")
    closeBtn.addEventListener("click", e => {
        modalOff()
    })

    /*오늘날짜*/
    document.getElementById('currentDate').value = new Date().toISOString().substring(0, 10);;
    
    /*채팅창*/
    const chatBox = document.querySelector('#chat-box');
    const input = document.querySelector('#input');
    const send = document.querySelector('#send');
    console.log(chatBox)
    
    send.addEventListener('click', sendMyText);
    function sendMyText() {
    const newMessage = input.value;
    if (newMessage) {
        const div = document.createElement('div');
        div.classList.add('bubble', 'my-bubble');
        div.innerText = newMessage;
        chatBox.append(div);
    } else {
        alert('메시지를 입력하세요...');
    }
    
    input.value = '';
    }
    
    function sendMyTextByEnter (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        sendMyText();
        e.preventDefault();
    }
    }
    
    input.addEventListener('keypress', sendMyTextByEnter);



     /*예약창*/
     function popup(e) {
         
         let reser_name = document.querySelector("#reser_name");  //텍스트의 id값을 받는다
         let reser_phone = document.querySelector("#reser_phone"); 
         let reser_date = document.querySelector("#reser_date"); 
         if (textBox != null)         
          {
          alert(textBox.value + "님 안녕하세염");     //텍스트박스의 value를 받아서 알람
          }
    
     }

      
        




}








})();