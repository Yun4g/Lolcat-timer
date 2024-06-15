let morning = 8;
let afterNoon = 12;
let napTime = afterNoon + 2;
let partyTime;
let evening = 18;


let showCurrentTime = function() {
    let time = document.getElementById("clock");
    let currentTime = new Date()
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = 'AM'


 if(meridian = afterNoon){
    meridian = "PM";
 }

  if(hours >= afterNoon){
     hours -= 12;
  }
 if(minutes < 10){
    minutes = "0" + minutes
 }
 if(seconds < 10){
    seconds = "0" + seconds
 }

 let showTime = hours + ":" + minutes + ":" + seconds + ' ' + meridian ;
   

 time.textContent = showTime;

}

showCurrentTime();

setInterval(showCurrentTime, 1000);





//   getting the clock to change image and text as it increment
let automaticUpdateClock = function() {
   let clockTime = new Date().getHours();

   let message;
   let image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
   let text = document.getElementById("events");
   let clockImage = document.getElementById("LOLCAT-image");

   //  using coditional logic to change the image and time at a specific time

   if (clockTime == partyTime)
      {
        image = "image/partytime.jpg";
        message = "Let's party!";
      }
   else if(clockTime == morning){
        image =  "image/Cat_sleep.jpg";
       
        message = "GOOD MORNING";
  
      } else if(clockTime == afterNoon){
         image = "image/partytime.jpg";
          message = " GOOD AFTERNOON";
      }
       else if (clockTime >= evening ){
         image ="image/Cat_sleep.jpg"; 
         message = "GOOD EVENING";
      } else{
         image = "image/normalTime.jpg";
      message = "party time";
      }
      console.log(message);
       text.textContent = message;
       clockImage.src = image;

       showCurrentTime();
}

automaticUpdateClock();

setInterval(automaticUpdateClock, 1000);


//  party button function code

let partyTimeButton = document.getElementById("partyTimeButton");


let partyTimeEvent = function()
{

    if(partyTime < 0)
        {
      partyTime = new Date().getHours();
      partyTimeButton.textContent = "party over";
      partyTimeButton.style.backgroundColor ="#0A8DAB";
    } 
    else
    {
      partyTime = -1;
      partyTimeButton.textContent = "party Time";
      partyTimeButton.style.backgroundColor = "#222";


    }


}

 partyTimeButton.addEventListener('click', partyTimeEvent);

 partyTimeEvent();



