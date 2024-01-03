'use client'
import React,{useState} from 'react'
import { MdUpload } from 'react-icons/md';


const EditRequestPage = () => {

    const [fileInputKey, setFileInputKey] = useState(0);
    const [file, setFile] = useState(null)

    const handleDivClick = () => {
        // When the div is clicked, trigger the hidden file input
        document.getElementById('fileInput').click();
    };

    const handleFileChange = (e) => {
        // Handle the file selection here
        const selectedFile = e.target.files[0];
        setFile(selectedFile)
        console.log('Selected file:', selectedFile);
    };


  return (
    <div className='flex justify-center'>
      <div className='px-4 mt-4 max-w-3xl'>
          <div className='flex justify-between'>
            <h1 className='font-medium text-xl'>Request Details</h1>
          </div>


        <div className='mt-3 flex gap-20'>
          <div>
            <h1 className='uppercase'>Request Id</h1>
            
            <input type="text"  defaultValue = {'Req12312'} className="input w-full max-w-lg bg-slate-100" />
          </div>
          
          <div>
            <h1 className='uppercase'>Received Created</h1>
              
              <input type="text"  defaultValue = {'10/12/2024'} className="input w-full max-w-lg bg-slate-100" />
          </div>
        </div>

        <div className='mt-3 flex flex-col gap-3'>
          <div>
            <h1 className='uppercase'>Description</h1>
            
            <textarea className="textarea max-w-xl w-full h-32 bg-slate-100"  defaultValue={"Bio"}></textarea>
          </div>
          
          <div>
            <h1 className='uppercase'>Condition(s)</h1>
            
            <textarea className="textarea max-w-xl w-full h-32 bg-slate-100"  defaultValue={"Conditions"}></textarea>
          </div>

          <div>
            <h1 className='uppercase'>Supporting Document(s)</h1>
            
            <div className='h-32 border border-dashed rounded-lg mb-2 flex justify-center place-items-center bg-slate-100' onClick={handleDivClick}>

                {
                    file ? file.name : <MdUpload size={32} className='text-slate-600' />
                }
                <input
                    type='file'
                    id='fileInput'
                    key={fileInputKey}
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                />

            </div>
          </div>
        </div>

        <button className='w-full btn btn-success text-slate-50'>update</button>
      </div>
    </div>
  )
}

export default EditRequestPage