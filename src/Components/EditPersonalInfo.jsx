import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineEdit } from 'react-icons/ai';


function EditPersonalInfo({ signedIn, fullName, description, updateTopBar, profilePic, setProfilePic }) {
    const [full_name_edit, setName] = useState(fullName)
    const [description_edit, setDescription] = useState(description)
    const [show, setShow] = useState(false);
    const [temp_image, setTempImg] = useState(profilePic)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleImage(e) {
        console.log(e.target.files)
        setTempImg(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <>
            <div className="edit"
                // DONE: make it that this button only shows when signed in 
                style={{ display: signedIn ? "block" : "none" }}
                // DONE: open the pop up modal when clicked
                onClick={handleShow}
            >
                <AiOutlineEdit />
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update Personal Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* DONE: Create a similar form like the login page
                              with the addition of file input on the top
                              make sure you add a preview of the image above the file upload button
                        Hint: className for each input header is form_label and the className for both input text is edit_personal_info_description
                    */}
                    <form id='editmodal' >
                        <h2 className='form_label'>
                            Profile Picture
                        </h2>
                        <div className='edit_personal_info_description'>
                            <input className='' type="file" onChange={(e) => handleImage(e)}/>
                            <img src={temp_image} width="32" height="32" alt="..."/>
                        </div>
                        <h2 className='form_label'>
                            Name
                        </h2>
                        <input className='edit_personal_info_description' type="text"
                            placeholder={fullName}
                            value={full_name_edit}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <h2 className='form_label'>
                            Description
                        </h2>
                        <input className='edit_personal_info_description' type="text"
                            placeholder={description}
                            value={description_edit}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" form='editmodal' onClick={() => {
                        // DONE: close popup, update topbar and set profile picture
                        updateTopBar(full_name_edit, description_edit);
                        setProfilePic(temp_image);
                        handleClose();
                    }}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    );
}

export default EditPersonalInfo;