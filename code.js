document.getElementsByClassName("change-img")[0].addEventListener("change", function () {

    const starImg = document.getElementById('file').files[0];
    if (starImg) {
        const reader = new FileReader();
        reader.addEventListener('load', function () {
            document.getElementsByClassName('img-staar')[0].style.backgroundImage = "url('" + this.result + "')";
            document.getElementsByClassName('play')[0].src = 'imges/play-3-256.png';

        });
        reader.readAsDataURL(starImg);
    }
})

//save img 
// by @aelhajji
function SaveImg() {
    const input = document.getElementsByClassName('star-card')[0];
    html2canvas(input)
        .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            downloadURI(imgData, Date.now() + "Star.png");
        });
}
function downloadURI(uri, name) {
    var link = document.createElement("a");

    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    location.reload();
}
