// API datat from Edamam.com
const APP_ID = "9ab815fd";
const API_KEY = "13b042fc8421195fa7db8ae62c6d0091";
const baseUrl = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}`;
var previouslySearchedData = {};


// Event listener for button press on mouse click
$(document).ready(function () {
    document.querySelector("#btn-id").addEventListener("click", function (event) {
        console.log("button pressed");
        sendApiRequest();
    });
});

// Event listener for button press on "Enter" press
var input = document.getElementById("search");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btn-id").click();
    }
});


// API request
async function sendApiRequest() {
    var query = $("#search").val();

    console.log(query);

    let url = baseUrl + `&q=${query}`;

    $.ajax({
        url: url,
        method: "GET",
        dataType: 'json',
        success: function (data, textStatus, jqXHR) {
            updateHTML(data);
            console.log(data);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
            alert("Couldn't fetch any data");
        },
    })
}


//Display results when button is pressed
function updateHTML(data) {
    previouslySearchedData[$("#search").val()] = data;
    let recipeResultsElement = document.querySelector("#recipe-results");
    recipeResultsElement.innerHTML = '';
    let resultsHTML = '';

    data.hits.forEach(function (hit) {
        resultsHTML = resultsHTML + `
    <div class="col-6 col-lg-3 col-md-4 mb-3 pt-3" data-aos="fade-up">
        <div class="card h-100">
            <img src="${hit.recipe.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${hit.recipe.label}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${hit.recipe.healthLabels[length]}<br>${hit.recipe.calories} kCal.</h6>
                    <p class="card-text">${hit.recipe.source}</p>
                    <a href="${hit.recipe.url}" class="btn btn-default" target="_blank">Let's go!</a>
                </div>
        </div>
    </div>
    `
    });

    document.querySelector("#recipe-results").innerHTML = resultsHTML;
}