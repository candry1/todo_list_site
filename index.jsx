const form = document.querySelector("#todo-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Add to-do to data and render UI
  let TODOs = [];

  if (localStorage["data"] !== null && localStorage["data"] !== undefined) {
    TODOs = JSON.parse(localStorage["data"]);
  }

  TODOs.push({
    title: event.target[0].value,
    complete: false,
    id: self.crypto.randomUUID(),
  });

  localStorage["data"] = JSON.stringify(TODOs);

  const list = document.querySelector("#todo-list");

  form.reset();
});

function buildUI() {
    let HTML = "";
    TODOs.forEach((todo) => {
        HTML += (
        <li id="${todo.id}">
            ${todo.title}
            <button aria-label="Complete" class="button-complete">
            <svg class="svg-check">
                <path d="..." />
            </svg>
            </button>
        </li>
        );
    });
    list.innerHTML = HTML;
}
