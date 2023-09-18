import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FunctionAddContact } from "../Redux/Action";
import { useForm, Controller } from 'react-hook-form';

const AddContact = () => {
    const [name, nameChange] = useState('');
    const [lastName, lastNamechange] = useState('');
    const [address, addressChange] = useState('');
    const [cellPhone, cellPhoneChange] = useState('');
    const [age, ageChange] = useState('');
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const contactObj = { name, lastName, address, cellPhone, age };
        dispatch(FunctionAddContact(contactObj));
        navigate('/contact');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="card">
                    <div className="card-header" style={{ textAlign: 'left' }}>
                        <h2>Add Contact</h2>
                    </div>
                    <div className="card-body" style={{ textAlign: 'left' }}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input value={name} onChange={e => nameChange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input value={lastName} onChange={e => lastNamechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Address</label>
                                    <input value={address} onChange={e => addressChange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Cell Phone</label>
                                    <input value={cellPhone} onChange={e => cellPhoneChange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Age</label>
                                    <input value={age} onChange={e => ageChange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer" style={{ textAlign: 'left' }}>
                        <button className="btn btn-primary" type="submit">Submit</button> |
                        <Link className="btn btn-danger" to={'/contact'}>Back</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddContact;