import React, { useState } from 'react';
import { Avatar, Input } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { Button, Modal } from 'react-bootstrap';
import './AddQuestion.css';
import axios from 'axios';

function QuestionModal(props) {
  const [userName, setName] = useState("abhii");
  const [question, setQuestion] = useState("");

  // const onChangeName = (e) => {
  //   setName({ userName: 'abhiiii' });
  // };
  const onChangeQuestion = (e) => {
    setQuestion({ question: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const questions = {
      userName: "abhiii",
      question: question,
    };
    console.log(questions);

    axios
      .post("http://localhost:5000/questions/add", questions)
      .then((res) => {
        console.log(res.data);
        setName(userName);
        setQuestion(question);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    <form onSubmit={onSubmit}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Question
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="Modal_info">
          <Avatar className="avatar" />
          <p>userName/userEmail id</p>
          <div className="scope">
            <PeopleAltIcon />
            <p>Public</p>
            <ExpandMore className="expand" />
          </div>
        </div>
        <div className="inputField">
          <input type="text" onChange={onChangeQuestion} placeholder="Type Your Question here..." ></input>
        </div>
      </Modal.Body>
      <Modal.Footer className="buttons">
        <Button className="cancel" onClick={props.onHide}>Cancel</Button>
        <button type="submit" className="addQuestion">Add Question</button>
      </Modal.Footer>
      </form>
    </Modal>
  );
}

export default QuestionModal;
