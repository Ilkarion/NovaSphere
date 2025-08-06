'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import addImg from "@/imgs/addImg.svg"
import styles from "./dragImg.module.scss"

interface DropImgProps {
  onChange: (file: File | null) => void; // передаём файл родителю
}

export default function DropImg({ onChange }: DropImgProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('It is not an image!');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('Image more than 5MB!');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
      setFile(file);
      onChange(file); // отправляем файл родителюs
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) handleFile(droppedFile);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const droppedFile = e.target.files?.[0];
    if (droppedFile) handleFile(droppedFile);
  };

  const handleRemove = () => {
    setPreview(null);
    setFile(null);
    onChange(null); // уведомляем родителя, что файл удалён
  };

  return (
    <div onDragOver={(e) => e.preventDefault()} onDrop={handleDrop} className={styles.dragContainer}>
      <label className={`${preview ? 'hidden' : styles.infoContainer}`}>
        <span>Drag & Drop</span>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className='hidden'
        />
        <div className={styles.addIcon}>
          <Image src={addImg} alt="Add image" />
        </div>
      </label>

      {preview && (
        <div className={`relative ${styles.previewImg}`}>
          <div className={styles.previewImg}>
            <Image src={preview} alt="preview" width={1000} height={1000} quality={100}/>
          </div>
          <div className='absolute top-0 right-1 hover:cursor-pointer' onClick={handleRemove}>❌</div>
        </div>
      )}
    </div>
  );
}
