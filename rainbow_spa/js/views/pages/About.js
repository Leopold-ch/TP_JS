export default class About {
    async render () {
        let h2 = document.createElement('h2');
        h2.textContent = 'Pour en savoir plus';
    
        let p1 = document.createElement('p');
        p1.classList.add('r6-desc');
        p1.textContent = `Rainbow Six Siege est un jeu de tir tactique en ligne développé par Ubisoft Montréal et publié par Ubisoft. Lancé en décembre 2015, il a depuis lors captivé des millions de joueurs à travers le monde par son gameplay intense et stratégique.`;
    
        let p2 = document.createElement('p');
        p2.classList.add('r6-desc');
        p2.textContent = `Au cœur de l'expérience Rainbow Six Siege se trouve un gameplay centré sur la stratégie et la coopération. Les joueurs sont répartis en deux équipes : les attaquants et les défenseurs. Chaque équipe doit planifier, coordonner et exécuter des tactiques spécifiques pour atteindre ses objectifs, que ce soit la sécurisation d'un site, le désamorçage d'une bombe, le sauvetage d'otages ou d'autres scénarios variés.`;
    
        let p3 = document.createElement('p');
        p3.classList.add('r6-desc');
        p3.textContent = `Ce qui distingue Rainbow Six Siege des autres jeux de tir, c'est son système de destruction environnementale avancé. Les joueurs peuvent détruire et fortifier les murs, les planchers et d'autres surfaces, ce qui ouvre un large éventail de possibilités tactiques. Chaque match est une expérience dynamique et imprévisible, car les joueurs doivent constamment s'adapter à l'évolution du terrain de jeu.`;
    
        let p4 = document.createElement('p');
        p4.classList.add('r6-desc');
        p4.textContent = `Un aspect central de Rainbow Six Siege est le roster d'opérateurs, des agents spécialisés provenant de différentes unités d'élite à travers le monde. Chaque opérateur possède ses propres compétences, armes et gadgets uniques, ce qui permet aux joueurs de personnaliser leur approche tactique en fonction de leur style de jeu et des besoins de leur équipe.`;
    
        let p5 = document.createElement('p');
        p5.classList.add('r6-desc');
        p5.textContent = `Le jeu est également soutenu par une communauté active et passionnée, avec des mises à jour régulières apportant de nouveaux opérateurs, cartes et fonctionnalités. Ubisoft organise également des événements en jeu, des tournois esports et une série continue de contenus additionnels pour maintenir l'engagement des joueurs à long terme.`;
    
        let p6 = document.createElement('p');
        p6.classList.add('r6-desc');
        p6.textContent = `Que vous soyez un joueur débutant cherchant à améliorer vos compétences tactiques ou un vétéran chevronné à la recherche de défis compétitifs, Rainbow Six Siege offre une expérience de jeu profonde, stimulante et gratifiante qui continue de repousser les limites du genre du jeu de tir tactique en ligne.`;
    
        let info = document.createElement('div');
        info.id = 'about';
        info.appendChild(p1);
        info.appendChild(p2);
        info.appendChild(p3);
        info.appendChild(p4);
        info.appendChild(p5);
        info.appendChild(p6);
        let container = document.createElement('div');
        container.appendChild(h2);
        container.appendChild(info);
    
        return container;
    }
}
