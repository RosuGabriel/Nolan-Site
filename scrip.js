function getValue(event) {
    event.stopPropagation();
  
    var input = document.getElementById('myInput');
    var value = input.value;
  
    // Expresia regulată pentru verificarea cuvintelor-cheie
    var regex = /\b(tenet|dark knight|batman|interstellar|inception|dunkirk)\b/i;
    var tenet = /\b(tenet)\b/i;
    var reset = /\b(reset)\b/i;
    var count = localStorage.getItem('buttonClickCount');
  
    // Verificarea valorii introduse în input

    if (reset.test(value)) {
        resetCount();
    }
    
    if (regex.test(value)) {
      if (tenet.test(value)) {
        alert('The best answer!\n' + count + ' others answered the question');
      } else {
        alert('Nice choice!\n' + count + ' others answered the question');
      }
  
      var button = event.target;
      button.disabled = true;
      button.textContent = 'Submitted';
  
      count = count ? parseInt(count) + 1 : 1;
      localStorage.setItem('buttonClickCount', count);
    } else {
      alert('Ăsta nu e un film Nolan...');
    }
  }
  
  function resetCount() {
    count = 0;
    localStorage.setItem('buttonClickCount', count);
  }
  