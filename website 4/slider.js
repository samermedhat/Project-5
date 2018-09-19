
setInterval(function(){   
    
if( $(".header i").hasClass('active6') )
{
$(".header i").removeClass('active6')     
}
else
{
$(".header i").addClass('active6')   
}
    
},500);

$(".header i").click(function(){
     
   $("body").animate({
       
     scrollTop: 896  
       
   },1000);
    
});



$("button").click(function(){

$(this).css("outline","0px")

});

$(".cars").click(function(){


$(this).addClass('active')
$(this).siblings().removeClass('active')

$(".car").css("transform","scale(1,1)")
$(".cam").css("transform","scale(0,0)")

$(".portfolio .over-lay img:nth-of-type(4)").css("top","288px")
$(".portfolio .over-lay img:nth-of-type(4)").css("left","430px")

$(".portfolio .over-lay img:nth-of-type(6)").css("top","560px")
$(".portfolio .over-lay img:nth-of-type(5)").css("top","560px")
$(".portfolio .over-lay img:nth-of-type(5)").css("left","430px")

});

$(".cams").click(function(){

$(this).addClass('active')
$(this).siblings().removeClass('active')

$(".cam").css("transform","scale(1,1)")
$(".car").css("transform","scale(0,0)")

$(".portfolio .over-lay img:nth-of-type(6)").css("top","288px")
$(".portfolio .over-lay img:nth-of-type(5)").css("top","288px")
$(".portfolio .over-lay img:nth-of-type(5)").css("left","20px")

$(".portfolio .over-lay img:nth-of-type(4)").css("top","560px")
$(".portfolio .over-lay img:nth-of-type(4)").css("left","20px")

});

$(".all").click(function(){

$(this).addClass('active')
$(this).siblings().removeClass('active')

$(".cam").css("transform","scale(1,1)")
$(".car").css("transform","scale(1,1)")


$(".portfolio .over-lay img:nth-of-type(4)").css("top","560px")
$(".portfolio .over-lay img:nth-of-type(4)").css("left","20px")

$(".portfolio .over-lay img:nth-of-type(6)").css("top","560px")
$(".portfolio .over-lay img:nth-of-type(5)").css("top","560px")
$(".portfolio .over-lay img:nth-of-type(5)").css("left","430px")


});


$(".info .fa-window-close").click(function(){
$(".info").fadeOut()  
});

$(".portfolio .over-lay img:nth-of-type(1)").click(function(){

$(".info").fadeIn()

$(".img").addClass('active2')
$(".img").siblings().removeClass('active2')

});

$(".portfolio .over-lay img:nth-of-type(2)").click(function(){

$(".info").fadeIn()

$(".img2").addClass('active2')
$(".img2").siblings().removeClass('active2')

});

$(".portfolio .over-lay img:nth-of-type(3)").click(function(){

$(".info").fadeIn()

$(".img3").addClass('active2')
$(".img3").siblings().removeClass('active2')

});

$(".portfolio .over-lay img:nth-of-type(4)").click(function(){

$(".info").fadeIn()

$(".img4").addClass('active2')
$(".img4").siblings().removeClass('active2')

});

$(".portfolio .over-lay img:nth-of-type(5)").click(function(){

$(".info").fadeIn()

$(".img5").addClass('active2')
$(".img5").siblings().removeClass('active2')

});

$(".portfolio .over-lay img:nth-of-type(6)").click(function(){

$(".info").fadeIn()

$(".img6").addClass('active2')
$(".img6").siblings().removeClass('active2')

});


var img = document.getElementById('img');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var img5 = document.getElementById('img5');
var img6 = document.getElementById('img6');

var next = document.getElementById('next');
var back = document.getElementById('back');


