const Home = () => {
  return (
    <div className="hero">
      <div class="card bg-dark text-white border-0">
        <img src="assets/bg.jpg" class="card-img" alt="..." height="550px"/>
        <div class="card-img-overlay d-flex flex-column justify-content-center">
            <div className="continer">
                <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
            <p class="card-text lead fs-2">
                CHECK OUT ALL THE TRENDS

            </p>
            <p class="card-text">Last updated 3 mins ago</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;