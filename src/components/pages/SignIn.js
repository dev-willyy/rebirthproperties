import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../../styles/SignIn.scss";

function SignUp() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const [show, setShow] = useState(true);

    const handleShow = () => setShow(!show);
    const onSubmit = (data) => console.log(data);

    console.log(watch("username"));

    return (
        <section className="signUp-wrapper">
            <div className="register">
                <div className="register-child">
                    <h2>Welcome Back!</h2>
                    <span>Gain Access to your Private Dashboard</span>
                    <form action="" id="form" onClick={handleSubmit(onSubmit)}>
                        <input type="text" placeholder="Username" {...register("username", { required: true })} />
                        {errors.username?.type === "required" && "Username is Required"}
                        <input
                            type="text"
                            placeholder="Mobile Number"
                            {...register("mobileNumber", { required: true })}
                        />
                        {errors.mobileNumber?.type === "required" && "Mobile Number is Required"}
                        <label htmlFor="">
                            <strong onClick={handleShow}>
                                {show ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                            </strong>
                            <input
                                type={show ? "text" : "password"}
                                placeholder="Password"
                                {...register("password", { required: true })}
                            />
                            {errors.password?.type === "required" && "Password must be entered"}
                        </label>
                        <label htmlFor="">
                            <strong onClick={handleShow}>
                                {show ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                            </strong>
                            <input
                                type={show ? "text" : "password"}
                                placeholder="Confirm Password"
                                {...register("confirmPwd", { required: true })}
                            />
                            {errors.confirmPwd?.type === "required" && "Password must be the same"}
                        </label>
                        <button className="signUp-btn">Sign In</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default SignUp;
