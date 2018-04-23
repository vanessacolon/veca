$(document).ready(function() {
    $("#toggle").click(function() {
        var elem = $("#toggle").text();
        if (elem == "Leer más") {
            //Stuff to do when btn is in the read more state
            $("#toggle").text("Leer menos");
            $("#text").slideDown();
        } else {
            //Stuff to do when btn is in the read less state
            $("#toggle").text("Leer más");
            $("#text").slideUp();
        }
    });
});