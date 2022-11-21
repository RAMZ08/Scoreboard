
let hcount=0;
let gcount=0;
let homeScore=document.getElementById('homescore')
let guestScore=document.getElementById('guestscore')
function hplus1(){
  hcount += 1;
  homeScore.innerText=hcount;
}
function hplus2(){
  hcount += 2
  homeScore.innerText=hcount;
}
function hplus3(){
  hcount += 3;
  homeScore.innerText=hcount;
}

function gplus1(){
  gcount += 1;
  guestScore.innerText=gcount;
}
function gplus2(){
  gcount += 2;
  guestScore.innerText=gcount;
}
function gplus3(){
  gcount += 3;
  guestScore.innerText=gcount;
}