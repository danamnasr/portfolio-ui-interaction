$(document).ready(function () {
    //SHOW MODAL WITH FADEIN METHOD
    setTimeout(() => {
        $("#overlay").fadeIn('slow');
        $("#modal").fadeIn('slow');
    }, 2000);

    //CLOSE MODAL WITH FADEOUT METHOD
    $(document).click(function () {
        var container = $("#container");
        if (!container.is(event.target) && !container.has(event.target).length) {
            $("#modal").fadeOut(200);
            $("#overlay").fadeOut(200);
        }
    });
});