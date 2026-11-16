let timerInterval = null;
let moves = 0;
let seconds = 0;
let gameStarted = false;
let bootstrapModal = null;

$(document).ready(function () {
   bootstrapModal = new bootstrap.Modal(
      document.getElementById("gameOverModal"),
   );

   $("#restartBtn").on("click", function () {
      bootstrapModal.hide();
      startGame();
   });

   $("#gameBoard").on("click", ".card-inner", flipCard);

   startGame();
});

function startGame() {
   if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
   }

   const cards = game.creatCardsFromTechs();

   moves = 0;
   seconds = 0;
   gameStarted = false;
   game.clearCards();

   $("#movesCount").text(moves);
   $("#timeCount").text("00:00");

   const tabuleiro = $("#gameBoard");
   tabuleiro.empty();

   const cardsHTML = cards
      .map(
         (card) => `
         <div class="col card-wrapper" data-id="${card.id}">
            <div class="card-inner">
               <div class="card-front">
                  <img class="img-fluid w-75 h-75 object-fit-contain pe-none" src="./assets/images/${card.icon}.png" alt="${card.icon}" />
               </div>
               <div class="card-back text-white font-righteous">&lt;/&gt;</div>
            </div>
         </div>
      `,
      )
      .join("");

   tabuleiro.html(cardsHTML);
}

function flipCard() {
   if (game.lockMode) return;

   const elementoCarta = $(this);
   const elementoWrapper = elementoCarta.closest(".card-wrapper");
   const cardId = elementoWrapper.data("id");

   if (elementoCarta.hasClass("flipped")) return;
   if (game.firstCard && game.firstCard.id === cardId) return;

   if (!gameStarted) {
      gameStarted = true;
      startTimer();
   }

   if (game.setCard(cardId)) {
      elementoCarta.addClass("flipped");

      if (game.checkMatch()) {
         game.clearCards();

         if (game.checkGameOver()) {
            clearInterval(timerInterval);
            timerInterval = null;
            $("#modalMoves").text(moves);
            $("#modalTime").text(formatTime(seconds));
            bootstrapModal.show();
         }
      } else if (game.firstCard && game.secondCard) {
         moves++;
         $("#movesCount").text(moves);

         const firstId = game.firstCard.id;
         const secondId = game.secondCard.id;

         game.firstCard.flipped = false;
         game.secondCard.flipped = false;

         setTimeout(() => {
            $(`.card-wrapper[data-id="${firstId}"] .card-inner`).removeClass(
               "flipped",
            );
            $(`.card-wrapper[data-id="${secondId}"] .card-inner`).removeClass(
               "flipped",
            );

            game.clearCards();
         }, 1000);
      }
   }
}

function startTimer() {
   timerInterval = setInterval(() => {
      seconds++;
      $("#timeCount").text(formatTime(seconds));
   }, 1000);
}

function formatTime(totalSeconds) {
   const minutes = Math.floor(totalSeconds / 60);
   const secs = totalSeconds % 60;
   return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}
