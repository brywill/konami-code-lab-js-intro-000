const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index = 0;

  var body = document.getElementByTagName('body');

  body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which);

    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert("Nice!");
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}
init()
