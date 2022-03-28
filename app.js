const result = [];

const draw = function () {

    if (result.length === 6) {
        return
    };

    const drawResult = Math.floor(Math.random() * 49 + 1);

    for (let i = 0; i < result.length; i++) {
        if (drawResult === result[i]) {
            return draw()
        }
    }

    const div = document.createElement("div");
    div.textContent = drawResult;
    result.push(drawResult)
    document.body.appendChild(div);

}

const button = document.querySelector("button");


button.addEventListener("click", draw);