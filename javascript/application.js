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

$(#carouselExampleIndicators).click(function(){  
    $('html, body').animate({  
        scrollTop:$(jumbotron).offset().top  
    }, 'slow');  
    return false;  
});  



