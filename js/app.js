
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
    console.log(data.data);
}


///////Show Newss////////////

const ShowNewsItem = (Items) => {
    const itemFound = document.getElementById('item-found')
    const Found = Items.length;
    itemFound.innerText = `${Found <= 0 ? "NO DATA FOUND" : Found + "Items FOund"}`
}





