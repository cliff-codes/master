import React from 'react'

const AddSupplierPage = () => {
  return (
    <div className='px-4 mt-4'>
        <h1 className='font-medium text-xl text-center'>Add Supplier</h1>

        <div className='flex justify-center place-items-center'>
            <form className='w-full max-w-xl  flex flex-col justify-center place-items-center gap-3'>

                <label className="form-control w-full max-w-lg">
                    <div className="label">
                        <span className="label-text font-medium">Company Name</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input focus:outline-none w-full max-w-lg bg-slate-100" />
                </label>

                <label className="form-control w-full max-w-lg">
                    <div className="label">
                        <span className="label-text font-medium">Contact Email</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input focus:outline-none w-full max-w-lg bg-slate-100" />
                </label>

                <label className="form-control w-full max-w-lg">
                    <div className="label">
                        <span className="label-text font-medium">Location</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input focus:outline-none w-full max-w-lg bg-slate-100" />
                </label>

                <label className="form-control w-full max-w-lg">
                    <div className="label">
                        <span className="label-text font-medium">Service Type</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input focus:outline-none w-full max-w-lg bg-slate-100" />
                </label>

                <label className="form-control w-full max-w-lg">
                    <div className="label">
                        <span className="label-text font-medium">Password</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input focus:outline-none w-full max-w-lg bg-slate-100" />
                </label>

                <label className="form-control w-full max-w-lg">
                    <div className="label">
                        <span className="label-text font-medium">Repeat Password</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input focus:outline-none w-full max-w-lg bg-slate-100" />
                </label>

                <button className='btn btn-success w-full max-w-lg text-slate-50'>Add Supplier</button>
            </form>
        </div>

    </div>
  )
}

export default AddSupplierPage