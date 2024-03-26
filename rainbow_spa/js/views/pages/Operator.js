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
        h2.innerHTML = `Agent ${op.name}`;
    
        let healthIndicator = document.createElement('div');
        healthIndicator.classList.add('indicator');
        let health = document.createElement('p');
        health.textContent = `Vie : `;
        healthIndicator.appendChild(health)

        let speedIndicator = document.createElement('div');
        speedIndicator.classList.add('indicator');
        let speed = document.createElement('p');
        speed.textContent = `Vitesse : `;
        speedIndicator.appendChild(speed)

        let difficultyIndicator = document.createElement('div');
        difficultyIndicator.classList.add('indicator');
        let difficulty = document.createElement('p');
        difficulty.textContent = `Difficulté : `;
        difficultyIndicator.appendChild(difficulty)
    
        function circle(indicator, value){
            for (let i = 1; i <= 3; i++) {
                let c = document.createElement('div');
                c.classList.add('circle');

                if (i <= value) {
                    c.classList.add('full');
                } else {
                    c.classList.add('empty');
                }

                indicator.appendChild(c)
            }
        }

        circle(healthIndicator, op.health)
        circle(speedIndicator, op.speed)
        circle(difficultyIndicator, op.difficulty)
    
        let h3 = document.createElement('h3');
        h3.textContent = `Pays d'origine : ${op.country}`;
    
        let p = document.createElement('p');
        p.id = 'bio';
        p.textContent = `${op.description}`;

        imageDiv.appendChild(img);
        infoDiv.appendChild(h2);
        infoDiv.appendChild(h3);
        infoDiv.appendChild(healthIndicator);
        infoDiv.appendChild(speedIndicator);
        infoDiv.appendChild(difficultyIndicator);
        infoDiv.appendChild(p);
        section.appendChild(imageDiv);
        section.appendChild(infoDiv);

        return section;
    }
}
