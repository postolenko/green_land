$(document).ready(function() {


    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------------

    var headerSite = $(".header-site");

    // ----------------------------

    var imgWrapp;

    // ----------------------------

    getFooterPosition();

    getCenterBlockPositon();

    getAricleBgSize();

    getHeaderPosition();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // -----------------------

        getCenterBlockPositon();

        getAricleBgSize();

        getHeaderPosition();

    });

    $(document).scroll(function() {

        getHeaderPosition();

    });


    $(function() {



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

        if (delta >= 0) {

           headerSite.css({
                "top" :  0 + "%"
            });

        } else {            

             headerSite.css({
                "top" : -110 + "%"
            });

        }

    });


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

                console.log(articleBlock.offset().left);

                imgWrapp.width(articleBlock.offset().left);

            });

        }

    }

    function getHeaderPosition() {

        var firstSectionCorrd = $("#promo").offset().top + $("#promo").height();

        if( $(window).scrollTop() >= firstSectionCorrd ) {

            headerSite.addClass("fixed");

        } else {

            headerSite.removeClass("fixed");

        }


    }



});
