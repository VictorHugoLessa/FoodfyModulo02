const recipes = document.querySelectorAll('.recipe');

for (let recipe of recipes) {
    recipe.addEventListener('click', function() {
        const recipeID = recipe.getAttribute('id');
        window.location.href = `/recipe/${recipeID}`
    })
}