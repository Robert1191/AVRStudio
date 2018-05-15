
$(document).ready(function(){
  /* Set selected side bar button*/
            var i;
            for (i = 0; i < $(".sideBarBody").children().length; i++) {
                if($($(".sideBarBody").children()[i]).attr('href') == $.trim($("#hiddenCurrentUrl").text())){
                    $($(".sideBarBody").children()[i]).addClass( "selectedSideBarButton" );
                }
            }

   /* Switch page function*/
    if  ($.trim($("#hiddenCurrentUrl").text()) == "/"){
        index();
    }


    /* Index page function*/
    function index(e){
        var mouseX, mouseY;
       $(document).mousemove(function(e) {
            mouseX = e.pageX;
            mouseY = e.pageY;
            traX = ((4 * mouseX) / 600) + 40;
            traY = ((4 * mouseY) / 600) + 50;

            $(".title").css({"background-position": traX + "%" + traY + "%"});
        });
    }
});