/* 
- Milestone 1
    ● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
    ● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto 
    
- Milestone 2
    ● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
    ● Click sul contatto mostra la conversazione del contatto cliccato
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