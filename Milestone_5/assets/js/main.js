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
      this.contacts.forEach(contact => {
        if(!contact.name.toLowerCase().includes(this.search.toLowerCase())){
          //console.log(contact.name.includes(this.search));
          contact.visible = false
        } else {
        contact.visible = true
        }
      })   
    },

    time(i) {
      /* const DateTime = luxon.DateTime;
      const timeLastMsg = this.contacts[i].messages[this.contacts[i].messages.length - 1].date
      DateTime.fromISO(timeLastMsg)
      console.log(timeLastMsg); */

      /* let DateTime = luxon.DateTime;
      console.log(DateTime);
      let currentDate = DateTime.now()
      console.log(currentDate);
      const hour= currentDate.hour
      console.log(hour);
      
      let timeLastMsg = this.contacts[i].messages[this.contacts[i].messages.length - 1].date 
      console.log(timeLastMsg);
      
      const hourMsg = timeLastMsg.hour
      console.log(hourMsg);
      //timeLastMsg = luxon.DateTime
      //console.log(timeLastMsg);
      let time = luxon.timeLastMsg
      console.log(time); */
      // timeLastMsg.setLocale("en-US");
    //console.log(timeLastMsg);
      /* const time = (this.contacts[i].messages[this.contacts[i].messages.length - 1].date.setLocale('en-US').toLocaleString(DateTime.DATETIME_FULL));
      console.log(time); */
     

      //const hoursAndMinutes = timeLastMsg.getHours() + ":" + timeLastMsg.getMinutes();
      //console.log(hoursAndMinutes);
      
      //return hoursAndMinutes;
     /*  const DateTime = luxon.DateTime;
      let timeLastMsg = this.contacts[i].messages[this.contacts[i].messages.length - 1].date  */
      //console.log(timeLastMsg);
  
     // return timeLastMsg

    },

    details(index){
      console.log("cliccato su chevron", index);
      this.messageIndex = index
      this.on = !this.on
    },

    
    deleteMessage(){
      this.contacts[this.activeContact].messages.splice(this.messageIndex, 1 )
    }
},
}).mount("#app");
