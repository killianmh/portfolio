// Wait to attach our handlers until the DOM is fully loaded.
$(function(){
    
    $(".toggle-modal").on("click", function(){
        // alert("you clicked the button");
        var dataBtn = $(this).attr("data-btn");
        $("#project-modal-" + dataBtn).modal();
    });

    // $(".toggle-modal-2").on("click", function(){
    //     // alert("you clicked the button");
    //     $("#project-modal-Space-Adventure").modal();
    // });
})