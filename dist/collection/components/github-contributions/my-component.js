import { h } from "@stencil/core";
import GitHubCalendar from 'github-calendar';
export class MyComponent {
    componentDidLoad() {
        GitHubCalendar(".contributions", this.username, {
            responsive: true,
            summary_text: "",
            global_stats: ""
        });
    }
    render() {
        return h("div", { class: "contributions" });
    }
    static get is() { return "github-contributions"; }
    static get originalStyleUrls() { return {
        "$": ["github-contributions.css"]
    }; }
    static get styleUrls() { return {
        "$": ["github-contributions.css"]
    }; }
    static get properties() { return {
        "username": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "username",
            "reflect": false
        }
    }; }
}
