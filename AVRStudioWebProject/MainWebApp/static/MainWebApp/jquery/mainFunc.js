
$(document).ready(function(){

    var screenWidth = $( document ).width();
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

    $('#closeMenuButton').on( "click", function(e) {
         if(isHiddenMenuOpen){
            closeHiddenMenu();
        }
    });

    function openHiddenMenu(){
        $('#hiddenLayer').css("visibility", "visible");
        $('.mainSideBar').css("margin-left", 0);
        if(screenWidth > 450){
             screenWidth = 400;
        }
        $('.mainContent').css("margin-left", screenWidth);
        $('.sideBarHeader').css("height", screenWidth);
        $('.sideBarHeader').css("width", screenWidth);
        isHiddenMenuOpen = true;
    }

    function closeHiddenMenu(){
        $('#hiddenLayer').css("visibility", "hidden");
        $('.mainContent').css("margin-left", 0);
        if(screenWidth > 450){
             screenWidth = 400;
        }
        $('.mainSideBar').css("margin-left", -screenWidth);
        $('.sideBarHeader').css("height", screenWidth);
        $('.sideBarHeader').css("width", screenWidth);
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
        $('#contentTitleSection').css("background-image", "url('../static/MainWebApp/images/bg.jpg')");
    }
});

