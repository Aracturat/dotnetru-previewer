import {
    SET_SELECTED_FIELD_FONT_SIZE,
    SET_INPUT_DISABLED_STATE,
    SET_SELECTED_FIELD,
    SET_REPORTER_PHOTO_URL, SET_COMMUNITY
} from "../constants/action-names";

export function setInputDisabledState(isDisabled: boolean) {
    return {
        type: SET_INPUT_DISABLED_STATE,
        payload: {
            isDisabled
        }
    };
}

export function setSelectedFieldFontSize(fontSize: number) {
    return {
        type: SET_SELECTED_FIELD_FONT_SIZE,
        payload: {
            fontSize
        }
    };
}

export function setSelectedField(field: string) {
    return {
        type: SET_SELECTED_FIELD,
        payload: {
            field
        }
    };
}

export function setCommunity(community: string) {
    return {
        type: SET_COMMUNITY,
        payload: {
            community
        }
    };
}

export function setReporterPhotoUrl(photoUrl: string) {
    return {
        type: SET_REPORTER_PHOTO_URL,
        payload: {
            photoUrl
        }
    };
}
