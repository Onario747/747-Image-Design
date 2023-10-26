import React from 'react'

// manthem be coding for 8hrs
const ImageCard = ({images}) => {
  return (
    <div className='image-card'>
          {
            images.map((image, index) => {
              const imageUrl = image.urls.small;
              const userName = image.user.name;
              const userImage = image.user.profile_image.medium;
              const createDate = image.created_at;
              const imageDescription= image.alt_description;
              return (
                  <div className="modal-box">
                    <div className="images">
                      <img key={index} src={imageUrl} alt={imageDescription} className='searched-img' />
                      <p className='image-description'>{imageDescription}</p>
                    </div>
                    <div className="bottom-details">
                      <div className="user-image">
                        <img src={userImage} alt="user profile_image" />
                      </div>
                      <div className="user-details">
                        <p key={index}>Image By: <span>{userName}</span></p>
                        <p key={index}>Date: <span>{createDate}</span></p>
                      </div>
                    </div>
                  </div>

              )
            })
          }
    </div>
  )
}

export default ImageCard