class Button {
    constructor() {
        const btn = document.getElementById("show");
        btn.addEventListener("click", (e) => {
            this.show();
        });
    }
    show() {
        const content = document.getElementById("content");
        content.innerHTML = "";
        let arr = new Array();
        for(let i = 0; i < 30; i++) {
            let tmp = new Array();
            for(let j = 0; j < 30; j++) {
                if(i === 0 || j === 0 || i === 29 || j === 29) tmp.push(1);
                else tmp.push(0);
            }
            arr.push(tmp);
        }

        for(let i = 0; i < 30; i++) {
            let row = document.createElement("tr");
            for(let j = 0; j < 30; j++) {
                let col = document.createElement("td");
                if(arr[i][j] === 1) col.classList.add("black");
                else col.classList.add("white");
                col.id = "grid" + (String)(30 * i + j);
                row.appendChild(col);
            }
            content.appendChild(row);
        }
    }
}

new Button();