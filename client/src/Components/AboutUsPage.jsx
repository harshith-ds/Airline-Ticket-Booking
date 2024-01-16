import './AboutUsPage.css';
import NavBar from './NavBar';

const AboutUsPage = () => {
  return (
    <>
    <NavBar />
    <div className="about-us-page">
      <h2 style={{fontSize: '25px', fontWeight: 'bold'}}>About Us</h2>

      <div className="flight-info">
        <div className="flight">
          <img src="https://th.bing.com/th/id/OIP.-bT-6Ei-9eWjWQE9eTqHMgHaDW?w=310&h=158&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Flight 1" />
          <h3>Flight 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            lacinia urna ac tortor luctus, vitae ultrices augue imperdiet.
          </p>
          <a href="https://example.com/flight1-details" target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
        </div>

        <div className="flight">
          <img src="https://th.bing.com/th/id/OIP.CZ6aH4zx9TECPdmOjCz70QHaE5?rs=1&pid=ImgDetMain" alt="Flight 2" />
          <h3>Flight 2</h3>
          <p>
            Integer in nulla ac justo rhoncus convallis. Suspendisse potenti.
          </p>
          <a href="https://example.com/flight2-details" target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
        </div>

        <div className="flight">
          <img src="https://th.bing.com/th/id/R.56b29746f8f910f7b84448b6c7054474?rik=fr7OcTg3VzRDwA&riu=http%3a%2f%2fstatic6.businessinsider.com%2fimage%2f53f664baecad04726cf34f7a%2fwhy-british-airways-is-the-best-frequent-flyer-program-even-in-the-us.jpg&ehk=6Ro6pDMQ4znRq5GEc4Z9RmdS3XAAkYWc4hNnvKVsA6k%3d&risl=&pid=ImgRaw&r=0" alt="Flight 1" />
          <h3>Flight 3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            lacinia urna ac tortor luctus, vitae ultrices augue imperdiet.
          </p>
          <a href="https://example.com/flight1-details" target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
        </div>

      </div>
    </div>
    </>
  );
};

export default AboutUsPage;
