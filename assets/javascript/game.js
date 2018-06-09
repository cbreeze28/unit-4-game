$(document).ready(function(crystalGame){
   
   
    // Generates random number to guess--Less than 120 and greater than 19
    var randomNumber=Math.floor(Math.random()*120+19)
    
    // Show random score user needs to match
    $('#scoreMatch').text(randomNumber);
    
    //Generate random number for each crystal--Less than 12 and greater than 1
    var crystal1= Math.floor(Math.random()*12+1)
    var crystal2= Math.floor(Math.random()*12+1)
    var crystal3= Math.floor(Math.random()*12+1)
    var crystal4= Math.floor(Math.random()*12+1)
    
    // Wins, Losses, tally of wins
    var playerTotal= 0; 
    var wins= 0;
    var losses = 0;
    
  
  $('#wins').text(wins);
  $('#losses').text(losses);
  
  // Reset function
  function reset(){
        randomNumber=Math.floor(Math.random()*120+19);
        console.log(randomNumber)
        
        $('#scoreMatch').text(randomNumber);
        crystal1= Math.floor(Math.random()*12+1);
        crystal2= Math.floor(Math.random()*12+1);
        crystal3= Math.floor(Math.random()*12+1);
        crystal4= Math.floor(Math.random()*12+1);
        playerTotal= 0;
        console.log(playerTotal);
        $('#playerScore').text(playerTotal);
        } 

  // Alert, WINNER!
  function nice(){
  alert("A match! +1 Win!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }

  // Alert, Idiot!
  function idiot(){
  alert ("Review elementary math. +1 Loss!");
    losses++;
    $('#losses').text(losses);
    reset()
  }

  // Clicking buttons/images
    $('.red').on ('click', function(){
      playerTotal = playerTotal + crystal1;
      console.log("New playerTotal= " + playerTotal);
    $('#playerScore').text(playerTotal); 
        if (playerTotal == randomNumber){
            nice();
        }
        else if ( playerTotal > randomNumber){
            idiot();
        }   
    })  
    $('.blue').on ('click', function(){
      playerTotal = playerTotal + crystal2;
      console.log("New playerTotal= " + playerTotal);
      $('#playerScore').text(playerTotal); 
          if (playerTotal == randomNumber){
            nice();
          }
          else if ( playerTotal > randomNumber){
            idiot();
          } 
    })  
    $('.yellow').on ('click', function(){
      playerTotal = playerTotal + crystal3;
      console.log("New playerTotal= " + playerTotal);
      $('#playerScore').text(playerTotal);
  
            if (playerTotal == randomNumber){
            nice();
          }
          else if ( playerTotal > randomNumber){
            idiot();
          } 
    })  
    $('.green').on ('click', function(){
      playerTotal = playerTotal + crystal4;
      console.log("New playerTotal= " + playerTotal);
      $('#playerScore').text(playerTotal); 
        
            if (playerTotal == randomNumber){
            nice();
          }
          else if ( playerTotal > randomNumber){
            idiot();
          }
    });   
  }); 