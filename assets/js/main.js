/* Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto */

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

        lastMsg(){
            return this.contacts.messages.lenght - 1
        }
    }
}).mount("#app");