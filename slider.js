$(document).ready(function(){



    $.preloadImages = function () {
        for (var i = 0; i < arguments.length; i++) {
            $('<img>').attr('src', arguments[i]);
        }
    };

    $.preloadImages('image/4.jpg', 'image/2.jpg','image/3.jpg','image/1.jpg');



    var $img = $('#slider img'), // on cible les images contenues dans le slider
        $circle = $('#circle div');

        indexCircle = $circle.length - 1, // on définit l'index du dernier élément
        indexImg = $img.length - 1, // on définit l'index du dernier élément
        i = 0, // on initialise un compteur
        $currentImg = $img.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)
        $currentCirc = $circle.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)



    $img.animate({ opacity: 0 }, 200 );
    $currentImg.animate({ opacity: 1 }, 500 );
    $currentCirc.removeClass('circe').addClass('circf');


    $('.next').click(function(){ // image suivante


        i++; 

        if( i <= indexImg ){

            $img.animate({ opacity: 0 }, 200 );
            $circle.removeClass('circf').addClass('circe');

            $currentImg = $img.eq(i); // on définit la nouvelle image
            $currentCirc = $circle.eq(i);

            $currentCirc.removeClass('circe').addClass('circf');
            $currentImg.animate({ opacity: 1 }, 500 );

        }else{

            i = indexImg;

        }

    });

    $('.circle-1').click(function(){ // image suivante


        $circle.removeClass('circf').addClass('circe');
        $('.circle-1').removeClass('circe').addClass('circf');
        $img.animate({ opacity: 0 }, 200);
        $currentImg = $img.eq(0);
        $currentImg.animate({ opacity: 1 }, 500 );
        i = 0;


    });


    $('.circle-2').click(function(){ // image suivante


        $circle.removeClass('circf').addClass('circe');
        $('.circle-2').removeClass('circe').addClass('circf');
        $img.animate({ opacity: 0 }, 200 );
        $currentImg = $img.eq(1);
        $currentImg.animate({ opacity: 1 }, 500 );
        i = 1;


    });

    $('.circle-3').click(function(){ // image suivante


        $circle.removeClass('circf').addClass('circe');
        $('.circle-3').removeClass('circe').addClass('circf');
        $img.animate({ opacity: 0 }, 200 );
        $currentImg = $img.eq(2);
        $currentImg.animate({ opacity: 1 }, 500 );
        i = 2;


    });

    $('.circle-4').click(function(){ // image suivante


        $circle.removeClass('circf').addClass('circe');
        $('.circle-4').removeClass('circe').addClass('circf');
        $img.animate({ opacity: 0 }, 200 );
        $currentImg = $img.eq(3);
        $currentImg.animate({ opacity: 1 }, 500 );
        i = 3;


    });


    $('.prev').click(function(){ // image précédente


        i--;


        if( i >= 0 ){
            $circle.removeClass('circf').addClass('circe');
            $img.animate({ opacity: 0 }, 200 );
            $currentImg = $img.eq(i);
            $currentCirc = $circle.eq(i);
            $currentImg.animate({ opacity: 1 }, 500 );
            $currentCirc.removeClass('circe').addClass('circf');


        }else{

            i = 0;

        }

    });


    function slideImg(){

        setTimeout(function(){

            if(i < indexImg){ // si le compteur est inférieur au dernier index

                i++; // on l'incrémente

            }else{ // sinon, on le remet à 0 (première image)

                i = 0;

            }


            $img.animate({ opacity: 0 }, 200 );
            $circle.removeClass('circf').addClass('circe');
            $currentImg = $img.eq(i);
            $currentCirc = $circle.eq(i);
            $currentImg.animate({ opacity: 1 }, 500 );
            $currentCirc.removeClass('circe').addClass('circf');

            slideImg();

        }, 5000);

    }

    slideImg();


});

