
$(document).ready(function(){


    var isHiddenMenuOpen = false;
    $('#hiddenMenuButton').on( "click", function(e) {
        if(!isHiddenMenuOpen){
            openHiddenMenu();
        }else{
            closeHiddenMenu();
        }
    });

    $('#hiddenLayer').on( "click", function(e) {
            closeHiddenMenu();
    });

    $('.mainSideBar').on( "click", function(e) {
         if(isHiddenMenuOpen){
            closeHiddenMenu();
        }
    });

    $('.sideBarHeader').on( "click", function(e) {
         if(isHiddenMenuOpen){
            closeHiddenMenu();
        }
    });

    $('.sideBarBody').on( "click", function(e) {
         if(isHiddenMenuOpen){
            closeHiddenMenu();
        }
    });

    $('.sideBarFooter').on( "click", function(e) {
         if(isHiddenMenuOpen){
            closeHiddenMenu();
        }
    });

    function openHiddenMenu(){
        $('#hiddenLayer').css("visibility", "visible");
        $('.mainContent').css("margin-left", 400);
        $('.mainSideBar').css("margin-left", 0);
        isHiddenMenuOpen = true;
    }

    function closeHiddenMenu(){
        $('#hiddenLayer').css("visibility", "hidden");
        $('.mainContent').css("margin-left", 0);
        $('.mainSideBar').css("margin-left", -400);
        isHiddenMenuOpen = false;
    }
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

