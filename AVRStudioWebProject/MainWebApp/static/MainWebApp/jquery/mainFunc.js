
$(document).ready(function(){
    var staticLink = "../static/MainWebApp/";


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
    switch ($.trim($("#hiddenCurrentUrl").text())) {
        case '/':
          index();
          break;

        case '/about/':
          about();
          break;

        case '/contact/':
          contact();
          break;

        case '/details/':
          details();
          break;

        case '/projects/':
          projects();
          break;
    }

    function changePageTitle(name){
        document.title = name;
    }

    /* Index page function*/
    function index(e){

        /* Change page titles and background*/
        changePageTitle("Home - AVR Studio")
        $('#contentTitleSection').css("background-image", "url('" + staticLink + "images/index_bg.jpg')");
        $('#contentTitle').text("Future Proof Designed");
        $('#contentSubtitle').text(" Powered by Neuroscience ");
    }

    /* About page function*/
    function about(e){

        /* Change page titles and background*/
        changePageTitle("About - AVR Studio")
        $('#contentTitleSection').css("background-image", "url('" + staticLink + "images/about_bg.jpg')");
        $('#contentTitle').text("Future Proof Designed");
        $('#contentSubtitle').text(" Powered by Neuroscience ");
    }

    /* Contact page function*/
    function contact(e){

        /* Change page titles and background*/
        changePageTitle("Contact - AVR Studio")
        $('#contentTitleSection').css("background-image", "url('" + staticLink + "images/contact_bg.jpg')");
        $('#contentTitle').text("Future Proof Designed");
        $('#contentSubtitle').text(" Powered by Neuroscience ");
    }

    /* Details page function*/
    function details(e){

        /* Change page titles and background*/
        changePageTitle("Details - AVR Studio")
        $('#contentTitleSection').css("background-image", "url('" + staticLink + "images/details_bg.jpg')");
        $('#contentTitle').text("Future Proof Designed");
        $('#contentSubtitle').text(" Powered by Neuroscience ");
    }

    /* Projects page function*/
    function projects(e){

        /* Change page titles and background*/
        changePageTitle("Projects - AVR Studio")
        $('#contentTitleSection').css("background-image", "url('" + staticLink + "images/projects_bg.jpg')");
        $('#contentTitle').text("Future Proof Designed");
        $('#contentSubtitle').text(" Powered by Neuroscience ");
    }
});

