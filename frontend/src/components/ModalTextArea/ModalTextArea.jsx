import TextField from "@mui/material/TextField";
const ModalTextArea = ({ className, ...props }) => {
    return (
        <TextField
            label="Few words..."
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            placeholder="Enter something!!!"
            className={className}
            {...props}
        />
    )
}
export default ModalTextArea;