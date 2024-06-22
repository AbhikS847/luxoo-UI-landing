import React, { useState, useEffect } from 'react';

const Jumbo = () => {
  // Dummy testimonials data
  const testimonials = [
    { id: 1, text: "Great service and amazing selection of luxury cars!" },
    { id: 2, text: "Easy booking process and excellent customer support." },
    { id: 3, text: "Highly recommend Luxoo for luxury car rentals." }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevTestimonial) => (prevTestimonial + 1) % testimonials.length);
    }, 3000); // Change testimonial every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="jumbotron" style={{ position: 'relative', textAlign: 'left' }}>
      <div className="intro">
        <div className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div className="display-1" style={{ fontWeight: 600 }}>LUXOO</div>
            <div>Rent your luxury cars today</div>
          </div>
          <div className="testimonial-section d-none d-lg-block">
          <div className="testimonial">
            {testimonials.map((testimonial, index) => (
              <div>
              <div key={testimonial.id} style={{ display: index === currentTestimonial ? 'block' : 'none' }}>
                "{testimonial.text}"
              </div>
              </div>
            ))}
          </div>
        </div>
          <button className="btn btn-primary" style={{ fontSize: '1rem' }}>
            25% off orders
          </button>
        </div>

        <div className="lower-jumbo" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button className="btn btn-primary" style={{ fontSize: '1rem' }}>
            Sign up
          </button>
          <div style={{ textAlign: 'right' }}>
            <div>1234-456-567</div>
            <div>luxocars.com.au</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbo;
