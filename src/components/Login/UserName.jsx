// import './Login.css'
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form'

function UserName() {

    const {
        handleSubmit,
        formState: { errors },
        register
    } = useForm();

    const { ref, ...inputProps } = register(
        "username", {
        required: "*Username is required",
        minLength: { value: 4, message: "Username must be 4 characters or more." }
    });

    function onSumbit(e) {
        console.log(e)
    }
    return (

        <form onSubmit={handleSubmit(onSumbit)}>
            <TextField
                variant="outlined"
                margin="none"
                label="Username"
                error={!!errors.username}
                helperText={errors?.username?.message}
                inputRef={ref}
                {...inputProps}
            />
        </form>

    )
}

export default UserName