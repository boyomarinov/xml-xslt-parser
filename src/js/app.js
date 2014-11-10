window.onload = function() {
	var xmlFilePathInput = document.getElementById('xml-filepath'),
		xslFilePathInput = document.getElementById('xsl-filepath'),
		xmlPreview = document.getElementById('xml-preview'),
		xslPreview = document.getElementById('xsl-preview'),
		generateButton = document.getElementById('generate-html'),
		exportButton = document.getElementById('export-html'),
		loadPreview = document.getElementById('load-preview'),
		resultContainer = document.getElementById('result-container'),
		htmlFilename = document.getElementById('html-filename');

		exported = '',
		xmlDefaultFilePath = 'src/data/team.xml',
		xslDefaultFilePath = 'src/data/team.xsl',

	init();

	function init() {
		attachEventHandlers();
		setDefaultFilePaths();
	}

    function attachEventHandlers() {
      	loadPreview.onclick = function () {
      		loadFilePreview();
      	};

      	generateButton.onclick = function () {
      		new Transformation()
      			.setXml(xmlFilePathInput.value)
      			.setXslt(xslFilePathInput.value)
      			.transform('result-container');
      		exported = resultContainer.innerHTML;
      	};

      	exportButton.onclick = function () {
      		writeFile();
      	}
    }

    function setDefaultFilePaths () {
    	xmlFilePathInput.value = xmlDefaultFilePath;
    	xslFilePathInput.value = xslDefaultFilePath;
    }

    function loadFilePreview() {
    	if(xmlFilePathInput.value !== undefined) {
    		xmlPreview.value = readFile(xmlFilePathInput.value);
    	}

    	if(xslFilePathInput.value !== undefined) {
    		xslPreview.value = readFile(xslFilePathInput.value);
    	}
    }

    function readFile(filePath) {
		var charset = "utf-8";
		var req = new XMLHttpRequest();
		req.open("GET", filePath, false);
		if (req.overrideMimeType) {
			req.overrideMimeType("text/plain; charset=" + charset);
		}
		
		req.send(null);

		return req.responseText;
	}

	function writeFile() {
		var Blob = window.Blob;
		saveAs(new Blob([exported], { type: "text/plain"}),
				(htmlFilename.value || htmlFilename.placeholder) + ".html");
	}
}