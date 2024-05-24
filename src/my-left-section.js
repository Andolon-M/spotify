import { LitElement, css, html } from 'lit'

export class MyLeftSection extends LitElement {
  
    constructor() {
      super();
    }
  
    render() {
      return html`
        <div class="leftSection__title"> hola</div>
        <div class="leftSection__topChart">
        
        </div>
        <div class="leftSection__mayLike"></div>
      `
    }
  
    static get styles() {
      return css`
        :host{
          display: grid;
          grid-rows: .5fr, 5fr, 5fr;
          height: 98vh;
          gap: 1em;
          /*padding: 0 .5em;*/
          
        }
        .leftSection__title{
          margin-top: 1em;
          grid-rows: 1/2;
          background: white;
          max-height: 100px;
        }
        .leftSection__topChart{
          grid-rows: 2/3;
          background: white;
          min-height: 250px;
        }
        .leftSection__mayLike{
          grid-rows: 3/4;
          background: white;
          min-height: 300px;
        }
      `
    }
  }
  
  customElements.define('my-left-section', MyLeftSection); 
  