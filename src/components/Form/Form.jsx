import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import './index.css';
import avatar from '../../assets/Avatar.png';
import arrow from '../../assets/arrow-right.png';
import FileBase from 'react-file-base64';
import { createNewUser } from '../../redux/actions/userActions';

const IUserState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    avatar: ''
}

const Form = () => {
    const dispatch =  useDispatch();
    const [user, setUser] = useState(IUserState);
    const [errors, setErrors] = useState({});
    const inputFileRef = useRef(null);
    const [isMatchPassword, setIsMatchPassword] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleUploadPhoto = () => {
        inputFileRef.current.done();
        console.log(inputFileRef.current.props.onDone);
        
    }

    const handleUploadPhotoChange = (e) => {
        setUser({
            ...user,
            avatar: e.base64
        });
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setUser({
            ...user, 
            [name] : value
        });
    }

    const onSuccess = () => {
        setUser(IUserState);
        setIsSuccess(true);
    }

    const handleValidation = () => {
        let tempErrors = {...errors};

        tempErrors.name = user.name ? '' : 'Name field is required.';
        tempErrors.email = user.email ? '' : 'Email field is required.';
        tempErrors.password = user.password ? '' : 'Password field is required.';
        tempErrors.confirmPassword = user.confirmPassword ? '' : 'Confirm Password field is required.';
        
        setErrors({
            ...tempErrors
        });
        setIsSuccess(false);

        return Object.values(tempErrors).every(err => err === '');
    }

    const matchPassword = () => {
        let isMatch = false;
        if (user.password === user.confirmPassword) {
            setIsMatchPassword(null);
            isMatch = true;
        } else {
            setIsMatchPassword('Passowrd not match.');
            isMatch = false;
        }
        console.log(isMatch);
        return isMatch;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (handleValidation() && matchPassword()) {
            dispatch(createNewUser(user, onSuccess));
        }
        setIsSuccess(false);
    }

    return (
        <div>
            <div className="form-header">
                <h1 className="form-header-title">CREATE YOUR ACCOUNT</h1>
            </div>
            <div className="form-container">
                <p className="form-text">
                    Because there will be documents that you need to prepare to apply for the loan, let's start off by 
                    creating a password so that you can login to your account once you have these document ready.
                </p>
                { isMatchPassword && <p className="text-error">{isMatchPassword}</p>}
                { isSuccess && <p className="text-success">New user created.</p>}
                <form 
                    autoComplete="off" 
                    noValidate 
                    onSubmit={handleSubmit}
                >
                    <div className="row">
                        <div className="col-25">
                            <div className="upload-photo">
                                <img src={user.avatar ? user.avatar : avatar} alt="Avatar" onClick={handleUploadPhoto}/>
                                <p>Upload</p>
                                <FileBase 
                                    type="file"
                                    name="selectedFile"
                                    multiple={false}
                                    onDone={handleUploadPhotoChange}
                                    ref={inputFileRef}
                                />
                            </div>
                        </div>
                        <div className="col-75">
                            <div className="row">
                                <div className="col-50">
                                    <div className="form-group">
                                        <label className="input-label">NAME</label>
                                        <input 
                                            type="text"
                                            value={user.name}
                                            name="name"
                                            className="input-field"
                                            onChange={handleInputChange}
                                        />
                                        {errors.name && <span className="error">{errors.name}</span>}
                                    </div>
                                </div>
                                <div className="col-50">
                                    <div className="form-group">
                                        <label className="input-label">EMAIL</label>
                                        <input 
                                            type="email"
                                            value={user.email}
                                            name="email"
                                            className="input-field"
                                            onChange={handleInputChange}
                                        />
                                        {errors.email && <span className="error">{errors.email}</span>}
                                    </div>
                                </div>
                                <div className="col-50">
                                    <div className="form-group">
                                        <label className="input-label">PASSWORD</label>
                                        <input 
                                            type="password"
                                            value={user.password}
                                            name="password"
                                            className="input-field"
                                            onChange={handleInputChange}
                                        />
                                        {errors.password && <span className="error">{errors.password}</span>}
                                    </div>
                                </div>
                                <div className="col-50">
                                    <div className="form-group">
                                        <label className="input-label">CONFIRM PASSWORD</label>
                                        <input 
                                            type="password"
                                            value={user.confirmPassword}
                                            name="confirmPassword"
                                            className="input-field"
                                            onChange={handleInputChange}
                                        />
                                        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                                    </div>
                                </div>
                                <div  className="col-100">
                                    <div className="form-button">
                                        <button type="submit" className="submit-btn"> 
                                            SAVE & NEXT
                                            <img src={arrow} alt="Arrow Right" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form