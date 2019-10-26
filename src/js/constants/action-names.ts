export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionTypes<T extends { [key: string]: (...args: any) => any }> = ReturnType<InferValueTypes<T>>;

export const SET_INPUT_DISABLED_STATE = 'SET_INPUT_DISABLED_STATE' as const;
export const SET_SELECTED_FIELD_FONT_SIZE = 'SET_SELECTED_FIELD_FONT_SIZE' as const;
export const SET_SELECTED_FIELD = 'SET_SELECTED_FIELD' as const;
export const SET_REPORTER_PHOTO_URL = 'SET_REPORTER_PHOTO_URL' as const;
export const SET_COMMUNITY = 'SET_COMMUNITY' as const;
