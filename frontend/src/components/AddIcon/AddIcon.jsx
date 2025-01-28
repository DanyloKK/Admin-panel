import Stack from '@mui/material/Stack';
import {createSvgIcon} from "@mui/material/utils";
const PlusIcon = createSvgIcon(
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="green"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="green"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>,
    'Plus',
);
const AddIcon = () => (
    <Stack >
        <PlusIcon />
    </Stack>
)
export default AddIcon;