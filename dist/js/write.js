function kirim() {
    var name = document.getElementById('name').value;
    console.log(name);
    var email = document.getElementById('email').value;
    console.log(email);
    var message = document.getElementById('message').value;
    console.log(message);

    var data = [];
    data.push(name); //[0];
    data.push(email); //[1];
    data.push(message); //[2];

    var dataString = JSON.stringify(data);

    var file = new Blob([dataString], { type: "text" });
    var anchor = document.createElement("a");
    anchor.href = URL.createObjectURL(file);
    anchor.download = "pesan.txt";
    anchor.click();

    alert("Pesan Anda telah terkirim\nTerima Kasih");
}