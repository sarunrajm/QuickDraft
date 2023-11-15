import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { db } from '../config/firebase.js';
import { doc, updateDoc, getDoc } from 'firebase/firestore';

const Edit = () => {
  const { id } = useParams(); 
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const textDoc = doc(db, 'documents', id);
        const snapshot = await getDoc(textDoc);
        const { description } = snapshot.data();
        setValue(description);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const textDoc = doc(db, 'documents', id);
      await updateDoc(textDoc, { description: value });

      alert("saved successfully!");

      navigate('/document');
    } catch (err) {
      console.error(err);
    }
  };

  // Define the modules for the Quill editor
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image', 'video'],
      ['blockquote', 'code-block'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      ['clean'],
      ['formula'],
    ],
  };

  return (
    <div className='d-flex justify-content-center w-100'>
      <div>
        <ReactQuill
          className='m-5'
          theme='snow'
          value={value}
          onChange={setValue}
          modules={modules} 
        />
        <button className="savebtn btn btn-primary" onClick={handleUpdate}>
          Save
        </button>
      </div>
    </div>
  );
}

export default Edit;
