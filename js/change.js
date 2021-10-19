var t=[1,0,0,0,0,0,0,0,0,0];
var w,r,i=1,test=1;
var n=0;
function Win(){
  if (t[1]==1&&t[2]==1&&t[3]==1) {alert("你赢了！");t[0]=3;}
  else if (t[1]==1&&t[4]==1&&t[7]==1) {
    alert("你赢了！");
    t[0]=3;
  }
  else if (t[1]==1&&t[5]==1&&t[9]==1) {
    alert("你赢了！");
    t[0]=3;
  }
  else if (t[2]==1&&t[5]==1&&t[8]==1) {
  alert("你赢了！");
  t[0]=3;
  }
  else if (t[3]==1&&t[6]==1&&t[9]==1) {
    alert("你赢了！");
    t[0]=3;}
  else if (t[3]==1&&t[5]==1&&t[7]==1) {
    alert("你赢了！");
    t[0]=3;}
  else if (t[4]==1&&t[5]==1&&t[6]==1) {
    alert("你赢了！");
    t[0]=3;}
  else if (t[7]==1&&t[8]==1&&t[9]==1) {
    alert("你赢了！");
    t[0]=3;}
}
function Lose(){
  if (t[1]==2&&t[2]==2&&t[3]==2) {
    alert("你输了！");
    t[0]=3;
  }
  else if (t[1]==2&&t[4]==2&&t[7]==2) {
    alert("你输了！");
    t[0]=3;
  }
  else if (t[1]==2&&t[5]==2&&t[9]==2) {
    alert("你输了！");
    t[0]=3;
  }
  else if (t[2]==2&&t[5]==2&&t[8]==2) {
    alert("你输了！");
    t[0]=3;
  }
  else if (t[3]==2&&t[6]==2&&t[9]==2) {
    alert("你输了！");
    t[0]=3;
  }
  else if (t[3]==2&&t[5]==2&&t[7]==2) {
    alert("你输了！");
    t[0]=3;
  }
  else if (t[4]==2&&t[5]==2&&t[6]==2) {
    alert("你输了！");
    t[0]=3;
  }
  else if (t[7]==2&&t[8]==2&&t[9]==2) {
    alert("你输了！");
    t[0]=3;
  }
}
function Re(){
  t[0]=1;
  for (i=1;i<=9;i++){
  w="t"+i;
  document.getElementById(w).style.background = "rgba(0, 0, 0, 0.5)";
  t[i]=0;
}
}
function T1() {
   word ="t";
   if ((t[1] == 0)&&(t[0]=1)){
     document.getElementById("t1").style.background ="url(https://cdn.jsdelivr.net/gh/Vnice233/Vnice.github.io/img/X.png)";
     t[1]=1;
     Win();
     ++n;
     if ((n==9)&&(t[0]==1)) alert("平局！");
     if(n!=9){
     while(1){
      r=Math.floor(Math.random()*9);
      if((t[r] == 0)&&(t[0]==1))
      {
      w="t"+r;
      document.getElementById(w).style.background ="url(https://cdn.jsdelivr.net/gh/Vnice233/Vnice.github.io/img/O.png)"
      t[r]=2;Lose(); 
      ++n; 
      break; 
      } 
    }
   }
  }
}
function T2() {
  word ="t";
  if ((t[2] == 0)&&(t[0]=1)){
    document.getElementById("t2").style.background ="url(https://cdn.jsdelivr.net/gh/Vnice233/Vnice.github.io/img/X.png)";
    t[2]=1;
    ++n;
    Win();
    if ((n==9)&&(t[0]==1)) alert("平局！");
    if(n!=9){
    while(1){
    r=Math.floor(Math.random()*9);
     if((t[r]==0)&&(t[0]==1))
     {
     w="t"+r;
     document.getElementById(w).style.background ="url(https://cdn.jsdelivr.net/gh/Vnice233/Vnice.github.io/img/O.png)"
     t[r]=2;Lose();
     ++n; 
     break; 
     } 
   }
  }
}
}
function T3() {
  word ="t";
  if ((t[3] == 0)&&(t[0]=1)) {
    document.getElementById("t3").style.background ="url(https://cdn.jsdelivr.net/gh/Vnice233/Vnice.github.io/img/X.png)";
    t[3]=1;
    ++n;
    Win();
    if ((n==9)&&(t[0]==1)) alert("平局！");
    if(n!=9){
    while(1){
    r=Math.floor(Math.random()*9);
     if((t[r]==0)&&(t[0]==1))
     {
     w="t"+r;
     document.getElementById(w).style.background ="url(https://cdn.jsdelivr.net/gh/Vnice233/Vnice.github.io/img/O.png)"
     t[r]=2;Lose(); 
     ++n; 
     break; 
     } 
   }
  }
}
}
function T4() {
  word ="t";
  if ((t[4] == 0)&&(t[0]=1)) {
    document.getElementById("t4").style.background ="url(https://cdn.jsdelivr.net/gh/Vnice233/Vnice.github.io/img/X.png)";
    t[4]=1;
    ++n;
    Win();
    if ((n==9)&&(t[0]==1)) alert("平局！");
    if(n!=9){
    while(1){
    r=Math.floor(Math.random()*9);
     if((t[r]==0)&&(t[0]==1))
     {
     w="t"+r;
     document.getElementById(w).style.background ="url(https://cdn.jsdelivr.net/gh/Vnice233/Vnice.github.io/img/O.png)"
     t[r]=2;Lose(); 
     ++n; 
     break; 
     } 
   }
  }
}
}
function T5() {

  word ="t";
  if ((t[5] == 0)&&(t[0]=1)) {
    document.getElementById("t5").style.background ="url(https://cdn.jsdelivr.net/gh/Vnice233/Vnice.github.io/img/X.png)";
    t[5]=1;
    ++n;
    Win();
    if ((n==9)&&(t[0]==1)) alert("平局！");
    if(n!=9){
    while(1){
    r=Math.floor(Math.random()*9);
     if((t[r]==0)&&(t[0]==1))
     {
     w="t"+r;
     document.getElementById(w).style.background ="url(https://cdn.jsdelivr.net/gh/Vnice233/Vnice.github.io/img/O.png)"
     t[r]=2;Lose(); 
     ++n; 
     break; 
     } 
   }
  }
}
}
function T6() {

  word ="t";
  if ((t[6] == 0)&&(t[0]=1)) {
    document.getElementById("t6").style.background ="url(https://cdn.jsdelivr.net/gh/Vnice233/Vnice.github.io/img/X.png)";
    t[6]=1;
    ++n;
    Win();
    if ((n==9)&&(t[0]==1)) alert("平局！");
    if(n!=9){
    while(1){
    r=Math.floor(Math.random()*9);
     if((t[r]==0)&&(t[0]==1))
     {
     w="t"+r;
     document.getElementById(w).style.background ="url(https://cdn.jsdelivr.net/gh/Vnice233/Vnice.github.io/img/O.png)"
     t[r]=2;Lose(); 
     ++n; 
     break; 
     } 
   }
  }
}
}
function T7() {

  word ="t";
  if ((t[7] == 0)&&(t[0]=1)) {
    document.getElementById("t7").style.background ="url(https://cdn.jsdelivr.net/gh/Vnice233/Vnice.github.io/img/X.png)";
    t[7]=1;
    ++n;
    Win();
    if ((n==9)&&(t[0]==1)) alert("平局！");
    if(n!=9){
    while(1){
    r=Math.floor(Math.random()*9);
     if((t[r]==0)&&(t[0]==1))
     {
     w="t"+r;
     document.getElementById(w).style.background ="url(https://cdn.jsdelivr.net/gh/Vnice233/Vnice.github.io/img/O.png)"
     t[r]=2;Lose(); 
     ++n; 
     break; 
     } 
   }
  }
}
}
function T8() {

  word ="t";
  if ((t[8] == 0)&&(t[0]=1)) {
    document.getElementById("t8").style.background ="url(https://cdn.jsdelivr.net/gh/Vnice233/Vnice.github.io/img/X.png)";
    t[8]=1;
    ++n;
    Win();
    if(n!=9){
    while(1){
    r=Math.floor(Math.random()*9);
     if((t[r]==0)&&(t[0]==1))
     {
     w="t"+r;
     document.getElementById(w).style.background ="url(https://cdn.jsdelivr.net/gh/Vnice233/Vnice.github.io/img/O.png)"
     t[r]=2;Lose(); 
     ++n; 
     break;
     } 
   }
  }
}
}
function T9() {

  word ="t";
  if ((t[9] == 0)&&(t[0]=1)) {
    document.getElementById("t9").style.background ="url(https://cdn.jsdelivr.net/gh/Vnice233/Vnice.github.io/img/X.png)";
    t[9]=1;
    ++n;
    Win();
    if(n!=9){
    while(1){
    r=Math.floor(Math.random()*9);
     if((t[r]==0)&&(t[0]==1))
     {
     w="t"+r;
     document.getElementById(w).style.background ="url(https://cdn.jsdelivr.net/gh/Vnice233/Vnice.github.io/img/O.png)"
     t[r]=2;Lose(); 
     ++n; 
     break;
     } 
   }
  }
}
}
