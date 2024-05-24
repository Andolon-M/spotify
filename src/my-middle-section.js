import { LitElement, css, html } from 'lit'

export class MyMiddleSection extends LitElement {
  
    constructor() {
      super();
    }
  
    render() {
      return html`
        <div class = middleSection__container>
          <div class = "middleSection__title"></div>
          <div class = "middleSection__image"></div>
          <div class = "middleSection__songTitle"></div>
          <div class = "middleSection__barDuration"></div>
          <div class = "middleSection__bottons"></div>
          <div class = "middleSection__barVolume"></div>
          <div class = "middleSection__deviceReference"></div>
        </div>
      `
    }
  
    static get styles() {
      return css`
        .middleSection__container{
          display:grid;
          grid-template-rows: .2fr, 2fr, .35fr, .15fr, .45fr, .12fr, .2fr;
          gap: .5em;
          height: 96vh;
          padding: 1em 0;
        }
        .middleSection__title{
          grid-rows: 1/2;
          background: white;
          max-height: 40px;
        }
        .middleSection__image{
          grid-rows: 2/3;
          background: white;
          min-height: 300px;
        }
        .middleSection__songTitle{
          grid-rows: 3/4;
          background: white;
          
        }
        .middleSection__barDuration{
          grid-rows: 4/5;
          background: white;
          max-height: 25px;
          display: flex;
          align-items:center;
          justify-content: center;
        }
        .middleSection__bottons{
          grid-rows: 5/6;
          background: white;
          min-height: 30px;
        }
        .middleSection__barVolume{
          grid-rows: 6/7;
          background: white;
          max-height: 20px;
        }
        .middleSection__deviceReference{
          grid-rows: 7/8;
          background: white;
          max-height: 40px;
        }
      `
    }
  }
  
  customElements.define('my-middle-section', MyMiddleSection); 
  