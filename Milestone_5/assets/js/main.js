/* 
- Milestone 4
    ● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
*/

import contacts from "./database.js";

const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      activeContact: 0,
      search: null,
      newMessageSent: {
        date: new Date(),
        message: "",
        status: "sent",
      },
      newMessageReceived: {
        date: new Date(),
        message: "Ok",
        status: "received",
      },
    };
  },
  methods: {
    activeIndex(index) {
      this.activeContact = index;
    },

    addSentMsg() {
      const newMessage = {
        ...this.newMessageSent,
      };
      //console.log("ho cliccato su enter");
      this.contacts[this.activeContact].messages.push(newMessage);
      //console.log(this.contacts[this.activeContact]);
      // svuoto l'input dopo che il messaggio é stato inviato e aggiunto a text_message
      this.newMessageSent.message = "";
      this.addReceivedMsg();
    },

    addReceivedMsg() {
      setTimeout(() => {
        this.contacts[this.activeContact].messages.push(
          this.newMessageReceived
        );
      }, 1000);
    },

    time(i) {
      const time = new Date(
        this.contacts[i].messages[this.contacts[i].messages.length - 1].date
      );
      //console.log(time);
      const hoursAndMinutes = time.getHours() + ":" + time.getMinutes();
      return hoursAndMinutes;
    },
},
computed: {
      filteredContactList() {
        if (this.search){
            return this.contacts.filter((contact) => {
              return contact.name.toLowerCase().includes(this.search.toLowerCase())
            })
        } else {
          return this.contacts;
        };
      },
  },
}).mount("#app");
