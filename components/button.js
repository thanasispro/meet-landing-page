class CustomButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    // Create styles
    const style = document.createElement("style");
    style.textContent = `
      button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 16px 40px;
        gap: 4px;
        border: none;
        border-radius: 1.5rem;
        
        font-family: "Red Hat Display", sans-serif;
        font-weight: 900;
        font-size: 1rem;
        line-height: 150%;
        letter-spacing: 0;
        
        width: auto;
        cursor: pointer;
        white-space: nowrap;
      }
      
      button.primary {
        background-color: #4D96A9;
        color: #FAFAFA;
      }
      
      button.primary:hover {
        background-color: #71C0D4;
      }
      
      button.primary .version {
        color: #8FE3F9;
      }
      
      button.secondary {
        background-color: #855FB1;
        color: #FAFAFA;
      }
      
      button.secondary:hover {
        background-color: #B18BDD;
      }
      
      button.secondary .version {
        color: #D9B8FF;
      }
      
      .version {
        display: inline;
      }
    `;

    // Create button element
    const button = document.createElement("button");
    button.className = this.getAttribute("class") || "primary";

    // Parse the content to find and style "v1.3" differently
    const content = this.textContent;
    if (content.includes("v1.3")) {
      const parts = content.split("v1.3");
      button.innerHTML =
        parts[0] + '<span class="version">v1.3</span>' + parts[1];
    } else {
      button.textContent = content;
    }

    // Append styles and button to shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(button);
  }
}

// Define the custom element
customElements.define("custom-button", CustomButton);