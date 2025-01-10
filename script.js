showData = (data) => {
    const ul = document.querySelector("ul");
    data.forEach((element, index, judulAnime) => {
        judulAnime[index] = element.title;
        const li = document.createElement("li");
        li.textContent = judulAnime[index];
        ul.appendChild(li);
        li.onmouseenter = () => {
            li.style.color = "blue";
            li.style.cursor = "pointer";
            li.style.textDecoration = "underline";
        }
        li.onmouseleave = () => {
            li.style.color = "black";
            li.style.cursor = "pointer";
            li.style.textDecoration = "none";
        }
    });
}

async function getData(url) {
    let data = await fetch(url);
    let semiResult = await data.json();
    return semiResult;
}

async function run() {
    let data = getData("https://api.jikan.moe/v4/anime?limit=20&score=8");
    let finalResult = data.then(response => {
        showData(response.data);
    })
}

run();
