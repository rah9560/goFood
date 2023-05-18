import React from 'react'

const Card = () => {
  return (
    <div className='m-3'>
        <div className="card mt-2" style={{"width": "18rem", "maxHeight":"360px" }}>
        <img className="card-img-top" src="https://static.onecms.io/wp-content/uploads/sites/43/2022/05/26/8805-CrispyFriedChicken-mfs-3x2-072.jpg" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some text</p>
            <div className='container w-100'>
              <select className='m-2 h-100 bg-success rounded text-white'>
                {Array.from(Array(6),(e,i)=>{
                  return(
                    <option key={i+1} value={i+1}>{i+1}</option>
                  )
                })}
              </select>
              <select className='m-2 h-100 bg-success rounded text-white'>
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className='d-inline h-100 fs-5'>
              Total Price
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Card