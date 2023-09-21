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
            // TODO: make it that this button only shows when signed in 
            // TODO: open the pop up modal when clicked
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
                    {/* TODO: Create a similar form like the login page
                                with the addition of file input on the top
                                make sure you add a preview of the image above the file upload button
                    Hint: className for each input header is form_label and the className for both input text is edit_personal_info_description
                    */}
                    <form id='editmodal' ></form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" form='editmodal' onClick={() => {
                        // TODO: close popup, update topbar and set profile picture
                    }}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    );
}

export default EditPersonalInfo;