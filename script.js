//text_life.js
// 텍스트 작성 or 삭제 즉시 실행 함수
(function () {
    const spanEI = document.querySelector("main h2 span");
    const txtArr = ['Web Publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer', 'Back-End Developer'];
    let index = 0;
    let currentTxt = txtArr[index].split("");
    
    function writeTxt() {
        spanEI.textContent += currentTxt.shift();
        if(currentTxt.length !== 0) {
            setTimeout(writeTxt, Math.floor(Math.random() * 100));
        } else {
            currentTxt = spanEI.textContent.split("");
            setTimeout(deleteTxt, 3000);
        }
    }
    function deleteTxt() {
        currentTxt.pop();
        spanEI.textContent = currentTxt.join("");
        if(currentTxt.length !== 0) {
            setTimeout(deleteTxt, Math.floor(Math.random() * 100))
        } else {
            index = (index + 1) % txtArr.length;
            currentTxt = txtArr[index].split("");
            writeTxt();
        }
    }
    writeTxt();
})();
// text_life.js - End

// scroll_request.js
// 수직 스크롤이 발생되면 header 태그에 active 클래스 추가 및 삭제
const headerEI = document.querySelector("header");
window.addEventListener('scroll', function() {
    this.requestAnimationFrame(scrollCheck);
});
function scrollCheck() {
    let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
    if(browerScrollY > 0) {
        headerEI.classList.add("active");
    } else {
        headerEI.classList.remove("active");
    }
}
// scroll_requset.js - End

// move.js
// 애니메이션 스크롤 이동
const animationMove = function (selector) {
    // 1.selector 매개변수로 이동할 대상의 요소 노드를 가져오기
    const targetEI = document.querySelector(selector);
    // 2.현재 브라저의 스크롤 정보 (y 값)
    const browerScrollY = window.pageYOffset;
    // 3.이동할 대상의 위치 (y 값)
    const targetScorllY = targetEI.getBoundingClientRect().top + browerScrollY;
    // 4.스크롤 이동
    window.scrollTo({ top : targetScorllY, behavior : 'smooth' });
};

//스크롤 이벤트 연결
const scollMoveEI = document.querySelectorAll("[data-animation-scroll='true']");
for(let i = 0; i < scollMoveEI.length; i++) {
    scollMoveEI[i].addEventListener('click', function (e) {
        const target = this.dataset.target;
        animationMove(target); 
    });
}
// move.js - End