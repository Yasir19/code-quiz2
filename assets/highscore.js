 //set score
 var scores = function(){
    //git score from localstorage or set to empty array
    var score = JSON.parse(window.localStorage.getItem("highScores")) || [];
    //sort the score
    score.sort(function(a,b){
        return b.score - a.score
    })
    for (var i = 0; i<score.length; i++){
        var liItems= document.createElement("li")
        liItems.textContent=score[i].initials + ":" + score[i].score;
        olEl.appendChild(liItems);
    }
}
scores();
