// 로직
// 1~100 랜덤번호 지정
// 유저가 번호를 입력 -> 시작버튼 누름
// 유저가 번호를 맞추면, 맞췄습니다. 프린트

// 랜덤번호 < 유저번호 ? DOWN 출력
// 랜덤번호 > 유저번호 ? UP 출력

// RESET 누르면 게임 리셋

// 5번 기회 다쓰면 게임종료 -> 버튼 disable
// 유저가 1~100 범위 밖의 숫자 입력하면, 1.알려주기 2.남은기회는 그대로
// 유저가 이미 입력한 숫자를 다시 입력하면, 1.알려주기 2.남은기회 그대로

// ---------------------로직 끝---------------


// 랜덤번호 저장 변수
let computerNum =0
let playButton = document.getElementById("play_button");
// 태그를 id를 통해 가져온다 play_button
let userInput = document.getElementById("user_input");

let resultArea = document.getElementById("result_area");

let resetButton = document.getElementById("reset_button");

let chances = 5

let gameOver = false

let chanceArea = document.getElementById("chance_area")

playButton.addEventListener("click",play)
// playButton 변수에/ 이벤트를 더한다/ 클릭이벤트/클릭하면 play함수를 실행한다.
// addEventListener("이벤트이름",이벤트 발생시 실행함수)

// 클릭이란 이벤트가 발생했을시 play를 매개변수처럼 넘기기때문에 ()사용안함
// play()라고 입력하면 함수가 실행되버림, 함수도 매개변수로 넘길수 있다.


resetButton.addEventListener("click",reset)
// click하면 reset()함수 실행

function pickrandomNum(){
    computerNum = Math.floor(Math.random()*100)+1;
    // Math.random() 랜덤한 숫자 뽑을수있는 함수
    // 범위 0~1미만 숫자 반환. 소수점으로 나옴
    // Math.floor() 소수점 뒤 숫자들 없애줌
    // +1 함으로써 범위 0~99 1~100으로 수정
    console.log("정답",computerNum);
}

function play(){
    let userValue = userInput.value;
    // userValue 변수에 userInput에 있는 값(valuer)을 넣는다
    chances -- ;
    // play버튼을 누르면 chances가 1씩 줄어든다

    chanceArea.textContent = `남은기회:${chances}번`;
    // 정적인 값과 동적인 값을 함께 표현할때는 '정적인 값${동적인 값}' 으로 표현한다.
    // ''backtick 안에 정적인값 ${동적인값}
    // 큰따옴표""안에는 정적인값만 쓸 수 있다.


    if(userValue < computerNum){
        resultArea.textContent ="Up!!"
        // resultArea에있는 textContent부분을 Up으로 바꿔준다
    }else if(userValue > computerNum){
        resultArea.textContent = "Down!!"
    }else{
        resultArea.textContent = "정답!!"
    }

    if(chances <1){
        gameOver = true
    }

    if(gameOver == true){
        playButton.disabled = true;
    }
    console.log("남은기회",chances)
}

function reset(){
    // 리셋 로직
    // 1.user input 깨끗하게 정리
    userInput.value = "";
    // userInput의 value를 아무것도 없이 비운다


    // 2.새로운 번호 생성
    pickrandomNum();
    // 새로운 번호를 생성해라, 아까 만들어놓은 랜덤번호 생성 함수.

    // resultArea나오는 멘트 바꿔주기
    resultArea.textContent = "결과값이 여기 나옵니다."


}

pickrandomNum()