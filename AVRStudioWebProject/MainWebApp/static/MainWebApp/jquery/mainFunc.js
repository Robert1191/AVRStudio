
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

    function changePageTitle(name){
        document.title = name;
    }

    /* Index page function*/
    function index(e){

        /* Change page title*/
        changePageTitle("Home - AVR Studio")

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