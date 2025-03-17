"use client"

import React, { useState } from "react";

interface formData{
    name?: string;
    email: string;
    password: string;
    password_confirmation?: string;
}

const Auth: React.FC = () => {
    const [isLogin, setIslogin] = useState<boolean>(true);
    const [formData, setFormData] = useState<formData>({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if(isLogin){
            alert("Login submitted");
        } else {
            alert("Register submitted");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4" style={{width: "400px"}}>
                <h3 className="text-center">{ isLogin ? "Login" : "Register" }</h3>
                <form onSubmit={handleFormSubmit}>
                    {!isLogin && (
                        <input 
                            className="form-control mb-2" 
                            name="name" 
                            type="text"
                            value={formData.name}
                            onChange={handleOnChangeInput}
                            placeholder="Name" 
                            required 
                        />
                    )}
                    
                    <input 
                        className="form-control mb-2" 
                        name="email" 
                        type="email"
                        value={formData.email}
                        onChange={handleOnChangeInput}
                        placeholder="Email" 
                        required 
                    />
                    <input 
                        className="form-control mb-2" 
                        name="password" 
                        type="password"
                        value={formData.password}
                        onChange={handleOnChangeInput}
                        placeholder="Password" 
                        required 
                    />
                    {!isLogin && (
                        <input 
                            className="form-control mb-2" 
                            name="password_confirmation" 
                            type="password"
                            value={formData.password_confirmation}
                            onChange={handleOnChangeInput}
                            placeholder="Confirm Password" 
                            required 
                        />
                    )}
                    
                    <button className="btn btn-primary w-100" type="submit">{ isLogin ? "Login" : "Register" }</button>
                </form>

                <p className="mt-3 text-center">
                    {isLogin ? "Don't have an account? " : "Already have an account "}
                    <span onClick={() => setIslogin(!isLogin)} style={{ cursor: "pointer"}}>
                        {isLogin ? "Register" : "Login"}
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Auth;