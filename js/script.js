const injected_main = () => {
  document.body.insertAdjacentHTML("beforeend", '<button data-activate_all class="d2ryj9" style="position: fixed; top: 20%; left: 50px; width: auto; padding: 9px 8px; border-top: auto; border-radius: 4px; z-index: 300">Активировать весь кешбек!</button>');

  const activator = document.querySelector("[data-activate_all]");
  activator.addEventListener("click", () => {
    document.querySelectorAll('[data-qa-file="ActivateButton"]').forEach((btn) => {
      btn.click();
    });
    activator.remove();
  });
};
