
//global variables

//global functions
function nevigate(show, hide) {
    //this function suppose to hide and show pages.
    //the function gets an id of the page to show and the id of the page to hide.
    document.getElementById(show).style="display:block";
    document.getElementById(hide).style="display:none";

    if(show === "login_page") 
        document.getElementById("main").style="display:none";
    else
        document.getElementById("main").style="display:block";
}

/*Login Page Functions */
function focusInChangeColor(e){
    document.getElementById(e.id+ "_div").classList.add("after-color")
}

function focusOutChangeColor(e){
    document.getElementById(e.id + "_div").classList.remove("after-color")
}

function submitLogin(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    //insert fetch function- call api login function
    //after login is done- call nevigate("home_page","login_page")
    nevigate("home_page","login_page");
}