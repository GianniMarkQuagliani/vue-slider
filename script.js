const {createApp} =  Vue;

createApp({
    data () {
        return {
          // Un array di oggetti, ognuno dei quali rappresenta un'immagine nel carosello
          images: [
            {
              image: 'img/01.webp',
              title: "Marvel's Spiderman Miles Morale",
              text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
            },
            
            {
                image: 'img/02.webp',
                title: 'Fortnite',
                text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
            },
            {
                image: 'img/03.webp',
                title: 'Marvel\'s Avengers',
                text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.'
              },
        
              {
                image: 'img/04.webp',
                title: 'Stray',
                text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
              },
        
              {
                image: 'img/05.webp',
                title: "Marvel's Avengers",
              }
          ],
          // Indice dell'immagine attualmente visualizzata nel carosello
          currentIndex: 0,
        };
    },
    // Definisco i metodi personalizzati che verranno utilizzati per interagire con il carosello
    methods: {
        // Avanza all'immagine successiva nel carosello
        nextSlide() {
            // Uttilizzo l'operatore modulo (%) per garantire un ciclo circolare tra le immagini
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
            },
  },
}).mount('#app');