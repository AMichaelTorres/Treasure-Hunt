$("#start").click(function() {
    $("#start").hide();
    $("#code").show();
    $(".hint").hide();
    $(".Parrot").show();
    $(".Swords").show();
    $(".Cannon").show();
    $(".Captain").hide();
    $("#hook").hide();
    $("#hook1").hide();
    $("#hook2").hide();
    $(".squid").hide();
    $("#Jones").hide();
    $(".jones1").hide();
    $(".jones2").hide();
    $(".jones3").hide();
    $(".last").hide();
    $(".hint1").hide();
    $(".part").hide();
    $(".text").hide();
    $(".quarter").hide();
    $(".Restart").hide();
    $(".RED").hide();
});

$("#code").mouseenter(function() {
    $(".hint").show();
});

$(".Parrot").click(function() {
    $("body").css("background-color","red");
    $(".Restart").show();
    $(".RED").show();
    $("#Chest").hide();
    
});

$(".Swords").click(function() {
    $("body").css("background-color","red");
    $(".Restart").show();
    $(".RED").show();
    $("#Chest").hide();
    
});

$(".Cannon").click(function() {
    $("body").css("background-color","lime");
    $("#code").hide();
    $(".hint").hide();
    $(".Parrot").hide();
    $(".Swords").hide();
    $(".Cannon").hide();
    $(".part").hide();
    $(".Captain").show();
    $("#hook").show();
    $("#hook1").show();
    $("#hook2").show();
});

$("#hook").dblclick(function() {
    $("body").css("background-color","lime");
    $("#start").hide();
    $(".Captain").hide();
    $("#hook").hide();
    $("#hook1").hide();
    $("#hook2").hide();
    $("squid").show();
    $("#Jones").show();
    $(".jones1").show();
    $(".jones2").show();
    $(".jones3").show();
});

$("#hook1").dblclick(function() {
   $("body").css("background-color","red");
    $(".Restart").show();
    $(".RED").show();
    $("#Chest").hide();
});

$("#hook2").dblclick(function() {
   $("body").css("background-color","red");
    $(".Restart").show();
    $(".RED").show();
    $("#Chest").hide();
});

$(".jones1").click(function() {
    $("body").css("background-color","lime");
    $("#start").hide();
    $("#Jones").hide();
    $(".jones1").hide();
    $(".jones2").hide();
    $(".jones3").hide();
    $(".last").show();
    $(".part").show();
});

$(".jones2").click(function() {
    $("body").css("background-color","red");
    $(".Restart").show();
    $(".RED").show();
    $("#Chest").hide();
    
});

$(".jones3").click(function() {
    $("body").css("background-color","red");
    $(".Restart").show();
    $(".RED").show();
    $("#Chest").hide();
    
});

$(".last").hover(function() {
    $(".hint1").show();
});

$(".part").dblclick(function() {
    $("body").css("background-color","black");
    $("#Chest").hide();
    $(".text").show();
    $(".part").hide();
    $(".quarter").delay("slow").fadeIn();
});

$(".Restart").click(function() {
    $("#start").hide();
    $("#code").show();
    $(".hint").hide();
    $(".Parrot").show();
    $(".Swords").show();
    $(".Cannon").show();
    $(".Captain").hide();
    $("#hook").hide();
    $("#hook1").hide();
    $("#hook2").hide();
    $(".squid").hide();
    $("#Jones").hide();
    $(".jones1").hide();
    $(".jones2").hide();
    $(".jones3").hide();
    $(".last").hide();
    $(".hint1").hide();
    $(".part").hide();
    $(".text").hide();
    $(".quarter").hide();
    $(".Restart").hide();
    $(".RED").hide();
    $("body").css("background-color","white");
});

    
