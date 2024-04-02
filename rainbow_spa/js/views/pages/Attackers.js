import OperatorProvider from "../../services/OperatorProvider.js";
import CardProvider from "../../services/CardProvider.js";

export default class Attackers {

    async render () {
        const operators = await OperatorProvider.fetchAllAttackers(20);
    
        //titre de la page
        let heading = document.createElement('h2');
        heading.textContent = 'Agents attaquants';

        // Diviser les agents en segments de six
        const segments = [];
        for (let i = 0; i < operators.length; i += 9) {
            segments.push(operators.slice(i, i + 9));
        }
    
        //générations des cartes des agents
        let ul = await CardProvider.getCardList(segments[0]);

        let currentSegmentIndex = 0; // Indice du segment actuel

        // Fonction pour afficher les agents d'un segment donné
        async function renderCharacters(segmentIndex) {
            let newUl = await CardProvider.getCardList(segments[segmentIndex]);
            let oldUl = document.querySelector('.operators-list');
            if (oldUl) {
                oldUl.parentNode.removeChild(oldUl); // Supprime l'ancien ul s'il existe
            }
            let contentElement = document.querySelector('section');
            let divElement = contentElement.querySelector('div'); // Récupère la div
            if (divElement) {
                contentElement.insertBefore(newUl, divElement); // Ajoute le nouvel ul juste avant la div
            } else {
                let ulElement = contentElement.querySelector('ul'); // Récupère l'ul
                if (ulElement) {
                    contentElement.insertBefore(newUl, ulElement.nextSibling); // Ajoute le nouvel ul juste après l'ul existant
                } else {
                    contentElement.appendChild(newUl); // Ajoute le nouvel ul à la fin s'il n'y a pas d'autre enfant
                }
            }
        }
        
        

        let pagination = document.createElement('div');
        pagination.id = 'pagination';
        let prec = document.createElement('button');
        prec.textContent = 'Page précédente';
        let suiv = document.createElement('button');
        suiv.textContent = 'Page suivante';

        prec.addEventListener('click', function p() {
            if (currentSegmentIndex > 0) {
                currentSegmentIndex--;
                renderCharacters(currentSegmentIndex);
            }
        })

        suiv.addEventListener('click', function s() {
            if (currentSegmentIndex < segments.length - 1) {
                currentSegmentIndex++;
                renderCharacters(currentSegmentIndex);
            }
        })

        pagination.appendChild(prec);
        pagination.appendChild(suiv);

        let container = document.createElement('section');
        container.appendChild(heading);
        container.appendChild(ul);
        container.appendChild(pagination);
    
        return container;
    }
}
