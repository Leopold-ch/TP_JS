import OperatorProvider from "../../services/OperatorProvider.js";

export default class Defenders {

    async render () {
        let operators = await OperatorProvider.fetchDefenders(20);
    
        let heading = document.createElement('h2');
        heading.textContent = 'Agents défensifs';
    
        let ul = document.createElement('ul');
        ul.classList.add('operators-list');
    
        operators.forEach(op => {
            let li = document.createElement('li');
            li.classList.add('carte');
    
            let opHeading = document.createElement('h3');
            opHeading.textContent = op.name;
    
            let img = document.createElement('img');
            img.src = `${OperatorProvider.imgLink}${op.img}`;
    
            let description = document.createElement('p');
            description.textContent = op.description ? op.description.slice(0, 100) : '';
    
            let link = document.createElement('a');
            link.href = `#/operators/${op.id}`;
            link.textContent = `Plus d'info sur ${op.name}`;
    
            li.appendChild(opHeading);
            li.appendChild(img);
            li.appendChild(description);
            li.appendChild(link);
    
            ul.appendChild(li);
        });
    
        let container = document.createElement('div');
        container.appendChild(heading);
        container.appendChild(ul);
    
        return container;
    }
}
