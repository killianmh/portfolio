// Wait to attach our handlers until the DOM is fully loaded.
$(function(){
    
    $(".toggle-modal-1").on("click", function(){
        // alert("you clicked the button");
        $("#project-modal-Verse").modal();
    });

    $(".toggle-modal-2").on("click", function(){
        // alert("you clicked the button");
        $("#project-modal-Space-Adventure").modal();
    });
})