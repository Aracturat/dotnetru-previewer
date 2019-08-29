import React, { useState } from 'react';
import Cropper from 'react-easy-crop';
import { connect } from "react-redux";

import { selectInputDisabledState, selectReporterPhotoUrl } from "../selectors/preview";

import '../../scss/Photo.scss';

interface PhotoPropType {
    reporterPhotoUrl: string,
    isDisabled: boolean
}

const Photo: React.FC<PhotoPropType> = ({ reporterPhotoUrl, isDisabled }) => {
    const [crop, changeCrop] = useState({ x: 0, y: 0 });
    const [zoom, changeZoom] = useState(1);

    return (
        <div className={ isDisabled ? 'photo photo--disabled' : 'photo' }>
            <Cropper image={ reporterPhotoUrl }
                crop={ crop }
                onCropChange={ changeCrop }
                zoom={ zoom }
                onZoomChange={ changeZoom }
                zoomSpeed={0.2}
                aspect={ 60 / 72 }
                showGrid={ false }
                restrictPosition={ false }
                cropSize={ { width: 600, height: 720 } }
                style={{cropAreaStyle: { border: "none"}, containerStyle: {}, imageStyle: {}}}
            />
            { isDisabled ||
			<>
				<div className="photo__vertical-lines" />
				<div className="photo__horizontal-lines" />
			</> }
        </div>
    );
};

const mapStateToProps = (state: any): PhotoPropType => {
    return {
        reporterPhotoUrl: selectReporterPhotoUrl()(state),
        isDisabled: selectInputDisabledState()(state)
    };
};

export default connect(mapStateToProps)(Photo);