$(".next").click(function(){

if(img.classList.contains('active2'))
{
img.classList.remove('active2')
img2.classList.add('active2')

next.disabled = false;
back.disabled = false;

$(".next , .back").removeClass('disable')
}
else if(img2.classList.contains('active2'))
{
img2.classList.remove('active2')
img3.classList.add('active2')

next.disabled = false;
back.disabled = false;

$(".next , .back").removeClass('disable')
}   
else if(img3.classList.contains('active2'))
{
img3.classList.remove('active2')
img4.classList.add('active2')

next.disabled = false;
back.disabled = false;

$(".next , .back").removeClass('disable')
}  
else if(img4.classList.contains('active2'))
{
img4.classList.remove('active2')
img5.classList.add('active2')

next.disabled = false;
back.disabled = false;

$(".next , .back").removeClass('disable')
}    
else if(img5.classList.contains('active2'))
{
img5.classList.remove('active2')
img6.classList.add('active2')

next.disabled = true;
$(".next").addClass('disable')
back.disabled = false;
$(".back").removeClass('disable')
}     

});

$(".back").click(function(){

if(img2.classList.contains('active2'))
{
img2.classList.remove('active2')
img.classList.add('active2')

next.disabled = false;
$(".next").removeClass('disable')

back.disabled = true;
$(".back").addClass('disable')

}   
else if(img3.classList.contains('active2'))
{
img3.classList.remove('active2')
img2.classList.add('active2')

next.disabled = false;
back.disabled = false;

$(".next , .back").removeClass('disable')
}  
else if(img4.classList.contains('active2'))
{
img4.classList.remove('active2')
img3.classList.add('active2')

next.disabled = false;
back.disabled = false;

$(".next , .back").removeClass('disable')
}    
else if(img5.classList.contains('active2'))
{
img5.classList.remove('active2')
img4.classList.add('active2')

next.disabled = false;
back.disabled = false;

$(".next , .back").removeClass('disable')
}      
else if(img6.classList.contains('active2'))
{
img6.classList.remove('active2')
img5.classList.add('active2')

next.disabled = false;
back.disabled = false;

$(".next , .back").removeClass('disable')
}   

});




var myArr1 = ['W','E','L','C','O','M','E ','I','N ','M','Y ','W','E','B','S','I','T','E'];
for(i=0;i<myArr1.length;i++)
{
document.write( '<h1 class="welcome">' + myArr1[i] + '</h1>' );       
} 

setTimeout(function(){
     
   $(".welcome:nth-of-type(1)").addClass('active3')   
    
},500);

setTimeout(function(){
     
   $(".welcome:nth-of-type(2)").addClass('active3')   
    
},800);

setTimeout(function(){
     
   $(".welcome:nth-of-type(3)").addClass('active3')   
    
},1100);

setTimeout(function(){
     
   $(".welcome:nth-of-type(4)").addClass('active3')   
    
},1400);

setTimeout(function(){
     
   $(".welcome:nth-of-type(5)").addClass('active3')   
    
},1700);

setTimeout(function(){
     
   $(".welcome:nth-of-type(6)").addClass('active3')   
    
},2000);

setTimeout(function(){
     
   $(".welcome:nth-of-type(7)").addClass('active3')   
    
},2300);

setTimeout(function(){
     
   $(".welcome:nth-of-type(8)").addClass('active3')   
    
},2600);

setTimeout(function(){
     
   $(".welcome:nth-of-type(9)").addClass('active3')   
    
},2900);

setTimeout(function(){
     
   $(".welcome:nth-of-type(10)").addClass('active3')   
    
},3200);

setTimeout(function(){
     
   $(".welcome:nth-of-type(11)").addClass('active3')   
    
},3500);

setTimeout(function(){
     
   $(".welcome:nth-of-type(12)").addClass('active3')   
    
},3800);

setTimeout(function(){
     
   $(".welcome:nth-of-type(13)").addClass('active3')   
    
},4100);

setTimeout(function(){
     
   $(".welcome:nth-of-type(14)").addClass('active3')   
    
},4400);

setTimeout(function(){
     
   $(".welcome:nth-of-type(15)").addClass('active3')   
    
},4700);

setTimeout(function(){
     
   $(".welcome:nth-of-type(16)").addClass('active3')   
    
},5000);

setTimeout(function(){
     
   $(".welcome:nth-of-type(17)").addClass('active3')   
    
},5300);

setTimeout(function(){
     
   $(".welcome:nth-of-type(18)").addClass('active3')   
    
},5600);



