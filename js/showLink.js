export function showLink(data) {
  const lista = document.querySelector("#lista");
  const container = document.createElement("div");
  container.classList.add("link");

  createLinkOriginal(data.original, container);
  createLinkShort(data.link2, container);
  createButton(data.link2, container);

  lista.appendChild(container);
}

function createLinkOriginal(url, container) {
  const original = document.createElement("a");
  var urlOriginal = document.createTextNode(url);
  original.appendChild(urlOriginal);
  original.href = `https://${url}`;
  original.classList.add("link__original");

  container.appendChild(original);
}

function createLinkShort(url, container) {
  const short = document.createElement("a");
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
  button.classList.add("button--secundary");
  button.id = link;

  button.addEventListener("click", async function () {
    const lista = document.querySelector("#lista");

    /* VAMOS A RECORRER LA LISTA ENTERA */
    lista.childNodes.forEach((item) => {
      item.childNodes[2].classList.remove("button--copied");
    });

    if (!navigator.clipboard) {
      // Clipboard API not available
      return;
    }

    try {
      await navigator.clipboard.writeText(button.id);
      button.classList.add("button--copied");
    } catch (error) {
      console.error("Fallo al copiar en el portapapeles", error);
    }
  });

  container.appendChild(button);
}
