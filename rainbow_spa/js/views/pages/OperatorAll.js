import OperatorProvider from "../../services/OperatorProvider.js";

export default class OperatorAll {

    async render () {
        let operators = await OperatorProvider.fetchOperators(50);
        let view =  /*html*/`
            <h2>Tous les agents</h2>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                ${ operators.map(op => 
                    /*html*/`
                    <div class="col">
                    <div class="card shadow-sm">
                        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">${op.name}</text></svg>
                        <div class="card-body">
                            <p class="card-text">${op.nationality ? op.nationality.slice(0,100) : ''}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                <a href="#/operators/${op.id}" class="btn btn-sm btn-outline-secondary">Voir ${op.name}</a>
                                </div>
                                <small class="text-body-secondary">${op.id}</small>
                            </div>
                        </div>
                    </div>
                    </div>
                    `
                    ).join('\n ')
                }
            </div>
        `
        return view
    }

}