"use client";
import React, { useState } from "react";
import Post from "./Post";
import { NewPost } from "./NewPost";
import Modal from "./Modal";
import { Button } from "./ui/button";

interface Props {
  isModal: boolean;
  onCreatePost: () => void;
}
export interface postDataProps {
  name?: string;
  description?: string;
}
const PostList = ({ isModal, onCreatePost }: Props) => {
  const [posts, setPosts] = useState<postDataProps[]>([]);
  const onSubmitHandler = (postData: postDataProps) => {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  };

  let content = (
    <div className="flex justify-center text-center h-screen">
      <h2 className="text-1xl font-semibold leading-none tracking-tight text-violet-800	dark:text-violet-200">
        No available post
      </h2>
      <div>
        <a
          className="group/edit invisible hover:bg-slate-200 group-hover/item:visible ..."
          href="tel:{person.phone}"
        >
          <span className="group-hover/edit:text-gray-700 ...">Call</span>
          <svg className="group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500 ..."></svg>
        </a>
      </div>
    </div>
  );

  return (
    <>
      {isModal && (
        <Modal onClose={onCreatePost}>
          <NewPost onClose={onCreatePost} onAddPost={onSubmitHandler} />
        </Modal>
      )}
      {/* {posts.length === 0 && content} */}
      <div className="grid grid-cols-4 gap-x-4 gap-y-4 ">
        <Post
          name="Wolverine"
          description="James 'Jimmy' Howlett, also known as Logan or by his codename, Wolverine, is a fictional character originating as the primary"
        />
        {posts.map((post) => (
          <Post
            key={post.name}
            name={post.name}
            description={post.description}
          />
        ))}
      </div>
    </>
  );
};

export default PostList;
