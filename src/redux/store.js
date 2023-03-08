import { createStore, combineReducers } from "redux";
import userReducer from './reducers/userReducer';

const mainReducer = combineReducers({
    user: userReducer,
});

const commonData = {
    user: {
        items: [
            {
                id: 1, name: 'test1', email: 'test1@gmail.com', phone: '9876543210'
            },
            {
                id: 2, name: 'test2', email: 'test2@gmail.com', phone: '9876543211'
            },
        ]
    }
}

const store = createStore(mainReducer, commonData);