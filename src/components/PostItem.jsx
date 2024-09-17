import React from 'react'
import {Link} from 'react-router-dom'
import PostAuthor from './PostAuthor'



const PostItem = ({postID, category, title, description, authorID , thumbnail}) => {
  const Title = title || '';
  const Description = description || '';

  const shortDescription = Description.length > 145 ? Description.substring(0, 145) + '...' : Description;
  const shortTitle = Title.length > 145 ? Title.substring(0, 30) + '...' : Title;

  return (
    <article className='post'>
      <div className='post__thumbnail'>
        <img src={thumbnail} alt={title} />
      </div>
      <div className='post__content'>
        <Link to={`/posts/${postID}`}>
          <h3>{shortTitle}</h3>
        </Link>
        <p>{shortDescription}</p>
        <div className='post__footer'>
          < PostAuthor />
          <Link to={`/posts/categories/${category}`} className='btn category'>{category}</Link>
        </div>
     </div>
    </article>
  )
}

export default PostItem