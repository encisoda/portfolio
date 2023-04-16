function showeducation(){
    $("#education_container").css("display","inherit");
    $("#education_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#education_container").removeClass("animated slideInLeft");
    },800);
}
function closeeducation(){
    $("#education_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#education_container").removeClass("animated slideOutLeft");
        $("#education_container").css("display","none");
    },800);
}
function showworkexperiences(){
    $("#workexperiences_container").css("display","inherit");
    $("#workexperiences_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#workexperiences_container").removeClass("animated slideInRight");
    },800);
}
function closeworkexperiences(){
    $("#workexperiences_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#workexperiences_container").removeClass("animated slideOutRight");
        $("#workexperiences_container").css("display","none");
    },800);
}
function showskills(){
    $("#skills_container").css("display","inherit");
    $("#skills_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#skills_container").removeClass("animated slideInUp");
    },800);
}
function closeskills(){
    $("#skills_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#skills_container").removeClass("animated slideOutDown");
        $("#skills_container").css("display","none");
    },800);
}
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#about").removeClass("animated fadeIn");
      $("#skills").removeClass("animated fadeIn");
      $("#work").removeClass("animated fadeIn");
    },1000);
},1500);

