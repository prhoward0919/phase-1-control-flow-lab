function scuberGreetingForFeet(ride){
  // Write your code here!
  let rideResponse;
  if (ride <= 400) {rideResponse = "This one is on me!";
  } else if (ride >= 401 && ride <= 2000) {rideResponse = "That will be twenty bucks.";
  } else if (ride >= 2001 && ride <= 2500) {rideResponse = "I will gladly take your thirty bucks.";
  } else if (ride >= 2501) {rideResponse = "No can do.";}
  return rideResponse;
}
   

function ternaryCheckCity(city){
  // Write your code here!
  const isCity = (city === 'NYC') ? ('Ok, sounds good.') : ('No go.');
  return isCity;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let thankfulness;

  switch (tip) {
    case 'generous':
      thankfulness = 'Thank you so much.';
      break;
    case 'not as generous':
      thankfulness = 'Thank you.';
      break;
    case 'thanks for everything':
      thankfulness = 'Bye.';
  }
  return thankfulness;
}