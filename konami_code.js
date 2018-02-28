const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  document.addEventListener('keydown', function(e) {
    console.log(e.detail, e.which, e.location)
  })


}
init()
