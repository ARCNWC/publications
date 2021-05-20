function update_timestamp() {
    fetch("/publications/timestamp.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.getElementById("update_timestamp").innerHTML = "Updated: " + data;
    });
}
