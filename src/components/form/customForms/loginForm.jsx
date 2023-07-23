import Input from 'Components/form/input';
import logo from 'Images/Logo.svg'
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from 'yup'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { ADD_USER_INFO } from 'Services/reducers/auth';
import { useTranslation } from 'react-i18next';


const LoginForm = () => {
    const { t, i18n } = useTranslation();

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const initialValues = {
        email: "",
        password: "",
        check: false
    }

    const validationSchema = Yup.object({
        email: Yup.string().required(t("login.required_email")),
        password: Yup.string().required(t("login.pass_required")).min(8, t("login.short_pass"))
            .matches(/[a-zA-Z]/, t("login.pass_match")),
        check: Yup.boolean()
            .required("Remember for 30 days must be accepted.")
            .oneOf([true], "Remember for 30 days must be accepted.")
    })

    const onSubmit = (values) => {
        toast.success(t("navbar.welcome_back"))
        localStorage.setItem('auth', JSON.stringify({
            email: values.email,
            password: values.password
        }));
        dispatch(ADD_USER_INFO())
        navigate("/")
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    return (
        <div style={{ direction: i18n.language == "fa" ? "rtl" : "ltr", fontFamily: i18n.language == "fa" && "Vazir" }}>
            <main className="xl:container mx-auto ">
                <div className="md:w-full mx-auto">
                    <div className="grid md:grid-cols-2 h-[100vh]">
                        <div className='flex h-full justify-center items-center md:p-4 p-8 z-10'>
                            <div className='flex flex-col gap-6 lg:w-2/3 md:w-3/4 w-full'>
                                <h3 className='font-bold text-3xl'>{t("login.welcome")}</h3>
                                <span className='font-light text-gray-500 text-sm'>{t("login.welcome_details")}</span>
                                <form className='mt-6 flex flex-col gap-4' onSubmit={formik.handleSubmit}>

                                    <Input label={t("login.email")} type="email" placeholder={t("login.enter_email")} formik={formik} name="email" />
                                    <Input label={t("login.password")} type="password" placeholder={t("login.enter_pass")} formik={formik} name="password" />

                                    <div className="flex items-center justify-between mb-4">
                                        <div className='flex items-center relative'>
                                            <input type="checkbox" name="check" onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-4 h-4 text-blue-600 mx-2 bg-gray-100 border-gray-300 rounded " />
                                            <label htmlFor="check" className={`ml-1 text-sm ${formik.errors.check && formik.touched.check ? "text-red-600" : "text-gray-700"}`}>{t("login.remember")}</label>
                                        </div>

                                    </div>

                                    <button className='bg-blue-500 text-white py-2 rounded-lg' type='submit' >{t("navbar.login")}</button>
                                   
                                </form>
                            </div>
                        </div>
                        <div className='md:flex flex-col h-full justify-center items-center bg-white contents'>
                            <div className='w-40 h-40 bg-blue-500 rounded-full md:static absolute top-[2rem] left-0 right-0 md:m-0 m-auto'></div>
                            <div className='w-60 h-40 backdrop-blur-xl bg-white/30 md:-mt-20 md:static absolute top-[7rem] left-0 md:m-0 right-0 m-auto'></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default LoginForm;