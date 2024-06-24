import {Button, ButtonProps, styled} from "@mui/material";
import {purple} from "@mui/material/colors";

export const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
}));