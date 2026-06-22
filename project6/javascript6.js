const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let thiscolor;
const startChangingColor = function(){
  if (!thiscolor) {
    thiscolor = setInterval(changecolor, 1000);
  }
}

const changecolor = function(){
  document.body.style.backgroundColor = randomColor();
}


const stopChangingColor = function(){
      clearInterval(thiscolor)
      thiscolor=null;
}


document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);