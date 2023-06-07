import React,{useState} from 'react'

export default function About(props) {

    const [image, setimage] = useState(
        "https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/moon_dark_mode_night-2-512.png "
      );
      const [myStyle, setmyStyle] = useState({});
      
      const toggleStyle = () => {
        if (myStyle.color == "#E6EAFF" ){
          setmyStyle({});
          setimage(
            "https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/moon_dark_mode_night-2-512.png "
          );
        } else{
          setmyStyle({
            color: "#E6EAFF",
            backgroundColor: "#0D004D",
          });
          setimage("https://img.icons8.com/?size=512&id=EWXLJBR0k8Tm&format=png");
        }
      };
    // let image = 'https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/moon_dark_mode_night-2-512.png ';
    // let myStyle = {

    // }
  return (
    <>    
            <div>
              <button type="button" className={`btn btn-outline-secondary `} onClick={toggleStyle} style={{ textAlign: "center" }}>
                <img style={{width: "20px",height: "20px",display: "inline-block",}} src={image} alt="darkmode"/>
              </button>
            </div>   
            {/* <div style={myStyle}  className={`jumbotron jumbotron-fluid `}  > */}
            <div  className={`jumbotron jumbotron-fluid bg-${props.mode==='dark'?'dark':'light'} text-${props.mode==='dark'?'light':'dark'}`}  >
            <div className="container">
            <h1 className="display-4" >Welcome to Our College <strong><i>istore</i></strong> website</h1>
            <p className="lead">Our mission is to provide a convenient and efficient way for students, faculty, and staff to purchase the items they need for school and daily life.</p>
            <hr className="my-4"/>
            <p>Our team of dedicated students has worked hard to create a platform that is easy to use, secure, and offers a wide range of products. We are proud to say that all of the products available on our site are sourced from trusted suppliers and vendors, ensuring their quality and authenticity.</p>
            <p>As students ourselves, we understand the importance of affordability and accessibility. That's why we strive to keep our prices as low as possible while still maintaining a high standard of quality. We also offer various payment options, including online payment and cash on delivery, to make it easier for everyone to shop with us.</p>
            <p>We believe in transparency and honesty in our business practices, and we welcome any feedback or suggestions from our customers. Your satisfaction is our top priority, and we are committed to providing you with an exceptional shopping experience.</p>
            </div>
            {/* <div style={myStyle} className="jumbotron jumbotron-fluid" > */}
            <div  className={`jumbotron jumbotron-fluid bg-${props.mode==='dark'?'dark':'light'} text-${props.mode==='dark'?'light':'dark'}`}  >
            <div className="container" >
            <h1 className="display-4">Meet Our Team of Dedicated Students</h1>
            <p className="lead">We are working hard to make this <strong><i>istore</i></strong> website a success.</p>
            <hr className="my-4"/>
            <ul>
                <li><strong>Mani Rohit</strong> - lcb2022017@iiitl.ac.in</li>
                <li><strong>Jaswanth Reddy</strong> - lci2022010@iiitl.ac.in</li>
                <li><strong>Venkata vamsi</strong> - lcb2022024@iiitl.ac.in</li>
                <li><strong>Roopesh</strong> - lcb2022032@iiitl.ac.in</li>
                <li><strong>Shashank</strong> - lcb2022033@iiitl.ac.in</li>
            </ul>
            </div>
            </div>
            {/* <div style={myStyle} className="jumbotron jumbotron-fluid" > */}
            <div  className={`jumbotron jumbotron-fluid bg-${props.mode==='dark'?'dark':'light'} text-${props.mode==='dark'?'light':'dark'}`}  >
            <h1>About Us</h1>
            <p>Here is some information about our organization.</p>
            <p>IIIT Lucknow Address: <br/> Indian Institute of Information Technology Lucknow <br/> Chak Ganjaria, C G City <br/> Lucknow - 226002 <br/> Uttar Pradesh, India</p>
            </div>

        </div>
    </>
  )
}
