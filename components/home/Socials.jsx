
const Socials = () => {
    return (
        <div>

            <div className="flex flex-col lg:flex-row justify-center gap-5 xl:gap-10">

                <div className="hidden lg:flex flex-col p-5 bg-logoRed">
                <h1 className="text-white pb-5">Address:</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.609161367068!2d90.4234178741163!3d23.796928178638726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217a3e0ecaa3ef77%3A0xef11e141ff55a42b!2sGraduate%20Consultancy!5e0!3m2!1sen!2sbd!4v1713880317990!5m2!1sen!2sbd" width="400" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="lg:hidden flex-col p-5 bg-logoRed">
                <h1 className="text-white pb-5">Address:</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.609161367068!2d90.4234178741163!3d23.796928178638726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217a3e0ecaa3ef77%3A0xef11e141ff55a42b!2sGraduate%20Consultancy!5e0!3m2!1sen!2sbd!4v1713880317990!5m2!1sen!2sbd" width="300" height="350" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

<div className="bg-logoRed p-5 lg:hidden">
    <h1 className="text-white pb-5">Latest News</h1>
    <iframe
  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgraduateconsultancy&tabs=timeline&width=400&height=450&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
  width="300"
  height="350"
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
<div className="bg-logoRed p-5 hidden lg:flex flex-col">
    <h1 className="text-white pb-5">Latest News</h1>
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
    );
};

export default Socials;