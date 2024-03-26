import Utils from '../../services/Utils.js'
import OperatorProvider from "./../../services/OperatorProvider.js";

export default class OperatorShow {
    async render () {
        let request = Utils.parseRequestURL()
        let post = await OperatorProvider.getOperator(request.id)
        
        return /*html*/`
            <section class="section">
                <h1> Operator index : ${post.id}</h1>
                <p> Operator name : ${post.name} </p>
                <p> Operator descritpion : ${post.description} </p>
            </section>
        `
    }
}

