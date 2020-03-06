import React, { useState, useEffect } from 'react';
import UserProfile from './UserProfile';
import { axiosWithAuth } from './Authentication/axiosWithAuth';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import '../App.css';

//Components
import UserPosts from './UserPosts';

export default function CreatePost(props) {
  const [userPosts, setUserPosts] = useState([]);
  const paramItemId = props.match.params.id;
  const [newPost, setNewPost] = useState({
    theme: '',
    location: '',
    description: '',
    image: '',
    vendors: ''
  });

<<<<<<< HEAD
  
useEffect(() => {//GET users posts
  axiosWithAuth()
  .get(`/auth/user/${paramItemId}/posts`)
  .then(res => {
       setUserPosts(res.data.posts)
      console.log(res)
  })
  .catch(err=>{console.log('error',err)})
},[])

const handleChanges = e => {
  setNewPost({...newPost, [e.target.name]:e.target.value})
}

const submit = e => {//Create new Posts
  e.preventDefault()
  axiosWithAuth()
  .post(`/auth/user/${paramItemId}/posts`, newPost)
  .then(res => {
    setUserPosts(res.data)
  })
  .catch(err=>{console.log('error',err)})
}
=======
  useEffect(() => {
    //GET users posts
    axiosWithAuth()
      .get(`/auth/user/${paramItemId}/posts`)
      .then(res => {
        setUserPosts(res.data.posts);
      })
      .catch(err => {
        console.log('error', err);
      });
  }, []);
>>>>>>> b1d2d89b3f156fbf6aad00fc8328d846fc24b346

  const handleChanges = e => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const submit = e => {
    //Create new Posts
    e.preventDefault();
    axiosWithAuth()
      .post(`/auth/user/${paramItemId}/posts`, newPost)
      .then(res => {
        setUserPosts(res.data);
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  console.log('user posts', userPosts);
  console.log('newPost', newPost);

  return (
    <>
      <form className='create-post-form' onSubmit={submit}>
        <input
          type='text'
          name='theme'
          placeholder='Theme'
          onChange={handleChanges}
          value={newPost.theme}
          className='create-field-container'
        />
        <input
          type='text'
          name='location'
          placeholder='Location'
          onChange={handleChanges}
          value={newPost.location}
          className='create-field-container'
        />
        <input
          type='text'
          name='description'
          placeholder='Description'
          onChange={handleChanges}
          value={newPost.description}
          className='create-field-container'
        />
        <input
          type='text'
          name='image'
          placeholder='Image Link'
          onChange={handleChanges}
          value={newPost.image}
          className='create-field-container'
        />
        <input
          type='text'
          name='vendors'
          placeholder='Vendors'
          onChange={handleChanges}
          value={newPost.vendors}
          className='create-field-container'
        />
        <button className='add-button'>Post</button>
      </form>
      {userPosts.map(posts => {
        return (
          <Route
            to='/:id/posts/:pid'
            render={props => {
              return (
                <UserPosts
                  {...props}
                  key={posts.description}
                  posts={posts}
                  userPosts={userPosts}
                  updateUserPosts={setUserPosts}
                />
              );
            }}
          />
        );
      })}
    </>
  );
}
