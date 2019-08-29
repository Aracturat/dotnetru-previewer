import React from 'react';
import '../scss/App.scss';
import Preview from "./components/Preview";
import Menu from './components/Menu';

const App: React.FC = () => {
    return (
        <div className="app">
            <Menu />
            <Preview />
        </div>
    );
};

export default App;
