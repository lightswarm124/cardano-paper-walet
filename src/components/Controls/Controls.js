import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TextField, InputLabel, Button } from '@material-ui/core';

import FileSaver from 'file-saver';

import './Controls.css';

import wallet from '../../state/wallet';

class Controls extends Component {
    onResetClick = () => {
        this.props.reset();
    }

    onDownloadClick = () => {
        document.getElementById('canvas').toBlob((blob) => {
            FileSaver.saveAs(blob, 'paper-wallet.png');
        });
    }

    onSetAccount = () => {
        this.props.setAccount();
    }

    onDownloadPrivateClick = () => {
        document.getElementById('canvas-private').toBlob((blob) => {
            FileSaver.saveAs(blob, 'paper-wallet-private.png');
        });
    }

    render() {
        return (
            <div className="controls">
                <div className="controls-row">
                    <InputLabel>Wallet Theme:</InputLabel>
                    <div className="controls-grow">
                        <select name="occasion" id="occasion" defaultValue="happybirthday" onChange={event => this.props.setOccasion(event.target.value)} >
                            <option value="anniversary">Anniversary</option>
                            <option value="christmas">Christmas</option>
                            <option value="congratulations">Congratulations</option>
                            <option value="graduation">Graduation</option>
                            <option value="jobwelldone">Job Well Done</option>
                            <option value="thanks">Thank You</option>
                            <option value="appreciate">Appreciate</option>
                            <option value="happybirthday">Happy Birthday</option>
                            <option value="hanukkah">Hanukkah</option>
                            <option value="newbaby">New Baby</option>
                            <option value="proudofyou">Proud of You</option>
                        </select>
                    </div>
                </div>
                <div className="controls-row">
                    <InputLabel>Recipient Name:</InputLabel>
                    <div className="controls-grow">
                        <TextField placeholder="Enter the recipient's name" value={this.props.name} onChange={event => this.props.setName(event.target.value)} />
                    </div>
                </div>
                <div className="controls-row">
                    <InputLabel>Amount of ADA:</InputLabel>
                    <div className="controls-amount">
                        {/* <TextField placeholder='enter a BTC value' value={this.props.amount} onChange={event => this.props.setAmount(event.target.value)} /> */}
                        <select name="amount" id="amount" onChange={event => this.props.setAmount(event.target.value)}>
                            <option value="1">1</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                    </div>
                </div>
                {/* <div className="controls-row">
                    <InputLabel>Receiving Address:</InputLabel>
                    <div className="controls-grow">
                        <TextField placeholder='enter an address to send BTC to the wallet' value={this.props.address} onChange={event => this.props.setAccount(event.target.value)} />
                    </div>
                </div> */}
                <div className="controls-row">
                    <Button variant="contained" color="primary" component="span" onClick={this.onSetAccount}>
                        Generate New Wallet
                    </Button>
                    <Button variant="contained" color="primary" component="span" onClick={this.onResetClick}>
                        Reset
                    </Button>
                </div>
                <div className="controls-row">
                    <Button variant="contained" color="primary" component="span" onClick={this.onDownloadClick}>
                        Download Address
                    </Button>
                    <Button variant="contained" color="primary" component="span" onClick={this.onDownloadPrivateClick}>
                        Download Mnemonic
                    </Button>
                </div>
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

const mapDispatchToProps = dispatch => ({
    reset: () => dispatch(wallet.actions.reset()),
    setName: (text) => dispatch(wallet.actions.setName(text)),
    setAmount: (amount) => dispatch(wallet.actions.setAmount(amount)),
    setAccount: () => dispatch(wallet.actions.getCardanoAccount()),
    setOccasion: (occasion) => dispatch(wallet.actions.setOccasion(occasion)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