var myArr2 = ['H','E','L','L','O ',
              'I',' A','M ',
              'S','A','M ','E','R ',
              'M','E','D','H','A','T ',
              'I',' A','M ',
              'W','E','B ',
              'D','E','S','I','G','N','E','R'];
for(i2=0;i2<myArr2.length;i2++)
{
document.write( '<h3 class="hello">' + myArr2[i2] + '</h3>' ); 
}

$(".hello:nth-of-type(20) , .hello:nth-of-type(21) ,.hello:nth-of-type(22) ,.hello:nth-of-type(23) ,.hello:nth-of-type(24) ,.hello:nth-of-type(25) ,.hello:nth-of-type(26) ,.hello:nth-of-type(27) ,.hello:nth-of-type(28) ,.hello:nth-of-type(29) ,.hello:nth-of-type(30) ,.hello:nth-of-type(31) ,.hello:nth-of-type(32) ,.hello:nth-of-type(33)").addClass('jo')

setTimeout(function(){
     
   $(".hello:nth-of-type(1)").addClass('active4')   
    
},5700);

setTimeout(function(){
     
   $(".hello:nth-of-type(2)").addClass('active4')   
    
},6000);

setTimeout(function(){
     
   $(".hello:nth-of-type(3)").addClass('active4')   
    
},6300);

setTimeout(function(){
     
   $(".hello:nth-of-type(4)").addClass('active4')   
    
},6600);

setTimeout(function(){
     
   $(".hello:nth-of-type(5)").addClass('active4')   
    
},6900);

setTimeout(function(){
     
   $(".hello:nth-of-type(6)").addClass('active4')   
    
},7200);

setTimeout(function(){
     
   $(".hello:nth-of-type(7)").addClass('active4')   
    
},7500);

setTimeout(function(){
     
   $(".hello:nth-of-type(8)").addClass('active4')   
    
},7800);

setTimeout(function(){
     
   $(".hello:nth-of-type(9)").addClass('active4')   
    
},8100);

setTimeout(function(){
     
   $(".hello:nth-of-type(10)").addClass('active4')   
    
},8400);

setTimeout(function(){
     
   $(".hello:nth-of-type(11)").addClass('active4')   
    
},8700);

setTimeout(function(){
     
   $(".hello:nth-of-type(12)").addClass('active4')   
    
},9000);

setTimeout(function(){
     
   $(".hello:nth-of-type(13)").addClass('active4')   
    
},9300);

setTimeout(function(){
     
   $(".hello:nth-of-type(14)").addClass('active4')   
    
},9600);

setTimeout(function(){
     
   $(".hello:nth-of-type(15)").addClass('active4')   
    
},9900);

setTimeout(function(){
     
   $(".hello:nth-of-type(16)").addClass('active4')   
    
},10200);

setTimeout(function(){
     
   $(".hello:nth-of-type(17)").addClass('active4')   
    
},10500);

setTimeout(function(){
     
   $(".hello:nth-of-type(18)").addClass('active4')   
    
},10800);

setTimeout(function(){
     
   $(".hello:nth-of-type(19)").addClass('active4')   
    
},11100);

setTimeout(function(){
     
   $(".hello:nth-of-type(20)").addClass('active4')   
    
},11400);

setTimeout(function(){
     
   $(".hello:nth-of-type(21)").addClass('active4')   
    
},11700);

setTimeout(function(){
     
   $(".hello:nth-of-type(22)").addClass('active4')   
    
},12000);

setTimeout(function(){
     
   $(".hello:nth-of-type(23)").addClass('active4')   
    
},12300);

setTimeout(function(){
     
   $(".hello:nth-of-type(24)").addClass('active4')   
    
},12600);
     
setTimeout(function(){
     
   $(".hello:nth-of-type(25)").addClass('active4')   
    
},12900);

setTimeout(function(){
     
   $(".hello:nth-of-type(26)").addClass('active4')   
    
},13200);

setTimeout(function(){
     
   $(".hello:nth-of-type(27)").addClass('active4')   
    
},13500);

setTimeout(function(){
     
   $(".hello:nth-of-type(28)").addClass('active4')   
    
},13800);

setTimeout(function(){
     
   $(".hello:nth-of-type(29)").addClass('active4')   
    
},14100);

