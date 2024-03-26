import Utils from '../../services/Utils.js'
import OperatorProvider from "../../services/OperatorProvider.js";

export default class Operator {

    async render () {
        let request = Utils.parseRequestURL();
        let op = await OperatorProvider.getOperator(request.id);
    
        let section = document.createElement('section');
        section.classList.add('agent');
    
        let imageDiv = document.createElement('div');
        imageDiv.classList.add('image');
    
        let img = document.createElement('img');
        img.src = `${OperatorProvider.imgLink}${op.img}`;
    
        let infoDiv = document.createElement('div');
        infoDiv.classList.add('info');
    
        let h2 = document.createElement('h2');
        h2.innerHTML = `Agent <b>${op.name}</b>`;
    
        let healthIndicator = document.createElement('div');
        healthIndicator.classList.add('health-indicator');
    
        let h3 = document.createElement('h3');
        h3.textContent = `Pays d'origine : ${op.country}`;
    
        let p = document.createElement('p');
        p.id = 'bio';
        p.textContent = `Description de l'agent : ${op.description}`;

        imageDiv.appendChild(img);
        infoDiv.appendChild(h2);
        infoDiv.appendChild(healthIndicator);
        infoDiv.appendChild(h3);
        infoDiv.appendChild(p);
        section.appendChild(imageDiv);
        section.appendChild(infoDiv);
    

        for (let i = 1; i <= 3; i++) {
            let circle = document.createElement('div');
            circle.classList.add('health-circle');

            if (i <= op.health) {
                circle.classList.add('full');
            } else {
                circle.classList.add('empty');
            }

            healthIndicator.appendChild(circle);
        }
        return section;
    }    
}
