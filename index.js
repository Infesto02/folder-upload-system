var selDiv = "";

	document.addEventListener("DOMContentLoaded", init, false);

	function init() {
		document.querySelector('#folder').addEventListener('change', handleFileSelect, false);
		selDiv = document.querySelector("#selectedFiles");
	}
  const formatFileSize = function (bytes) {
    const sufixes = ['B', 'kB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sufixes[i]}`;
};

	function handleFileSelect(e) {

		if(!e.target.files) return;

		selDiv.innerHTML = "";

		var files = e.target.files;
    selDiv.innerHTML +="<h1> File Name ----------------- Size</h1>"
		for(var i=0; i<files.length; i++) {
			var f = files[i];
      var size = files[i].size;

			selDiv.innerHTML += f.name +"-----------------";
      selDiv.innerHTML += formatFileSize(f.size) +"<br/>";


		}

	}
