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

    getFooterPosition();

    getCenterBlockPositon();

    getAricleBgSize();

    getHeaderPosition();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // -----------------------

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        // -----------------------

        getCenterBlockPositon();

        getAricleBgSize();

        getHeaderPosition();

    });

    $(document).scroll(function() {

        getHeaderPosition();

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

    $(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {

        delta = parseInt(event.originalEvent.wheelDelta || -event.originalEvent.detail);

        firstSectionCorrd = $("#promo").offset().top + $("#promo").height();

        if( $(window).scrollTop() >= firstSectionCorrd ) {

            if (delta >= 0) {

                headerSite.css({
                    "top" :  0 + "%"
                });

            } else {

                headerSite.css({
                    "top" : -110 + "%"
                });

            }

        }

    });

    // -- /Accordeon --

    $(".respmenubtn").click(function() {

        if( $(".main-nav-block").is(":hidden") ) {

            $(".main-nav-block").fadeIn(300);

            $(this).addClass("active");

        } else {

            $(".main-nav-block").fadeOut(300);

            $(this).removeClass("active");

        }

    });

    if( bodyWidth < respWindowWidth ) {

        $(".main-nav-block li a").click(function() {

            $(".main-nav-block").fadeOut(300);

            $(".respmenubtn").removeClass("active");

        });

    }

    $(this).keydown(function(eventObject){

        if (eventObject.which == 27) {

            $(".main-nav-block").fadeOut(300);

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

        firstSectionCorrd = $("#promo").offset().top + $("#promo").height();

        if( $(window).scrollTop() >= firstSectionCorrd ) {

            headerSite.addClass("fixed");

        } else {

            headerSite.removeClass("fixed");

        }


    }



});
