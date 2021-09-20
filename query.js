function process(dataString) {
  var lines = dataString
    .split(/\n/) // Convert to one string per line
    .slice(1, -1); // Discard last line
  console.log("lines", lines);
  return JSON.stringify(lines, null, 2);
}

function test() {
  var file = fileInput.files[0];
  var textType = /text.*/;
  var csvType = "text/csv";
  if (file.type.match(csvType)) {
    var reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("csvData").innerHTML = process(reader.result);
    };

    reader.readAsText(file);
  } else {
    fileDisplayArea.innerText = "File not supported!";
  }
}
