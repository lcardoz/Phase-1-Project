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
            
                imgNasa.src = dataObj.collection.items[0].links[0].href;
                //console.log(dataObj.collection.items[0].links[0].href)
                searchContainer.appendChild(imgContainer);
                imgContainer.appendChild(imgNasa);
                docBody.appendChild(searchContainer);

                console.log (dataObj.collection.items)
                const imgDataArray = dataObj.collection.items
                let newImgDataArray = imgDataArray.map((imgData) => 
                    dataObj.collection.items[0].links[0].href
                )
                // const newArray = dataObj.collection.items.map 
                // const imgArray = [];
                // let itemIndex = 0;
                // imgArray.forEach(photo =>{
                // let photo = dataObj.collection.items[Number(itemIndex)].links[0].href
                // imgArray.push(photo);
                // itemIndex++;
                // console.log(imgArray)
})

                // imgNasa.addEventListener('click', () => {
                //     dataObj.collection.items.forEach (item => {
                //         imgNasa.src = item.links[0].href;
                //         console.log(item.links[0].href);
                // })})
            
        })
    })


