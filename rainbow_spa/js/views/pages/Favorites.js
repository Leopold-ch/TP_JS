import OperatorProvider from "../../services/OperatorProvider.js";
import CardProvider from "../../services/CardProvider.js";

export default class Favorites {

    async render () {
        let container = document.createElement('section');
        let heading = document.createElement('h2');
        heading.textContent = 'Vos agents favoris';
        container.appendChild(heading);
    
        if (localStorage.getItem('favoris')) {
    
            let favoritesId = JSON.parse(localStorage.getItem('favoris'));
            let operators = [];
    
            await Promise.all(favoritesId.map(async function parcour(id) {
                let op = await OperatorProvider.getOperator(id);
                if (op) {
                    operators.push(op);
                }
            }));
    
            let ul = await CardProvider.getCardList(operators);
    
            let div = document.createElement('div');
            div.id = "delete"
            let suppr = document.createElement('a');
            suppr.id = 'suppr';
            suppr.href = '#'
            suppr.textContent = 'Tout supprimer';
            div.appendChild(suppr);
    
            suppr.addEventListener('click', function(){     //suppression des favoris
                let empty = [];
                localStorage.setItem('favoris', empty);
            });
    
            div.appendChild(suppr);
            container.appendChild(ul);
            container.appendChild(div);
        }
        return container;
    }    
}
