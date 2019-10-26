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
        preview => {
            let community = preview.community.toLowerCase();
            let baseUrl = `https://raw.githubusercontent.com/AnatolyKulakov/SpbDotNet/master/Swag`;

            return `${ baseUrl }/${ community }-squared-logo/${ community }-squared-logo-200.png`;
        }
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

export const selectCommunity = () =>
    createSelector(
        selectPreview,
        preview => preview.community
    );
