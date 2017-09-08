if (window.location.href.match(/trello\.com\/($|b\/)/)) {
  document.querySelector('.header-search-input').value = 'due:overdue -is:archived -list:"turned in" -list:don';
  document.querySelector('.header-search-input').dispatchEvent(new FocusEvent('focus'));
} else {
  window.open('https://trello.com/search?q=due:overdue -is:archived -list:done -list:"turned in"','_blank');
}
