import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as yup from 'yup';

import { getDataFromBackend } from '@/utils/getDataFromBackend';

const loginValidationSchema = yup.object({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const LoginUser = () => {
  /* This is mock implementation of login logic */

  const { push } = useRouter();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      const { data } = await getDataFromBackend(`users?username=${values.username}`);
      if(!data.length){
        return alert('This user doesnt exist');
      }
      if(data[0].password !== values.password){
        return alert('Wrong password');
      }
      if(data.length && data[0].password === values.password){
        push('/users');
      }
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="username"
          name="username"
          label="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
          sx={{ margin: 1 }}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          sx={{ margin: 1 }}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default LoginUser;

