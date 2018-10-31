import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';
import AppRouter from './routers/AppRouter';
import { GlobalStyle } from './styles/GlobalStyle';


const jsx = (
    <div>
        <GlobalStyle />
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </div>
);

ReactDOM.render(jsx, document.getElementById('root'));