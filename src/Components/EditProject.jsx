import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineEdit, AiTwotoneMobile } from 'react-icons/ai';


function EditProject(props) {
    const [card_title_edit, setCardTitle] = useState(props.title)
    const [description_edit, setDescription] = useState(props.description)
    const [show, setShow] = useState(false)
    const [temp_image, setTempImg] = useState(props.image)

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
                style={{ display: props.signedIn ? "block" : "none" }}
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
                    <Modal.Title>Update Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id='editmodal' >
                        {/* DONE: Create a similar form like the login page
                                  with the addition of file input on the top
                                  make sure you add a preview of the image above the file upload button
                            Hint: the className for the image you can use profile_pic */}
                        <h2 className='form_label'>
                            Picture
                        </h2>
                        <div className='edit_personal_info_description'>
                            <input className='' type="file" onChange={(e) => handleImage(e)} />
                            <img src={temp_image} height="36" alt="..." />
                        </div>
                        <h2 className='form_label'>
                            Title
                        </h2>
                        <input className='edit_personal_info_description' type="text"
                            placeholder={props.title}
                            value={card_title_edit}
                            onChange={(e) => setCardTitle(e.target.value)}
                        />
                        <h2 className='form_label'>
                            Description
                        </h2>
                        <input className='edit_personal_info_description' type="text"
                            placeholder={props.description}
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
                        // DONE: close pop up and update experience card
                        props.updateProject(props.id, card_title_edit, description_edit, temp_image)
                        handleClose()
                    }}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    );
}

export default EditProject;