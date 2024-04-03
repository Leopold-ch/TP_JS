import OperatorProvider from "../../services/OperatorProvider.js";
import CardProvider from "../../services/CardProvider.js";
const VISIBLES = 9;

export default class Attackers {

    async render () {
        const operators = await OperatorProvider.fetchAttackers();
    
        //titre de la page
        let heading = document.createElement('h2');
        heading.textContent = 'Agents attaquants';

        let currentIndex = 0;
    
        //générations des cartes des agents
        let firstOperators = await OperatorProvider.fetchAttackers(currentIndex*VISIBLES, (currentIndex+1)*VISIBLES)
        let ul = await CardProvider.getCardList(firstOperators);

        // Fonction pour afficher les agents à l'écran
        async function renderOperators() {
            let slicedOperators = await OperatorProvider.fetchAttackers(currentIndex*VISIBLES, (currentIndex+1)*VISIBLES)
            let newUl = await CardProvider.getCardList(slicedOperators);
            let oldUl = document.querySelector('.operators-list');
            if (oldUl) {
                oldUl.parentNode.removeChild(oldUl);   // Supprime l'ancien ul s'il existe
            }
            let contentElement = document.querySelector('section');
            let divElement = contentElement.querySelector('div');
            if (divElement) {
                contentElement.insertBefore(newUl, divElement);
            } else {
                let ulElement = contentElement.querySelector('ul');
                if (ulElement) {
                    contentElement.insertBefore(newUl, ulElement.nextSibling);
                } else {
                    contentElement.appendChild(newUl);
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
                renderOperators();
            }
        })

        suiv.addEventListener('click', async function s() {
            let lastOp = document.querySelector('.operators-list').lastElementChild;
            let lastId = parseInt(lastOp.querySelector('h3').id);
            let nextId = await OperatorProvider.getNextID(lastId);
            if (!currentIndex){
                currentIndex++;
                renderOperators();
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
