import React from 'react'
import './write.scss'

export default function write() {
    return (
        <div className="write">
            <img className="write__img" src="https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&h=850&w=1300" alt="" />
            <form className="write__form">
                <div className="write__form__group">
                   <label htmlFor="fileInput">
                       <i className="write__form__icon fas fa-plus"></i>
                   </label>
                    <input type="file" id="fileInput" style={{display:'none'}} />
                    <input className="write__form__group__input" type="text" placeholder="Title..." autoFocus={true} />
                </div>
                <div className="write__form__group">
                    <textarea placeholder="Tell your story" className="write__form__group__inputare" cols="30" rows="5"></textarea>
                </div>
                <button className="write__form__submit">
                    Publish
                </button>
            </form>
        </div>
    )
}
