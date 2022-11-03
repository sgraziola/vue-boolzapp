/* 
- Milestone 3
    ● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
    ● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo 
*/

import contacts from "./database.js"

const { createApp } = Vue;

createApp({
    data(){
        return{
            contacts,
            activeContact : 0,

        }
    },
    methods: {
        activeIndex(index){
            this.activeContact = index;
        },

        time(i){
            const time = new Date (this.contacts[i].messages[this.contacts[i].messages.length - 1].date);
            //console.log(time);
            const hoursAndMinutes = time.getHours() + ':' + time.getMinutes();
            return hoursAndMinutes;

        }
    }
}).mount("#app");