$(function() {
    $(".create-form").on("submit", function(event) {

        event.preventDefault();
        console.log("clicked");
    
        var newBurger = {
            burger_name: $("#bur").val().trim(),
            devoured: 0
        };
    
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Created new burger.");
            location.reload();
        });
    });
});