setTimeout(function(){
     
   $(".hello:nth-of-type(30)").addClass('active4')   
    
},14400);

setTimeout(function(){
     
   $(".hello:nth-of-type(31)").addClass('active4')   
    
},14700);

setTimeout(function(){
     
   $(".hello:nth-of-type(32)").addClass('active4')   
    
},15000);

setTimeout(function(){
    
$(".hello:nth-of-type(33)").addClass('active4')  
   
$(".welcome , .hello , .jo").animate({
       
       top:'+=151px'
       
   },1000);    
    
},15300);




var html = document.getElementById('html');
var css = document.getElementById('css');
var js = document.getElementById('js');
var jq = document.getElementById('jq');

var body = document.getElementById('body');

window.onscroll = function(){   
    
 if(body.scrollTop > 1792)
    {
        
$(".skills .over-lay .skill1 section span").animate({
        
        width: 230
        
    },2200);
  
$(".skills .over-lay .skill2 section span").animate({
        
        width: 250
        
    },2200);  
 
$(".skills .over-lay .skill3 section span").animate({
        
        width: 200
        
    },2200);    
  
$(".skills .over-lay .skill4 section span").animate({
        
        width: 210
        
    },2200);  
  
var h = setInterval(function(){
    
    if(html.textContent < 80)
        {
            html.textContent = parseInt(html.textContent) + 10
        }
    else
        {
          clearInterval(h)  
        }
    
},200);

var c = setInterval(function(){
    
    if(css.textContent < 90)
        {
            css.textContent = parseInt(css.textContent) + 10
        }
    else
        {
          clearInterval(c)  
        }
    
},200);

var j = setInterval(function(){
    
    if(js.textContent < 70)
        {
            js.textContent = parseInt(js.textContent) + 10
        }
    else
        {
          clearInterval(j)  
        }
    
},200);

var q = setInterval(function(){
    
    if(jq.textContent < 75)
        {
            jq.textContent = parseInt(jq.textContent) + 5
        }
    else
        {
          clearInterval(q)  
        }
    
},100);           
        
    }
 
    

    
};




setInterval(function(){ 
    
if($(".client1").hasClass('active10'))
{
    
 $(".con1").removeClass('active_c')   
 $(".con2").addClass('active_c')   
    
    $('.client1').removeClass('active10');
        
    $(".testimonials .over-lay .client1 p").animate({
        
        top: 394
        
    },1000);
    
    $(".testimonials .over-lay .client1 img").animate({
        
        left: '-499'
        
    },1000);
    
    $(".testimonials .over-lay .client1 h3").animate({
        
        top: '-55px'
        
    },1000);      
        
    $(".client2").addClass('active10');
        
    $(".testimonials .over-lay .client2 p").animate({
        
        top: 85
        
    },1000);
    
    $(".testimonials .over-lay .client2 img").animate({
        
        left: 25
        
    },1000);
    
    $(".testimonials .over-lay .client2 h3").animate({
        
        top: 10
        
    },1000);    
        
    }
    
else if($(".client2").hasClass('active10'))
{
    
$(".con2").removeClass('active_c')   
$(".con3").addClass('active_c')    
    
    $('.client2').removeClass('active10');
         
    $(".testimonials .over-lay .client2 p").animate({
        
        top: 394
        
    },1000);
    
    $(".testimonials .over-lay .client2 img").animate({
        
        left: '-499'
        
    },1000);
    
    $(".testimonials .over-lay .client2 h3").animate({
        
        top: '-55px'
        
    },1000);       
         
         
    $(".client3").addClass('active10');
         
    $(".testimonials .over-lay .client3 p").animate({
        
        top: 85
        
    },1000);
    
    $(".testimonials .over-lay .client3 img").animate({
        
        left: 25
        
    },1000);
    
    $(".testimonials .over-lay .client3 h3").animate({
        
        top: 10
        
    },1000);     
         
    
}
    
else if($(".client3").hasClass('active10'))
{
    
$(".con3").removeClass('active_c')   
$(".con1").addClass('active_c')     
    
    $('.client3').removeClass('active10');
         
    $(".testimonials .over-lay .client3 p").animate({
        
        top: 394
        
    },1000);
    
    $(".testimonials .over-lay .client3 img").animate({
        
        left: '-499'
        
    },1000);
    
    $(".testimonials .over-lay .client3 h3").animate({
        
        top: '-55px'
        
    },1000);       
         
         
    $(".client1").addClass('active10');  
         
    $(".testimonials .over-lay .client1 p").animate({
        
        top: 85
        
    },1000);
    
    $(".testimonials .over-lay .client1 img").animate({
        
        left: 25
        
    },1000);
    
    $(".testimonials .over-lay .client1 h3").animate({
        
        top: 10
        
    },1000);         
        
     }    
     
},3000);

