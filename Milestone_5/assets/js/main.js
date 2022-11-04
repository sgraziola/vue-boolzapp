/* 
- Milestone 5 - opzionale
  ● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
  ● Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti
*/

import contacts from "./database.js";

const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      activeContact: 0,
      messageIndex: 0,
      search: null,
      on: false,
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

    filteredContact() {
      this.contacts.forEach((contact) => {
        if (!contact.name.toLowerCase().includes(this.search.toLowerCase())) {
          //console.log(contact.name.includes(this.search));
          contact.visible = false;
        } else {
          contact.visible = true;
        }
      });
    },

    timeLastMsg(i) {
      const timeLastMsg = this.contacts[i].messages[this.contacts[i].messages.length - 1].date;
      const msgTime = timeLastMsg.substring(11, timeLastMsg.length - 3);
      return msgTime  
    },

    time(i){
      const timeMsg = this.contacts[this.activeContact].messages[i].date;
      const msgTime = timeMsg.substring(11, timeMsg.length - 3);
      return msgTime  
    },

    details(index) {
      console.log("cliccato su chevron", index);
      this.messageIndex = index;
      this.on = !this.on;
    },

    deleteMessage() {
      this.contacts[this.activeContact].messages.splice(this.messageIndex, 1);
    },
  },
}).mount("#app");
