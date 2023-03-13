console.log("Let's get this party started!");

  $(document).ready(() => {
    const $form = $("#search-form");
    const $gifContainer = $("#gif-container");
    const $removeGifsBtn = $("#remove-gifs-btn");
  
    $form.on("submit", (event) => {
      event.preventDefault();
      const searchTerm = $("#search-term").val();
      const API_KEY = "0O8OOf05tH8BDVUwpt72SSOaHTGPEn9O"; // Replace with your GIPHY API key
      const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=1`;
      axios
        .get(url)
        .then((response) => {
          const gifData = response.data.data[0];
          const gifUrl = gifData.images.downsized.url;
          const $gifImg = $("<img>").attr("src", gifUrl);
          $gifContainer.append($gifImg);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  
    $removeGifsBtn.on("click", () => {
      $gifContainer.empty();
    });
  });


// const $gifArea = $("#gif-area");
// const $searchInput = $("#search");

// /* use ajax result to add a gif */

// function addGif(res) {
//   let numResults = res.data.length;
//   if (numResults) {
//     let randomIdx = Math.floor(Math.random() * numResults);
//     let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
//     let $newGif = $("<img>", {
//       src: res.data[randomIdx].images.original.url,
//       class: "w-100"
//     });
//     $newCol.append($newGif);
//     $gifArea.append($newCol);
//   }
// }

// /* handle form submission: clear search box & make ajax call */

// $("form").on("submit", async function(evt) {
//   evt.preventDefault();

//   let searchTerm = $searchInput.val();
//   $searchInput.val("");

//   const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
//     params: {
//       q: searchTerm,
//       api_key: "0O8OOf05tH8BDVUwpt72SSOaHTGPEn9O"
//     }
//   });
//   addGif(response.data);
// });

// /* remove gif */

// $("#remove").on("click", function() {
//   $gifArea.empty();
// });

  
  