window.onload = function(){
      
      
    $(".testimonials .over-lay .client1 p").animate({
        
        top: 85
        
    },1000);
      
    $(".testimonials .over-lay .client1 img").animate({
        
        left: 25
        
    },1000);
    
    $(".testimonials .over-lay .client1 h3").animate({
        
        top: 10
        
    },1000);     
      
      
  }; 

$(".con1").click(function(){
    
$(".con1").siblings().removeClass('active_c')   
$(".con1").addClass('active_c')   
    

$('.client1').addClass('active10');
    
$(".testimonials .over-lay .client1 p").animate({
        
top: 85
        
},1000);
    
$(".testimonials .over-lay .client1 img").animate({
        
left: 25
        
},1000);
    
$(".testimonials .over-lay .client1 h3").animate({
        
top: 10
        
},1000);   
    
    
$(".client1").siblings().removeClass('active10');
        
$(".testimonials .over-lay .client2 p , .testimonials .over-lay .client3 p").animate({
        
        top: 394
        
    },1000);
    
$(".testimonials .over-lay .client2 img , .testimonials .over-lay .client3 img").animate({
        
        left: '-499'
        
    },1000);
    
$(".testimonials .over-lay .client2 h3 , .testimonials .over-lay .client3 h3").animate({
        
        top: '-55px'
        
    },1000);     
    
});

$(".con2").click(function(){
    
$(".con2").siblings().removeClass('active_c')   
$(".con2").addClass('active_c')   
    

$('.client2').addClass('active10');
    
$(".testimonials .over-lay .client2 p").animate({
        
top: 85
        
},1000);
    
$(".testimonials .over-lay .client2 img").animate({
        
left: 25
        
},1000);
    
$(".testimonials .over-lay .client2 h3").animate({
        
top: 10
        
},1000);   
    
    
$(".client2").siblings().removeClass('active10');
        
$(".testimonials .over-lay .client1 p , .testimonials .over-lay .client3 p").animate({
        
        top: 394
        
    },1000);
    
$(".testimonials .over-lay .client1 img , .testimonials .over-lay .client3 img").animate({
        
        left: '-499'
        
    },1000);
    
$(".testimonials .over-lay .client1 h3 , .testimonials .over-lay .client3 h3").animate({
        
        top: '-55px'
        
    },1000);     
    
});

$(".con3").click(function(){
    
$(".con3").siblings().removeClass('active_c')   
$(".con3").addClass('active_c')   
    

$('.client3').addClass('active10');
    
$(".testimonials .over-lay .client3 p").animate({
        
top: 85
        
},1000);
    
$(".testimonials .over-lay .client3 img").animate({
        
left: 25
        
},1000);
    
$(".testimonials .over-lay .client3 h3").animate({
        
top: 10
        
},1000);   
    
    
$(".client3").siblings().removeClass('active10');
        
$(".testimonials .over-lay .client2 p , .testimonials .over-lay .client1 p").animate({
        
        top: 394
        
    },1000);
    
$(".testimonials .over-lay .client2 img , .testimonials .over-lay .client1 img").animate({
        
        left: '-499'
        
    },1000);
    
$(".testimonials .over-lay .client2 h3 , .testimonials .over-lay .client1 h3").animate({
        
        top: '-55px'
        
    },1000);     
    
});






