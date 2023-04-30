function makeEveryThirdWordBold(line) {
  var words = line.split(' ');
  for (var i = 0; i < words.length; i += 5) {
    words[i] = '<b>' + words[i] + '</b>';
  }
  return words.join(' ');
}

function modifyLines() {
  var lines = document.getElementsByTagName('p');
  for (var i = 0; i < lines.length; i++) {
    lines[i].innerHTML = makeEveryThirdWordBold(lines[i].textContent);
  }
}

modifyLines();
