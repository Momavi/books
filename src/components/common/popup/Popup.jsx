import './popup.scss'
import BookMapArray from './../../Books/Book/BookMapArray'

let Popup = (props) => {
  let popupPage = props.popupPage
  let volume = props.popupPage.popupData.volumeInfo
  return (
    <div>
      {
        volume !== undefined
          ?
          <div className={`popup ${popupPage.isPopupOpen ? 'open' : 'close'}`} onClick={() => { props.togglePopupOpen(!popupPage.isPopupOpen) }}>
            <div className="popup__body">
              <div className="popup__close" onClick={() => { props.togglePopupOpen(!popupPage.isPopupOpen) }}>×</div>
              <h3>{volume.title}</h3>
              <img src={
                volume.imageLinks !== undefined
                  ?
                  volume.imageLinks.thumbnail
                  :
                  null
              } alt="" />
              <div className="popup__authors">
                <span>Авторы: </span>
                <BookMapArray volume={volume.authors} />
              </div>
              <div className="popup__categories">
                <span>Категория: </span>
                <BookMapArray volume={volume.categories} />
              </div>
              <p className="popup__description">{volume.description}</p>
            </div>
          </div>
          :
          null

      }

    </div>

  )

}

export default Popup;