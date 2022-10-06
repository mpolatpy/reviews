import React, { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const MoreActionsButton = ({ menuItems }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Tooltip title="More Actions">
                <IconButton
                    id="more-actions-button"
                    aria-controls={open ? 'more-actions-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <MoreHorizIcon color="primary" />
                </IconButton>
            </Tooltip>
            <Menu
                id="more-actions-menu'"
                aria-labelledby="more-actions-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                {
                    menuItems.map((item, i) => (
                        <MenuItem key={`menu-item-${i}`} onClick={item.handleAction}>
                            {item.text}
                        </MenuItem>
                    ))
                }
            </Menu>
        </div>
    );
}

export default MoreActionsButton;
