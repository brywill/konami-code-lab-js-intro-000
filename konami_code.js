const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  const body = document.querySelector('body');
  let index = 0;

  body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which);
    if (key === code[index]) {
      index++;
      if (index === code.length) {
        window.alert("Nice!");
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}
init()
