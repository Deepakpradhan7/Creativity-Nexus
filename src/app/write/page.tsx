"use client";

import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import "react-quill/dist/quill.bubble.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";

import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState(null);
  const [catSlug, setCatSlug] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [loading, setLoading] = useState(false)
  const [imagePreview, setImagePreview] = useState(null); // Define imagePreview state

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      //@ts-ignore
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);
      //@ts-ignore
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setUploadProgress(progress); // Update progress state
        },
        (error) => {
          console.error("Error uploading file:", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              console.log("File uploaded successfully:", downloadURL);
              setMedia(downloadURL);
            })
            .catch((error) => {
              console.error("Error getting download URL:", error);
            });
        }
      );
    };

    file && upload();
  }, [file]);

  const handleImageChange = (e:any) => {
    const file = e.target.files[0];
    if (file) {
      setUploadProgress(0); // Reset progress when selecting a new file
      setFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        //@ts-ignore
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

      const handleSubmit = async () => {
        setLoading(true)
        const res = await fetch("https://creativitynexus.vercel.app/api/posts", {
          method: "POST",
          body: JSON.stringify({
            title,
            desc: value,
            img: media,
            //@ts-ignore
            slug: slugify(title),
            catSlug: catSlug || "pencil", 
          }),
        });
        
        if (res.status === 200) {
          const data = await res.json();
          toast.success('Post created successfully')
          router.push('/');
        } else {
          toast.error('Something Went Wrong!')
        }
        setLoading(false)
         
      };

    
  const isDisabled = !title || !catSlug ;

  return (
    <div>
    <div className='con'>
      <div className="flex flex-col gap-6 my-5 mb-32">
      {/* @ts-ignore */}
        <input value={title} onChange={(e)=>setTitle(e.target.value)} type='text' placeholder='Title goes here...' className='p-2 text-4xl border-none outline-none bg-transparent' />
        <select className="w-fit px-4 py-2 rounded-md bg-blue-100 text-gray-600"  onChange={(e) => setCatSlug(e.target.value)}>
          <option value="pencil">pencil</option>
          <option value="paintings">paintings</option>
          <option value="poetry">poetry</option>
          <option value="sculpture">sculpture</option>
          <option value="abstract">abstract</option>
          <option value="photography">photography</option>
        </select>
        <div className="flex gap-6">
          <div>
            <input type="file" name="image" id="image" accept="image/*" className="sr-only" onChange={handleImageChange} />
            <label htmlFor="image" className="cursor-pointer   py-2 px-4 rounded-md inline-block bg-blue-100 text-gray-600" >Choose Image</label>
          </div>
          <div className="w-32 h-24">
            {uploadProgress > 0  && uploadProgress < 100 && (
              <div>
                Uploading:  {Math.floor(uploadProgress)}%
                <progress value={uploadProgress} max="100" />
              </div>
            )}
            {imagePreview && <img src={imagePreview} alt="Preview Image" className="" />}
          </div>
        </div>
      </div>
      {/* @ts-ignore */}
      <textarea className='w-1/2 p-2 text-2xl  bg-transparent ' type='text' value={value} onChange={(e)=>setValue(e.target.value)} placeholder='Tell your story...'/>   
      

    </div>
    <button
  disabled={isDisabled}
  className={`bg-green-500 px-4 py-2 text-white absolute mt-14 rounded-md`}
  style={{ cursor: isDisabled || loading ? "not-allowed" : "pointer" }}
  onClick={handleSubmit}
>
  {loading ? (
    <div className="w-full">
    <Loader2 className='w-4 h-4 ml-1 animate-spin'/>
    </div>
  ) : (
    "Publish"
  )}
</button>
    </div>
  )
}

export default WritePage;