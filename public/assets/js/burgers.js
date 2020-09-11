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

    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevoured");
        console.log("new devoured", newDevour);

        var newDevourState = {
            devoured: newDevour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(function() {
            console.log("changed state to", newDevour);
            location.reload();
        });
    });

    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(function() {
            console.log("deleted cat", id);
            location.reload();
        });
    });
});