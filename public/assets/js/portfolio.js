//=========================================================
// ATTACH EVENT HANDLER CODE
//=========================================================

// When all images and DOM are loaded, attach our handlers and then set loading variable to false to load content
window.onload = function(){
    $(".toggle-modal").on("click", function(){
        // alert("you clicked the button");
        var dataBtn = $(this).attr("data-btn");
        $("#project-modal-" + dataBtn).modal();
    });

    $(".smoothScroll").on('click', function(event) {
        //check if link has #
        if(this.hash !== ""){
            console.log("has hash")
            event.preventDefault();
            let hash = this.hash;
            console.log(document.documentElement)
            console.log($(hash).offset().top - 100)
            // scrollTo(document.documentElement, $(hash).offset().top - 100, 600)
            $('html, body').animate({scrollTop: ($(hash).offset().top - 100)}, 800, function() {
                window.location.hash = hash;
            })
        }
    })

    function scrollTo(element, to, duration) {
        // console.log(element)
        // console.log(to)
        // console.log(duration)
        if(duration <=0){
            return
        }
        let difference = to - element.scrollTop;
        let perTick = difference / duration * 15;

        setTimeout(function(){
            element.scrollTop = element.scrollTop + perTick;
            if(element.scrollTop === to){
                return
            }
            scrollTo(element, to, duration - 10)
        }, 8);
    }

    // Set global loading variable (defined in loading.js) to false after 
    // all DOM and images are loaded and handlers are attached. This 
    // triggers functions in loading.js code to display content
    loading = false;
}
