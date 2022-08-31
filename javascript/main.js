/* 1. Grab the Input Value */


document.querySelector(".js-go").addEventListener('click',function(){
    
    var input = document.querySelector("input").value;
    searchGiphy(input);
    // pushToDOM(input);
});


document.querySelector(".js-userinput").addEventListener('keyup',function(e){
    
    var input = document.querySelector("input").value;

    // if the key ENTER is pressed...it's executed.
    if(e.which === 13) {
        searchGiphy(input);
        // pushToDOM(input);
    }
  
});





/* 2. Do the data stuff with the API */


function searchGiphy(searchResult) {

    var url = "http://api.giphy.com/v1/gifs/search?api_key=xOBq79KxMb6IMsSZNBkg5C4BQlyTOjSt&q=" + searchResult;

    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open( 'GET', url );
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener('load',function(e){

        var data = e.target.response;
        pushToDOM(data);

    });

}


/* 3. Show me the GIF's */

function pushToDOM(input) {

    var response = JSON.parse(input);

    var imageUrls = response.data;
    var container = document.querySelector(".js-container");
  
    imageUrls.forEach(function(image){
  
      var src = image.images.fixed_height.url;
      console.log(src);
      container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
  
    }); 
}




