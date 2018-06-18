// Wait to attach our handlers until the DOM is fully loaded.
$(function(){
    
    $(".toggle-modal").on("click", function(){
        // alert("you clicked the button");
        var dataBtn = $(this).attr("data-btn");
        $("#project-modal-" + dataBtn).modal();

        $('.img-slider').slick({
            arrows: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });

    });

    

})