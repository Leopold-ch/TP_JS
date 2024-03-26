import OperatorProvider from "../../services/OperatorProvider.js";

export default class Defenders {

    async render () {
        let operators = await OperatorProvider.fetchDefenders(20);
        let view =  /*html*/`
            <h2>Agents défensifs</h2>
            <ul class='operators-list'>
                ${ operators.map(op => 
                    /*html*/`
                    <li class="carte">
                        <h3>${op.name}</h3>
                        <img src='${OperatorProvider.imgLink}${op.img}' />
                        <p>${op.description ? op.description.slice(0,100) : ''} ...</p>
                        <a href="#/operators/${op.id}">Plus d'info sur ${op.name}</a>
                    </li>
                    `
                    ).join('\n ')
                }
            </ul>
        `
        return view
    }

}