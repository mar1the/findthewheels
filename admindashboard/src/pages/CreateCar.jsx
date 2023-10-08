import React, { useState } from 'react';
import "../styles/createcar.css";

function CreateCar() {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New car created:', formData);
    setFormData({
      make: '',
      model: '',
      year: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  return (
    <div class="row">
    <div class="col-75">
      <div class="container">
       <form onSubmit={handleSubmit}>
        <h1>Create Car Form</h1>
          <div class="row">
            <div class="col-50">
            
               <label htmlFor="make">Car Name: </label>
                <input
                  type="text"
                  id="make"
                  name="make"
                  value={formData.make}
                  onChange={handleInputChange}
                  required
                />
              
            
                <label htmlFor="model">Brand: </label>
                <input
                  type="text"
                  id="model"
                  name="model"
                  value={formData.model}
                  onChange={handleInputChange}
                  required
                />
                
                <label htmlFor="make">Price: </label>
                <input
                  type="text"
                  id="make"
                  name="make"
                  value={formData.make}
                  onChange={handleInputChange}
                  required
                />

                <label htmlFor="make">Description: </label>
                <input
                  type="text"
                  id="make"
                  name="make"
                  value={formData.make}
                  onChange={handleInputChange}
                  required
                />
                         
                
                    </div>
          
                    <div class="col-50">
                    
                      <label htmlFor="make">Speed: </label>
                <input
                  type="text"
                  id="make"
                  name="make"
                  value={formData.make}
                  onChange={handleInputChange}
                  required
                />
              
            
                <label htmlFor="make">GPS: </label>
                <input
                  type="text"
                  id="make"
                  name="make"
                  value={formData.make}
                  onChange={handleInputChange}
                  required
                />
              
            
                <label htmlFor="make">Seat Capacity: </label>
                <input
                  type="text"
                  id="make"
                  name="make"
                  value={formData.make}
                  onChange={handleInputChange}
                  required
                />
                      <div class="row">
                        <div class="col-50">
                          <label htmlFor="make">Automatic: </label>
                <input
                  type="text"
                  id="make"
                  name="make"
                  value={formData.make}
                  onChange={handleInputChange}
                  required
                />
                </div>
                 <div class="col-50">
                
                
                 <label htmlFor="year">Model: </label>
                <input className='model'
                  type="number"
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  required
                />
                </div>
              </div>
            </div>
            
          </div>
      
          <button className='btn' type="submit">Create Car</button>
        </form>
      </div>
    </div>

      </div>
  
  );
}

export default CreateCar