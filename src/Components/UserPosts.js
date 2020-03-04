import React, {useState} from 'react';
import styled from 'styled-components';
import {axiosWithAuth} from './Authentication/axiosWithAuth';


const UserPosts = ({posts, match, updateUserPosts}) => {
    const [editing, setEditing] = useState({
        newTheme: false,
        newLocation: false,
        newDescription: false,
        newImage: false,
        newVendors: false
    });
    const [updatePost, setUpdatePost] = useState({
        newTheme: '',
        newLocation: '',
        newDescription: '',
        newImage: '',
        newVendors: ''
    })

    console.log('userposts', match)

    const update = e => {
        axiosWithAuth()
        .put(`/auth/user/${match.params.id}/post/${posts.id}`, updatePost)
        .then(res => {
            updateUserPosts(res.data);
            console.log('update posts', res.data)
        }).catch(err=>console.log('Error',err))
      }
    

    const Img = styled.img`
        width: 45vw;

    `

    return(
    <div className='user-posts'>
        {/* {!editing ? (
            <>
            <Img src={posts.image} alt={posts.description}/>
            <h1 onClick={()=> setEditing(!editing)}>{posts.description}</h1>
            <h3>{posts.theme}</h3>
            <p>Location: {posts.location}</p>
            <p>Vendors: {posts.vendors}</p>
            </>
            ) : (
                <div>
                  <input
                    type='text'
                    name='newTheme'
                    onChange={handleChanges}
                    value={newPost.theme}
                  />
                  <input
                    type='text'
                    name='newLocation'
                    placeholder='Location'
                    onChange={handleChanges}
                    value={newPost.location}
                  />
                  <input
                    type='text'
                    name='newDescription'
                    placeholder='Description'
                    onChange={handleChanges}
                    value={newPost.description}
                  />
                  <input
                    type='text'
                    name='newImage'
                    placeholder='Image Link'
                    onChange={handleChanges}
                    value={newPost.image}
                  />
                  <input
                    type='text'
                    name='newVendors'
                    placeholder='Vendors'
                    onChange={e => }
                    value={newPost.vendors}
                  />
                  <button>Post</button>
                </div>
              )} */}
        </div>
    )
}

export default UserPosts