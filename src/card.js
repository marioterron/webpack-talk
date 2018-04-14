import './card.css';

const createAndAppendCard = ({ img, name, position }) => {
	const cardElement = document.createElement('div');
	const cardImg = `<img class="card-image" src="${img}"></img>`;
	const cardBody = `
	<div class="card-body">
		<p>${name}</p>
		<p>${position}</p>
	</div>`;

	cardElement.innerHTML = `
    <div class="card">
      ${cardImg}
      ${cardBody}
    </div>
	`;

	document.body.appendChild(cardElement);
};

export default createAndAppendCard;
