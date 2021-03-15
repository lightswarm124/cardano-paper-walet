import React, { PureComponent } from 'react';

import './Footer.css';

export default class Footer extends PureComponent {
    render() {
        return (<div className="Footer">
            <span>
                <a href="https://electrum.org" rel="noopener noreferrer" target="_blank">giveADA.com</a> - cryptocurrency giving made fun
            </span>
            <span>
                Released under the MIT Licence
            </span>
        </div>);
    }
}
