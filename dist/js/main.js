API_KEY = 'krzWUpWlPeSk2SIXd4dbNekMDbyUCCN2';
RANDOM_GIF_URL = 'https://api.giphy.com/v1/gifs/random?api_key=krzWUpWlPeSk2SIXd4dbNekMDbyUCCN2&tag=&rating=G';

const elements = {
	getGifBtn: document.getElementById('ran-gif'),
	viewPort: document.querySelector('.view-port')
};

elements.getGifBtn.addEventListener('click', getRanGif);

async function getRanGif() {
	let response = await axios.get(RANDOM_GIF_URL, {
		headers: { 'content-type': '*' }
	});

	let gifUrl = response.data.data.fixed_height_downsampled_url;

	let gif = `<img src="${gifUrl}">`;

	elements.viewPort.innerHTML = gif;
}
