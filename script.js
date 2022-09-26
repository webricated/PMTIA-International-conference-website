function myFunction() {
  // Get the text field
  var copyLink = document.getElementById("btn-2");



  // Select the text field
    // copyLink.select();
    // copyLink.setSelectionRange(0, 99999); // For mobile devices

     // Copy the text inside the text field
    // navigator.clipboard.writeText(copyLink.value);

    // Alert the copied text
  alert("Copy the link from here: " + copyLink.value);
}
