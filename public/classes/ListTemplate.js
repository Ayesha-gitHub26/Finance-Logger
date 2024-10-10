export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.appendChild(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.prepend(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else if (pos == 'end' && h4.innerText === 'invoice') {
            li.classList.add('li-invoice');
            this.container.append(li);
        }
        else {
            li.classList.add('li-payment');
            this.container.append(li);
        }
    }
}
