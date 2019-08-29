import React from 'react';

import Info from './Info';
import Photo from './Photo';

import '../../scss/Preview.scss';

const Preview: React.FC = () => {
    return (
        <div className="preview" id="preview">
            <div className="preview__info">
                <Info />
            </div>
            <div className="preview__photo">
                <Photo />
            </div>
            <div className="preview__bar"/>
        </div>
    )
};

export default Preview;
