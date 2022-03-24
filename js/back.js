let xhr = new XMLHttpRequest();
xhr.open("GET", chrome.extension.getURL("/js/script.js"));
setTimeout(() => {
  xhr.send();
}, 0);

xhr.onload = () => {
  if (xhr.status === 200) {
    const script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.innerHTML = xhr.response;
    document.querySelector("head").appendChild(script);
    document.querySelector("body").setAttribute("onLoad", "injected_main();");
  } else {
    console.log("neok");
    console.log(xhr.status);
  }
};
