import "./App.css";
import logo from "./Assets/Group 114.png";
import banner from "./Assets/ILLUSTRATION.png";
import Card from "./Components/Card";
import SmallCard from "./Components/SmallCard";
import banner7 from "./Assets/Vector.png";
import banner11 from "./Assets/Group 35.png";
import Column from "./Components/Column";

function App() {
  const Dedicated = [
    {
      title: `UAE Free Zone Company`,
      text: `Your registration agent, will answer all of your questions and help you to reach
  a conclusion that meets your objectives of investing in the UAE.`,
      icon: ``,
    },
    {
      title: `Dubai Local Companies`,
      text: `The Dubai LLC formation documents are actually articles of organization or a certificate of organization. You can get yours today.`,
      icon: ``,
    },
    {
      title: `Offshore Compamies`,
      text: `You can register an offshore company
    and open its bank account in Dubai. Your agent will help you along all the
    process
    `,
      icon: ``,
    },
  ];

  const ColumnArr = [
    {
      name: `AJMAN OFFSHORE`,
      amt: `$2,997`,
      type: `One Time Payment`,
      add: `Ajman Offshore New Company formation includes`,
      feat: ["Attestation Charges", "Registered Agent", "Registered Office"],
    },
    {
      name: `RAK ICC`,
      amt: `$2,997`,
      type: `One Time Payment`,
      add: `Rak Icc New Company formation includes`,
      feat: ["Attestation Charges", "Registered Agent", "Registered Office"],
    },
    {
      name: `SHARJAH MEDIA CITY`,
      amt: `$4,124`,
      type: `One Time Payment`,
      add: `Sharjah Media City New Company formation include `,
      feat: ["Attestation Charges", "Registered Agent", "Registered Office"],
    }
  ];

  return (
    <div className="App">
      {/* Navbar */}
      <div className="navbar">
        <img className="logo " src={logo} />

        <div className="navbar_items">
          <p style={{ marginLeft: `0px`, color: "black" }}>Home</p>
          <p>Services</p>
          <p>Pricing</p>
          <p>About Us</p>
          <button className="stc_button">Start a Company</button>
        </div>
      </div>
      {/* Search button */}
      <div className="serbox">
        <div className="serbody">
          {/* <SearchIcon className='text-blue-600 font-bold text-4xl ' /> */}
          <input
            className="ser_inp"
            type="text"
            placeholder="Search A Term | Topic"
          ></input>
        </div>
      </div>

      {/* Content and image */}

      <div className="contImg">
        <div className="co1">
          <p className="">Claim a Free Quote</p>
          <h2 className="A">
            Get started on fulfilling <br /> your Dubai or UAE <br />
            dream.
          </h2>
          <h2 className="B">UAE & Offshore Company</h2>
          <h2 className="C">
            We provide you with information about UAE or
            <br /> Offshore Company Registration & help you <br />
            setup your company with a bank account and <br /> visas.
          </h2>
          <div className="butcont">
            <button className="AA ">Start a Company</button>
            <button className="BB">Reniew a Company</button>
          </div>
        </div>
        <div className="bancont">
          <img className=" banner" src={banner} />
        </div>
      </div>

      {/* One line quote */}

      <div
        style={{
          display: "flex",
          margin: "0 auto",
          alignItems: "center",
          fontWeight: "600",
          marginTop: "60px",
          color: "rgba(15, 89, 218, 0.87)",
          fontSize: "large",
        }}
        className="flex mx-auto items-center space-x-2 text-lg font-semibold text-blue-600 mt-[60px]"
      >
        <p id="main41">
          Watch the video about UAE or Offshore Company Registration
        </p>
        <img className="banner1" src="/Assets/Group 117.png" alt="" />
      </div>

      {/* Quotes of many line in center */}

      <div className="quotes ">
        <h1 className="quotes1">
          Dedicated
          <br />
          <span className="">to our mission we are</span>
        </h1>
        <p className=" quotes2">
          Our services include Company Formation & Renewals,
          <br />
          Trust & Fiduciary, Tax Residency Setup With Family, Bank
          <br />
          Accounts, Remote Management, Stock Trading <br />
          Platforms, Ownership Solutions.
        </p>
        <br />
      </div>

      {/* Main three zones,company */}

      <div className="main">
        {Dedicated.map(({ title, text, icon }, index) => (
          <SmallCard title={title} key={index} text={text} icon={icon} />
        ))}
      </div>

      {/* Grid properties for content main7*/}

      <div className="column">
        <div className="column1">
          <div className="col_1">
            <p className="col_line">
              Learn the ways in which you can benefit <br />
              from a UAE/Offshore Company. Then get <br />
              started on fulfilling your UAE dream.
            </p>
            <p className="col_quote">Claim a Free Quote</p>
          </div>
          <Card />
          <Card />
        </div>

        <div className="column2">
          <Card />

          <Card />

          <div className="col_2">
            <p className="col2_content">
              We have gathered a team of <br />
              professionals to craft adequate <br />
              services you can rely on for a friction <br />
              free setup in UAE.
            </p>
            <div className="col2_flex">
              <p className="col2_flexcon">More about our services</p>
              <img src={banner7} />
            </div>
          </div>
        </div>
      </div>

      {/* Most Popular affordable... */}

      <div className="middle">
        <h1>
          Most popular affordable pricing per <br />
          jurisdictions are brought to you to <br />
          kick off your adventure.
        </h1>
      </div>

      {/*Three colums for payment  */}

      <div className="bigcolumn">
        {ColumnArr.map(({name,amt,type,add,feat},index) => <Column name={name} amt={amt} type={type} add={add} feat={feat} boole={index & 1} key={index} />)}
        
      </div>

      {/* last section */}
        

      <div className='last_sec'>
        {/* 1st col */}

        <div className='last_first'>
        <h1 className='last_sec1'>Read about our blogs for more <br/>
                         information on our processes </h1>

                         <div className='semi_sec1'>
                        <img className='semi_img' src={banner12}/>
                        <div className='semi_content'>
                            <h1 className='semi_line '>How to start a company<br/> 
                                  formation in Dubai</h1>
                            <h1 className='semi_min'>5 Minutes</h1>
                        </div>    
                    </div>

          <div className="flex space-x-4">
            <img
              className="border-2 border-blue-600 px-4 py-4 rounded-lg"
              src="/Assets/Vector-4.png"
            />
            <div className="flex flex-col space-x-2 text-xl font-semibold">
              <h1 className="text-xl ">
                How to start a company
                <br />
                formation in Dubai
              </h1>
              <h1 className="text-xl text-blue-600">5 Minutes</h1>
            </div>
          </div>

          <div className="flex space-x-4 bg-blue-600 px-4 py-4 rounded-lg">
            <img
              className="border-2 border-white px-4 py-4 rounded-lg text-white"
              src="/Assets/Vector-4.png"
            />
            <div className="flex flex-col space-x-2 text-xl font-semibold text-white">
              <h1 className="text-xl ">
                How to start a company
                <br />
                formation in Dubai
              </h1>
              <h1 className="text-xl text-blue-600">5 Minutes</h1>
            </div>
          </div>

          {/* satisfied... */}

          <h1 className="text-black font-bold text-xl ">
            Satisfied We are When Our <br />
            Customers Are Happy{" "}
          </h1>

          {/* comments */}

          <div className="flex text-xl space-x-4">
            <div>
              <img
                className="border-2 border-blue-600 rounded-full px-2 py-2"
                src="/Assets/Vector-3.png"
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-lg">
                "I am very happy with them. I'll <br />
                continue to use their services in <br />
                future & highly recommend them <br />
                to anyone,"
              </h1>
              <h1 className="text-lg font-bold text-gray-700">Muhib Abrar</h1>
            </div>
          </div>

          <div className="flex text-xl space-x-4">
            <div>
              <img
                className="border-2 border-blue-600 rounded-full px-2 py-2"
                src="/Assets/Vector-3.png"
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-lg">
                "Rama has a high level of integrity, <br />
                intellect, knowledge of his <br />
                business, resourcefulness and <br />
                humanity,"
              </h1>
              <h1 className="text-lg font-bold text-gray-700">
                Colin Saldahna
              </h1>
            </div>
          </div>

          <div className="flex text-xl space-x-4">
            <div>
              <img
                className="border-2 border-blue-600 rounded-full px-2 py-2"
                src="/Assets/Vector-3.png"
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-lg">
                "Your advise was so complete that I <br />
                actually realized how beneficial <br />
                this would be to my clients and my <br />
                business.
              </h1>
              <h1 className="text-lg font-bold text-gray-700">Mark Swann</h1>
            </div>
          </div>
        </div>
        {/* 2nd col */}

        <div className="flex flex-col space-y-4 w-5/12 px-20">
          <h1 className="text-black font-bold text-xl ">
            Get to know the whole us and <br />
            more of our services{" "}
          </h1>

          <div className="text-xl  text-gray-400">
            <p className="text-gray-800 font-bold">Services</p>
            <p>Products</p>
            <p>Solutions</p>
            <p>Assurance</p>
            <p>FAQ</p>
            <p>Working at Varal-Singhania</p>
          </div>

          <div className="text-xl  text-gray-400">
            <p className="text-gray-800 font-bold">Policies</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>

          <div className="text-xl  text-gray-400">
            <p className="text-gray-800 font-bold">About</p>
            <p>About Us</p>
            <p>Contact Us</p>
          </div>

          <div className="text-xl  text-gray-400">
            <p className="text-gray-800 font-bold">Address</p>
            <p>
              608 One Lake Plaza, Cluster T, Al Sarayat Street, Jumeirah Lake
              Tower Dubai United Arab Emirates
            </p>
            <br />
            <p>
              Office Hours: Sunday to <br />
              Thursday 8:30 AM to 6:30 PM <br />
              [GMT+4] <br />
              M: +971 55 794 2016 <br />
              O: +971 4 447 2061 <br />
            </p>
          </div>

          <div className="text-xl  text-gray-400">
            <p className="text-gray-800 font-bold">Subscribe Now</p>
            <p>
              Subscribe now to receive our <br />
              Newsletters about amazing <br />
              opportunities in Dubai
            </p>
          </div>

          <div className="flex">
            <input
              className="items-center w-3/4 h-14"
              type="email"
              placeholder="Enter email address"
            />
            <img className="h-14" src="/Assets/Group 34.png" />
          </div>

          <div className="flex space-x-6">
            <img src="/Assets/Vector-5.png" />
            <img src="/Assets/Vector-6.png" />
            <img src="/Assets/Vector-7.png" />
            <img src="/Assets/Vector-8.png" />
          </div>
        </div>
      </div>

      {/* End */}

      <div className="mx-auto mt-[60px] mb-[70px] text-lg font-semibold text-gray-400">
        <p>Varaluae 2021 C All Right Reserved</p>
      </div>
    </div>
  );
}

export default App;
