export default class ClassListPeeker extends HTMLElement {
    connectedCallback() {
        let peeker = document.createElement('div');
        peeker.style.display = "block";
        peeker.style.width = "200px";
        peeker.style.height = "20px";
        peeker.style.borderRadius = "10px";
        peeker.style.outline = "1px solid black";
        peeker.style.fontFamily = "monospace";
        peeker.style.fontSize = "1.15rem"
        peeker.style.padding = "5px";
        peeker.style.cursor = "pointer";
        peeker.style.backgroundColor = "burlywood";

        let values = document.createElement('div');
        values.style.fontFamily = "monospace"
        peeker.appendChild(values);
        let WeekDays = document.createElement('div');
        WeekDays.style.display = 'none';
        WeekDays.style.cursor = "pointer";
        let weeks = this.attributes.weeks.value.split(" ");
            for (let i = 0; i < weeks.length; i++) {
                let peekWeak = document.createElement('p');
                peekWeak.classList = "week"
                peekWeak.innerText = weeks[i];
                peekWeak.style.textAlign = "center"
                peekWeak.style.display = "flex"
                peekWeak.style.justifyContent = "center"
                peekWeak.style.margin = "30px"
                peekWeak.style.borderRadius = "10px"
                peekWeak.style.transition = ".3s"
                peekWeak.onclick = function (e) {
                    values.innerHTML = this.innerHTML;
                    WeekDays.style.display = 'none';
                    this.value = this.innerText;
                    e.stopPropagation();
                }
                WeekDays.appendChild(peekWeak);
            }
    
            peeker.appendChild(WeekDays);
            peeker.onclick = function () {
            WeekDays.style.display = 'block';
        }
        this.appendChild(peeker);
    }
}

// customElements.define("ag-list", ClassListPeeker);

