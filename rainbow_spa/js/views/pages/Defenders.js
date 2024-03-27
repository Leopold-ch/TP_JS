import OperatorProvider from "../../services/OperatorProvider.js";
import CardProvider from "../../services/CardProvider.js";

export default class Defenders {

    async render () {
        let operators = await OperatorProvider.fetchDefenders(20);
    
        let heading = document.createElement('h2');
        heading.textContent = 'Agents défensifs';
    
        let ul = await CardProvider.getCardList(operators);
    
        let container = document.createElement('div');
        container.appendChild(heading);
        container.appendChild(ul);
    
        return container;
    }
}
