const Input = ({ label, type, placeholder, name, formik }) => {
    return (
        <div className="relative">
            <label className='block mb-1 text-gray-600 font-medium' htmlFor={name}>{label}</label>
            <input 
               {...formik.getFieldProps({ name })}
            className='py-2 px-3 w-full rounded-md placeholder:text-sm outline-none' name={name} placeholder={placeholder} type={type} />
            {formik.errors[name] && formik.touched[name] && <span className="text-xs absolute text-red-600 -bottom-4 left-0">{formik.errors[name] }</span>}
        </div>
    );
}

export default Input;