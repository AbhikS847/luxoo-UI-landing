import React, { useState } from 'react';
import car1 from '../images/car1.png';
import car2 from '../images/car2.png';
import car3 from '../images/car3.png';

const CarListing = () => {
  const [activeColors, setActiveColors] = useState({});

  const handleColorClick = (carIndex, colorIndex) => {
    setActiveColors({ ...activeColors, [carIndex]: colorIndex });
  };

  const cars = [
    {
      imageUrl: car1,
      name: 'Rolls-Royce Ghost',
      engine: '6.75L V12',
      seats: 5,
      year: 2023,
      description: 'A pinnacle of luxury and craftsmanship, known for its serene ride and opulent interior.',
      colors: ['#000000', '#FFFFFF', '#4169E1'], // Black, White, Royal Blue
      price: 450,
    },
    {
      imageUrl: car2,
      name: 'Mercedes-Benz S-Class',
      engine: '3.0L Inline-6 Turbo',
      seats: 5,
      year: 2022,
      description: 'Exudes elegance and cutting-edge technology, offering exceptional comfort and performance.',
      colors: ['#0B0B0B', '#C0C0C0', '#50C878'], // Obsidian Black, Iridium Silver, Emerald Green
      price: 400,
    },
    {
      imageUrl: car3,
      name: 'Bentley Bentayga',
      engine: '4.0L Twin-Turbo V8',
      seats: 5,
      year: 2024,
      description: 'Luxurious SUV with impeccable craftsmanship and powerful performance.',
      colors: ['#F8F8FF', '#353839', '#66B2FF'], // Glacier White, Onyx, Sequin Blue
      price: 475,
    },
  ];

  return (
    <div className="container">
      {cars.map((car, carIndex) => (
        <div className="row mb-4 align-items-center" key={carIndex}>
          {/* Image of the luxury car (col-md-4 for desktop, col-12 for mobile) */}
          <div className="col-md-4 col-12 position-relative">
            <img src={car.imageUrl} alt={car.name} className="img-fluid car-image" />
            <button className="btn btn-primary position-absolute rent-button">
              Rent for ${car.price} per day
            </button>
          </div>
          {/* Description of the luxury car (col-md-8 for desktop, col-12 for mobile) */}
          <div className="col-md-8 col-12 bg-light p-3">
            <h2>{car.name}</h2>
            <p><strong>Engine:</strong> {car.engine}</p>
            <div className="d-flex justify-content-between">
              <p><strong>Seats:</strong> {car.seats}</p>
              <p><strong>Year of Make:</strong> {car.year}</p>
            </div>
            <p><strong>Description:</strong></p>
            <p>{car.description}</p>
            <div className="mt-3">
              <strong>Colors:</strong>
              <hr />
              <div className="d-inline-flex">
                {car.colors.map((color, colorIndex) => (
                  <div
                    key={colorIndex}
                    onClick={() => handleColorClick(carIndex, colorIndex)}
                    className={`color-box mr-2 ${activeColors[carIndex] === colorIndex ? 'active' : ''}`}
                    style={{
                      backgroundColor: color,
                      width: activeColors[carIndex] === colorIndex ? '50px' : '40px',
                      height: activeColors[carIndex] === colorIndex ? '50px' : '40px',
                      border: '1px solid #eaeaea',
                      cursor: 'pointer',
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CarListing;
