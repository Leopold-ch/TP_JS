import OperatorProvider from "../../services/OperatorProvider.js";
import CardProvider from "../../services/CardProvider.js";
const VISIBLES = 9;

export default class Defenders {

    async render () {
        const operators = await OperatorProvider.fetchAllDefenders();
    
        //titre de la page
        let heading = document.createElement('h2');
        heading.textContent = 'Agents défensifs';

        let currentIndex = 0; // Indice du segment actuel
    
        //générations des cartes des agents
        let firstOperators = await OperatorProvider.fetchDefenders(currentIndex*VISIBLES, (currentIndex+1)*VISIBLES)
        let ul = await CardProvider.getCardList(firstOperators);

        // Fonction pour afficher les agents d'un segment donné
        async function renderOperators(segmentIndex) {
            let slicedOperators = await OperatorProvider.fetchDefenders(currentIndex*VISIBLES, (currentIndex+1)*VISIBLES)
            let newUl = await CardProvider.getCardList(slicedOperators);
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

            window.scrollTo({
            top: 0,
            behavior: "smooth"
            })
        }

        let pagination = document.createElement('div');
        pagination.id = 'pagination';
        let prec = document.createElement('button');
        prec.textContent = 'Page précédente';
        let suiv = document.createElement('button');
        suiv.textContent = 'Page suivante';

        prec.addEventListener('click', function p() {
            if (currentIndex > 0) {
                currentIndex--;
                renderOperators(currentIndex);
            }
        })

        suiv.addEventListener('click', function s() {
            if (1 == 1){                                //(currentIndex < segments.length - 1) {
                currentIndex++;
                renderOperators(currentIndex);
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

