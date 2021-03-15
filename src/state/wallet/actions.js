import * as t from './actionTypes';
import { getAccount } from '../../utils/getAccount';

export const setName = (name) => {
    return ({
        type: t.SET_NAME,
        // payload: seed.substring(0, 115),
        payload: name,
    }
)};

export const setAmount = (amount) => ({
    type: t.SET_AMOUNT,
    payload: amount.substring(0, 14),
});

export const setOccasion = (occasion) => ({
    type: t.SET_OCCASION,
    payload: occasion,
});

export const setMnemonic = (mnemonic) => ({
    type: t.SET_MNEMONIC,
    payload: mnemonic,
});

export const setAddress = (address) => ({
    type: t.SET_ADDRESS,
    payload: address,
});

export const getCardanoAccount = () => {
    const { mnemonic, address } = getAccount();
    return ((dispatch) => {
        dispatch(setAddress(address));
        dispatch(setMnemonic(mnemonic));
    });
}

export const reset = () => ({
    type: t.RESET,
});
