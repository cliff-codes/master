'use client'
import React, {useState, useRef} from 'react'
import Image from 'next/image'

const AddUserPage = () => {
  const fileInputRef = useRef(null)
  const [userImg,setUserImg] = useState('')
  const [imgPreview, setImgPreview] = useState(null)
  const [fileInputError, setFileInputError] = useState(null)

  const handleButtonClick = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
      // checks if selected file is an image file or not
    if(selectedFile && selectedFile.type.startsWith('image/')){
      setUserImg(selectedFile)
      setFileInputError(null)
      //read the content of the selected file as url
      const reader = new FileReader()
      reader.onload = () => {
        //set the data url as the img preview
        setImgPreview(reader.result)
      }
      reader.readAsDataURL(selectedFile)
    }else{
      setImgPreview(null)
      setFileInputError("only images files accepted")
    }
  }

  return (
    <div className='flex-1 mx-3 ml-5'>
      <h1 className='text-slate-600 font-medium mt-4'>Add User</h1>
      <form className='flex flex-col justify-between'>

        <div className='w-full  '>

          <div className='w-full h-28 sm:h-40 bg-slate-200 hover:bg-slate-100 rounded-md flex flex-col justify-center place-items-center gap-2 mt-4 ' onClick={handleButtonClick}>

            <Image width={100} height={100} src={imgPreview || '/camera.png'} alt='add user image' className=' w-20 h-20 rounded-full' quality={90} />
              {fileInputError && <div className='bg-red-300 text-red-500 px-4 rounded-lg'>{fileInputError}</div>}
            
            {/* hidden input for file upload */}
            <input 
              type='file'
              ref = {fileInputRef}
              hidden = {true}
              accept='image/*'
              onChange={handleFileChange}
            />
          </div>

          <div className='w-full mt-4 flex flex-col gap-3'>
            <label className="form-control w-full  ">
              <div className="label">
                <span className="label-text text-slate-500">first name</span>
              </div>
              <input type="text" className="input input-bordered min-w-full " />
            </label>

            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-slate-500">Last name</span>
              </div>
              <input type="text" className="input input-bordered w-full " />
            </label>


            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-slate-500">email</span>
              </div>
              <input type="email" className="input input-bordered w-full " />
            </label>

            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-slate-500">phone</span>
              </div>
              <input type="text" className="input input-bordered w-full " />
            </label>
          </div>
        </div>
        <div className='mt-4'>
          <button className="btn  sm:btn-sm md:btn-md  btn-success text-slate-50 w-full mt-4 h-10 sm:h-14">add user</button>
        </div>
      </form>
    </div>
  )
}

export default AddUserPage