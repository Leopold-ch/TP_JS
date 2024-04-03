// Instantiate API
import OperatorProvider from "./../../services/OperatorProvider.js";
import CardProvider from "../../services/CardProvider.js";

export default class Home {

    async render() {
        let operators = await OperatorProvider.fetchRandomOperator(3);
    
        let h2_1 = document.createElement('h2');
        h2_1.textContent = "Qu'est-ce que Rainbow 6 Siege ?";
    
        let p = document.createElement('p');
        p.classList.add('r6-desc');
        p.textContent = `Rainbow Six Siege, le jeu de tir tactique développé par Ubisoft, a captivé des millions de joueurs à travers le monde depuis sa sortie en 2015.
        Avec son gameplay stratégique, ses mécaniques de jeu innovantes et son engagement constant envers les mises à jour et l'équilibrage,
        Siege a solidifié sa place en tant que l'un des jeux de tir compétitifs les plus populaires sur le marché.
        Au cœur de l'expérience Siege se trouvent les agents, des opérateurs spécialisés provenant de différentes unités d'élite à travers le monde.
        Ce site en single page application est dédié aux premiers de la licences.`;
    
        let h2_2 = document.createElement('h2');
        h2_2.textContent = "Quelques agents";
    
        let ul = await CardProvider.getCardList(operators);
    
        let container = document.createElement('section');
        container.appendChild(h2_1);
        container.appendChild(p);
        container.appendChild(h2_2);
        container.appendChild(ul);
    
        return container;
    }
    
}
