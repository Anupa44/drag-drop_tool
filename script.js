const dragArea = document.getElementById("dragArea");
const fileHeader = document.getElementById("file-header");
const fileInput = document.getElementById("file-input");
let file;

function browseFile() {
    fileInput.click();
}

function handleFile() {
    file = fileInput.files[0];
    dragArea.classList.add("active");
    showFile();
}

function showFile() {
    let fileType = file.type;
    let validExtensions = ["image/jpeg", "image/jpg", "image/png", "application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

    if (validExtensions.includes(fileType)) {
        fileHeader.textContent = file.name;
        updateButtonToCancel();
    } else {
        alert("Invalid file format! Please upload an image, PDF, or Word file.");
        dragArea.classList.remove("active");
        resetUI();
    }
}

function updateButtonToCancel() {
    const browseButton = dragArea.querySelector("button");
    browseButton.textContent = "Cancel";
    browseButton.onclick = cancelFile;
}

function resetUI() {
    fileInput.value = ""; // Reset file input
    fileHeader.textContent = "Drag & Drop to Upload File";
    const browseButton = dragArea.querySelector("button");
    browseButton.textContent = "Browse File";
    browseButton.onclick = browseFile;
}

function cancelFile() {
    resetUI();
    dragArea.classList.remove("active");
}
