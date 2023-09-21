import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiOutlinePlus } from 'react-icons/ai';


function AddExperience(props) {
    const [card_title_add, setCardTitle] = useState('')
    const [description_add, setDescription] = useState('')
    const [show, setShow] = useState(false);
    const [temp_image, setTempImg] = useState()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleImage(e) {
        console.log(e.target.files)
        setTempImg(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <>
            <div className="add_button"
            // TODO: make it that this button only shows when signed in 
            // TODO: open the pop up modal when clicked
            >
                <AiOutlinePlus />
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
                    <form id='editmodal' >
                        {/* TODO: Create a similar form like the login page
                        with the addition of file input on the top
                        make sure you add a preview of the image above the file upload button when there is one uploaded
                        Hint: the className for the image you can use profile_pic 
                        */}
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" form='editmodal' onClick={() => {
                        // close pop up and update experience
                    }}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    );
}

export default AddExperience;