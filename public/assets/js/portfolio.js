//=========================================================
// LOADING PAGE CODE
//=========================================================

// Initialize global loading variable
let loading = true;

// Check to see if DOM/images are loaded
function whenReady(callback) {
    let intervalID = window.setInterval(checkReady, 100);

    function checkReady(){
        if (!loading){
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
};

// Generic function to switch css display values from loading screen to actual content
function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
};

// Call whenReady function and supply callback function
whenReady(function(){
    show('body', true);
    show('loading', false);
});

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
            event.preventDefault();
            let hash = this.hash;
            scrollTo(document.documentElement, $(hash).offset().top - 100, 600)
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
        let perTick = difference / duration * 15;

        setTimeout(function(){
            element.scrollTop = element.scrollTop + perTick;
            if(element.scrollTop === to){
                return
            }
            scrollTo(element, to, duration - 10)
        }, 8);
    }

    // Set global loading variable to false after all handlers attached
    // this triggers functions in LOADING section code to display content
    loading = false;
}
