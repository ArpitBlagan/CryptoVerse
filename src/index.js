import ReactDOM from "react-dom/client";
import {App} from './App';
import 'antd/dist/antd';
import { Provider } from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom';
import store from "./Services/store";
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}><Router><App/></Router></Provider>
);