function scuberGreetingForFeet(freeSample){
   if(freeSample <= 400){
     return 'This one is on me!'
   } else if(freeSample > 2000 && freeSample < 2500){
     return 'I will gladly take your thirty bucks.'
   } else (freeSample > 2500); {
     return 'No can do.'
   }
}

function ternaryCheckCity(city){
     return city === 'NYC'?'Ok, sounds good.' : 'No go.' 
}

function switchOnCharmFromTip(generousTip){
  switch(generousTip){
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.'
  }
}