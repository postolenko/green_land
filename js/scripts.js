$(document).ready(function() {


    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------------

    var imgWrapp;

    // ----------------------------

    getFooterPosition();

    getCenterBlockPositon();

    getAricleBgSize();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // -----------------------

        getCenterBlockPositon();

        getAricleBgSize();

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



});
