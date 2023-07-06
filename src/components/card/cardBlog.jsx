import Input from "Components/form/input";
import { UPDATE_BLOG } from "Services/reducers/blog";
import { useFormik } from "formik";
import { CloseCircle, Edit } from "iconsax-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from 'yup'

const CardBlog = ({ img, title, content, id }) => {
    const initialValues = {
        title: title,
        content: content
    }

    const dispatch = useDispatch()

    const [showForm, setShowForm] = useState(false)

    const editHandler = () => {
        setShowForm(true)
    }

    const validationSchema = Yup.object({
        title: Yup.string().required("Title is required"),
        content: Yup.string().required("Content is required"),
    })

    const onSubmit = (values) => {
        dispatch(UPDATE_BLOG({ id, values }))
        setShowForm(false)
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })

    return (
        <div className="bg-white border border-gray-200 rounded-xl p-4">
            <div className=" flex items-center gap-4">
                <img src={img} loading="lazy" className="rounded-full w-16 h-16 object-cover" alt={title} />
                <div>
                    <span className="block font-medium">{title}</span>
                    <p className="text-sm line-clamp-1">{content}</p>
                </div>
                {!showForm && <button onClick={editHandler}>
                    <Edit size="20" color="#3B82F6" variant="TwoTone" />
                </button>}

            </div>
            {showForm ?
                <form className="mt-5 flex flex-col gap-4" onSubmit={formik.handleSubmit}>
                    <Input label="Title" type="text" placeholder="" name="title" formik={formik} />
                    <Input label="Content" type="text" placeholder="" name="content" formik={formik} />


                    <div className="flex justify-center gap-2">
                        <button type="submit" className="bg-green-500 text-white px-2 py-2 text-sm rounded-lg w-1/2">Submit</button>
                        <button className="px-2 py-2 text-sm rounded-lg border border-gray-400 text-gray-400" onClick={()=> setShowForm(false)}>Cancle</button>
                    </div>
                </form>
                : ""
            }
        </div>
    );
}

export default CardBlog;