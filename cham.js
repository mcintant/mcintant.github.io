function hideVid() {
    $('.hidden').fadeIn();
    $('.dark').removeClass('dark');
    $('.vid').hide();
}


$(document).ready(function() {
    var width = $("body").width();
    if (width > 1030) {
        $("video").prop('muted', false);
    }
    // hideVid();
 	$('.vid').on('click', function() {
        $("video").prop('muted', false);
    });
    // $('.vid').on('ended', function() {
    //     hideVid();
    // });
 	setTimeout(function() { 
       hideVid();
    }, 6000);
});

$(document).mouseup(function(e) {
    var container = $(".vid");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        hideVid();
    }
});