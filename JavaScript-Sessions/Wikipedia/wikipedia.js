let searchInputEl = document.getElementById('searchInput');
let spinnerEl = document.getElementById('spinner');
let searchResultsEL = document.getElementById('searchResults');

function createAndAppendSearchResult(result){
    let { link, title, description} = result;
   
    let resultItemEl = document.createElement('div');
    resultItemEl.classList.add("result-item");

    let titleEl = document.createElement('a');
    titleEl.textContent = title;
    titleEl.href = link;
    titleEl.target = '_blank';
    titleEl.classList.add('result-title');
    resultItemEl.appendChild(titleEl);

    let breakEl_1 = document.createElement('br');
    resultItemEl.appendChild(breakEl_1);

    let urlEl = document.createElement('a');
    urlEl.textContent = link;
    urlEl.href = link;
    urlEl.target = "_blank";
    urlEl.classList.add("result-url");
    resultItemEl.appendChild(urlEl);

    let breakEl_2 = document.createElement('br');
    resultItemEl.appendChild(breakEl_2);

    let descriptionEl = document.createElement('p');
    descriptionEl.textContent = description;
    descriptionEl.classList.add("result-description");
    resultItemEl.appendChild(descriptionEl);


    
    searchResultsEL.appendChild(resultItemEl);


}


function displayResults(search_results){
    spinnerEl.classList.toggle("d-none");

    for (let result of search_results){
        createAndAppendSearchResult(result);
    };

};



function searchWikipedia(event){
    if (event.key === "Enter"){
        
        spinnerEl.classList.toggle("d-none");
        searchResultsEL.textContent = "";

        let searchInput = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;

        let options = {
            method : "GET"
        };

        fetch(url, options)
            .then(function(response){
                return response.json();
            })
            .then(function(jsonData){
                let { search_results } = jsonData;
                displayResults(search_results);
            });

    }


}




searchInputEl.addEventListener('keydown', searchWikipedia);