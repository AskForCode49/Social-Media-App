import React, { useContext, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import Modal from "./Modal";
import useInput from "../hooks/useInput";
import { FeedContext } from "../context/FeedContext";
import { client, uploadImage } from "../utils";
import { NewPostIcon } from "./Icons";

const NewPostWrapper = styled.div`
  .newpost-header {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }

  .newpost-header h3:first-child {
    color: ${(props) => props.theme.red};
  }

  h3 {
    cursor: pointer;
  }

  .newpost-header h3:last-child {
    color: ${(props) => props.theme.blue};
  }

  textarea {
    height: 100%;
    width: 100%;
    font-family: "Fira Sans", sans-serif;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    resize: none;
  }

  .modal-content {
    width: 700px;
  }

  @media screen and (max-width: 780px) {
    .modal-content {
      width: 90vw;
    }
  }
`;


  return (
    <NewPostWrapper>
      <label htmlFor="upload-post">
        <NewPostIcon />
      </label>
      <input
        id="upload-post"
        type="file"
        onChange={handleUploadImage}
        accept="image/*"
        style={{ display: "none" }}
      />
      {showModal && (
        <Modal>
          <div className="modal-content">
            <div className="newpost-header">
              <h3 onClick={() => setShowModal(false)}>Cancel</h3>
              <h3 onClick={handleSubmitPost}>Share</h3>
            </div>
            {preview && (
              <img className="post-preview" src={preview} alt="preview" />
            )}
            <div>
              <textarea
                placeholder="Add caption"
                value={caption.value}
                onChange={caption.onChange}
              />
            </div>
          </div>
        </Modal>
      )}
    </NewPostWrapper>
  );
};

export default NewPost;
