const resultsContainer = document.querySelector(".shop-wrapper");

const urlAll = "https://uke.cdb.myftpupload.com/wp-json/wp/v2/posts";
/*${results[i].rank}*/
async function callApi() {
    const response = await fetch(urlAll);
    const results = await response.json();
    resultsContainer.innerHTML = " ";
    for (let i = 0; i < 4; i++) {
        console.log(results[i].id);
        resultsContainer.innerHTML += `
                <div class="shop-card">
                    <img
                        src="${results[i].x_featured_media_original}"
                        alt="Shop image"
                        class="shop-card-img"
                    />
                    <p class="shop-card-title">${results[i].acf.h1Title}</p>
                    <p class="shop-card-price">49.99$</p>
            </div>`;
    }
}

callApi().then();