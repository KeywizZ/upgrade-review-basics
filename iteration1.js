// Mix for e includes

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let category = []

for (const movie of movies) {
    for(let i = 0; i<movies.length; i++){
/* 
        console.log(movie.categories[i]) // ←--- Depuracion
 */
        if ((!category.includes(movie.categories[i])) && movie.categories[i] != undefined ){
            category.push(movie.categories[i])
        }
    }
}

console.log(category)