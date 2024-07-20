import React, { Component } from "react";
import { MdOutlineImage, MdOutlineColorLens } from "react-icons/md";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { BiBellPlus, BiArchiveIn } from "react-icons/bi";
import { BsFillPersonPlusFill, BsPin } from "react-icons/bs";
import { SlOptionsVertical } from "react-icons/sl";
import { PiPaintBrushFill } from "react-icons/pi";
import { LuUndo2, LuRedo2 } from "react-icons/lu";
import { v4 as uuidv4 } from "uuid";
import NoteItem from "../NoteItem";

import "./index.css";

class Home extends Component {
  state = {
    title: "",
    description: "",
    isStarted: false,
    notesList: [{ title: "A", description: "apple " }],
  };

  onClickNoteInput = () => {
    const { isStarted } = this.state;
    this.setState({ isStarted: !isStarted });
  };

  onChangeTitleInput = (event) => {
    this.setState({ title: event.target.value });
  };

  onChangeDescriptionTextarea = (event) => {
    this.setState({ description: event.target.value });
  };

  onClickCloseButton = () => {
    this.setState({ isStarted: false });
  };

  onAddButton = () => {
    const { title, description } = this.state;

    if (title === "" && description === "") {
      alert("Enter valid input");
    } else if (
      title !== "" ||
      description === "" ||
      title === "" ||
      description !== "" ||
      (title !== "" && description !== "")
    ) {
      const newNote = {
        id: uuidv4(),
        title,
        description,
      };

      this.setState((prevState) => ({
        notesList: [...prevState.notesList, newNote],
        title: "",
        description: "",
        isStarted: false,
      }));
    }
  };

  deleteCard = (id) => {
    const { notesList } = this.state;
    const updatedNotesList = notesList.filter((eachNote) => eachNote.id !== id);
    this.setState({ notesList: updatedNotesList });
  };

  updateCard = (id) => {
    const { notesList } = this.state;
    const updatedNotesList = notesList.filter((eachNote) => eachNote.id === id);
    this.setState({ notesList: updatedNotesList });
  };

  renderNoteInputField = () => {
    const { title, description, isStarted } = this.state;

    return (
      <>
        {isStarted ? (
          <div className="editable-container">
            <div className="title-input-container">
              <input
                type="text"
                placeholder="Title"
                className="title-input"
                value={title}
                onChange={this.onChangeTitleInput}
              />
              <button
                type="button"
                className="pin-button"
                onClick={this.onAddButton}
              >
                <BsPin className="expanded-icons expanded-pin-icon" />
              </button>
            </div>
            <input
              type="text"
              className="description-input"
              autoFocus={true}
              placeholder="Take a note..."
              value={description}
              onChange={this.onChangeDescriptionTextarea}
            />
            <div className="icons-buttons-container">
              <div className="icons-container">
                <BiBellPlus className="expanded-icons" />
                <BsFillPersonPlusFill className="expanded-icons" />
                <MdOutlineColorLens className="expanded-icons" />
                <MdOutlineImage className="expanded-icons" />
                <BiArchiveIn className="expanded-icons" />
                <SlOptionsVertical className="expanded-icons" />
                <LuUndo2 className="expanded-icons disable" disable={true} />
                <LuRedo2 className="expanded-icons disable" disable={true} />
              </div>
              <div className="buttons-container">
                <button
                  className="close-button"
                  type="button"
                  onClick={this.onClickCloseButton}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="note-input-contianer">
            <button
              className="note-input-button"
              type="button"
              onClick={this.onClickNoteInput}
            >
              <input
                type="text"
                placeholder="Take a note..."
                className="note-input"
              />
            </button>
            <div className="note-input-icons-container">
              <AiOutlineCheckSquare className="note-input-icon" />
              <PiPaintBrushFill className="note-input-icon" />
              <MdOutlineImage className="note-input-icon note-input-end-icon" />
            </div>
          </div>
        )}
      </>
    );
  };

  render() {
    const { notesList } = this.state;
    return (
      <div className="bg-container">
        <div className="top-container">{this.renderNoteInputField()}</div>
        <div className="content-container">
          <p className="sub-title">PINNED</p>
          <ul className="notes-list-container">
            {notesList.map((eachNote) => (
              <NoteItem
                eachNoteDetails={eachNote}
                key={eachNote.id}
                deleteCard={this.deleteCard}
                updateCard={this.updateCard}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default Home;
