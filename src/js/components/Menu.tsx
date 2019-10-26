import React from 'react';
import { Button, FormControlLabel, Slider, Switch } from "@material-ui/core";
import htmlToImage from 'html-to-image';

import { connect } from "react-redux";

import { selectInputDisabledState, selectSelectedFieldFontSize } from "../selectors/preview";
import { setInputDisabledState, setReporterPhotoUrl, setSelectedFieldFontSize } from "../actions/preview";

import '../../scss/Menu.scss';
import SelectCommunityModal from "./SelectCommunityModal";


const mapStateToProps = (state: any) => {
    return {
        isInputDisabled: selectInputDisabledState()(state),
        selectedFieldFontSize: selectSelectedFieldFontSize()(state),
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        setInputDisabledState: (isDisabled: boolean) => dispatch(setInputDisabledState(isDisabled)),
        setSelectedFieldFontSize: (fontSize: number) => dispatch(setSelectedFieldFontSize(fontSize)),
        setReporterPhotoUrl: (url: string) => dispatch(setReporterPhotoUrl(url))
    };
};

type MenuPropType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;


const Menu: React.FC<MenuPropType> = (props) => {
    const {
        isInputDisabled,
        selectedFieldFontSize,
        setInputDisabledState,
        setSelectedFieldFontSize,
        setReporterPhotoUrl
    } = props;

    const saveAsImage = () => {
        let previewElement = document.getElementById('preview');

        if (previewElement) {
            htmlToImage.toJpeg(previewElement, { quality: 0.95 })
                .then(function (dataUrl) {
                    let link = document.createElement('a');
                    link.download = 'my-image-name.jpeg';
                    link.href = dataUrl;
                    link.click();
                });
        }
    };

    const selectCommunity = () => {
        alert('click');
    };

    const handleFileChange = (event: any) => {
        setReporterPhotoUrl(URL.createObjectURL(event.target.files[0]));
    };

    return (
        <div className="menu">
            <div className="menu__disable-inputs">
                <FormControlLabel
                    control={
                        <Switch checked={ isInputDisabled }
                            onChange={ (e: any) => setInputDisabledState(e.target.checked) }
                            inputProps={ { 'aria-label': 'Disable inputs toogle' } }
                            color="primary"
                        />
                    } label="Disable inputs"
                />
            </div>
            <div className="menu__font-size">
                <FormControlLabel
                    className="menu__font-size"
                    control={
                        <Slider
                            value={ selectedFieldFontSize || 0 }
                            disabled={ selectedFieldFontSize === 0 }
                            onChange={ (e, v) => setSelectedFieldFontSize(v as number) }
                            min={ 40 }
                            max={ 65 }
                            valueLabelDisplay="off"
                            className="menu__font-size-slider"
                        />
                    } label="Font size"
                />
            </div>
            <div className="menu__select-photo">
                <input className="menu__select-photo-input"
                    id="menu__select-photo"
                    type="file"
                    onChange={ handleFileChange }
                />
                <label className="menu__select-photo-label" htmlFor="menu__select-photo">
                    <Button component="span" variant="contained">
                        Upload Photo
                    </Button>
                </label>
            </div>
            <div className="menu__select-community">
               <SelectCommunityModal/>
            </div>
            <div className="menu__save-as-image">
                <Button
                    variant="contained"
                    color="primary" onClick={ saveAsImage }
                >Save as Image
                </Button>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
