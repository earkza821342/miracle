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
        //15
        else if(scoreA===0 && scoreB===15){
          return 'Love - Fifteen';
        }
        else if(scoreA===15&& scoreB===15){
          return 'Fifteen - Fifteen';
        }
        else if(scoreA===30 && scoreB===15){
          return 'Thirty - Fifteen';
        }
        else if(scoreA===40 && scoreB===15){
          return 'Forty - Fifteen';
        }
     }
  }

describe('Tennis game', function(){
  var tennis = new Tennis();
  //A win
        it('should echo Love - Love when 0 - 0 on the game', function(){
              tennis.start();
              expect(tennis.echo()).toEqual('Love - Love');
            })
        it('should echo Fifteen - Love when 15 - 0 on the game', function(){
              tennis.getScoreA();
              expect(tennis.echo()).toEqual('Fifteen - Love');
            })
        it('should echo Thirty - Love when 30 - 0 on the game', function(){
                  tennis.getScoreA();
                  expect(tennis.echo()).toEqual('Thirty - Love');
            })
});
