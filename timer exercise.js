function countDown(t){
    let t = setInterval(function(){
        t --;

if (t<= 0){
    console.log('DONE');
}
else {
   console.log(t);
}
    }
}