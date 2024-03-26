import Utils from '../../services/Utils.js'
import OperatorProvider from "./../../services/OperatorProvider.js";

export default class OperatorShow {
    async render () {
        let request = Utils.parseRequestURL()
        let op = await OperatorProvider.getOperator(request.id)
        
        return /*html*/`
            <p> Operator index : ${op.id}</p>
            <section class="agent">
                <div class="image">
                    <img src='${OperatorProvider.imgLink}${op.img}' />
                </div>
                <div class="info">
                    <h2> Agent <b> ${op.name} </b></h2>
                    <p id="bio"> Descritpion de l'agent : ${op.description} </p>
                </div>
            </section>
        `
    }
}
