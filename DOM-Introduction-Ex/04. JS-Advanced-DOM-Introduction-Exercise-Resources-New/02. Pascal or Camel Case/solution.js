function solve() {
  let textEl = document.querySelector('#text');
  let conventionElement = document.querySelector('#naming-convention');
  let taskEl = textEl.value;
  let conventionEl = conventionElement.value;
  let result = applyConvention(taskEl, conventionEl);
  let spanElement = document.getElementById('result');
  spanElement.textContent = result;

  function applyConvention(taskEl, convention) {
    const conventionSwitch = {
      'Paskal Case': () => taskEl
        .toLowerCase()
        .split(' ')
        .map(x => x[0].toUpperCase() + x.slice(1))
        .join(''),
      'Camel Case': () => taskEl
        .toLowerCase()
        .split(' ')
        .map((x, i) => x = i !== 0 ? x[0].toUpperCase + x.slice(1) : x)
        .join(''),
      default: () => 'Error!'
    };
    return (conventionSwitch[convention] || conventionSwitch.default)();
  }

}