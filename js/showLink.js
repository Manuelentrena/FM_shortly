export function showLink(data) {
  const lista = document.querySelector("#lista");
  const container = document.createElement("div");
  const subcontainer = document.createElement("div");
  subcontainer.classList.add("link__subcontainer");
  container.classList.add("link");

  createLinkOriginal(data.original, container);
  createLinkShort(data.link2, subcontainer);
  createButton(data.link2, subcontainer);

  container.appendChild(subcontainer);

  lista.appendChild(container);
}

function createLinkOriginal(url, container) {
  const original = document.createElement("p");
  var urlOriginal = document.createTextNode(url);
  original.appendChild(urlOriginal);
  original.href = `https://${url}`;
  original.classList.add("link__original");

  container.appendChild(original);
}

function createLinkShort(url, container) {
  const short = document.createElement("p");
  var urlShort = document.createTextNode(url);
  short.appendChild(urlShort);
  short.href = `https://${url}`;
  short.classList.add("link__short");

  container.appendChild(short);
}

function createButton(link, container) {
  const button = document.createElement("button");
  button.textContent = "Copy";
  button.classList.add("button");
  button.classList.add("button--secondary");
  button.classList.add("button--small");
  button.classList.add("button--link");
  button.id = link;

  button.addEventListener("click", async function () {
    const lista = document.querySelector("#lista");

    /* VAMOS A RECORRER LA LISTA ENTERA */
    lista.childNodes.forEach((item) => {
      item.childNodes[1].childNodes[1].classList.remove("button--copied");
      item.childNodes[1].childNodes[1].textContent = "Copy";
    });
    if (!navigator.clipboard) {
      // Clipboard API not available
      return;
    }

    try {
      button.classList.add("button--copied");
      button.textContent = "Copied!";
      await navigator.clipboard.writeText(button.id);
    } catch (error) {
      console.error("Fallo al copiar en el portapapeles", error);
    }
  });

  container.appendChild(button);
}
