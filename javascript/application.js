function okCookie() {
    document.getElementById('cookieID').style.display = "none";
}

var password = document.getElementById("password-register");
var confirm_password = document.getElementById("confirm-password-register");

// function validatePassword(){
//   if(password.innerHTML != confirm_password.innerHTML) {
//     confirm_password.setCustomValidity("Passwords Don't Match");
//   } else {
//     confirm_password.setCustomValidity('');
//   }
// }
// password.onchange = validatePassword;
// confirm_password.onkeyup = validatePassword;

// $('#password, #confirm_password').on('keyup', function () {
//     if ($('#password').val() == $('#confirm_password').val()) {
//       $('#message').html('Matching').css('color', 'green');
//     } else 
//       $('#message').html('Not Matching').css('color', 'red');
//   });

function check(input) {
    if (input.value != document.getElementById('password').value) {
        input.setCustomValidity('Password Must be Matching.');
    } else {
        // input is valid -- reset the error message
        input.setCustomValidity('');
    }
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

function genderChoiceSeries(className) {
    var $feature_movies = $('.featured-series')
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

//pop up contact-form
function contactformFunction() {
    var test1 = 'First Name: ' + document.getElementById("firstname").value;
    var test2 = 'Last Name: ' + document.getElementById("lastname").value;
    var test3 = 'Email: ' + document.getElementById("email").value;
    var test4 = 'Subject: ' + document.getElementById("subject").value;
    var test5 = 'Message: ' + document.getElementById("message").value;
    alert(test1 + '\n' + test2 + '\n' + test3 + '\n' + test4 + '\n' + test5);
    }

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
