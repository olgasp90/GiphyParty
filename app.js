console.log("Let's get this party started!");

const searchBtn = document.querySelector('#searchGiphy');
const removeBtn = document.querySelector('.remove')
const gifContainer = document.querySelector('#giph-area');

//add event listener to the Search button
searchBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    try{
        const url = 'https://api.giphy.com/v1/gifs/search';
        const  api_key= '0ZExygcBXdfj6C7nnUokUSdjF1GZ0M8G'
        const searchTerm = document.querySelector('#searchTerm').value;
        const response = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${api_key}`)

        let dataLength = response.data.data.length;
        let randomData = Math.floor(Math.random()*dataLength);
        let imageSource = response.data.data[randomData].images.fixed_height.url;
        addImage(imageSource);
    } catch (error){
        alert(error.message)
    };
    searchTerm.value = '';
})

function addImage(url){
    const giph = document.createElement('img');
    giph.src = url;
    gifContainer.append(giph);
}

//add event Listener for the remove button
removeBtn.addEventListener('click', removeImages)

function removeImages(e){
    e.preventDefault();
    gifContainer.remove();
}
