import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import QRCode from 'qrcode.react';

import background from './dollar_background.jpg';
import cardanoLogo from './cardano.png';

import anniversary from './anniversary.png';
import christmas from './christmas.jpg';
import congratulations from './congratulations.jpg';
import graduation from './graduation.jpg';
import jobwelldone from './jobwelldone.png';
import thanks from './thanks.png';

import appreciate from './appreciate.jpeg';
import happybirthday from './happybirthday.jpg';
import hanukkah from './hanukkah.jpg';
import newbaby from './newbaby.jpg';
import proudofyou from './proudofyou.jpg';

import wallet from '../../state/wallet';

import './Preview.css';

const qrsize = 200;

class Preview extends PureComponent {
    constructor(props) {
        super(props);

        this.redraw = true;
        this.draw = this.draw.bind(this);
    }

    componentDidMount() {
        this._context = this.canvas.getContext('2d');
        this._img = new Image();
        this._img.src = background;

        this._qrSeedImg = new Image();
        this._qrAddressImg = new Image();

        this._cardanoLogo = new Image();
        this._cardanoLogo.src = cardanoLogo;



        this._anniversary = new Image();
        this._anniversary.src = anniversary;

        this._christmas = new Image();
        this._christmas.src = christmas;

        this._congratulations = new Image();
        this._congratulations.src = congratulations;

        this._graduation = new Image();
        this._graduation.src = graduation;

        this._jobwelldone = new Image();
        this._jobwelldone.src = jobwelldone;

        this._thanks = new Image();
        this._thanks.src = thanks;



        this._appreciate = new Image();
        this._appreciate.src = appreciate;

        this._happybirthday = new Image();
        this._happybirthday.src = happybirthday;

        this._hanukkah = new Image();
        this._hanukkah.src = hanukkah;

        this._newbaby = new Image();
        this._newbaby.src = newbaby;

        this._proudofyou = new Image();
        this._proudofyou.src = proudofyou;


        this._qrSeedSvg = document.querySelector('#seed svg');
        this._qrAddressSvg = document.querySelector('#mnemonic svg');

        this._img.onload = () => this.draw(true);
        this._qrSeedImg.onload = () => this._context.drawImage(this._qrSeedImg, ((this.canvas.width / 3) / 2) - (qrsize / 4), this.canvas.height / 2 - qrsize / 2);
        this._qrAddressImg.onload = () => this._context.drawImage(this._qrAddressImg, this.canvas.width - (this.canvas.width / 3) + qrsize / 2, this.canvas.height / 2 - qrsize / 2)
    }

    drawName = () => {
        const offset = 30;
        const width = this.canvas.width - offset * 2;
        const height = 60;
        const posY = this.canvas.height - height - offset;

        this._context.fillStyle = 'rgba(255,0,255,0.95)';
        this._context.fillRect(offset, posY, width, height);

        let fontSize;
        if (this.props.name.length < 80)
            fontSize = 40;
        else if (this.props.name.length < 90)
            fontSize = 35;
        else if (this.props.name.length < 100)
            fontSize = 30;
        else
            fontSize = 25;

        this._context.fillStyle = 'black';
        this._context.font = `${fontSize}px Tahoma, "Nimbus Sans"`;
        this._context.textAlign = 'center';
        this._context.textBaseline = 'middle';
        this._context.fillText(this.props.name, offset + (width / 2), posY + height / 2);
    }

    drawCardanoLogo = () => {
        const offset = 30;
        const width = this.canvas.width - offset * 2;
        const height = 60;
        // const posY = this.canvas.height - height - offset;

        this._context.drawImage(this._cardanoLogo, width / 3.6, 60);

        this._context.fillStyle = '#5588ff';
    }

    drawOccasionsLogo = () => {
        const offset = 30;
        const width = this.canvas.width - offset * 2;
        const height = 60;
        const posY = this.canvas.height - height - offset;

        let logoSrc;
        if (this.props.occasion === 'anniversary') {
            logoSrc = this._anniversary;
        } else if (this.props.occasion === 'christmas') {
            logoSrc = this._christmas;
        } else if (this.props.occasion === 'congratulations') {
            logoSrc = this._congratulations;
        } else if (this.props.occasion === 'graduation') {
            logoSrc = this._graduation;
        } else if (this.props.occasion === 'jobwelldone') {
            logoSrc = this._jobwelldone;
        } else if (this.props.occasion === 'thanks') {
            logoSrc = this._thanks;
        } else if (this.props.occasion === 'appreciate') {
            logoSrc = this._appreciate;
        } else if (this.props.occasion === 'happybirthday') {
            logoSrc = this._happybirthday;
        } else if (this.props.occasion === 'hanukkah') {
            logoSrc = this._hanukkah;
        } else if (this.props.occasion === 'newbaby') {
            logoSrc = this._newbaby;
        } else if (this.props.occasion === 'proudofyou') {
            logoSrc = this._proudofyou;
        }
        this._context.drawImage(logoSrc, 100, 200);
        this._context.fillStyle = '#5588ff';
    }

