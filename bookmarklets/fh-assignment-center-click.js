let assignments = document.querySelector('#assignment-center-assignment-items').children;
for (let assignment in assignments) {
  assignments[assignment].children[5].children[0].children[0].children[0].onclick = () => {
    assignments[assignment].children[6].children[0].click();
    let options = assignments[assignment].children[6].children[1].children[2].children[0].children[1].children[0].children;
    for (let option in options) {
      console.log(options.children[option])
    }
  };
}
