class LineElement extends HTMLElement {
  connectedCallback() {
    const shadowroot = this.attachShadow({ mode: open });
    const pElement = document.createElement('p');
    shadowroot.appendChild(pElement);
  }
}

customElements.define('line-element', LineElement);
