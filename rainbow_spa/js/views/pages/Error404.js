// Instantiate API
export default class Error404 {
    async render () {
        let h2 = document.createElement('h2');
        h2.textContent = 'Error 404';
    
        let container = document.createElement('div');
        container.appendChild(h2);
    
        return container;
    }    
}
