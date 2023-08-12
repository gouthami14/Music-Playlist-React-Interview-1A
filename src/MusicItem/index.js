import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const MusicItem = props => {
  const {MusicItemDetails, onClickDeleteTrack} = props
  const {id, imageUrl, name, genre, duration} = MusicItemDetails

  const onDeleteTrack = () => {
    onClickDeleteTrack(id)
  }

  return (
    <li className="music-list-item">
      <div>
        <img src={imageUrl} alt="track" />
        <div>
          <p>{name}</p>
          <p>{genre}</p>
        </div>
      </div>
      <div>
        <p>{duration}</p>
        <button type="button" data-testid="delete" onClick={onDeleteTrack}>
          <AiOutlineDelete size={25} />
        </button>
      </div>
    </li>
  )
}

export default MusicItem
