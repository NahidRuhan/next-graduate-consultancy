const AboutUs = () => {
  return (
    <div>
      <div>
        <img
          className="w-full h-96"
          src="https://i.ibb.co/g9cfVbK/polygonal19.jpg"
          alt=""
        />
      </div>

      <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">
        <div>
          <h1 className="font-bold text-4xl text-center lg:text-left">
            About Graduate Consultancy
          </h1>
        </div>

        <div className=" text-justify">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="col-span-2">
              <p className="my-10">
                Welcome to Graduate Consultancy, your premier destination for
                comprehensive visa and education solutions. As a newly
                established agency, we are dedicated to guiding and supporting
                aspiring graduates in fulfilling their academic ambitions and
                global aspirations. At Graduate Consultancy, we understand the
                transformative power of education and the pivotal role visas
                play in shaping one&apos;s future. Our mission is to simplify
                this journey, offering tailored guidance and expert assistance
                every step of the way.
              </p>
              <p>
                Driven by a passion for empowering students, our team combines
                expertise in both educational consultancy and visa facilitation.
                We strive to provide holistic support, ensuring students receive
                personalized advice on educational programs that align with
                their career goals. Moreover, our adeptness in visa processes
                helps streamline applications, making the transition to
                international study seamless and stress-free.
              </p>
              <p>
                What sets us apart is our commitment to individualized attention
                and a client-centric approach. Our newly established agency is
                founded on principles of integrity, reliability, and a genuine
                desire to see our clients succeed. We are continuously expanding
                our network of reputable educational institutions and staying
                updated with visa regulations, ensuring we offer the most
                relevant and up-to-date guidance to our clients.
              </p>
              <p>
                Whether it&apos;s finding the right academic program or
                navigating visa requirements, Graduate Consultancy is here to be
                your trusted partner. Join us as we embark together on this
                exciting journey towards academic excellence and global
                opportunities.
              </p>
            </div>
            <iframe
  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgraduateconsultancy&tabs=timeline&width=400&height=450&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
  width="400"
  height="450"
  style={{
    border: "none",
    overflow: "hidden",
    scrolling: "no",
    frameBorder: "0",
    allowFullScreen: true,
    allow: "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
  }}
/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
