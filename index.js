// console.log('hello')
const docBody = document.querySelector('body');
const searchContainer = document.querySelector('form');
const imgContainer = document.createElement('div');
const imgNasa = document.createElement('img');
const imgTitle = document.createElement('h1');
const imgDescription = document.createElement('p');

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
                //console.log(dataObj.collection.items[0].links[0].href);
                imgTitle.textContent = dataObj.collection.items[0].data[0].title;
                imgDescription.textContent = dataObj.collection.items[0].data[0].description;
                imgContainer.appendChild(imgNasa);
                docBody.append(searchContainer, imgTitle, imgContainer, imgDescription);

                const imgDataArray = dataObj.collection.items
                console.log ( "imgDataArray: " , imgDataArray)
                
                const newImgDataArray = imgDataArray.map( (dataObj) => { 
                    return dataObj.links } )
                    console.log( "newImgDataArray: " , newImgDataArray )

                const filteredArray = newImgDataArray.filter(element => {
                    return element !== undefined;})
                    console.log( "filteredArray: " , filteredArray )

                const finalImageArray = filteredArray.map(element => {
                    return element[0].href });
                    console.log( "finalImageArray: ", finalImageArray )
                

                

                // let newImgDataArray = [];
                // for (let i = 0; i < dataObj.collection.items.length; i++) {
                //     newImgDataArray.push(dataObj.collection.items[i].links[0].href)
                // }
                // console.log(newImgDataArray)
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


