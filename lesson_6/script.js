window.onload = function () {
    var a = document.querySelector(".max");
    var c = document.querySelectorAll(".min img");
    for (var item of c) {
        item.onclick = function () {
            a.innerHTML = "";
            var imgMax = document.createElement("img");
            imgMax.src = this.src.replace("min", "max");
            imgMax.onerror = function () {
                alert("Not available now");

            }
            document.querySelector(".max").append(imgMax)
        }

    }
}
