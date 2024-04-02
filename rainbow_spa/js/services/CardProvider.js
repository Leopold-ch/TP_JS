import OperatorProvider from "./OperatorProvider.js";

export default class CardProvider {

    static getCardList = async (operators) => {

        let ul = document.createElement('ul');
        ul.classList.add('operators-list');

        operators.forEach(op => {
            let li = document.createElement('li');
            li.classList.add('carte');
    
            let opHeading = document.createElement('h3');
            opHeading.textContent = op.name;
            opHeading.id = op.id;
    
            let img = document.createElement('img');
            img.src = `${OperatorProvider.imgLink}${op.picture}`;
            img.setAttribute("loading", "lazy")
    
            let description = document.createElement('p');
            description.textContent = (op.description ? op.description.slice(0, 100) : '') + '...';
    
            let link = document.createElement('a');
            link.href = `#/operators/${op.id}`;
            link.textContent = `Plus d'info sur ${op.name}`;
    
            li.appendChild(opHeading);
            li.appendChild(img);
            li.appendChild(description);
            li.appendChild(link);
    
            ul.appendChild(li);
        });

        return ul;
    }

}
