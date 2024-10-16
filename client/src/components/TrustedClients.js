import React, { useState, useEffect } from "react";

const TrustedClients = () => {
  const clients = [
    {
      name: "company",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHsOgCGwXe4R65WJWw7WBYL4VUwFH0lCwDKA&s",
    },
    {
      name: "company",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG1RYnhUbEgJLsNt41OBTFMKAMKio-px0GcA&s",
    },
    {
      name: "company",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHsOgCGwXe4R65WJWw7WBYL4VUwFH0lCwDKA&s",
    },
    {
      name: "company",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG1RYnhUbEgJLsNt41OBTFMKAMKio-px0GcA&s",
    },
    {
      name: "company",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHsOgCGwXe4R65WJWw7WBYL4VUwFH0lCwDKA&s",
    },
    {
      name: "company",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG1RYnhUbEgJLsNt41OBTFMKAMKio-px0GcA&s",
    },
    {
      name: "company",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHsOgCGwXe4R65WJWw7WBYL4VUwFH0lCwDKA&s",
    },
    {
      name: "company",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG1RYnhUbEgJLsNt41OBTFMKAMKio-px0GcA&s",
    },
    {
      name: "company",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHsOgCGwXe4R65WJWw7WBYL4VUwFH0lCwDKA&s",
    },
    {
      name: "company",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG1RYnhUbEgJLsNt41OBTFMKAMKio-px0GcA&s",
    },
    {
      name: "company",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHsOgCGwXe4R65WJWw7WBYL4VUwFH0lCwDKA&s",
    },
    {
      name: "company",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG1RYnhUbEgJLsNt41OBTFMKAMKio-px0GcA&s",
    },
    {
      name: "company",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHsOgCGwXe4R65WJWw7WBYL4VUwFH0lCwDKA&s",
    },
    {
      name: "company",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG1RYnhUbEgJLsNt41OBTFMKAMKio-px0GcA&s",
    },
    {
      name: "company",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHsOgCGwXe4R65WJWw7WBYL4VUwFH0lCwDKA&s",
    },
  ];

  const testimonials = [
    {
      name: "Juan José Barud",
      position: "IT Operations Manager",
      company: "AudioWeb",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      feedback:
        "We had a positive experience in software development. We successfully completed two projects and are eager to engage in more business with them. Highly recommend for long-term relationships.",
    },
    {
      name: "Maria Smith",
      position: "Product Manager",
      company: "Tech Solutions",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      feedback:
        "They have been an incredible partner, helping us to deliver complex projects on time. Their team is extremely professional and talented.",
    },
    {
      name: "Ahmed Khaled",
      position: "CEO",
      company: "InnovateX",
      avatar: "https://randomuser.me/api/portraits/men/76.jpg",
      feedback:
        "Their services exceeded our expectations. The communication and technical expertise were top-notch, making them an invaluable partner for our business.",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial(
        (prevTestimonial) => (prevTestimonial + 1) % testimonials.length
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, [testimonials.length]);

  const handleNext = () => {
    setCurrentTestimonial(
      (prevTestimonial) => (prevTestimonial + 1) % testimonials.length
    );
  };

  const handlePrev = () => {
    setCurrentTestimonial(
      (prevTestimonial) =>
        (prevTestimonial - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center py-10 bg-gray-50 space-y-10">
      <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold">
        Globally Trusted Clients
      </h2>
      <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 px-6 max-w-4xl">
        Committed to delivering best-in-class services with proven project
        management practices.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6 py-12 max-w-7xl">
      {/* Mapping through clients and displaying logos */}
      {clients.map((client, index) => (
        <div key={index} className="flex justify-center items-center">
          <img
            src={client.logo}
            alt={client.name}
            className="max-w-full h-auto object-contain hover:opacity-75 transition-opacity duration-300"
          />
        </div>
      ))}
    </div>

      <div className="bg-gray-50 py-16 w-full">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Side: Text Section */}
            <div className="text-left">
              <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-800">
                Look What Our Customers Say!
              </h2>
              <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 mb-12">
                We have successfully helped service providers and enterprises
                scale their businesses globally.
              </p>
            </div>

            {/* Right Side: Testimonial Section */}
            <div className="relative bg-white p-8 rounded-md shadow-md max-w-lg mx-auto min-h-[350px]">
              <div className="flex items-center mb-4">
                <img
                  className="w-12 h-12 rounded-full mr-4"
                  src={testimonials[currentTestimonial].avatar}
                  alt="Avatar"
                />
                <div>
                  <h4 className="sm:text-base md:text-lg lg:text-xl font-bold text-gray-800">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="sm:text-base md:text-lg lg:text-xl text-gray-600">
                    {testimonials[currentTestimonial].position}
                  </p>
                </div>
              </div>
              <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 mb-4">
                {testimonials[currentTestimonial].feedback}
              </p>
              <a
                href="#"
                className="sm:text-base md:text-lg lg:text-xl text-blue-500 font-bold"
              >
                {testimonials[currentTestimonial].company}
              </a>

              {/* Prev/Next buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-600 p-2 rounded-full shadow-md"
              >
                &#8249;
              </button>

              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-600 p-2 rounded-full shadow-md"
              >
                &#8250;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedClients;
