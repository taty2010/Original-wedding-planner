import React, {useState} from 'react';


const UpdateForm = ({posts, handleChanges, update, updatePost}) => {

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