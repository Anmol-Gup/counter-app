let counter=0;
let minus=document.getElementsByClassName('minus')[0];
let plus=document.getElementsByClassName('plus')[0];
let reset=document.getElementsByClassName('reset')[0];
let h2=document.getElementsByTagName('h2')[0];
let div=document.getElementsByTagName('div')[0];

function odd(counter){
  if(counter%2!==0)
    return 1;
}

minus.addEventListener('click',function(){
  if(counter===0)
  {
    minus.disabled=true;
    plus.disabled=false;
  }
  else
  {
    minus.disabled=false;
    plus.disabled=false;
    counter-=1;
    if(odd(counter)===1)
    {
      div.style.background="grey";
      h2.style.color="red";
    }
    else{
      div.style.background="rgb(181, 215, 238)";
      h2.style.color="white";
    }
    h2.innerHTML=counter;
  }
});

plus.addEventListener('click',function(){
  if(counter===10)
  {
    plus.disabled=true;
    minus.disabled=false;
  }
  else
  {
    plus.disabled=false;
    minus.disabled=false;
    counter+=1;
    if(odd(counter)===1)
    {
      div.style.background="grey";
      h2.style.color="red";
    }
    else{
      div.style.background="rgb(181, 215, 238)";
      h2.style.color="white";
    }
    h2.innerHTML=counter;
  }
});

reset.addEventListener('click',function(){
  counter=0;
  div.style.background="rgb(181, 215, 238)";
  h2.style.color="white";
  h2.innerHTML=counter;
});
