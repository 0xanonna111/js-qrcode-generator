let qr;

function generateQR() {
  const text = document.getElementById("text").value.trim();
  const qrBox = document.getElementById("qrcode");

  if (!text) {
    qrBox.innerHTML = "";
    return;
  }

  qrBox.innerHTML = "";

  qr = new QRCode(qrBox, {
    text: text,
    width: 150,
    height: 150
  });
}
