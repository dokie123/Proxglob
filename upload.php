<?php
$targetDirectory = "uploads/"; // Directory where the uploaded files will be stored

// Check if the file was uploaded without any errors
if (isset($_FILES["file"]) && $_FILES["file"]["error"] === 0) {
    $file = $_FILES["file"]["name"];
    $targetPath = $targetDirectory . $file;

    // Move the uploaded file to the specified directory
    if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetPath)) {
        echo "File uploaded successfully.";

        // Redirect to the files page or perform any additional operations
        // header("Location: files.php");
        // exit();
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
} else {
    echo "Error: No file uploaded or an error occurred during upload.";
}
?>
