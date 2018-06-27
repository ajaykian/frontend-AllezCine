function okCookie() {
    document.getElementById('cookieID').style.display = "none";
}

function genderChoice(className) {
    var $feature_movies = $('.featured-movies')
    if(className == 'all'){
        $feature_movies.find('.card').show();
    } else {
        $feature_movies.find('.card').hide();
        $feature_movies.find(className).show();
    }
}

function showFilms() {
    var moreFilms = document.getElementById("show-films-div");
    togglePosters(moreFilms);

    var moreToLess = document.getElementById("moreFilmsButton");
    console.log(moreToLess.innerHTML)
    toggleButtonText(moreToLess, "films");
}

function showSeries() {
    var moreFilms = document.getElementById("show-series-div");
    togglePosters(moreFilms);

    var moreToLess = document.getElementById("moreSeriesButton");
    console.log(moreToLess.innerHTML)
    toggleButtonText(moreToLess, "series");
}

function togglePosters(element) {
    if (element.style.display === "none" ) {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

function toggleButtonText(button, label) {
    if (button.innerHTML == "More " + label){ 
        button.innerHTML = "Less " + label;
    } else {
        button.innerHTML = "More " + label;
    }
}

// $('.modal-adult').modal({
//     backdrop: 'static',
//     keyboard: false
// }) 

$('.modal-trailer').on('hidden.bs.modal', function () {
    var $iframe = $(this).find('iframe');
    $iframe.attr("src", $iframe.attr("src"));
})

$("btn-submit").click(function() {
var firstName = document.getElementById("firstName").value;
var lastName = document.getElementById("lastName").value;
var email = document.getElementById("email").value;
var subject = document.getElementById("subject").value;

alert("First name : "+firstName+ "\nLast name : "+lastName + "\nEmail : " + email + "\nSubject : " + subject);

});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("backToTheTopButton").style.display = "block";
    } else {
        document.getElementById("backToTheTopButton").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 
