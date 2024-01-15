let y; // 원의 y 좌표
let speed; // 움직임의 속도
let acc; // 움직임의 속도

function setup() {
    createCanvas(windowWidth, windowHeight);
    y = height *0.2; // 초기 y 위치를 화면 중앙으로 설정
    // speed = 5; // 속도 설정
    acc = 0.5; // 속도 설정
    speed = 0;

}

function draw() {
    background(0); // 배경을 검은색으로 설정
    fill(y/width*256, 120, 120); // 원을 흰색으로 설정
    noStroke();
    ellipse(height / 2, y , width/4, width/4); // 원 그리기

    
    // 화면의 가장자리에 도달했는지 확인
    if (y > height - height/8 || y < height/8) {
        speed *= -1; // 방향 전환
    }
    else {
        speed += acc; // y 좌표 업데이트
    }
    y += speed;
}
