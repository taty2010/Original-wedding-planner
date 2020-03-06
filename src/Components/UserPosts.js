import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { axiosWithAuth } from './Authentication/axiosWithAuth';
import Modal from './Modal';
import UpdateForm from './UpdateForm';
import trashcan from '../Assets/trashcan.png';

const initialItem = {
  theme: '',
  location: '',
  description: '',
  image: '',
  vendors: ''
};

const UserPosts = ({ posts, match, updateUserPosts, userPosts }) => {
  const [editTheme, setEditTheme] = useState(false);
  const [editLocation, setEditLocation] = useState(false);
  const [editDesc, setEditDesc] = useState(false);
  const [editImg, setEditImg] = useState(false);
  const [editVendor, setEditVendor] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [updatePost, setUpdatePost] = useState(initialItem);

  const openModal = () => {
    setShowModal(true);
    console.log('modal open');
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const selectedItem = userPosts.find(item => {
      console.log(item.id);
      return item.id === posts.id;
    });
    console.log(selectedItem);
    if (selectedItem) {
      setUpdatePost(selectedItem);
    }
  }, [userPosts, posts.id]);

  const handleChanges = e => {
    e.persist();
    setUpdatePost({ ...updatePost, [e.target.name]: e.target.value });
    console.log('changes', { [e.target.name]: e.target.value });
  };

  const update = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/auth/user/${match.params.id}/posts/${updatePost.id}`, updatePost)
      .then(res => {
        updateUserPosts(res.data);
        // setEditDesc(false)
        console.log('update posts', res.data);
      })
      .catch(err => console.log('Error', err));
  };

  const remove = post => {
    axiosWithAuth()
      .delete(`/auth/user/${match.params.id}/post/${updatePost.id}`)
      .then(res => {
        console.log(res.data);
        updateUserPosts(userPosts.filter(item => item.id !== posts.id));
      })
      .catch(err => console.log(err.response));
  };

  //    console.log('editing image', userPosts)
  return (
    <div>
      <div className='user-posts'>
        {/* {!editImg ? ( */}
        <div className='post-info'>
          <div className='preview-img'>
            <img
              onClick={e => {
                e.stopPropagation();
                setEditImg(!editImg);
              }}
              src={posts.image}
              alt={posts.description}
            />
          </div>
          {/* ):(
            <form onSubmit={update}>
            <input
                    type='text'
                    name='newImage'
                    placeholder={posts.image}
                    onChange={handleChanges}
                    value={updatePost.newImage}
            />
            <button>Update</button>
            </form>
        ) }  */}
          {/* {!editDesc? ( */}
          <div className='post-text'>
            <h4
              onClick={e => {
                setEditDesc(!editDesc);
              }}
            >
              {posts.description},
            </h4>
            {/* ):(
            <form onSubmit={update}>
            <input
                    type='text'
                    name='newDescription'
                    placeholder={posts.description}
                    onChange={handleChanges}
                    value={updatePost.newDescription}
            />
            <button>Update</button>
            </form>
        ) }
        { !editTheme ? ( */}
            <p
              onClick={e => {
                e.stopPropagation();
                setEditTheme(!editTheme);
              }}
            >
              <b>Theme:</b> {posts.theme},
            </p>
            {/* ):(
            <form onSubmit={update}>
            <input
                    type='text'
                    name='newTheme'
                    placeholder={posts.theme}
                    onChange={handleChanges}
                    value={updatePost.newTheme}
            />
            <button>Update</button>
            </form>
            )}
            { !editLocation ? ( */}
            <p
              onClick={e => {
                e.stopPropagation();
                setEditLocation(!editLocation);
              }}
            >
              <b>Location:</b> {posts.location},
            </p>
            {/* ):(
                <form onSubmit={update}>
                  <input
                    type='text'
                    name='newLocation'
                    placeholder={posts.location}
                    onChange={handleChanges}
                    value={updatePost.newLocation}
                  />
                  <button>Update</button>
                </form>
            )}
            {!editVendor ? ( */}
            <p
              onClick={e => {
                e.stopPropagation();
                setEditVendor(!editVendor);
              }}
            >
              <b>Vendors:</b> {posts.vendors}
            </p>
          </div>
        </div>
        <div className='edit-delete'>
          <Modal show={showModal} handleClose={closeModal}>
            <UpdateForm
              handleChanges={handleChanges}
              update={update}
              updateUserPosts={updateUserPosts}
              userPosts={userPosts}
              updatePost={updatePost}
            />
          </Modal>
          <p onClick={openModal}>EDIT</p>
          <img src={trashcan} onClick={e => remove()} />
        </div>
        {/* ):(
                  <form onSubmit={update}>
                  <input
                    type='text'
                    name='newVendors'
                    placeholder={posts.vendors}
                    onChange={handleChanges}
                    value={updatePost.newVendors}
                  />
                  <button>Update</button>
                  </form>
              )} */}
      </div>
    </div>
  );
};

export default UserPosts;