    drawOccasion = () => {
        const offset = 70;
        const width = (this.canvas.width / 5);
        const height = 60;

        this._context.fillStyle = 'rgba(255,0,255,1)';
        this._context.fillRect(this.canvas.width / 2 - width * 2 + 80, offset, width * 3.5, height);

        this._context.fillStyle = 'black';
        this._context.font = '40px Tahoma, "Nimbus Sans"';
        this._context.textAlign = 'center';
        this._context.textBaseline = 'top';

        let occassionMessage = '';
        if (this.props.occasion === 'anniversary') {
            occassionMessage = 'Happy Anniversary';
        } else if (this.props.occasion === 'christmas') {
            occassionMessage = 'Merry Christmas';
        } else if (this.props.occasion === 'congratulations') {
            occassionMessage = 'Congratulations';
        } else if (this.props.occasion === 'graduation') {
            occassionMessage = 'Graduation';
        } else if (this.props.occasion === 'jobwelldone') {
            occassionMessage = 'Job Well Done';
        } else if (this.props.occasion === 'thanks') {
            occassionMessage = 'Thank You';
        } else if (this.props.occasion === 'appreciate') {
            occassionMessage = 'Much Appreciation';
        } else if (this.props.occasion === 'happybirthday') {
            occassionMessage = 'Happy Birthday';
        } else if (this.props.occasion === 'hanukkah') {
            occassionMessage = 'Happy Hanukkah';
        } else if (this.props.occasion === 'newbaby') {
            occassionMessage = 'New Baby';
        } else if (this.props.occasion === 'proudofyou') {
            occassionMessage = 'So Proud of You';
        }
        this._context.strokeText(occassionMessage, this.canvas.width / 2, offset + 15);
    }

    drawTitle = () => {
        const offset = 5;
        const width = (this.canvas.width / 5);
        const height = 60;

        this._context.fillStyle = 'rgba(255,0,255,1)';
        this._context.fillRect(this.canvas.width / 2 - width * 1.5, offset, width * 3, height);

        this._context.fillStyle = 'black';
        this._context.font = '40px Tahoma, "Nimbus Sans"';
        this._context.textAlign = 'center';
        this._context.textBaseline = 'top';
        this._context.strokeText('giveADA.com - cryptocurrency giving made fun', this.canvas.width / 2, offset + 15);
    }

    drawMnemonic = () => {
        const offset = 30;
        const width = (this.canvas.width / 3);
        const height = 50;

        this._context.fillStyle = 'rgba(255,0,255,0.95)';
        this._context.fillRect(this.canvas.width - offset - width, offset * 15, width, height * 1.5);

        this._context.textAlign = 'center';

        this._context.fillStyle = 'black';
        this._context.font = '16px Tahoma, "Nimbus Sans"';
        this._context.textBaseline = 'top';
        this._context.fillText('Mnemonic Phrase:', (this.canvas.width - offset - width) + (width / 2), offset * 15 + 5);

        this._context.fillStyle = '#000';
        this._context.font = '14px Tahoma, "Nimbus Sans"';
        this._context.textBaseline = 'bottom';
        this._context.fillText(this.props.mnemonic.split(' ').slice(0, 12), (this.canvas.width - offset - width) + (width / 2), offset * 16.5, 1000);
        this._context.fillText(this.props.mnemonic.split(' ').slice(13, 25), (this.canvas.width - offset - width) + (width / 2), offset * 16.5 + 25, 1000);
    }

    drawAmount = () => {
        const offset = 30;
        const width = (this.canvas.width / 3);
        const height = 50;
        this._context.fillStyle = 'rgba(255,0,255,0.95)';
        this._context.fillRect(35, 35, width / 3, height * 2.5);

        this._context.fillStyle = 'rgba(255,0,255,0.95)';
        this._context.fillRect(width * 2.5 + 50, 35, width / 3, height * 2.5);

        this._context.font = '100px Tahoma, "Nimbus Sans"';
        this._context.textAlign = 'left';
        this._context.textBaseline = 'top';
        this._context.fillStyle = '#111111';
        this._context.fillText(this.props.amount, 35, 35);
        this._context.fillText(this.props.amount, width * 2.5 + 50, 35);
        this._context.font = '40px Tahoma, "Nimbus Sans"';
        this._context.fillText('ADA', 80, 120);
        this._context.fillText('ADA', width * 2.5 + 95, 120);
    }

    drawQRMnemonic = () => {
        const xml = new XMLSerializer().serializeToString(this._qrAddressSvg);
        this._qrAddressImg.src = `data:image/svg+xml;base64,${btoa(xml)}`;

        this._context.fillStyle = 'black';
    }

    draw(init) {
        if (!init)
            this._context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this._context.drawImage(this._img, 0, 0, this.canvas.width, this.canvas.width * (this._img.height / this._img.width))

        this.drawCardanoLogo();
        this.drawOccasionsLogo();
        this.drawMnemonic();
        this.drawAmount();
        this.drawOccasion();
        this.drawTitle();
        this.drawName();
        this.drawQRMnemonic();

        this.redraw = false;
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.redraw = (this.props.name !== nextProps.name || this.props.amount !== nextProps.amount || this.props.address !== nextProps.address || this.props.occasion !== nextProps.occasion);
    }

    componentDidUpdate() {
        if (this.redraw)
            this.draw();
    }

    render() {
        return (
            <div className="wallet">
                <canvas id="canvas-private" ref={canvas => this.canvas = canvas} width="1544" height="657" />
                <div className="qrcode" id="mnemonic"><QRCode value={this.props.mnemonic} renderAs="svg" level="L" size={qrsize} /></div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    name: wallet.selectors.getName(state),
    amount: wallet.selectors.getAmount(state),
    address: wallet.selectors.getAddress(state),
    occasion: wallet.selectors.getOccasion(state),
    mnemonic: wallet.selectors.getMnemonic(state),
});

export default connect(mapStateToProps)(Preview);
