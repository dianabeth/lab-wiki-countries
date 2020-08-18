//  Displays the list of links with the country names. Each link should be a react-router-dom Link which we will use to send the country code (cca3) via the URL.

import React, { Component } from 'react';

export class CountriesList extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-5" style={maxWidth}>
            <div class="list-group">
              <a class="list-group-item list-group-item-action" href="/ABW">
                🇦🇼 Aruba
              </a>
              <a class="list-group-item list-group-item-action" href="/AFG">
                🇦🇫 Afghanistan
              </a>
              <a class="list-group-item list-group-item-action" href="/AGO">
                🇦🇴 Angola
              </a>
              <a class="list-group-item list-group-item-action" href="/AIA">
                🇦🇮 Anguilla
              </a>
              <a class="list-group-item list-group-item-action" href="/ALA">
                🇦🇽 Åland Islands
              </a>
              <a class="list-group-item list-group-item-action" href="/ALB">
                🇦🇱 Albania
              </a>
              <a class="list-group-item list-group-item-action" href="/AND">
                🇦🇩 Andorra
              </a>
              <a class="list-group-item list-group-item-action" href="/ARE">
                🇦🇪 United Arab Emirates
              </a>
              <a class="list-group-item list-group-item-action" href="/ARG">
                🇦🇷 Argentina
              </a>
              <a class="list-group-item list-group-item-action" href="/ARM">
                🇦🇲 Armenia
              </a>
              <a class="list-group-item list-group-item-action" href="/ASM">
                🇦🇸 American Samoa
              </a>
              <a class="list-group-item list-group-item-action" href="/ATA">
                🇦🇶 Antarctica
              </a>
              <a class="list-group-item list-group-item-action" href="/FLK">
                🇫🇰 Falkland Islands
              </a>
              <a
                class="list-group-item list-group-item-action active"
                href="/FRA"
              >
                🇫🇷 France
              </a>
              <a class="list-group-item list-group-item-action" href="/ZWE">
                🇿🇼 Zimbabwe
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const maxWidth = {
  Height: '90vh; overflow: scroll;',
};

export default CountriesList;
