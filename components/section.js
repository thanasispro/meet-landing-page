class NumberCircle extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const container = document.createElement('div');
    container.className = 'container';

    const line = document.createElement('div');
    line.className = 'line';

    const circle = document.createElement('div');
    circle.className = 'number-circle';
    circle.textContent = this.getAttribute('number') || '0';

    const style = document.createElement('style');
    style.textContent = `
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
      .line {
        width: 1px;
        height: 80px;
        background: #D1D1DF;
      }
      
      .number-circle {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px;
        width: 50px;
        height: 50px;
        background: #FAFAFA;
        border: 1px solid #D1D1DF;
        border-radius: 999px;
        color: #28283D;
        font-size: 1rem;
        font-weight: bold;
      }
    `;

    container.appendChild(line);
    container.appendChild(circle);
    shadow.appendChild(style);
    shadow.appendChild(container);
  }
}

customElements.define('number-circle', NumberCircle);