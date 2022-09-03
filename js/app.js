
////////////////////Add Categories to the Website////////////

const loadCatagories = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url)
    const data = await res.json();
    displayCategories(data.data.news_category);
}
loadCatagories()

////show categories and add onclick/////
const displayCategories = (Categories) => {
    const categoriesContainers = document.getElementById('categories-container')
    Categories.forEach(Category => {
        const CategoryDiv = document.createElement('nav')
        CategoryDiv.classList.add('categories')
        CategoryDiv.innerHTML = `
        <a onclick="ShowNews('${Category.category_id}')" class="navbar-brand text-info" href="#">${Category.category_name}</a>
        `;
        categoriesContainers.appendChild(CategoryDiv);
    });
}

// //////////load dynamic api for category///////
const ShowNews = async (id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    const res = await fetch(url)
    const data = await res.json();
    ShowNewsItem(data.data);
}


///////Show Newss////////////

const ShowNewsItem = (Items) => {
    const itemFound = document.getElementById('item-found')
    const Found = Items.length;
    itemFound.innerText = `${Found <= 0 ? "No Data Found" : Found + " Items Found"}`

    ///// News items in main section////
    const newsItems = document.getElementById("news-items");
    newsItems.innerHTML = "";
    Items.forEach((item) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card mb-3" style="max-width:fit-content;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${item.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${item.title}</h5>
                            <p class="card-text">${item.details.substring(0, 200)}...</p>


                                <div class="d-md-flex text-center align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                    <div class="me-2">
                        <img class="rounded-circle" style="height: 50px; width: 50px;" src="${item.author.img
            }" alt="">
                    </div>
                    <div>
                        <p>${item.author.name === null || item.author.name === ""
                ? `Information not found`
                : item.author.name
            }</p>
                        <p>${item.author.published_date}</p>
                    </div>
                </div>
                <div><i class="fa-regular fa-eye me-2"></i>${item.total_view === null ? ` Not found` : item.total_view
            }</div>
                <div>
                    <i class="fa-regular fa-star-half-stroke"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <button onclick= "showDetail('${item._id
            }')" class="btn btn-info text-white" data-bs-toggle="modal"
                  data-bs-target="#newsModal">See More</button>    
                        </div>
                    </div>
                </div>
            </div>

            

        `;
        newsItems.appendChild(div);
    });



}




