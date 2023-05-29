let gestures = ['paper','scissors','stone'];

function play(input) {
    var gesture = gestures[Math.floor(Math.random()*gestures.length)];
    setTimeout(() => document.querySelector(".container").innerHTML = ``, 500);
    setTimeout(() => document.querySelector(".play").innerHTML = `<div class="player">
                                                                            <img class="play" src="image/stone.jpg">
                                                                            <p class="text">你</p>
                                                                    </div>
                                                                    <div class="computer">
                                                                        <img class="play" src="image/stone.jpg">
                                                                    </div>`, 500);
    setTimeout(() => document.querySelector(".player").innerHTML = `<img src="image/${input}.jpg"><p class="text">你</p>`, 3100);
    setTimeout(() => document.querySelector(".computer").innerHTML = `<img src="image/${gesture}.jpg">`, 3100);
    setTimeout(() => winner(input, gesture), 4000);
}

function winner(player, computer){
    if(player==computer){
        if(confirm('平手\n再玩一次?')){
            location.reload();
        }
    }else if((player=='paper'&&computer=='stone')||(player=='scissors'&&computer=='paper')||(player=='stone'&&computer=='scissors')){
        if(confirm('你贏了！\n再玩一次?')){
            location.reload();
        }
    }else if((player=='stone'&&computer=='paper')||(player=='paper'&&computer=='scissors')||(player=='scissors'&&computer=='stone')){
        if(confirm('你輸了！\n再玩一次?')){
            location.reload();
        }
    }
}