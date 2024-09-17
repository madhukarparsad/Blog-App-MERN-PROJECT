
import React from 'react'

import { DUMMY_POSTS } from '../data'
import PostItem from '../components/PostItem'

const CategoryPosts = () => {
  const [Posts ] = React.useState(DUMMY_POSTS)

  return (
    <section>
    {Posts.length > 0 ? <div className='container posts__container'>
      {
        Posts.map(({id,thumbnail,category,title,desc,authorID})=> <PostItem  key={id} postsID={id} thumbnail={thumbnail} category={category} title={title}
          description={desc} authorID={authorID
        }/>)
      }
    </div> : <h2 className='center'>No Posts Found </h2>}
  </section> 
  )
}

export default CategoryPosts