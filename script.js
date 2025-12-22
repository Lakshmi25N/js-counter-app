const inbtn=document.getElementById('inbtn');
const rebtn=document.getElementById('rebtn');
const debtn=document.getElementById('debtn');
const mylabel=document.getElementById('mylabel');
let count=0;
inbtn.onclick=function(){
    count++;
    mylabel.textContent=count;

};
rebtn.onclick=function(){
    count=0;
    mylabel.textContent=count;
    
};
debtn.onclick=function(){
    count--;
    mylabel.textContent=count;
    
};