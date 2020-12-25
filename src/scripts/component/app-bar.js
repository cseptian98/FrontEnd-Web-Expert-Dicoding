class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this.clickEvent = event;
    this.render();
  }

  render() {
    this.innerHTML = `
        <a href="#content" class="skip-link">Skip to Content</a>
            <a href="index.html" class="header__title">
              Mini Resto Apps
            </a>
            <button id="hamburgerButton" aria-label="Open Navigation Bar">☰</button>
            <nav class="nav">
              <ul class="nav__list">
                <li class="nav__item"><a href="#/">Home</a></li>
                <li class="nav__item"><a href="#/favorite">Favorite</a></li>
                <li class="nav__item"><a href="https://www.linkedin.com/in/cseptian/" target="_blank">About</a></li>
              </ul>
            </nav>
      `;
  }
}

customElements.define('app-bar', AppBar);
