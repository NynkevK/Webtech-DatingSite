// JavaScript Document
// We decided not to this after all, but it worked really well, so we decided to let it stay here :)
/*$(function(){
	"use strict";
    $('.fadein img:gt(0)').hide();
    setInterval(function(){
      $('.fadein :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.fadein');}, 
      3000);
});*/

$(document).ready(function(){
	"use strict";
    $("#funfact1").click(function(){
        $("#buttonclick").toggle();
    });
});

$(document).ready(function(){
	"use strict";
    $("#funfact2").click(function(){
        $("#buttonclickAndroid").toggle();
    });
});

$(document).ready(function(){
	"use strict";
    $("#funfact3").click(function(){
        $("#buttonclickProducts").toggle();
    });
});