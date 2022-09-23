# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Bootcamp WGS React

Today lesson

- Like action

## Hooks

#### Comment.jsx

```js
import { useState } from 'react'

const Like = () => {
  const [like, setLike] = useState(0)
  const handleLike = () => setLike((prevLike) => prevLike + 1) // when click like + 1

  return (
    <div onClick={handleLike} className="actions">
      {/* if like !== 0 show total like */}
      {!!like && <span>{like}</span>}
      <span>Like</span>
    </div>
  )
}

const Comment = () => {
  return (
    <>
      <Like />
    </>
  )
}

export default Comment
```
