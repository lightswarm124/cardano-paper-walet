import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const composeEnhancers = composeWithDevTools({
    name: 'paper-wallet',
    serialize: true,
});

const middleware = [thunkMiddleware];

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(...middleware),
    ),
);

export default store;
