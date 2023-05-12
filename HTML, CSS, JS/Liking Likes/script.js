function likeCounter(element) {
    //get button ID from element
    var buttonId = element.id; 
    //get likes counter ID by chopping off 'Button' at the end of the buttonID
    var likesElement = document.querySelector('#' + buttonId.replace('Button', ''));
  
    //do if-else-if cases for each person and and 1 to the like total
    if (buttonId === 'NeilButton') {
      var currentLikes = parseInt(likesElement.innerText);
      likesElement.innerText = currentLikes + 1 + " like(s)";
    } else if (buttonId === 'NicholeButton') {
      var currentLikes = parseInt(likesElement.innerText);
      likesElement.innerText = currentLikes + 1 + " like(s)";
    } else if (buttonId === 'JimButton') {
        var currentLikes = parseInt(likesElement.innerText);
        likesElement.innerText = currentLikes + 1 + " like(s)";
      }
  }