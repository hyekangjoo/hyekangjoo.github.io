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

function teasing() {
    console.log("hi")
    const tease = document.getElementById('tease-holder'); 
    tease.innerHTML = 'Guess what? You are the <img src="http://stuff.mit.edu/cgi/counter/hyekang" alt="several"></img> th person to ignore this warning since 08/30/2024!';
    document.getElementById("tease").style = 'display: none';
}