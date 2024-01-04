document.addEventListener('DOMContentLoaded', postData);

const data = document.location.search;
const params = new URLSearchParams(data);

const name = params.get("first_name");
const social = params.get("friend");
const description = params.getAll("description");
const room = params.get("room");
const flag = params.getAll("flag");
const food = params.get("food");
const starbies = params.get("starbies");

let sign;
let image;
let Talk1;
let Talk2;
let Talk3;

if (social == "extra" && (description.includes("intelligent") || description.includes("funny")) && room=="air" && (flag.includes("gossip") || flag.includes("wild") || flag.includes("detached")) && (food == "chick" || food == "pizza") && (starbies == "pink" || starbies == "capp")) {
    sign = 'AIR';
    image = 'images/airRes.png';
    Talk1 = "So you're either a Gemini, Libra, or Aquarius. *what a shockerr*";
    Talk2 = "You're a master communicator and your intelligence is admired by many. Ooh and you're a social being and people can't get enough of your inspiring outlook on life.";
    Talk3 = "Butttt you do tend to have your head in the clouds, you little scatterbrain!";

} else if ((social == "ambi" || social == "intro") && (description.includes("practical") || description.includes("funny")) && room=="earth" && (flag.includes("stubborn") || flag.includes("judgmental")) && (food=="noodles" || food=="roll") && (starbies == "mocha" || starbies=="pumpkin")) { 
    sign = "EARTH";
    image = "images/earthRes.png";
    Talk1 = "So you're either a Taurus, Virgo, or Capricorn. *i'm so good at this ik*";
    Talk2 = "You're a practical person who everyone can count on to keep things 100% real. Your work hard, play hard mentality is unbeatable and there is NO stopping you if you've set your mind on something.";
    Talk3 = "Butttt why you gotta be so stubborn?!";

} else if ((social == "ambi" || social == "extra") && (description.includes("adventurous") || description.includes("confident")) && room=="fire" && (flag.includes("gossip") || flag.includes("wild") || flag.includes("controlling")) && (food=="pizza" || food == "sushi") && (starbies=="tango" || starbies == "pink")) {
    sign = "FIRE";
    image = "images/fireRes.png";
    Talk1 = "So you're either an Aries, Leo, or Saggitarius. *so true*";
    Talk2 = "You're bold and confident, and always attracting attention. Yep, you're the adventure seeker that's always high on energy. There's no limit to your passion for sure.";
    Talk3 = "Butttt hey, maybe work on your temper a little?";

} else if ((social == "intro" || social == "ambi") && (description.includes("selfless") || description.includes("caring")) && room=="water" && (flag.includes("emotion") || flag.includes("wild") || flag.includes("controlling")) && (food == "roll" || food=="sandwich") && (starbies == "caramel" || starbies == "mocha")) {
    sign = "WATER";
    image = "images/waterRes.png";
    Talk1 = "So you're either a Pisces, Scorpio, or Cancer. *didn't even see it coming tbh*";
    Talk2 = "You're intuitive and emotional and oh so loving. No seriously, your EQ is off the charts and you don't just acknowledge your relationships, you treasure them.";
    Talk3 = "Butttt remember not to let your feelings wholly cloud your judgment!";
}
else {
    sign = "WATER";
    image = "images/waterRes.png";
    Talk1 = "So you're either a Pisces, Scorpio, or Cancer. *didn't even see it coming tbh*";
    Talk2 = "You're intuitive and emotional and oh so loving. No seriously, your EQ is off the charts and you don't just acknowledge your relationships, you treasure them.";
    Talk3 = "Butttt remember not to let your feelings wholly cloud your judgment!";
}

//writing html code
function postData() {
    const container = document.getElementById("results");
    container.innerHTML = `<h1 class = "sign">You're a(n) ${sign} sign, ${name}!</h1>
                           <p class="T1">${Talk1}</p>
                           <div id="container">
                              <img src="${image}" class="pic"></img>
                              <div id="talks">
                                 <p class="T2">${Talk2}</p>
                                 <p class="T3">${Talk3}</p>
                              </div>
                           </div>`

}





