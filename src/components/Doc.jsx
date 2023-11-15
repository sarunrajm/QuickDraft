import React, { useEffect, useState } from 'react';
import '../App.css';
import { db } from '../config/firebase.js';
import { getDocs, collection, addDoc, deleteDoc, doc, updateDoc, getDoc } from 'firebase/firestore';
import { Modal, Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Doc() {
  const [notes, setNotes] = useState([]);
  const [newNotesTitle, setNewNotesTitle] = useState('');
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [showAddDocumentModal, setShowAddDocumentModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  const docCollectionRef = collection(db, 'documents');

  const getNotes = async () => {
    try {
      const data = await getDocs(docCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setNotes(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  const onsubmitNotes = async () => {
    try {
      await addDoc(docCollectionRef, { title: newNotesTitle });
      getNotes();
      setShowAddDocumentModal(false);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteNotes = async (id) => {
    const notesDoc = doc(db, 'documents', id);
    await deleteDoc(notesDoc);
    getNotes();
  };

  const openUpdateModal = async (id) => {
    setSelectedNoteId(id);
    setShowUpdateModal(true);

    try {
      const notesDoc = doc(db, 'documents', id);
      const snapshot = await getDoc(notesDoc);
      const { title } = snapshot.data();

      setUpdatedTitle(title);
    } catch (err) {
      console.error(err);
    }
  };

  const closeUpdateModal = () => {
    setSelectedNoteId(null);
    setShowUpdateModal(false);
  };

  const updateNotes = async () => {
    try {
      const notesDoc = doc(db, 'documents', selectedNoteId);
      await updateDoc(notesDoc, { title: updatedTitle });
      getNotes();
      closeUpdateModal();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='app'>
      <div className='d-flex justify-content-center'>
        <Button className='mb-5' variant='light' onClick={() => setShowAddDocumentModal(true)}>
          Add Document
        </Button>

        <Modal className='LLL' show={showAddDocumentModal} onHide={() => setShowAddDocumentModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Document</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='mb-3'>
              <label className='form-label'>Title</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Title..'
                value={newNotesTitle}
                onChange={(e) => setNewNotesTitle(e.target.value)}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={() => setShowAddDocumentModal(false)}>
              Close
            </Button>
            <Button variant='primary' onClick={onsubmitNotes}>
              Add Document
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <Row className='m-2'>
        {notes.map((document) => (
          <Col className='jw' key={document.id} md={4}>
            <Card style={{color:"#d2ab89",backgroundColor:"black",borderColor:"white"}} className='cardbody mb-2 p-4 text-center'>
              <Card.Body>
                <Card.Title className='mb-5'>{document.title}</Card.Title>
                <Button onClick={() => deleteNotes(document.id)} variant='outline'>
                  <i className='fa-solid fa-trash fa-2xl' style={{ color: 'white' }}></i>
                </Button>
                <Button size='sm' onClick={() => openUpdateModal(document.id)} variant='outline-light'>
                  Update
                </Button>
                <Link to={`/edit/${document.id}`}>
                  <Button variant='outline'>
                    <i style={{color:"white"}} className='fa-solid fa-pen fa-2xl ms-2'></i>
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showUpdateModal} onHide={closeUpdateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Document</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='mb-3'>
            <label className='form-label'>Update the Title</label>
            <input
              type='text'
              className='form-control'
              placeholder='Updated Title..'
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={closeUpdateModal}>
            Close
          </Button>
          <Button variant='primary' onClick={updateNotes}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>

      
    </div>
  );
}

export default Doc;
