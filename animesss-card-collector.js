// ==UserScript==
// @name         Card collection
// @namespace    https://animesss.com/*
// @version      2026-01-28
// @description  Clicker on card notification every 10sec
// @author       Xelliar
// @match        https://animesss.com/aniserials/video/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function closeNewCard(){
	const cardDiv = document.getElementById('card-modal');
  // console.log('Modal: ', cardDiv);

  const closeBtn = cardDiv.parentElement.querySelector('.ui-dialog-titlebar-close')
  // console.log('Button: ', closeBtn);
  closeBtn.click();

}

function findNewCard(){
	const ntfs = document.getElementsByClassName('card-notification');
   // console.log('Tamper DEBUG: ', ntfs);

  if(ntfs.length > 0){
  	ntfs[0].click();

    setTimeout(() => {
      // console.log("This runs after 3 second");
      closeNewCard();
    }, 3000);
  }
}


setInterval(findNewCard, 10000);

})();