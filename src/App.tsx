import React from 'react';
import {Provider} from "react-redux";
import store from "./redux/store";
import Input from "./components/Input/Input";
import List from "./components/List/List";

function App() {
    return (
        <Provider store={store}>
            <Input />
            <List />
        </Provider>
    );
}

export default App;
