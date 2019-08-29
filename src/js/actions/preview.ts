import { SET_SELECTED_FIELD_FONT_SIZE, SET_INPUT_DISABLED_STATE, SET_SELECTED_FIELD } from "../constants/action-names";

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
