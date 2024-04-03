import Utils from '../../services/Utils.js'
import OperatorProvider from "../../services/OperatorProvider.js";

export default class Operator {

    async render () {
        let request = Utils.parseRequestURL();
        let op = await OperatorProvider.getOperator(request.id);
    
        let section = document.createElement('section');
        section.classList.add('agent');
    
        let asideLeft = document.createElement('aside');
        asideLeft.classList.add('left');
        let buttonLeft = document.createElement('a');
        let previousID = await OperatorProvider.getPreviousID(op.id);
        buttonLeft.href = '/#/operators/' + previousID;
        buttonLeft.textContent = '<';
        asideLeft.appendChild(buttonLeft);
    
        let asideRight = document.createElement('aside');
        asideRight.classList.add('right');
        let buttonRight = document.createElement('a');
        let nextID = await OperatorProvider.getNextID(op.id);
        buttonRight.href = '/#/operators/' + nextID;
        buttonRight.textContent = '>';
        asideRight.appendChild(buttonRight);
    
        let imageDiv = document.createElement('div');
        imageDiv.classList.add('image');
    
        let img = document.createElement('img');
        img.src = `${OperatorProvider.imgLink}${op.picture}`;
    
        let infoDiv = document.createElement('div');
        infoDiv.classList.add('info');
    
        let identity = document.createElement('div');
        identity.classList.add('identite');
        let h2 = document.createElement('h2');
        h2.innerHTML = `Agent ${op.name}`;
        let logo = document.createElement('img');
        logo.src = `${OperatorProvider.imgLink}${op.logo}`;
        identity.appendChild(h2);
        identity.appendChild(logo);
    
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
    
        let desc = document.createElement('p');
        desc.id = 'bio';
        desc.textContent = `${op.description}`;

        let enFavoris = localStorage.getItem('favoris');
        enFavoris = enFavoris ? JSON.parse(enFavoris) : [];

        let fav = document.createElement('div');
        fav.id = 'fav';
        let heart = document.createElement('a');
        heart.id = 'coeur';
        heart.textContent = '♡︎';
        if (enFavoris.includes(op.id)){
            heart.textContent = '♥︎';
        }

        heart.addEventListener('click', function e(){
            const coeur = document.getElementById('coeur');

            if (coeur.textContent == '♡︎'){  //mise en favoris
                coeur.textContent = '♥︎';
                enFavoris.push(op.id);
                localStorage.setItem('favoris', JSON.stringify(enFavoris));

            } else{                         // retrait des favoris
                coeur.textContent = '♡︎';
                let indexOperator = enFavoris.indexOf(op.id);
                if (indexOperator !== -1){
                    enFavoris.splice(indexOperator, 1);
                }
                localStorage.setItem('favoris', JSON.stringify(enFavoris));
            }
        })

        fav.appendChild(heart);
        imageDiv.appendChild(img);
        infoDiv.appendChild(identity);
        infoDiv.appendChild(h3);
        infoDiv.appendChild(healthIndicator);
        infoDiv.appendChild(speedIndicator);
        infoDiv.appendChild(difficultyIndicator);
        infoDiv.appendChild(desc);
        infoDiv.appendChild(fav);
        section.appendChild(asideLeft);
        section.appendChild(imageDiv);
        section.appendChild(infoDiv);
        section.appendChild(asideRight);

        return section;
    }
}
