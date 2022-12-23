import { LitElement, css } from "lit";
import { blob } from "svg-sprite:sheet";

// TODO: dont depend on lit

const sheetURL = URL.createObjectURL(blob);

export class SvgIcon extends LitElement {
  static get styles() {
    return css`
      :host {
        margin: 0 2px;
        display: inline-block;
        color: inherit;
        vertical-align: sub;
      }
      svg {
        display: block;
        width: 1em;
        height: 1em;
      }
    `;
  }

  static get properties() {
    return {
      icon: {
        type: String,
      },
    };
  }

  public icon?: string;

  protected render() {
    this.shadowRoot
      ? (this.shadowRoot.innerHTML = `
        <svg><use xlink:href="${sheetURL}${"#" + this.icon}"></use></svg>
      `)
      : null;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "svg-icon": SvgIcon;
  }
}

customElements.define("svg-icon", SvgIcon);