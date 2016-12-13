var counter;

function addToList(){
    counter += 1;
}

function removeFromList(){
    counter -= 1;
}

$(document).ready(function(){

    $(".swipeElement").on("swiperight",function(){
        $(this).addClass('move-left').delay(1100).fadeOut(1);
        $('.swipeElement').find('.status').remove();

        $(this).append('<div class="status like">Like!</div>');
        if ( $(this).is(':last-child') ) {
            $('.swipeElement:nth-child(1)').removeClass ('move-left move-right').fadeIn(3);
        } else {
            $(this).next().removeClass('move-left move-right').fadeIn(4);
        }
    });

    $(".swipeElement").on("swipeleft",function(){
        $(this).addClass('move-right').delay(1100).fadeOut(1);
        $('.swipeElement').find('.status').remove();
        $(this).append('<div class="status dislike">Dislike!</div>');

        if ( $(this).is(':last-child') ) {
            $('.swipeElement:nth-child(1)').removeClass ('move-left move-right').fadeIn(1);
            alert('This was the last on the list!');
        } else {
            $(this).next().removeClass('move-left move-right').fadeIn(1);
        }
    });

});