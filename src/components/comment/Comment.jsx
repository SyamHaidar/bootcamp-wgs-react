import { useState } from 'react'
// comment data
import COMMENT from './CommentConfig'

// ---------------------------------------------------------------------

const Like = () => {
  const [like, setLike] = useState(0)
  const handleLike = () => setLike((prevLike) => prevLike + 1) // when click like + 1

  return (
    <div
      onClick={handleLike}
      className="actions"
      style={{ display: 'flex', alignItems: 'center', marginRight: '8px', cursor: 'pointer' }}
    >
      {/* if like !== 0 show like */}
      {!!like && <span style={{ color: 'deeppink', marginRight: '8px' }}>{like}</span>}
      <span>Like</span>
    </div>
  )
}

const Comment = () => {
  return (
    <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '6px' }}>
      <div className="ui container comments">
        <h3 className="ui dividing header">Comments</h3>
        {/* COMMENT data from CommentConfig.jsx */}
        {COMMENT.map((item) => (
          <div key={item.name} className="comment">
            <a className="avatar" href="/">
              <img src={item.img} alt="avatar" />
            </a>
            <div className="content">
              <a className="author" href="/">
                {item.name}
              </a>
              <div className="metadata">
                <span className="date">Today at 5:42PM</span>
              </div>
              <div className="text">{item.text}</div>
              <div style={{ display: 'flex', alignItems: 'center', color: '#00000066' }}>
                {/* call like button component */}
                <Like />
                <div className="actions">
                  <a className="reply" href="/">
                    Reply
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Comment
