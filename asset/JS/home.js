
//coloring to different categories
var btn = document.getElementsByClassName("showCategory");

for (let i of btn) {
    if (i.innerText == "cleaning") {
        i.style.backgroundColor = "#566573";
    }
    else if(i.innerText == "personal"){
        i.style.backgroundColor = "#73C6B6";

    }
    else if(i.innerText == "school"){
        i.style.backgroundColor = "#F1C40F";

    }
    else if(i.innerText == "work"){
        i.style.backgroundColor = "#85C1E9";

    }
    else if(i.innerText == "other"){
        i.style.backgroundColor = "#AAB7B8";

    }
}