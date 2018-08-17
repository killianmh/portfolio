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