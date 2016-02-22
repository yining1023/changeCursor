//use this website:http://chriszarate.github.io/bookmarkleter/ to generate bookmarklets
var rainToggle = false;

var toggle = function(){

// document.getElementsByTagName('body')[0].style = "cursor: url('http://emojipedia-us.s3.amazonaws.com/cache/da/d2/dad2db0c2cf044ef7ac590b92a540bca.png'), auto;"

document.getElementsByTagName('body')[0].onclick = function(){
  if (rainToggle == false){
    document.getElementsByTagName('body')[0].style = "cursor: url('http://emojipedia-us.s3.amazonaws.com/cache/da/d2/dad2db0c2cf044ef7ac590b92a540bca.png'), auto;"
    rainToggle = true;
  }
  else{
    document.getElementsByTagName('body')[0].style = "cursor: url('http://emojipedia-us.s3.amazonaws.com/cache/9c/ec/9cecfe2a462fe3ddc4a415b65655fab6.png'), auto;"
  rainToggle = false;
  }
 }
}

chrome.extension.onMessage.addListener(function(msg){
  if(msg.action === 'toggle'){
    toggle();
  }
});