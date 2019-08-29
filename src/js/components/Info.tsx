import React from 'react';
import { connect } from "react-redux";

import CommunityIcon from "./CommunityIcon";
import { selectFontSize, selectInputDisabledState } from "../selectors/preview";

import '../../scss/Info.scss';
import { setSelectedField } from "../actions/preview";

const mapStateToProps = (state: any) => {
    return {
        talkFontSize: selectFontSize('talk')(state),
        reporterFontSize: selectFontSize('reporter')(state),
        isInputDisabled: selectInputDisabledState()(state)
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        setSelectedField: (field: string) => dispatch(setSelectedField(field))
    };
};

type InfoPropType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const Info: React.FC<InfoPropType> = ({ talkFontSize, reporterFontSize, isInputDisabled, setSelectedField }) => {
    return (
        <div className="info">
            <div className="info__talk-name"
                suppressContentEditableWarning={true}
                contentEditable={!isInputDisabled}
                style={ { fontSize: talkFontSize } }
                onClick={ e => setSelectedField('talk') }
            >
                Запускаем в K8S микросервисы на .NET Core - наш опыт
            </div>
            <div className="info__bottom-section">
                <div className="info__community-icon">
                    <CommunityIcon />
                </div>
                <div className="info__reporter-name"
                    suppressContentEditableWarning={true}
                    contentEditable={!isInputDisabled}
                    style={ { fontSize: reporterFontSize } }
                    onClick={ e => setSelectedField('reporter') }
                >
                    Загир <br/> Акназаров
                </div>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);
