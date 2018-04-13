let playPresentationBtn = document.querySelector('.landing__presentation-button')
let presentationPreview = document.querySelector('.landing__presentation-preview')
let presentationVideoContainer = document.querySelector('.landing__presentation-video-container')
let presentationVideo = presentationVideoContainer.querySelector('.js-presentation-video')

playPresentationBtn.addEventListener('click', playPresentationHandler)

function playPresentationHandler() {
    presentationPreview.classList.add('isHidden')
    presentationVideoContainer.classList.remove('isHidden')
    presentationVideo.play()
}

presentationVideo.addEventListener('mouseover', overPresentationHandler)
function overPresentationHandler() {
    presentationVideo.setAttribute('controls', true)
}

presentationVideo.addEventListener('mouseout', outPresentationHandler)
function outPresentationHandler() {
    presentationVideo.removeAttribute('controls', true)
}
