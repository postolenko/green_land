$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    // ----------------------------

    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------------

    var headerSite = $(".header-site");
    var firstSectionCorrd;
    var delta;

    // ----------------------------

    var imgWrapp;

    // ----------------------------

    var respWindowWidth = 1024;

    // ----------------------------

    var lastId,
    topMenu = $("#top-menu, .logo-block"),
    topMenuHeight = topMenu.outerHeight()+15,

    menuItems = topMenu.find("a"),

    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

    // -----------------------------

    var lastScrollTop = 0;
    var st = $(window).scrollTop();

    // -----------------------------

    getFooterPosition();

    getCenterBlockPositon();

    getAricleBgSize();

    getHeaderPosition();

    getAdaptivePositionElements();

    getAnimation();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // -----------------------

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        // -----------------------

        getCenterBlockPositon();

        getAricleBgSize();

        getHeaderPosition();

        getAdaptivePositionElements();

        getAnimation();

    });

    window.onscroll = function(event) {

        getHeaderPosition();

        // -----------------

       var fromTop = $(this).scrollTop()+topMenuHeight;       

       var cur = scrollItems.map(function(){
         if ($(this).offset().top < fromTop)
           return this;
       });

       cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "";
       
       if (lastId !== id) {
           lastId = id;

            menuItems.each(function() {

               menuItems.removeClass("active");

            });

            menuItems.filter("[href='#"+id+"']").addClass("active");

       }

    }
    

    $(function() {

        menuItems.click(function(e){
          var href = $(this).attr("href"),
              offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
          $('html, body').stop().animate({ 
              scrollTop: offsetTop
          }, 800);
          e.preventDefault();
        });

    });


    $(function() {

        $(".play-block").on("click", function(playBtnEvent) {

            playBtnEvent.preventDefault();

            parentEl = $(this).closest(".video-block");

            indexVideoBox = parentEl.index(".video-block");

            videoIdAttr = "video_" + indexVideoBox;
            
            parentEl.find("iframe").attr("id", videoIdAttr);

            $(this).closest(".video-mask").fadeOut(300);

            $("#" + videoIdAttr)[0].src += "?rel=0&autoplay=1";            

        });

    });

    $(".respmenubtn").click(function() {

        if( $(".main-nav-block").is(":hidden") ) {

            $(".main-nav-block").fadeIn(300);

            $(".header-site").addClass("active");

            $(this).addClass("active");

        } else {

            $(".main-nav-block").fadeOut(300);

            $(".header-site").removeClass("active");

            $(this).removeClass("active");

        }

    });

    if( bodyWidth < respWindowWidth ) {

        $(".main-nav-block li a").click(function() {

            $(".main-nav-block").fadeOut(300);

            $(".header-site").removeClass("active");

            $(".respmenubtn").removeClass("active");

        });

    }

    $(this).keydown(function(eventObject){

        if (eventObject.which == 27) {

            $(".main-nav-block").fadeOut(300);

            $(".header-site").removeClass("active");

            $(".respmenubtn").removeClass("active");

        }

    });

    // ----------------


    function getFooterPosition() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        setFooterPositionInterval = setInterval(function() {

            contentCoor = $(".content").offset().top + $(".content").height();
            footerCoor = $(".footer").offset().top;

            if( contentCoor != footerCoor ) {

                $(".wrapper").css({"min-height" : $(window).height() + "px"});

                $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

                clearInterval(setFooterPositionInterval);

            }

        }, 35);

    }

    function getCenterBlockPositon() {

        if( $(".center").length > 0 ) {

            $(".center").find(".two-cols-block").css({
                "padding-top" : $(".header-site").height() + "px"
            });

        }

    }

    function getAricleBgSize() {

        if( $(".two-cols-article").length > 0 ) {

            $(".two-cols-article").each(function() {

                articleBlock = $(this).find(".article-block");

                imgWrapp = $(this).find(".img-box");

                imgWrapp.width(articleBlock.offset().left);

            });

        }

    }

    function getHeaderPosition() {

        st = $(window).scrollTop();

        firstSectionCorrd = $("#promo").offset().top + $("#promo").height();

        if( st >= firstSectionCorrd ) {

            headerSite.addClass("fixed");

            if (st > lastScrollTop){
               headerSite.css({
                    "top" :  -110 + "%"
                });
            } else {
               headerSite.css({
                        "top" :  0 + "%"
                    });
            }
            lastScrollTop = st;

        } else {

            headerSite.removeClass("fixed");

        }

    }

    function getAdaptivePositionElements() {

        $(".append-elem").each(function() {

            if( $(this).hasClass("desktop-position") ) {

                var screenParam = parseInt( $(this).attr("data-min-screen") );

                var indexElem = $(this).attr("data-append-descktop-elem");

                if( bodyWidth <= screenParam ) {

                    $("[data-append-elem = '"+ indexElem +"']").append($(this).children());

                }

                 if( bodyWidth > screenParam ) {

                    $("[data-append-descktop-elem = '"+ indexElem +"']").append($("[data-append-elem = '"+ indexElem +"']").children());

                }

            }

        });

    }

    function getAnimation() {

        $("*").each(function() {

            if( bodyWidth <= 480 && $(this).hasClass("wow") ) {

                $(this).removeClass("wow");

                $(this).addClass("wow_resp");

            } else if( bodyWidth > 480 && $(this).hasClass("wow_resp") ) {

                $(this).addClass("wow");

                $(this).removeClass("wow_resp");

            }

        });

    }


});
