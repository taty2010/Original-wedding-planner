import React, { useState } from 'react';

const UpdateForm = ({ posts, handleChanges, update, updatePost }) => {
  return (
    <form onSubmit={update} className='create-post-form'>
      <input
        type='text'
        name='image'
        onChange={handleChanges}
        value={updatePost.image}
        className='create-field-container'
      />
      <input
        type='text'
        name='description'
        onChange={handleChanges}
        value={updatePost.description}
        className='create-field-container'
      />
      <input
        type='text'
        name='theme'
        onChange={handleChanges}
        value={updatePost.theme}
        className='create-field-container'
      />
      <input
        type='text'
        name='location'
        onChange={handleChanges}
        value={updatePost.location}
        className='create-field-container'
      />
      <input
        type='text'
        name='vendors'
        onChange={handleChanges}
        value={updatePost.vendors}
        className='create-field-container'
      />
      <div className='modal-button'>
        <button>Update</button>
      </div>
    </form>
  );
};

<<<<<<< HEAD
const UpdateForm = ({posts, handleChanges, update, updatePost}) => {
  // console.log(update);
  console.log(updatePost);
  // console.log(handleChanges);

    return(
        <form onSubmit={update}>
        <input
            type='text'
             name='image'
             onChange={handleChanges}
            value={updatePost.image}
            />
            <input
                    type='text'
                    name='description'
                    onChange={handleChanges}
                    value={updatePost.description}
            />
            <input
                    type='text'
                    name='theme'
                    onChange={handleChanges}
                    value={updatePost.theme}
            />
            <input
                    type='text'
                    name='location'
                    onChange={handleChanges}
                    value={updatePost.location}
                  />
                  <input
                    type='text'
                    name='vendors'
                    onChange={handleChanges}
                    value={updatePost.vendors}
                  />
            <button>Update</button>
        </form>
    )
}

export default UpdateForm
=======
export default UpdateForm;
>>>>>>> b1d2d89b3f156fbf6aad00fc8328d846fc24b346
