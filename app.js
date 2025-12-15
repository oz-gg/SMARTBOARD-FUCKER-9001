alert("app.js loaded");

const KEY = "Sdal.325600+";

const output = document.getElementById("output");
const startBtn = document.getElementById("scan");

let qrScanner;

startBtn.addEventListener("click", () => {
	if (!qrScanner) {
		qrScanner = new Html5Qrcode("reader");
	}

	qrScanner.start(
		{ facingMode: "environment" },
		{ fps: 10, qrbox: 250 },
		onScanSuccess,
		onScanError
	);
});

function decrypt(text) {
	let hash = CryptoJS.MD5(text + password + "t%342!!vgj..")
		.toString(CryptoJS.enc.Hex);

	hash = hash.substring(0, 4);

	hash = hash
		.replace(/a/g, "9")
		.replace(/b/g, "8")
		.replace(/c/g, "7")
		.replace(/d/g, "6")
		.replace(/e/g, "5")
		.replace(/f/g, "4");

	return hash;
}

function onScanSuccess(decodedText) {
	qrScanner.stop();
	output.textContent = "something went right";

	let oText = decrypt(decodedText);
	output.textContent = oText;
	alert(oText);
}

function onScanError(_) {
	output.textContent = "something went wrong";
	alert(_);
}

if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("sw.js");
}