import React from 'react';
import { Provider } from 'react-redux';

import TodoList from '../container/TodoList';
import store from '../store/confugureStore';

export default class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <TodoList />
            </Provider>
        )
    }
}