setInterval(function(){
    
    
if($(".per3").hasClass('active11'))
        {
            
        $('.per3').removeClass('active11')
 
            
            $(".per3").animate({
              
            top: 535,
            left: 20    
                
            },1000);

            $(".per2").animate({
              
            top: 280,
            left: 20    
                
            },1000);    
            
            
            $('.per2').addClass('active11')
                     
            $(".per1").animate({
              
            top: 415,
            left: 640    
                
            },1000); 
            
       
        $(".per1").siblings().removeClass('active12')  
        $(".per1").addClass('active12')      
            
            
        }
    
    
else if($(".per2").hasClass('active11'))
        {
            
            $('.per2').removeClass('active11')
            
            
            $(".per3").animate({
              
            top: 280,
            left: 20    
                
            },1000);

            $(".per1").animate({
              
            top: 535,
            left: 20    
                
            },1000);    
   
            $('.per1').addClass('active11')
            
            $(".per2").animate({
              
            top: 415,
            left: 640    
                
            },1000);
            
        $(".per2").siblings().removeClass('active12')  
        $(".per2").addClass('active12')     
            
            
        } 
      

else if($(".per1").hasClass('active11'))
        {
            
            $('.per1').removeClass('active11')
            
            $(".per1").animate({
              
            top: 280,
            left: 20    
                
            },1000);

            $(".per2").animate({
              
            top: 535,
            left: 20    
                
            },1000);  
            

            
            $('.per3').addClass('active11')
            
            $(".per3").animate({
              
            top: 415,
            left: 640    
                
            },1000); 
           
           $(".per3").siblings().removeClass('active12')  
        $(".per3").addClass('active12')      
            
            
        } 
 
},5000);





$(".name_i").focus(function(){
    
$(".contact .over-lay form .name").animate({
       
       width: 400,
       left: 432
       
},500);
    
$(".contact .over-lay form .name2").animate({
       
       width: 400,
       
},500);
    
$(".contact .over-lay form .name_left").animate({
       
       height: 46,
       
},500);    
    
$(".contact .over-lay form .name_right").animate({
       
       height: 46,
       top: 239
    
},500); 
  

    
    
});

$(".name_i").blur(function(){
    
$(".contact .over-lay form .name").animate({
       
       width: 0,
       left: 832
       
},500);
    
$(".contact .over-lay form .name2").animate({
       
       width: 0,
       
},500); 
   
$(".contact .over-lay form .name_left").animate({
       
       height: 0,
       
},500);    
    
$(".contact .over-lay form .name_right").animate({
       
       height: 0,
       top: 285
    
},500);     
    
});


$(".email_i").focus(function(){
    
$(".contact .over-lay form .email").animate({
       
       width: 400,
       left: 432
       
},500);
    
$(".contact .over-lay form .email2").animate({
       
       width: 400,
       
},500);
   
$(".contact .over-lay form .email_left").animate({
       
       height: 46,
       
},500);    
    
$(".contact .over-lay form .email_right").animate({
       
       height: 46,
       top: 305
    
},500); 
 
 
});

$(".email_i").blur(function(){
    
$(".contact .over-lay form .email").animate({
       
       width: 0,
       left: 832
       
},500);
    
$(".contact .over-lay form .email2").animate({
       
       width: 0,
       
},500); 
 
$(".contact .over-lay form .email_left").animate({
       
       height: 0,
       
},500);    
    
$(".contact .over-lay form .email_right").animate({
       
       height: 0,
       top: 351
    
},500);

    
});


$(".phone_i").focus(function(){
    
$(".contact .over-lay form .phone").animate({
       
       width: 400,
       left: 432
       
},500);
    
$(".contact .over-lay form .phone2").animate({
       
       width: 400,
       
},500);
  
$(".contact .over-lay form .phone_left").animate({
       
       height: 46,
       
},500);    
    
$(".contact .over-lay form .phone_right").animate({
       
       height: 46,
       top: 371
    
},500); 
 
 
});

$(".phone_i").blur(function(){
    
$(".contact .over-lay form .phone").animate({
       
       width: 0,
       left: 832
       
},500);
    
$(".contact .over-lay form .phone2").animate({
       
       width: 0,
       
},500); 
 
   
$(".contact .over-lay form .phone_left").animate({
       
       height: 0,
       
},500);    
    
$(".contact .over-lay form .phone_right").animate({
       
       height: 0,
       top: 417
    
},500);

    
});


