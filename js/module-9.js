const refs = {
  itemList: document.querySelector('.list-items'),
  form: document.querySelector('.form'),
  input: document.querySelector('.form-input'),
};
const { itemList, form, input } = refs;
let index = -1;

let arrayItems = JSON.parse(localStorage.getItem('List-items')) ?? [];

itemList.insertAdjacentHTML('beforeend', itemsTemplate(arrayItems));
form.addEventListener('submit', handleSumbit);
function handleSumbit(e) {
  e.preventDefault();
  const button = e.submitter;

  if (button.classList.contains('btn-reset')) {
    itemList.innerHTML = '';
    localStorage.removeItem('List-items');
    arrayItems = [];
  } else {
    itemList.insertAdjacentHTML('beforeend', itemTemplate(input.value));
    arrayItems.push({ id: index, value: input.value });
    localStorage.setItem('List-items', JSON.stringify(arrayItems));
  }

  form.reset();
}
function itemTemplate(item) {
  index += 1;
  return `<li data-id=${index}>${item}</li>`;
}

function itemsTemplate(items) {
  return items.map(itemTemplate).join('');
}

itemList.addEventListener('click', e => {
  e.target.remove();
  const arrayIndex = arrayItems.findIndex(
    el => Number(el.id) === e.target.dataset.id
  );
  console.log(e.target.dataset.id);

  arrayItems.splice(arrayIndex, 1);
  localStorage.setItem('List-items', JSON.stringify(arrayItems));
});
