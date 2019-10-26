import {
    InferActionTypes,
    SET_SELECTED_FIELD_FONT_SIZE,
    SET_INPUT_DISABLED_STATE,
    SET_SELECTED_FIELD,
    SET_REPORTER_PHOTO_URL, SET_COMMUNITY
} from "../constants/action-names";

import * as ActionCreators from '../actions/preview';

type ActionTypes = InferActionTypes<typeof ActionCreators>;

export interface IPreview {
    fontSizes: { [key: string]: number }
    selectedField: string | null;
    community: string;
    reporterPhotoUrl: string;
    isInputDisabled: boolean;
}

export const defaultPreviewState: IPreview = {
    fontSizes: {
        talk: 65,
        reporter: 50
    },
    selectedField: 'TITLE',
    community: 'DotNetRu',
    reporterPhotoUrl: 'https://www.sccpre.cat/mypng/detail/8-87398_computer-icons-login-person-black-black-and-white.png',
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
        case SET_COMMUNITY:
            return setCommunity(state, action.payload.community);
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

function setCommunity(state: IPreview, community: string): IPreview {
    return {
        ...state,
        community
    };
}

