import React from 'react'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const CreatePost = () => {
  const [title, setTitle] = React.useState('')
  const [category, setCategory] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [ setThumbnail] = React.useState('')


  const modules={
    toolbar:[
      [{'header': [1,2,3,4,5,6,false]}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  const formats=[
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  const POST__CATEGORIES = ["Agriculture","Business","Education","Entertainment","Art","Investment",
  "Uncategorized","Weather"]

  return (
    <section className='create-post'>
      <div className='container'>
        <h2>Create Post</h2>
        <p className='form__error-message'>
          This is an error message
        </p>
        <form className='form create-post__form'>
          <input type="text" placeholder='Title' value={title} onChange={e=> setTitle(e.target.value)} autoFocus />
          <select name="category" value={category} onChange={e=> setCategory(e.target.value)}>
            {
              POST__CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)
            }
          </select>
            <ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription}/>
            <input type="file" onChange={e =>setThumbnail(e.target.value)}  accept='png,jpg,jpeg'/>
            <button type='submit'  className='btn primary'>Create</button>
        </form>
      </div>
    </section>
  )
}

export default CreatePost