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

$('.modal-adult').modal({
    backdrop: 'static',
    keyboard: false
})

$('.modal-trailer').on('hidden.bs.modal', function () {
    var $iframe = $(this).find('iframe');
    $iframe.attr("src", $iframe.attr("src"));
})

function showFilms() {
    var moreFilms = document.getElementById("show-films-div");
    togglePosters(moreFilms);

    var moreToLess = document.getElementById("moreFilmsButton");
    console.log(moreToLess.innerHTML)
    toggleButtonText(moreToLess);
}

function showSeries() {
    var moreFilms = document.getElementById("show-series-div");
    togglePosters(moreFilms);

    var moreToLess = document.getElementById("moreSeriesButton");
    console.log(moreToLess.innerHTML)
    toggleButtonText(moreToLess);
}

function togglePosters(element) {
    if (element.style.display === "none" ) {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

function toggleButtonText(button) {
    if (button.innerHTML == "More films"){ 
        button.innerHTML = "Less films";
    } else {
        button.innerHTML = "More films";
    }
}

$('.modal-adult').modal({
    backdrop: 'static',
    keyboard: false
}) 

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



