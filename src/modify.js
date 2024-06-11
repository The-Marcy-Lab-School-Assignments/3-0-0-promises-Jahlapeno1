const crypto = require('crypto');

const numsToRGBColor = ([color1, color2, color3]) => {
	return `rgb(${color1}, ${color2}, ${color3})`;
};

const getRandomBytes = () =>
	new Promise((resolve, reject) => {
		crypto.randomFill(new Uint8Array(3), (err, buffer) => {
			if (err) return reject(err);
			resolve([...buffer]);
		});
	});

const return4RandomColors = () => {
	const colors = [];

	return getRandomBytes()
		.then((buffer1) => {
			colors.push(numsToRGBColor(buffer1)); 
			return getRandomBytes();
		})
		.then((buffer2) => {
			colors.push(numsToRGBColor(buffer2));
			return getRandomBytes();
		})
		.then((buffer3) => {
			colors.push(numsToRGBColor(buffer3));
			return getRandomBytes();
		})
		.then((buffer4) => {
			colors.push(numsToRGBColor(buffer4));
			return colors;
		})
		.catch((err) => {
			console.error(err);
			return [];
		});
};

module.exports = {
	numsToRGBColor,
	getRandomBytes,
	return4RandomColors,
};