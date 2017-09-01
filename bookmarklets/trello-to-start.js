if (window.location.pathname.match(/\/b\\/.*/)) {
  document.querySelector(".header-search-input").value = "due:overdue -is:archived -list:don";
  document.querySelector(".header-search-input").dispatchEvent(new FocusEvent("focus")));
} else {
  window.open("https://trello.com/search?q=due%3Aoverdue%20-is%3Aarchived%20-list%3Adone","_self");
}
