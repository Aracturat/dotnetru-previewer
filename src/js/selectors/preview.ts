import { createSelector } from "reselect";
import { defaultPreviewState, IPreview } from "../reducers/preview";

export const selectPreview = (state: any): IPreview => state.preview || defaultPreviewState;

export const selectReporterPhotoUrl = () =>
    createSelector(
        selectPreview,
        preview => preview.reporterPhotoUrl
    );

export const selectCommunityIconUrl = () =>
    createSelector(
        selectPreview,
        preview => preview.communityIconUrl
    );

export const selectFontSize = (field: string) =>
    createSelector(
        selectPreview,
        preview => preview.fontSizes[field] || 0
    );

export const selectSelectedFieldFontSize = () =>
    createSelector(
        selectPreview,
        preview => preview.selectedField ? preview.fontSizes[preview.selectedField] : null
    );

export const selectInputDisabledState = () =>
    createSelector(
        selectPreview,
        preview => preview.isInputDisabled
    );

