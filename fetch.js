"use strict";

// const getBtn = document.getElementById("getDog");

// const onImgLiked = () => {};

// const getDogImages = () => {
// 	getBtn.textContent = "Loading...";
// 	fetch("https://dog.ceo/api/breeds/image/random")
// 		.then((res) => res.json())
// 		.then((data) => {
// 			const imgBox = document.getElementById("image-box");
// 			let dogImage = document.createElement("img");
// 			dogImage.src = data.message;
// 			dogImage.style.width = "200px";
// 			dogImage.style.height = "150px";
// 			dogImage.style.padding = "10px";

// 			dogImage.onclick = onImgLiked;
// 			imgBox.append(dogImage);
// 			getBtn.textContent = "Get image...";
// 		});
// };

//CLASSWORK 19.12.2023 FETCH

const getBtn = document.getElementById("getDog");
const onImgLiked = () => {};

const getDogImages = async () => {
	try {
		getBtn.textContent = "Loading...";
		const response = await fetch("https://dog.ceo/api/breeds/image/random");
		const data = await response.json();

		const imgBox = document.getElementById("image-box");

		let dogImage = document.createElement("img");
		dogImage.src = data.message;
		dogImage.style.width = "200px";
		dogImage.style.height = "150px";
		dogImage.style.padding = "10px";

		dogImage.onclick = onImgLiked;
		imgBox.append(dogImage);
		getBtn.textContent = "Get image...";
	} catch (err) {
		console.log("error:", err);
	}
};
