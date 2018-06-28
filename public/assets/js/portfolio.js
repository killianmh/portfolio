// Wait to attach our handlers until the DOM is fully loaded.
$(function(){

    $('.img-slider').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    $(".toggle-modal").on("click", function(){
        // alert("you clicked the button");
        var dataBtn = $(this).attr("data-btn");
        $("#project-modal-" + dataBtn).modal();
    });

    $(".smoothScroll").on('click', function(event) {
        //check if link has #
        if(this.hash !== ""){
            event.preventDefault();
            let hash = this.hash;
            $('html, body').animate({scrollTop: $(hash).offset().top - 100}, 800, function() {
                window.location.hash = hash;
            })
        }
    })

    

})