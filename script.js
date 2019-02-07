$("#red_button").click(function(){
    $("#red_button").hide();
    $("#button_press").hide();
    $("body").css("background-color","black");
    $("#house").css("background-image","url('https://media.giphy.com/media/6wpHEQNjkd74Q/giphy.gif')");
    $("#valve").show();
});

$("#valve").click(function(){
    $("#house").hide();
    $("#rubble").show();
    $("#valve").hide();
    $("#dig").show();
    $("#fire_text").hide();
    $("#dig_text").show();
});

$("#dig").click(function(){
    $("#rubble").hide();
    $("#key").show();
    $("#dig").hide();
    $("#key_prompt").show();
    $("#dig_text").hide();
});

$("#chest").click(function(){
    $("#open_chest").show(); 
    $("#chest").hide();
    $("#key_prompt").hide();
    $("#key").hide();
    $("body").css("background-color","white");
    $("h1").text("The cake was a lie");
});