$(".msg").focus(function(){
    
$(".contact .over-lay form .msg1").animate({
       
       width: 400,
       left: 432
       
},500);
    
$(".contact .over-lay form .msg_b").animate({
       
       width: 400,
       
},500);
  
$(".contact .over-lay form .msg_left").animate({
       
       height: 160,
       
},500);    
    
$(".contact .over-lay form .msg_right").animate({
       
       height: 160,
       top: 438
    
},500); 

 
});

$(".msg").blur(function(){
    
$(".contact .over-lay form .msg1").animate({
       
       width: 0,
       left: 832
       
},500);
    
$(".contact .over-lay form .msg_b").animate({
       
       width: 0,
       
},500); 
   
$(".contact .over-lay form .msg_left").animate({
       
       height: 0,
       
},500);    
   
$(".contact .over-lay form .msg_right").animate({
       
       height: 0,
       top: 598
    
},500);

    
});






$(".about button").click(function(){
    
   $(".more").fadeIn()
    
});


$(".about .more h3").click(function(){
    
   $(".more").fadeOut()
    
});





$(".q1").click(function(){
    
   $(".a1").slideDown()
   $(".a2").slideUp()
   $(".a3").slideUp()
    
});

$(".q2").click(function(){
    
   $(".a2").slideDown()
   $(".a1").slideUp()
   $(".a3").slideUp()
    
});

$(".q3").click(function(){
    
   $(".a3").slideDown()
   $(".a2").slideUp()
   $(".a1").slideUp()
    
});


$(".q4").click(function(){
    
   $(".a4").slideDown()
   $(".a5").slideUp()
   $(".a6").slideUp()
    
});

$(".q5").click(function(){
    
   $(".a5").slideDown()
   $(".a6").slideUp()
   $(".a4").slideUp()
    
});

$(".q6").click(function(){
    
   $(".a6").slideDown()
   $(".a4").slideUp()
   $(".a5").slideUp()
    
});


$(".q7").click(function(){
    
   $(".a7").slideDown()
   $(".a8").slideUp()
   $(".a9").slideUp()
    
});

$(".q8").click(function(){
    
   $(".a8").slideDown()
   $(".a9").slideUp()
   $(".a7").slideUp()
    
});

$(".q9").click(function(){
    
   $(".a9").slideDown()
   $(".a8").slideUp()
   $(".a7").slideUp()
    
});


$(".b1").click(function(){
    
   $(this).addClass('a_active') 
   $(this).siblings().removeClass('a_active') 
    
   $(".pages").animate({
       
       scrollLeft: 0
       
   },500);
    
});

$(".b2").click(function(){
    
    $(this).addClass('a_active') 
   $(this).siblings().removeClass('a_active')   
    
   $(".pages").animate({
       
       scrollLeft: 500
       
   },500);
    
});

$(".b3").click(function(){
    
     $(this).addClass('a_active') 
   $(this).siblings().removeClass('a_active')  
    
   $(".pages").animate({
       
       scrollLeft: 1000
       
   },500);
    
});









$(".next").click(function(){
    
   
    $(".product").animate({
        
        scrollLeft: '+=250'
        
    },500);
    
});

$(".back").click(function(){
    
   
    $(".product").animate({
        
        scrollLeft: '-=250'
        
    },500);
    
});


$(".products .product .product1").mouseenter(function(){
    
   $(".products .product .product1 section").css("transform","scale(1,1)")
       
});

$(".products .product .product1").mouseleave(function(){
    
   $(".products .product .product1 section").css("transform","scale(0,0)")
       
});


$(".products .product .product2").mouseenter(function(){
    
   $(".products .product .product2 section").css("transform","scale(1,1)")
       
});

$(".products .product .product2").mouseleave(function(){
    
   $(".products .product .product2 section").css("transform","scale(0,0)")
       
});


$(".products .product .product3").mouseenter(function(){
    
   $(".products .product .product3 section").css("transform","scale(1,1)")
       
});

$(".products .product .product3").mouseleave(function(){
    
   $(".products .product .product3 section").css("transform","scale(0,0)")
       
});


$(".products .product .product4").mouseenter(function(){
    
   $(".products .product .product4 section").css("transform","scale(1,1)")
       
});

