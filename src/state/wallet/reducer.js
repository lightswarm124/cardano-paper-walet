import * as t from './actionTypes';

const initialState = {
    name: 'giveADA',
    amount: '1',
    address: 'enter your receiving address here',
    mnemonic: 'mnemonic phrase - 24 words',
    occasion: 'happybirthday',
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;

        case t.SET_NAME:
            return { ...state, name: action.payload };

        case t.SET_AMOUNT:
            return { ...state, amount: action.payload };

        case t.SET_OCCASION:
            return { ...state, occasion: action.payload };

        case t.SET_MNEMONIC:
            return { ...state, mnemonic: action.payload };

        case t.SET_ADDRESS:
            return { ...state, address: action.payload };

        case t.RESET:
            return initialState;
    }
}

// christmas, congratulations, graduation, thank you, new baby, proud of you
