function Tennis(){
      var scoreA;
      var scoreB;
      this.start = function(){
        scoreA = 0;
        scoreB = 0;
      }
      this.getScoreA = function(){
       if(scoreA===0){
         scoreA=15;
       }
       else if(scoreA===15){
          scoreA=30;
        }
        else if(scoreA===30){
          scoreA=40;
        }
     }
     this.echo = function(){
       //0
        if(scoreA===0 && scoreB===0){
          return 'Love - Love';
        }
        else if(scoreA===15&& scoreB===0){
          return 'Fifteen - Love';
        }
        else if(scoreA===30 && scoreB===0){
          return 'Thirty - Love';
        }
        else if(scoreA===40 && scoreB===0){
          return 'Forty - Love';
        }
     }
  }
