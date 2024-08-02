    const resources = "resources/";
    var music = new Audio(resources + 'amen.wav');
    music.volume = 0;
    music.loop = true;

    var volValue = 0;
    var playing = false;
    var clicks = 0;
    var elapsedTime = 0;
    var start = false;
    

    // 음악 변경
    document.querySelector("#audioFile").addEventListener("change", function(){
        music = new Audio(URL.createObjectURL(document.querySelector("#audioFile").files[0]));
        music.pause();
        music.currentTime = 0;
    });
    
    // HIT 버튼 클릭 이벤트
    document.querySelector("#hitButton").addEventListener("click", function(){
        volValue = volValue + 5;
        if(!playing) music.play();
        setVolume();

        // 엔터 키 누르고 있으면 연타 적용되므로 포커스 해제.
        document.querySelector("#hitButton").blur();
        
        start = true;
        document.querySelector("#clicks").textContent = clicks++;
    });

    // 초당 클릭 속도 구하기
    // TODO 로직 개선
    setInterval(function(){
        if(start){
            elapsedTime = (((elapsedTime*100) + 1)/100).toFixed(2);

            document.querySelector("#elapsedTime").textContent = Math.floor(elapsedTime);

            if(elapsedTime > 1){
                document.querySelector("#cps").textContent = (clicks / elapsedTime).toFixed(2);
            }
        }
    }, 10);

    // 30ms마다 볼륨 줄이기
    setInterval(function(){
        if(volValue <= 0) return;
        volValue = volValue - 1;

        setVolume();
    }, 30);

    // 볼륨 세팅
    function setVolume(){
        var volumeBarWidth = volValue;

        // 볼륨이 100 넘지 않도록
        if(volValue >= 100) {
            // Transition 0.2초에 의해 100%일 시 볼륨바가 꽉 차지 않으므로 100퍼센트일 경우 10퍼센트 더함
            volumeBarWidth = 110;
            volValue = 100;
        }

        // 볼륨바 채우기
        document.querySelector(".volume-bar-active").style.width = volumeBarWidth + "%";

        // 볼륨 텍스트 띄우기        
        document.querySelector("#volValue").textContent = volValue;

        // 볼륨 세팅
        music.volume = volValue / 100;

        // 볼륨 아이콘 변경
        var iconFileName = "";
        if(volValue <= 0){
            iconFileName = "volume-none.png";
        } else if(volValue > 0 && volValue <= 30){
            iconFileName = "volume-low.png";
        } else if(volValue > 30 && volValue <= 60){
            iconFileName = "volume-mid.png";
        } else if(volValue > 60 && volValue <= 99){
            iconFileName = "volume-high.png";
        } else if(volValue >= 100){
            iconFileName = "volume-full.png";
        }

        document.querySelector("#volumeImg").src = resources + iconFileName;
    }