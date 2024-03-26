// Instantiate API
import OperatorProvider from "./../../services/OperatorProvider.js";

export default class Home {

    async render() {
        let operators = await OperatorProvider.fetchOperators(3)
        let html = operators.map(op =>
            /*html*/`
            <li class="carte">
                <h3>${op.name}</h3>
                <img src='${OperatorProvider.imgLink}${op.img}' />
                <p>${op.description ? op.description.slice(0,100) : ''} ...</p>
                <a href="#/operators/${op.id}">Plus d'info sur ${op.name}</a>
            </li>
            `
        ).join('\n ');
        
        return /*html*/`
            <h2>Qu'est-ce que Rainbow 6 Siege ?</h2>
            <p class="r6-desc">
            Rainbow Six Siege, le jeu de tir tactique développé par Ubisoft, a captivé des millions de joueurs à travers le monde depuis sa sortie en 2015.
            Avec son gameplay stratégique, ses mécaniques de jeu innovantes et son engagement constant envers les mises à jour et l'équilibrage,
            Siege a solidifié sa place en tant que l'un des jeux de tir compétitifs les plus populaires sur le marché.
            Au cœur de l'expérience Siege se trouvent les agents, des opérateurs spécialisés provenant de différentes unités d'élite à travers le monde.
            Ce site en single page application est dédié aux premiers de la licences.
            </p>
            <h2>Quelques agents</h2>
            <ul class='operators-list'>
                ${html}
            </ul>
        `;
    }
}
