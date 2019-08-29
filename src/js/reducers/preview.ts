import {
    InferActionTypes,
    SET_SELECTED_FIELD_FONT_SIZE,
    SET_INPUT_DISABLED_STATE,
    SET_SELECTED_FIELD,
    SET_REPORTER_PHOTO_URL
} from "../constants/action-names";

import * as ActionCreators from '../actions/preview';

type ActionTypes = InferActionTypes<typeof ActionCreators>;

export interface IPreview {
    fontSizes: { [key: string]: number }
    selectedField: string | null;
    communityIconUrl: string;
    reporterPhotoUrl: string;
    isInputDisabled: boolean;
}

export const defaultPreviewState: IPreview = {
    fontSizes: {
        talk: 65,
        reporter: 50
    },
    selectedField: 'TITLE',
    communityIconUrl: 'https://raw.githubusercontent.com/AnatolyKulakov/SpbDotNet/master/Swag/nskdotnet-squared-logo/nskdotnet-squared-logo-200.png',
    reporterPhotoUrl: 'https://raw.githubusercontent.com/DotNetRu/Audit/master/db/speakers/Zagir-Aknazarov/avatar.jpg',
    isInputDisabled: false
};

export function previewReducer(state = defaultPreviewState, action: ActionTypes): IPreview {
    switch (action.type) {
        case SET_SELECTED_FIELD_FONT_SIZE:
            return setSelectedFieldFontSize(state, action.payload.fontSize);
        case SET_SELECTED_FIELD:
            return setSelectedField(state, action.payload.field);
        case SET_INPUT_DISABLED_STATE:
            return setInputDisabledState(state, action.payload.isDisabled);
        case SET_REPORTER_PHOTO_URL:
            return setReporterPhotoUrl(state, action.payload.photoUrl);
        default:
            return state;
    }
}

function setSelectedFieldFontSize(state: IPreview, fontSize: number): IPreview {
    if (state.selectedField) {
        return {
            ...state,
            fontSizes: {
                ...state.fontSizes,
                [state.selectedField]: fontSize
            }
        };
    }
    return state;
}

function setSelectedField(state: IPreview, field: string): IPreview {
    return {
        ...state,
        selectedField: field
    };
}

function setInputDisabledState(state: IPreview, isDisabled: boolean): IPreview {
    return {
        ...state,
        isInputDisabled: isDisabled
    };
}


function setReporterPhotoUrl(state: IPreview, photoUrl: string): IPreview {
    return {
        ...state,
        reporterPhotoUrl: photoUrl
    };
}

