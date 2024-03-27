import { ATTACKERS, DEFENDERS } from '../config.js'

export default class OperatorProvider {

    static get imgLink() {return 'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/';}

    static fetchAttackers = async (limit = 5) => {
        const options = {
           method: 'GET',
           headers: {
               'Content-Type': 'application/json'
           }
       };
       try {
           const response = await fetch(`${ATTACKERS}?_limit=${limit}`, options)
           const json = await response.json();
           return json
       } catch (err) {
           console.log('Error getting documents', err)
       }
    }

    static fetchDefenders = async (limit = 5) => {
        const options = {
           method: 'GET',
           headers: {
               'Content-Type': 'application/json'
           }
       };
       try {
           const response = await fetch(`${DEFENDERS}?_limit=${limit}`, options)
           const json = await response.json();
           return json
       } catch (err) {
           console.log('Error getting documents', err)
       }
    }

    static getOperator = async (id) => {
        const endpoints = [ATTACKERS, DEFENDERS];
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };
    
        for (const endpoint of endpoints) {
            try {
                const response = await fetch(`${endpoint}/${id}`, options);
                if (response.ok) {
                    const json = await response.json();
                    return json;
                }
            } catch (err) {
                console.log(`Error getting documents from ${endpoint}`, err);
            }
        }
    
        console.log('Documents not found in any endpoint');
        return null; // Aucun document trouvé dans les endpoints spécifiés
    }

    static fetchRandomOperator = async (limit = 5) => {
        try {
            let randomOperators = [];
            let attackers = await OperatorProvider.fetchAttackers(99);
            let defenders = await OperatorProvider.fetchDefenders(99);
            let totalLength = attackers.length + defenders.length;

            for (let i = 0; i < limit; i++) {
                let randomId = Math.floor(Math.random() * totalLength) + 1;
                let operator = await OperatorProvider.getOperator(randomId);
                if (operator) {
                    randomOperators.push(operator);
                }
            }

            return randomOperators;
        } catch (err) {
            console.log('Error fetching random operators', err);
            return [];
        }
    }
    
}
