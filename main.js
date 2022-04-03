function selectPub() {
    let pubtype_select = document.getElementById("pubtype-select").value;
    let pubtype_choice = document.getElementsByClassName(pubtype_select);
    let pubtype_all = document.getElementsByClassName("pubtype-all");

    for (let each of pubtype_all) {
        each.style.display = 'none';
    }

    for (let each of pubtype_choice) {
        each.style.display = 'block';
    }
}