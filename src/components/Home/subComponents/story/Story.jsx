

const Story = () => {


  return (
    <section>
        <div className="container">
            <div className="row">
                <div className="section-title">
                    <h1 className="display-3">Our Story</h1>
                    <img src="./images/line-shape-2.svg" alt="" style={{width: "300px"}} className="ms-5" />
                </div>
            </div>
            <div className="row g-4 my-3">
                <div className="col-lg-6 col-md-12" data-aos="fade-left" data-aos-easing="infinite" data-aos-duration="1000">
                    <div className="">
                        <img className="img-fluid" src="./images/ils_11.svg" alt="" />
                    </div>
                </div>
                <div className="col-lg-5 offset-lg-1" data-aos="fade-right" data-aos-easing="infinite" data-aos-duration="1000">
                    <div className="story">
                        <p>Mustard means something small with the potential to grow into something large or vast. Here at Mustard.ng, every mustard matters and your mustard can give you a tree tomorrow.</p>
                    </div>
                    <div className="story">
                        <p>Mustard.ng is on a path to help everyone, even those with a little mustard seed to grow into a large tree through savings and investment.</p>
                    </div>
                    <div className="story">
                        <p>Mustard.ng intends on making you financially safer. We know the pain that comes with seeing money leave and not being able to explain it.</p>
                    </div>
                    <div className="story">
                        <p>We care about your spending habits. We intend on making you financially free and we intend to be the best. It's all love from Mustard.ng</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Story