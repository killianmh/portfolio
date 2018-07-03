// Wait to attach our handlers until the DOM is fully loaded.
$(function(){
    
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
            scrollTo(document.documentElement, $(hash).offset().top, 600)
            // $('html, body').animate({scrollTop: ($(hash).offset().top - 100)}, 800, function() {
            //     window.location.hash = hash;
            // })
        }
    })

    function scrollTo(element, to, duration) {
        if(duration <=0){
            return
        }
        let difference = to - element.scrollTop;
        let perTick = difference / duration * 10;

        setTimeout(function(){
            element.scrollTop = element.scrollTop + perTick;
            if(element.scrollTop === to){
                return
            }
            scrollTo(element, to, duration - 10)
        }, 10);
    }
    

})