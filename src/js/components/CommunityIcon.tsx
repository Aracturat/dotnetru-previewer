import React from 'react';
import { connect } from "react-redux";

import { selectCommunityIconUrl } from "../selectors/preview";

import '../../scss/CommunityIcon.scss';

interface CommunityIconPropType {
    iconUrl: string
}


const CommunityIcon: React.FC<CommunityIconPropType> = ({ iconUrl }) => {
    return (
        <div className="photo">
            <img className="photo__img" src={ iconUrl } />
        </div>
    );
};

const mapStateToProps = (state: any): CommunityIconPropType => {
    return {
        iconUrl: selectCommunityIconUrl()(state)
    };
};

export default connect(mapStateToProps)(CommunityIcon);
