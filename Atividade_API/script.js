const BASE_URL = 'https://thatcopy.pw/catapi/rest/'; // constante para facilitar uso da url da api


//constante para fazer o get na API
const getCats = async () => {
	try { //tenta executar 
		const data = await fetch(BASE_URL); // armazena dados obtidos da api e salva em DATA
		const json = await data.json(); // transforma os dados de DATA no tipo JSON
		return json.webpurl; // Pega a imagem atráves do webpurl presente no JSON
	} catch (e) { // se der erro 
		console.log(e.message); //traz erro no log
	}
};

const loadImg = async () => { // constante para tratar imagem recebida
	const img = document.getElementById('cat');
	img.src = await getCats();
};

loadImg();

const btn = document.getElementById('change-cat');
btn.addEventListener('click', loadImg);