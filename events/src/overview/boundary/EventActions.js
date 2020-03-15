import AirElement from "../../AirElement.js";
import { html } from "../../lib/lit-html.js";
import { deleteSelected, editSelected } from "../control/EventsControl.js";
import { areSomeSelected } from "../entity/EventOperations.js";

class EventActions extends AirElement { 

    extractState(redux) { 
        return redux.events;
    }

    view() { 
        return html`
        <button class="button is-primary is-small" ?disabled=${!areSomeSelected(this.state.events)} @click=${_ => editSelected()}>edit</button>
        <button class="button is-danger is-small"  ?disabled=${!areSomeSelected(this.state.events)} @click=${_ => deleteSelected()}>delete</button>
        `;
    }
}

customElements.define('a-event-actions',EventActions);