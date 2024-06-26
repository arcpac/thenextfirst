"use client";
import React, { ChangeEvent, useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export interface ImagePickerProps {
  label: string;
  name: string;
}

const ImagePicker = ({ label, name }: ImagePickerProps) => {
  const fileReader = new FileReader();
  const [pickedImage, setPickedImage] = useState<string | null>();
  const imageInput = useRef<HTMLInputElement>(null);
  console.log(pickedImage);
  function handlImageChange(e: ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files) {
      setPickedImage(null);
      return;
    }

    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
    };
    fileReader.readAsDataURL(files[0]);
  }

  function onClickHandler() {
    imageInput.current?.click();
  }

  return (
    <div className={`flex flex-col ${classes.picker}`}>
      <div className={classes.preview} onClick={onClickHandler}>
        {!pickedImage && <p>No image selected</p>}
        {pickedImage && (
          <Image src={pickedImage} alt="The image selected by the user" fill />
        )}
      </div>

      <input
        className={classes.input}
        name={name}
        type="file"
        id="image"
        accept="image/jpeg"
        ref={imageInput}
        onChange={handlImageChange}
      />
      {/* <Button
        variant="outline"
        className={`${classes.button} rounded-none dark:bg-red-500`}
        type="button"
        onClick={onClickHandler}
      >
        Upload hero image
      </Button> */}
    </div>
  );
};

export default ImagePicker;
