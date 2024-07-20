import React, { Component } from "react";
import { MdOutlineImage, MdOutlineColorLens } from "react-icons/md";
import { BiBellPlus, BiArchiveIn } from "react-icons/bi";
import { BsFillPersonPlusFill, BsPinFill } from "react-icons/bs";
import { SlOptionsVertical } from "react-icons/sl";
// import PopUp from "../PopUp";
import "./index.css";

class NoteItem extends Component {
  constructor(props) {
    super(props);
    const { eachNoteDetails } = this.props;
    const { title, description } = eachNoteDetails;

    this.state = {
      editTitle: title,
      editDescription: description,
      isOptionShows: false,
      isPopUpOpened: false,
    };
  }

  onClickOptionsIcon = () => {
    this.setState((prevState) => ({ isOptionShows: !prevState.isOptionShows }));
  };

  onChangeTitle = (event) => {
    this.setState({ editTitle: event.target.value });
  };

  onChangedescription = (event) => {
    this.setState({ editDescription: event.target.value });
  };

  onClickEditButton = () => {
    const { eachNoteDetails, updateCard } = this.props;
    const { id } = eachNoteDetails;
    updateCard(id);
    const { isPopUpOpened } = this.state;
    this.setState({ isPopUpOpened: !isPopUpOpened });
  };

  render() {
    const { editTitle, editDescription, isOptionShows, isPopUpOpened } =
      this.state;
    const { eachNoteDetails, deleteCard } = this.props;
    const { id } = eachNoteDetails;

    const onClickDeleteButton = () => {
      deleteCard(id);
    };

    return (
      <li className="note-card-item">
        <div className="note-card-container">
          <div className="title-icon-container">
            <h1 className="note-title">{editTitle}</h1>
            <BsPinFill className="pin-icon" fill="black" />
          </div>
          <p className="note-description">{editDescription}</p>
        </div>
        <div className="card-icons-container">
          <BiBellPlus className="card-expanded-icons" />
          <BsFillPersonPlusFill className="card-expanded-icons" />
          <MdOutlineColorLens className="card-expanded-icons" />
          <MdOutlineImage className="card-expanded-icons" />
          <BiArchiveIn className="card-expanded-icons" />
          <button
            type="button"
            className="options-icon-button"
            onClick={this.onClickOptionsIcon}
          >
            <SlOptionsVertical className="card-expanded-icons card-end-icon" />
          </button>
          {isOptionShows ? (
            <ul className="options-container">
              <button className="options-button" onClick={onClickDeleteButton}>
                <li className="options-item">Delete</li>
              </button>
              <button
                className="options-button"
                onClick={this.onClickEditButton}
              >
                <li className="options-item">Edit</li>
              </button>
            </ul>
          ) : null}
        </div>
      </li>
    );
  }
}
export default NoteItem;

//     overlayStyles = {
//         backgroundColor: '#353434c4',
//     }

//     render() {
// const {editTitle, editDescription, isOptionShows} = this.state
// const { eachNoteDetails, deleteCard } = this.props
// const { id } = eachNoteDetails

// const onClickDeleteButton = () => {
//     deleteCard(id)
// }

//         return (

//             <>

//                 <Popup
//                     modal
//                     trigger={
//                         <button type="button" className="note-card-button">
// <li className="note-card-item">
//     <div className="note-card-container">
//         <div className='title-icon-container'>
//             <h1 className="note-title">{editTitle}</h1>
//             <BsPinFill className='pin-icon' fill='black' />
//         </div>
//         <p className="note-description">{editDescription}</p>
//     </div>
//     <div className='card-icons-container'>
//         <BiBellPlus className='card-expanded-icons' />
//         <BsFillPersonPlusFill className='card-expanded-icons' />
//         <MdOutlineColorLens className='card-expanded-icons' />
//         <MdOutlineImage className='card-expanded-icons' />
//         <BiArchiveIn className='card-expanded-icons' />
//         <button type="button" className='options-icon-button' onClick={this.onClickOptionsIcon}>
//             <SlOptionsVertical className='card-expanded-icons card-end-icon' />
//         </button>
//         {isOptionShows ? (
//             <>
//                 <ul className='options-container'>
//                     <button className='options-button' onClick={onClickDeleteButton}>
//                         <li className='options-item'>Delete</li>
//                     </button>
//                     <button className='options-button' onClick={this.onClickUpdateCard}>
//                         <li className='options-item'>Edit</li>
//                     </button>
//                 </ul>
//             </>
//         ) : null}
//     </div>
// </li>
//                         </button>
//                     }

//                     overlayStyle={this.overlayStyles}
//                 >

//                     {close => (

//                         <li className="pop-up-note-card-item">
//                             <div className="note-card-container">
//                                 <div className='title-icon-container'>
//                                     <input type="text" className='poped-title-input' onChange={this.onChangeTitle} value={editTitle}/>
//                                     <BsPinFill className='pop-pin-icon' fill='black' />
//                                 </div>
//                                 <textarea cols={20}  className='poped-description-input' onChange={this.onChangedescription} value={editDescription}></textarea>
//                             </div>
//                             <div className='pop-up-card-icons-btn-container'>
//                                 <div className='popu-up-icons-container'>
//                                     <BiBellPlus className='card-expanded-icons' />
//                                     <BsFillPersonPlusFill className='card-expanded-icons' />
//                                     <MdOutlineColorLens className='card-expanded-icons' />
//                                     <MdOutlineImage className='card-expanded-icons' />
//                                     <BiArchiveIn className='card-expanded-icons' />
//                                     <button type="button" className='options-icon-button' onClick={this.onClickOptionsIcon}>
//                                         <SlOptionsVertical className='card-expanded-icons' />
//                                     </button>
//                                     <LuUndo2 className='card-expanded-icons disable' />
//                                     <LuRedo2 className='card-expanded-icons disable' />
//                                 </div>
//                                 <button type="button" className="pop-up-close-button" onClick={() => close()}>Close</button>

//                             </div>
//                         </li>
//                     )}
//                 </Popup >

//             </>
//         )
//     }
// }
// export default NoteItem
