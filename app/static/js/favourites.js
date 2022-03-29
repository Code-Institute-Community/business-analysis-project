// Add to favourites

// List of buttons with data action add to favourite
let addFavourites = document.querySelectorAll("button[data-action='add-favourite']");

// Bind click event to each buttons in addFavourites
for (var i = 0; i < addFavourites.length; i++) {
  addFavourites[i].addEventListener('click', addToFavourites, false);
}

// Function to add a company to favourites and reload page to location
function addToFavourites(e) {
  let organisationId = this.getAttribute('data-company');
  let url = '/add_to_favourites';
  fetch(url, {
    method: 'post',
    body: `companyId=${organisationId}`,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
}).then((response) => {
    if (response.status == 200){
      location.reload();
    }
}).catch((error) => {
    console.log(error);
});
}
