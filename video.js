const btn = document.getElementById("btn")
const video = document.querySelector(".example")

function toggle() {
    if (video.paused) {
        video.play()
    } else {
        video.pause()
    }
}

btn.onclick("click", toggle)