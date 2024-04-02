import { ATTACKERS, DEFENDERS } from '../config.js'

export default class OperatorProvider {

    static get imgLink() {return 'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/';}

    static fetchAllAttackers = async () => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const response = await fetch(ATTACKERS, options);
            const json = await response.json();
            return json;
        } catch (err) {
            console.log('Error getting documents', err);
        }
    }
    
    static fetchAllDefenders = async () => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const response = await fetch(DEFENDERS, options);
            const json = await response.json();
            return json;
        } catch (err) {
            console.log('Error getting documents', err);
        }
    }

    static fetchAttackers = async (start = 0, limit = 10) => {
        const options = {
           method: 'GET',
           headers: {
               'Content-Type': 'application/json'
           }
       };
       try {
           const response = await fetch(`${ATTACKERS}?_start=${start}&_limit=${limit}`, options)
           const json = await response.json();
           return json
       } catch (err) {
           console.log('Error getting documents', err)
       }
    }

    static fetchDefenders = async (start = 0, limit = 10) => {
        const options = {
           method: 'GET',
           headers: {
               'Content-Type': 'application/json'
           }
       };
       try {
           const response = await fetch(`${DEFENDERS}?_start=${start}&_limit=${limit}`, options)
           const json = await response.json();
           return json
       } catch (err) {
           console.log('Error getting documents', err)
       }
    }

    static fetchRandomOperator = async (limit = 5) => {
        try {
            let randomOperators = [];
            let attackers = await OperatorProvider.fetchAllAttackers()
            let defenders = await OperatorProvider.fetchAllDefenders();
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
    
        console.log('Operators '+id+' not found in any endpoint');
        return null;
    }

    static getPreviousID = async (id) =>{
        let previousOperator = await OperatorProvider.getOperator(id-1);
        if (previousOperator){
            return id-1;
        } else{
            return id;
        }
    }

    static getNextID = async (id) =>{
        let nextOperator = await OperatorProvider.getOperator(id+1);
        if (nextOperator){
            return id+1;
        } else{
            return id;
        }
    }
    
}
