import React from "react";

import { Button, FormControl, Input, InputLabel, MenuItem, Select } from "@material-ui/core";
import { selectCommunity } from "../selectors/preview";
import { setCommunity } from "../actions/preview";
import { connect } from "react-redux";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import '../../scss/SelectCommunityModal.scss';




const mapStateToProps = (state: any) => {
    return {
        currentCommunity: selectCommunity()(state),
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        setCurrentCommunity: (community: string) => dispatch(setCommunity(community)),
    };
};

type MenuPropType =
    ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;


function SelectCommunityModal({ currentCommunity, setCurrentCommunity }: MenuPropType) {
    const [open, setOpen] = React.useState(false);
    const [community, setCommunity] = React.useState(currentCommunity);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = (decision: boolean) => {
        setOpen(false);

        if (decision) {
            setCurrentCommunity(community)
            console.log(community);
        }
    };

    const communities = [
        "DotNetRu",
        "EkbDotNet",
        "KrdDotNet",
        "KryDotNet",
        "KznDotNet",
        "MskDotNet",
        "NnvDotNet",
        "NskDotNet",
        "OmsDotNet",
        "PnzDotNet",
        "SamDotNet",
        "SpbDotNet",
        "UfaDotNet"
    ];

    return (
        <>
            <Button
                variant="contained"
                onClick={ handleOpen }
            >Select Community
            </Button>
            <Dialog disableBackdropClick disableEscapeKeyDown open={ open } onClose={ handleClose } className="select-community-modal" >
                <DialogTitle>Select community</DialogTitle>
                <DialogContent>
                    <form className="select-community-modal__form">
                        <FormControl>
                            <InputLabel htmlFor="select-community">Community</InputLabel>
                            <Select
                                value={ community }
                                onChange={ (e: any) => setCommunity(e.target.value) }
                                input={ <Input id="select-community" /> }
                            >
                                {
                                    communities.map(e => <MenuItem key={ e } value={ e }>{ e }</MenuItem>)
                                }
                            </Select>
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={ () => handleClose(false) } color="primary">
                        Cancel
                    </Button>
                    <Button onClick={ () => handleClose(true) } color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectCommunityModal);
