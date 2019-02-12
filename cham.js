function hideVid() {
    $('.hidden').fadeIn();
    $('.dark').removeClass('dark');
    $('.vid').hide();
}

$(document).ready(function() {
    console.log('yeeee');
    // hideVid();
    $('.vid').on('ended', function() {
    	hideVid();
    });
});

$(document).mouseup(function(e) {
    var container = $(".vid");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        hideVid();
    }
});