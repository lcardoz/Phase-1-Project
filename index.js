// console.log('hello')
const docBody = document.querySelector('body');
const searchContainer = document.querySelector('form');
const imgContainer = document.createElement('div');
const imgNasa = document.createElement('img');

document.addEventListener('DOMContentLoaded', () => {

    searchContainer.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchInput = e.target.search.value;
        //console.log(searchInput)

        fetch(`https://images-api.nasa.gov/search?q=${searchInput}`)
            .then(response => response.json())
            .then(dataObj => { 
                //console.log(dataObj.collection)
            
                imgNasa.src = dataObj.collection.items[2].links[0].href
                //console.log(dataObj.collection.items[0].links[0].href)
                searchContainer.appendChild(imgContainer);
                imgContainer.appendChild(imgNasa);
                docBody.appendChild(searchContainer);
            
        })
    })
});

