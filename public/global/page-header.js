class PageHeader extends HTMLElement {
    connectedCallback() { // called when element is added to the document

        // Creates separate mini dom 
        this.attachShadow({ mode: "open"});

        const title = this.getAttribute("title") || document.title;
        const subtitle = this.getAttribute("subtitle") || null;

        this.shadowRoot.innerHTML = `
            <style>
                header {
                    width: 100%;
                    min-width: 300px;

                    display: flex;
                    justify-content: center;
                    align-items: center;

                    flex-wrap: wrap;

                    padding: 2px;

                    background-color: #b3e0ff;
                    box-sizing: border-box;
                }

                .title {
                    width: 100%;
                    text-align: center;
                }

                .subtitle {
                    width: 100%;
                    text-align: center;
                    margin: 0;
                    margin-bottom: 8px;

                    color: grey;
                    font-style: italic;
                }

                nav {
                    display: flex;
                    width: 100%;
                    gap: 10px; 

                    margin: 8px;
                }

                nav a {
                    background-color: #ffe18c;
                    color: blue;
                    border: 1px solid black;
                    padding: 4px;

                    flex: 1; /* equal sizing */

                }

                nav a:hover {
                    background-color: #fcba03;
                }

            </style>

            <header>
                <h1 class="title">${title}</h1>
                ${subtitle ? `<p class="subtitle">${subtitle}</p>` : ""}
                <nav>
                    <a href="/">Home</a>
                    <a href="/login">Login</a>
                </nav>
            </header>
        `;

        this.shadowRoot.style = '';
    }
}

customElements.define('page-header', PageHeader);