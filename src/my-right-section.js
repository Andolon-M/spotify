import { LitElement, css, html } from 'lit'

export class MyRightSection extends LitElement {
  
    constructor() {
      super();
    }
  
    render() {
      return html`
        <div class = rightSection__container>
          <div class = "rightSection__title"></div>
          <div class = "rightSection__tools"></div>
          <div class = "rightSection__playingNext"></div>
          <div class = "rightSection__Songs"></div>
        </div>
      `
    }
  
    static get styles() {
      return css`
        .rightSection__container{
          display: grid;
          grid-template-rows: .2fr, .2fr, .15fr, 1fr;
          height: 96vh;
          padding: 1em 0;
          gap: .1em;
        }
        .rightSection__title{
          grid-rows:1/2;
          background: white;
          max-height: 40px;
        }
        .rightSection__tools{
          grid-rows:2/3;
          background: white;
          max-height: 40px;
        }
        .rightSection__playingNext{
          grid-rows:3/4;
          background: white;
          max-height: 20px;
        }
        .rightSection__Songs{
          grid-rows:4/5;
          background: white;
          min-height: 620px 
        }
      `
    }
  }
  
  customElements.define('my-right-section', MyRightSection); 
  