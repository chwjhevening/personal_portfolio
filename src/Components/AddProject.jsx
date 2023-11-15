import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiOutlinePlus } from 'react-icons/ai';


function AddProject(props) {
    const [card_title_add, setCardTitle] = useState(null)
    const [description_add, setDescription] = useState(null)
    const [show, setShow] = useState(false);
    const [temp_image, setTempImg] = useState()
    const [errorMessage, setErrorMessage] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleImage(e) {
        console.log(e.target.files)
        setTempImg(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <>
            <div className="add_button"
                // DONE: make it that this button only shows when signed in 
                style={{ display: props.signedIn ? "block" : "none" }}
                // DONE: open the pop up modal when clicked
                onClick={() => {
                    handleShow()
                    setErrorMessage(false)
                }}
            >
                <AiOutlinePlus />
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                errorMessage={errorMessage}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id='editmodal' >
                        {/* DONE: Create a similar form like the login page
                        with the addition of file input on the top
                        make sure you add a preview of the image above the file upload button when there is one uploaded
                        Hint: the className for the image you can use profile_pic 
                        */}
                        <h2 className='form_label'>
                            Picture
                        </h2>
                        <div className='edit_personal_info_description'>
                            <input className='' type="file" onChange={(e) => handleImage(e)} />
                            {temp_image ? <img src={temp_image} height="36" alt="..." /> : null}
                        </div>
                        <h2 className='form_label'>
                            Title
                        </h2>
                        <input className='edit_personal_info_description' type="text"
                            placeholder="Add a title..."
                            onChange={(e) => setCardTitle(e.target.value)}
                        />
                        <h2 className='form_label'>
                            Description
                        </h2>
                        <input className='edit_personal_info_description' type="text"
                            placeholder="Add some description..."
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    {errorMessage ? "Please enter all fields" : ""}
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" form='editmodal' onClick={() => {
                        // close pop up and update experience
                        if (card_title_add != null && description_add != null && temp_image != null) {
                            setErrorMessage(false)
                            props.newProject(card_title_add, description_add, temp_image);
                            handleClose();
                            setTempImg(null)
                            setCardTitle(null)
                            setDescription(null)
                        }
                        else {
                            setErrorMessage(true)
                        }
                    }}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    );
}

export default AddProject;