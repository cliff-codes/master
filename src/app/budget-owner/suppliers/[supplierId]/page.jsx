import React from 'react'

const SupplierDetailsPage = () => {
  return (
    <div className='mx-4 pt-4 flex flex-col gap-6'>
        <div>
            <h1 className='text-xl font-medium'>Company Name: <span>Vision Studios</span></h1>
            <h1>Contact Email: <span>visionstudios@gmail.com</span></h1>
            <h1>Location: <span>Kumasi, Ghana</span></h1>
            <h1>Website: <span>www.visionstudios.com</span></h1>
        </div>
        
        <div className='mt-3'>
            <h1 className='font-medium'>Description</h1>
            <h1>As a leading logistics provider, vision studios is committed to delivering seamless and reliable supply chain solutions tailored to meet the diverse needs of our clients. Our expertise lies in optimizing the movement of goods across various industries.</h1>

            <h1 className='mt-5 font-medium'>Types of services</h1>
            <ul className='list-disc ml-7'>
                <li>Transportation Services</li>
                <li>Warehousing and Distribution</li>
                <li>Supply Chain Management</li>
                <li>Customs Brokerage</li>
                <li>Technology Integration</li>
                <li>E-commerce Fulfillment</li>
                <li>Customer-Centric Approach</li>
            </ul>
        </div>
    </div>
  )
}

export default SupplierDetailsPage