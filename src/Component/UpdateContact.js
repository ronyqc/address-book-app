import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FetchContactObj, FunctionUpdateContact } from "../Redux/Action";

const UpdateContact = () => {
    const [contactId, contactIdChange] = useState(0);
    const [name, nameChange] = useState('');
    const [lastName, lastNamechange] = useState('');
    const [address, addressChange] = useState('');
    const [cellPhone, cellPhoneChange] = useState('');
    const [age, ageChange] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { code } = useParams();

    const contactObj=useSelector((state)=>state.contact.contactObj)


    const handleSubmit = (e) => {
        e.preventDefault();
        const contactObj = { contactId, name, lastName, address, cellPhone, age };
        dispatch(FunctionUpdateContact(contactObj,contactId));
        navigate('/contact');
    }

    useEffect(() => {
        dispatch(FetchContactObj(code));
    }, [])

    useEffect(() => {
        if(contactObj){
            contactIdChange(contactObj.contactId);
            nameChange(contactObj.name);
            lastNamechange(contactObj.lastName);
            addressChange(contactObj.address);
            cellPhoneChange(contactObj.cellPhone);
            ageChange(contactObj.age);
        }
    }, [contactObj])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="card">
                    <div className="card-header" style={{ textAlign: 'left' }}>
                        <h2>Edit Contact</h2>
                    </div>
                    <div className="card-body" style={{ textAlign: 'left' }}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Id</label>
                                    <input value={contactId || ''} disabled="disabled" className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input value={name || ''} onChange={e => nameChange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input value={lastName || ''} onChange={e => lastNamechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Address</label>
                                    <input value={address || ''} onChange={e => addressChange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Age</label>
                                    <input value={age || ''} onChange={e => ageChange(e.target.value)} className="form-control"></input>
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

export default UpdateContact;