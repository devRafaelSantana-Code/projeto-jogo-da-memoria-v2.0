let game = {
   lockMode: false,
   firstCard: null,
   secondCard: null,
   cards: [],

   techs: [
      "bootstrap",
      "css",
      "electron",
      "firebase",
      "html",
      "javascript",
      "jquery",
      "mongo",
      "node",
      "react",
   ],

   setCard: function (id) {
      if (this.lockMode) {
         return false;
      }

      let card = this.cards.find((card) => card.id === id);

      if (!card || card.flipped) {
         return false;
      }

      if (this.firstCard) {
         this.secondCard = card;
         card.flipped = true;
         this.lockMode = true;
         return true;
      } else {
         this.firstCard = card;
         card.flipped = true;
         return true;
      }
   },

   checkMatch: function () {
      if (!this.firstCard || !this.secondCard) {
         return false;
      }
      return this.firstCard.icon === this.secondCard.icon;
   },

   clearCards: function () {
      this.firstCard = null;
      this.secondCard = null;
      this.lockMode = false;
   },

   checkGameOver: function () {
      return this.cards.every((card) => card.flipped);
   },

   creatCardsFromTechs: function () {
      this.cards = this.techs.flatMap((tech) => this.createPairFromTech(tech));
      this.shuffleCards();
      return this.cards;
   },

   createPairFromTech: function (tech) {
      let randomId = this.createIdWidthTech(tech);

      return [
         {
            id: randomId + "_1",
            icon: tech,
            flipped: false,
         },
         {
            id: randomId + "_2",
            icon: tech,
            flipped: false,
         },
      ];
   },

   createIdWidthTech: function (tech) {
      return tech + Math.floor(Math.random() * 100);
   },

   shuffleCards: function () {
      let currentIndex = this.cards.length;
      let randomIndex = 0;

      while (currentIndex !== 0) {
         randomIndex = Math.floor(Math.random() * currentIndex);
         currentIndex--;

         [this.cards[randomIndex], this.cards[currentIndex]] = [
            this.cards[currentIndex],
            this.cards[randomIndex],
         ];
      }
   },
};
