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
            <div className="add_button" onClick={handleShow} style={{ display: props.signedIn ? "block" : "none" }}>
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
                        {temp_image && <img id='profile_img' src={temp_image} alt='temp profile' />
                        }                        <input type='file' name='experience_pic' onChange={handleImage} />
                        <h2 htmlFor="card_title_add" className='form_label'>
                            Experience Title
                        </h2>
                        <input type="text" className='edit_personal_info_description'
                            onChange={(e) => setCardTitle(e.target.value)}
                            card_title_add="card_title_add"
                            id="fullName"
                            name="card_title_add" />
                        <h2 htmlFor="description_add" className='form_label'>
                            Experience Description
                        </h2>
                        <input className='edit_personal_info_description'
                            form='editmidal'
                            type="text"
                            onChange={(e) => setDescription(e.target.value)}
                            description_add="description_add"
                            id="description_add"
                            name="description_add" />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" form='editmodal' onClick={() => {
                        handleClose()
                        props.newExperience(card_title_add, description_add, temp_image)
                        // setCardPic(temp_image)
                    }}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    );
}

export default AddExperience;