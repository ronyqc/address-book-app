import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FetchContactList, RemoveContact } from "../Redux/Action";

const ContactListing = (props) => {
    useEffect(() => {
        props.loadContact();
    }, [])
    
    const handleDelete = (code) => {
        if (window.confirm('Do you want to remove?')) {
            props.removeContact(code);
            //props.loadContact();
            toast.success('Contact removed successfully.')
        }
    }
    return (
        props.contact.loading ? <div><h2>Loading...</h2></div> :
            props.contact.errMessage ? <div><h2>{props.contact.errMessage}</h2></div> :

                <div>
                    <div className="card">
                        <div className="card-header" >
                            <Link to={'/contact/add'} className="btn btn-success">Add Contact [+]</Link>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <td>Id</td>
                                        <td>Name</td>
                                        <td>Last Name</td>
                                        <td>Address</td>
                                        <td>CellPhone</td>
                                        <td>Age</td>
                                        <td>Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        props.contact.contactList && props.contact.contactList.map(item =>
                                            <tr key={item.contactId}>
                                                <td>{item.contactId}</td>
                                                <td>{item.name}</td>
                                                <td>{item.lastName}</td>
                                                <td>{item.address}</td>
                                                <td>{item.cellPhone}</td>
                                                <td>{item.age}</td>
                                                <td>
                                                    <Link to={'/contact/edit/' + item.contactId} className="btn btn-primary">Edit</Link> | 
                                                    <button onClick={() => { handleDelete(item.contactId) }} className="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
    );
}

const mapStateToProps = (state) => {
    return {
        contact: state.contact
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadContact: () => dispatch(FetchContactList()),
        removeContact:(code)=>dispatch(RemoveContact(code))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactListing);