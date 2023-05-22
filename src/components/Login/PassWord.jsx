import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form'

function PassWord() {

    const {
        handleSubmit,
        formState: { errors },
        register
    } = useForm();

    const { ref, ...inputProps } = register(
        "password", {
        required: "*Password is required",
        minLength: { value: 6, message: "Password must be 6-14 notes." },
        maxLength: { value: 14, message: "Password must be 6-14 notes." }
    });

    function onSumbit(e) {
        e.preventDefault()
    }


    // <form> <Username /> <Password /> <button> </form>
    return (

        <form onSubmit={handleSubmit(onSumbit)}>
            <TextField
                variant="outlined"
                margin="none"
                label="Password"
                error={!!errors.password}
                helperText={errors?.password?.message}
            // inputRef={ref}
            // {...inputProps}
            />
            <br />
            <input id='loginSubmit' type="submit" />
        </form>

    )
}

export default PassWord