$(".products .product .product4").mouseleave(function(){
    
   $(".products .product .product4 section").css("transform","scale(0,0)")
       
});


$(".products .product .product5").mouseenter(function(){
    
   $(".products .product .product5 section").css("transform","scale(1,1)")
       
});

$(".products .product .product5").mouseleave(function(){
    
   $(".products .product .product5 section").css("transform","scale(0,0)")
       
});


$(".products .product .product6").mouseenter(function(){
    
   $(".products .product .product6 section").css("transform","scale(1,1)")
       
});

$(".products .product .product6").mouseleave(function(){
    
   $(".products .product .product6 section").css("transform","scale(0,0)")
       
});


$(".products .product .product7").mouseenter(function(){
    
   $(".products .product .product7 section").css("transform","scale(1,1)")
       
});

$(".products .product .product7").mouseleave(function(){
    
   $(".products .product .product7 section").css("transform","scale(0,0)")
       
});


$(".products .product .product8").mouseenter(function(){
    
   $(".products .product .product8 section").css("transform","scale(1,1)")
       
});

$(".products .product .product8").mouseleave(function(){
    
   $(".products .product .product8 section").css("transform","scale(0,0)")
       
});


$(".products .product .product9").mouseenter(function(){
    
   $(".products .product .product9 section").css("transform","scale(1,1)")
       
});

$(".products .product .product9").mouseleave(function(){
    
   $(".products .product .product9 section").css("transform","scale(0,0)")
       
});


$(".products .product .product10").mouseenter(function(){
    
   $(".products .product .product10 section").css("transform","scale(1,1)")
       
});

$(".products .product .product10").mouseleave(function(){
    
   $(".products .product .product10 section").css("transform","scale(0,0)")
       
});


$(".products .product .product11").mouseenter(function(){
    
   $(".products .product .product11 section").css("transform","scale(1,1)")
       
});

$(".products .product .product11").mouseleave(function(){
    
   $(".products .product .product11 section").css("transform","scale(0,0)")
       
});


$(".products .product .product12").mouseenter(function(){
    
   $(".products .product .product12 section").css("transform","scale(1,1)")
       
});

$(".products .product .product12").mouseleave(function(){
    
   $(".products .product .product12 section").css("transform","scale(0,0)")
       
});








$(".step1").mouseenter(function(){
   
    $(".step1 section").slideDown()
    
});

$(".step1").mouseleave(function(){
   
    $(".step1 section").slideUp()
    
});

$(".step2").mouseenter(function(){
   
    $(".step2 section").slideDown()
    
});

$(".step2").mouseleave(function(){
   
    $(".step2 section").slideUp()
    
});

$(".step3").mouseenter(function(){
   
    $(".step3 section").slideDown()
    
});

$(".step3").mouseleave(function(){
   
    $(".step3 section").slideUp()
    
});

$(".step4").mouseenter(function(){
   
    $(".step4 section").slideDown()
    
});

$(".step4").mouseleave(function(){
   
    $(".step4 section").slideUp()
    
});









$(".i").click(function(){
    
    $(".i").css("transform","scale(0,0)")
    $(".close1").css("transform","scale(1,1)")
    $(".test").animate({
        
        width: '96%'
        
    },500);
  
});

$(".close1").click(function(){
    
    $(".close1").css("transform","scale(0,0)")
    $(".i").css("transform","scale(1,1)")
    $(".test").animate({
        
        width: '0%'
        
    },500);
  
});

$(".i").mouseenter(function(){
    
$(".s2").animate({
    
width: 25
    
},500);
       
});

$(".i").mouseleave(function(){
    
$(".s2").animate({
    
width: 40
    
},500);
   
  
      
});

$(".search i").click(function(){  
    $(".search input").toggleClass("act")  
});

$(".theme section").click(function(){
    
   if(!$(".theme section").hasClass('active25'))
       {
         $(".theme section").addClass('active25')
         $("head link:nth-of-type(4)").attr("href","theme2.css")
       }
   else if($(".theme section").hasClass('active25'))
       {
         $(".theme section").removeClass('active25')
         $("head link:nth-of-type(4)").attr("href","default.css")   
       }
    
    
    
});













