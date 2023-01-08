
import './App.css';

function App() {
  return (
    <div className='flex flex-col w-screen py-[40px] px-[90px] h-fit overflow-y-scroll' >
        {/* Navbar */}
        <div className='navbar'>
           <img className='h-fit ' src="/Assets/Group 114.png"/>
            
         
            <div className='flex space-x-12 text-gray-500 text-lg font-semibold items-center' >
                 <p className='text-black'>Home</p>
                 <p >Services</p>
                 <p >Pricing</p>
                 <p >About Us</p>
                <button className='rounded-lg bg-blue-600 text-white px-4 py-4'>Start a Company</button>
            </div>
        </div>
        {/* Search button */}
            <div className='flex justify-end mt-[60px] ' >
               <div className='flex space-x-2  border-2 rounded-lg border-blue-500 text-blue-600 px-4 py-4 w-96 items-center  ' >
                 {/* <SearchIcon className='text-blue-600 font-bold text-4xl ' /> */}
                 <input className='text-xl font-medium text-blue-600' type='text' placeholder='Search A Term | Topic'></input>
                </div>
            </div>

         {/* Content and image */}

            <div className='flex justify-between mt-[60px]' >
                <div className='flex flex-col w-1/2 '>
                    <p className='text-2xl text-blue-600 font-medium'>Claim a Free Quote</p>
                    <h2 className='text-black font-bold text-[50px]'>Get started on fulfilling <br/> your Dubai or UAE <br/>dream.</h2>
                    <h2 className='text-2xl text-blue-600 font-normal mt-[24px]'>UAE & Offshore Company</h2>
                    <h2 className='text-gray-400 font-semibold mt-[24px] text-2xl'>We provide you with information about UAE or 
                    <br/> Offshore Company Registration & help you <br/>
                     setup your company with a bank account and <br/> visas.</h2>
                    <div className='flex mt-2'>
                        <button className='bg-blue-600 text-white text-xl px-8 py-4  rounded-l-lg '>Start a Company</button>
                        <button className='border-2 border-blue-600 text-blue-600 rounded-r-lg px-8 py-4 text-xl '>Reniew a Company</button>
                    </div>

                </div>
                <div className='w-1/2'>
                    <img className=' h-[500px]'  src="/Assets/ILLUSTRATION.png"/>
                </div>
            </div>

            {/* One line quote */}

            <div className='flex mx-auto items-center space-x-2 text-lg font-semibold text-blue-600 mt-[60px]'>
                <p id="main41">Watch the video about UAE or Offshore Company Registration</p>
                <img className='border-2 rounded-full border-blue-600 px-2 py-2' src='/Assets/Group 117.png' alt=""/>
            </div>
            
            {/* Quotes of many line in center */}

            <div className='flex flex-col mx-auto mt-[60px] text-center '>
              <h1 className='text-2xl font-bold'>Dedicated<br/>
                  <span className=''>to our mission we are</span></h1>
              <p className=' text-xl text-gray-400 font-semibold'>Our services include Company Formation & Renewals,<br/> 
                Trust & Fiduciary, Tax Residency Setup With Family, Bank<br/> 
                Accounts, Remote Management, Stock Trading <br/>
                Platforms, Ownership Solutions.</p><br/>
                 
            </div>

            {/* Main three zones,company */}

            <div className='flex justify-between' id="main6">
                <div className='flex flex-col space-y-4'>
                    <img className='h-10 w-10' src="/Assets/dungeon.png"/>
                    <h3 className='text-xl font-bold  '>UAE Free Zone Company</h3>
                    <p className='text-base text-gray-700'>Your registration agent, will answer all<br/>
                       of your questions and help you to reach<br/>
                       a conclusion that meets your objectives<br/>
                       of investing in the UAE.</p>
                    <h3 className='text-xl text-amber-400'>Get Started</h3>
                </div>
                <div className='flex flex-col space-y-4'>
                    <img className='h-10 w-10' src="/Assets/Vector-2.png"/>
                    <h3 className='text-xl font-bold'>Dubai Local Companies</h3>
                    <p className='text-base text-gray-700'>The Dubai LLC formation documents<br/> 
                      are actually articles of organization or a<br/> 
                      certificate of organization. You can get <br/>
                      yours today.</p>
                    <h3 className='text-xl text-amber-400'>Get Started</h3>
                </div>
                <div className='flex flex-col space-y-4'>
                    <img className='h-10 w-10' src="/Assets/Vector-1.png"/>
                    <h3 className='text-xl font-bold'>Offshore Companies</h3>
                    <p className='text-base text-gray-700'>You can register an offshore company <br/>
                    and open its bank account in Dubai. <br/>
                    Your agent will help you along all the <br/>
                    process</p>
                    <h3 className='text-xl text-amber-400'>Get Started</h3>
                </div>
            </div>

            {/* Grid properties for content main7*/}

            <div className='flex justify-between '>
            <div className='grid  mt-[60px] space-y-28 w-5/12'>
                <div className='space-y-4 w-full'>
                    <p className='text-2xl font-semibold'>Learn the ways in which you can benefit <br/>
                    from a UAE/Offshore Company. Then get <br/>
                    started on fulfilling your UAE dream.</p>
                    <p className='text-xl text-blue-500 '>Claim a Free Quote</p>
                </div>
                <div className='flex flex-col  h-fit w-full py-10 px-8 space-y-6 border-2 border-gray-200 rounded-lg'>
                   
                       <img className='h-40 w-60 mx-auto' src="/Assets/Desktop.png"/>
                       <h1 className='text-xl font-bold'>Bank Account Setup</h1>
                       <p className='text-xl text-gray-400'>There are many banks in the United <br/>
                          Arab Emirates [UAE]. Both locally <br/>
                          owned and branches of <br/>
                          multinational ones. Foreign banks <br/> 
                          adjust according to their parent s <br/>
                          strategies and have changed local <br/>
                          requirements overnight in the past. <br/>
                          But we are here to help you.
                        </p>
                        <div className='flex space-x-4'>
                        <h1 className='text-xl text-blue-500 font-medium'>Learn More</h1>
                        <img src='/Assets/Vector.png'/>
                        </div>
                </div>

                <div className='flex flex-col w-full h-fit py-10 px-8 space-y-6 border-2 border-gray-200 rounded-lg'>
                   
                       <img className='h-40 w-60 mx-auto' src="/Assets/Group-2.png"/>
                       <h1 className='text-xl font-bold'>UAE Company Visas</h1>
                       <p className='text-xl text-gray-400'>Your application for visas is critical <br/>
                          especially if you intend to move to <br/> 
                          Dubai. This becomes even more <br/>
                          urgent if your family will also move <br/> 
                          with you. All the paperwork is done <br/>
                          on your behalf smoothly so that you <br/>
                          may only focus on doing what <br/>
                          matters most to you.
                        </p>
                        <div className='flex space-x-4'>
                        <h1 className='text-xl text-blue-500 font-medium'>Learn More</h1>
                        <img src='/Assets/Vector.png'/>
                        </div>
                </div>

            </div>

            <div className='grid mt-[60px] w-5/12 space-y-28'>

            <div className='flex flex-col  h-fit w-auto py-10 px-8 space-y-6 border-2 border-gray-200 rounded-lg'>
                   <img className='h-40 w-60 mx-auto' src="/Assets/Group.png"/>
                   <h1 className='text-xl font-bold'>Advice & Guidance</h1>
                   <p className='text-xl text-gray-400'>All activities in the UAE are licensed. <br/>
                    Whether manufacturing, finance, <br/>
                    trading, marketing, consultancy or <br/>
                    restaurants. In some countries only <br/>
                    manufacturing is licensed. In others <br/>
                    there is a threshold below which <br/>
                    business are encouraged. Get our <br/>
                    insightfull guidance today. 
                    </p>
                    <div className='flex space-x-4'>
                    <h1 className='text-xl text-blue-500 font-medium'>Learn More</h1>
                    <img src='/Assets/Vector.png'/>
                    </div>
            </div>

            <div className='flex flex-col  h-fit w-auto py-10 px-8 space-y-6 border-2 border-gray-200 rounded-lg'>
                   <img className='h-40 w-60 mx-auto' src="/Assets/Group-1.png"/>
                   <h1 className='text-xl font-bold'>Registration Document Perparation</h1>
                   <p className='text-xl text-gray-400'>Several documents must be <br/>
                      prepared to start the process of <br/>
                      registering a new company in the <br/>
                      United Arab Emirates. Be it a Dubai <br/>
                      local company, a free zone one or an <br/>
                      offshore entity. Your registered <br/>
                      agent is dedicated to get this done<br/> 
                      for you for a seamless process.
                    </p>
                    <div className='flex space-x-4'>
                    <h1 className='text-xl text-blue-500 font-medium'>Learn More</h1>
                    <img src='/Assets/Vector.png'/>
                    </div>
            </div>
                 
            <div className='space-y-4 w-full'>
                    <p className='text-2xl font-semibold'>We have gathered a team of <br/>
                        professionals to craft adequate  <br/>
                        services you can rely on for a friction <br/>
                        free setup in UAE.</p>
                        <div className='flex space-x-4'>
                          <p className='text-xl text-blue-500 '>More about our services</p>
                          <img src='/Assets/Vector.png'/>
                        </div>
            </div>     



            </div>

        </div>
         
         {/* Most Popular affordable... */}

         <div className='mx-auto font-bold text-xl mt-[60px] '>
            <h1>Most popular affordable pricing per <br/>
                jurisdictions are brought to you to <br/>
                kick off your adventure.</h1>
        </div>  
            
        {/*Three colums for payment  */}

        <div className='flex justify-between text-xl mt-[60px] h-max'>
            {/* 1st */}
            <div className='px-4 py-4 flex flex-col'>
            <div className='flex flex-col text-blue-600 space-y-4 text-xl px-2 py-2'>
                <h1 className='text-xl font-bold'>AJMAN OFFSHORE</h1>
                <h1 className='font-bold'>$2,997 <span className='text-gray-400 text-xl font-normal'>One Time Payment</span></h1>
                 <h1 className='text-xl'>Ajman Offshore New Company <br/>
                     information includes</h1>
                  <div className='flex space-x-2'>
                    <img className='h-6 w-6 my-auto' src='/Assets/Group 35.png'/>
                    <h1 className='text-lg items-center'>Attestation Charges</h1>
                  </div>
                  <div className='flex space-x-2'>
                    <img className='h-6 w-6 my-auto' src='/Assets/Group 35.png'/>
                    <h1 className='text-lg items-center'>Registered Agent</h1>
                  </div>
                  <div className='flex space-x-2'>
                    <img className='h-6 w-6 my-auto' src='/Assets/Group 35.png'/>
                    <h1 className='text-lg items-center'>Registered Office</h1>
                  </div>
                  <div className='flex space-x-2'>
                    <img className='h-6 w-6 my-auto' src='/Assets/Group 35.png'/>
                    <h1 className='text-lg items-center'>Varal Administrative</h1>
                  </div>
                  <div className='flex space-x-2'>
                    <img className='h-6 w-6 my-auto' src='/Assets/Group 35.png'/>
                    <h1 className='text-lg items-center'>Preparing Statutory File</h1>
                  </div>
                  <div className='flex space-x-2'>
                    <img className='h-6 w-6 my-auto' src='/Assets/Group 35.png'/>
                    <h1 className='text-lg items-center'>Liasing with Registration Authorities</h1>
                  </div>
                  <div className='flex space-x-2'>
                    <img className='h-6 w-6 my-auto' src='/Assets/Group 35.png'/>
                    <h1 className='text-lg items-center'>Due Diligence Appraisa</h1>
                  </div>
                  <div className='flex space-x-2'>
                    <img className='h-6 w-6 my-auto' src='/Assets/Group 35.png'/>
                    <h1 className='text-lg items-center'>Keeping The Register</h1>
                  </div>
                  <div className='flex space-x-2'>
                    <img className='h-6 w-6 my-auto' src='/Assets/Group 35.png'/>
                    <h1 className='text-lg items-center'>Seal Charges</h1>
                  </div>
                  <div className='flex space-x-2'>
                    <img className='h-6 w-6 my-auto' src='/Assets/Group 35.png'/>
                    <h1 className='text-lg items-center'>Certificate of Good Standing</h1>
                  </div>
                  
            
            </div>
                <button className='border-2 px-4 py-4 mt-4 mx-0 w-full text-xl text-blue-600 font-bold rounded-lg border-blue-600'>Continue</button>
            </div>
                 
                 {/*2nd  */}
            <div className='px-4 py-4 flex flex-col bg-blue-600 rounded-lg'>
            <div className='flex flex-col text-white space-y-4 text-xl px-2 py-2'>
                <h1 className='text-xl font-bold'>RAK ICC</h1>
                <h1 className='font-bold'>$2,997 <span className='text-white text-xl font-normal'>One Time Payment</span></h1>
                 <h1 className='text-xl'>Rak Icc New Company formation <br/>
                                     includes</h1>
                  <div className='flex space-x-2'>
                    <img className='h-6 w-6 my-auto' src='/Assets/Group 35.png'/>
                    <h1 className='text-lg items-center'>Attestation Charges</h1>
                  </div>
                  <div className='flex space-x-2'>
                    <img className='h-6 w-6 my-auto' src='/Assets/Group 35.png'/>
                    <h1 className='text-lg items-center'>Registered Agent</h1>
                  </div>
                  <div className='flex space-x-2'>
                    <img className='h-6 w-6 my-auto' src='/Assets/Group 35.png'/>
                    <h1 className='text-lg items-center'>Registered Office</h1>
                  </div>
                  <div className='flex space-x-2'>
                    <img className='h-6 w-6 my-auto' src='/Assets/Group 35.png'/>
                    <h1 className='text-lg items-center'>Varal Administrative</h1>
                  </div>
                  <div className='flex space-x-2'>
                    <img className='h-6 w-6 my-auto' src='/Assets/Group 35.png'/>
                    <h1 className='text-lg items-center'>Preparing Statutory File</h1>
                  </div>
                  <div className='flex space-x-2'>
                    <img className='h-6 w-6 my-auto' src='/Assets/Group 35.png'/>
                    <h1 className='text-lg items-center'>Liasing with Registration Authorities</h1>
                  </div>
                  <div className='flex space-x-2'>
                    <img className='h-6 w-6 my-auto' src='/Assets/Group 35.png'/>
                    <h1 className='text-lg items-center'>Due Diligence Appraisa</h1>
                  </div>
                  <div className='flex space-x-2'>
                    <img className='h-6 w-6 my-auto' src='/Assets/Group 35.png'/>
                    <h1 className='text-lg items-center'>Keeping The Register</h1>
                  </div>
                  <div className='flex space-x-2'>
                    <img className='h-6 w-6 my-auto' src='/Assets/Group 35.png'/>
                    <h1 className='text-lg items-center'>Seal Charges</h1>
                  </div>
                  <div className='flex space-x-2'>
                    <img className='h-6 w-6 my-auto' src='/Assets/Group 35.png'/>
                    <h1 className='text-lg items-center'>Certificate of Good Standing</h1>
                  </div>
                  
            
            </div>
                <button className='border-2 px-4 py-4 mt-4 mx-0 w-full text-xl text-blue-600 font-bold rounded-lg border-blue-600 bg-white'>Continue</button>
            </div>
            
                {/* 3rd */}
            <div className='px-4 py-4 flex flex-col'>
            <div className='flex flex-col text-blue-600 space-y-4 text-xl px-2 py-2'>
                <h1 className='text-xl font-bold'>SHARJAH MEDIA CITY</h1>
                <h1 className='font-bold'>$4,124  <span className='text-gray-400 text-xl font-normal'>One Time Payment</span></h1>
                 <h1 className='text-xl'>Sharjah Media City New <br/>
                          Company formation include </h1>
                  <div className='flex space-x-2'>
                    <img className='h-6 w-6 my-auto' src='/Assets/Group 35.png'/>
                    <h1 className='text-lg items-center'>Attestation Charges</h1>
                  </div>
                  <div className='flex space-x-2'>
                    <img className='h-6 w-6 my-auto' src='/Assets/Group 35.png'/>
                    <h1 className='text-lg items-center'>Registered Agent</h1>
                  </div>
                  <div className='flex space-x-2'>
                    <img className='h-6 w-6 my-auto' src='/Assets/Group 35.png'/>
                    <h1 className='text-lg items-center'>Registered Office</h1>
                  </div>
                  <div className='flex space-x-2'>
                    <img className='h-6 w-6 my-auto' src='/Assets/Group 35.png'/>
                    <h1 className='text-lg items-center'>Varal Administrative</h1>
                  </div>
                  <div className='flex space-x-2'>
                    <img className='h-6 w-6 my-auto' src='/Assets/Group 35.png'/>
                    <h1 className='text-lg items-center'>Preparing Statutory File</h1>
                  </div>
                  <div className='flex space-x-2'>
                    <img className='h-6 w-6 my-auto' src='/Assets/Group 35.png'/>
                    <h1 className='text-lg items-center'>Liasing with Registration Authorities</h1>
                  </div>
                  <div className='flex space-x-2'>
                    <img className='h-6 w-6 my-auto' src='/Assets/Group 35.png'/>
                    <h1 className='text-lg items-center'>Due Diligence Appraisa</h1>
                  </div>
                  <div className='flex space-x-2'>
                    <img className='h-6 w-6 my-auto' src='/Assets/Group 35.png'/>
                    <h1 className='text-lg items-center'>Keeping The Register</h1>
                  </div>
                  <div className='flex space-x-2'>
                    <img className='h-6 w-6 my-auto' src='/Assets/Group 35.png'/>
                    <h1 className='text-lg items-center'>Seal Charges</h1>
                  </div>
                  <div className='flex space-x-2'>
                    <img className='h-6 w-6 my-auto' src='/Assets/Group 35.png'/>
                    <h1 className='text-lg items-center'>Certificate of Good Standing</h1>
                  </div>
                  
            
            </div>
                <button className='border-2 px-4 py-4 mt-4 mx-0 w-full text-xl text-blue-600 font-bold rounded-lg border-blue-600'>Continue</button>
            </div>
            
        </div>

        {/* last section */}
            <div className='flex justify-between mt-[60px]'>
                {/* 1st col */}
                
                <div className='flex flex-col space-y-8 w-5/12'>
                    <h1 className='text-black font-bold text-xl'>Read about our blogs for more <br/>
                         information on our processes </h1>

                    <div className='flex space-x-4'>
                        <img className='border-2 border-blue-600 px-4 py-4 rounded-lg' src='/Assets/Vector-4.png'/>
                        <div className='flex flex-col space-x-2 text-xl font-semibold'>
                            <h1 className='text-xl '>How to start a company<br/> 
                                  formation in Dubai</h1>
                            <h1 className='text-xl text-blue-600'>5 Minutes</h1>
                        </div>    
                    </div>

                    <div className='flex space-x-4'>
                        <img className='border-2 border-blue-600 px-4 py-4 rounded-lg' src='/Assets/Vector-4.png'/>
                        <div className='flex flex-col space-x-2 text-xl font-semibold'>
                            <h1 className='text-xl '>How to start a company<br/> 
                                  formation in Dubai</h1>
                            <h1 className='text-xl text-blue-600'>5 Minutes</h1>
                        </div>    
                    </div>

                    
                    <div className='flex space-x-4 bg-blue-600 px-4 py-4 rounded-lg'>
                        <img className='border-2 border-white px-4 py-4 rounded-lg text-white' src='/Assets/Vector-4.png'/>
                        <div className='flex flex-col space-x-2 text-xl font-semibold text-white'>
                            <h1 className='text-xl '>How to start a company<br/> 
                                  formation in Dubai</h1>
                            <h1 className='text-xl text-blue-600'>5 Minutes</h1>
                        </div>    
                    </div>     
                   
                     {/* satisfied... */}

                          <h1 className='text-black font-bold text-xl '>Satisfied We are When Our <br/>
                           Customers Are Happy </h1>

                           {/* comments */}

                           <div className='flex text-xl space-x-4'>
                            <div>
                               <img className='border-2 border-blue-600 rounded-full px-2 py-2' src='/Assets/Vector-3.png'/>
                            </div>
                            <div className='space-y-2'>
                              <h1 className='text-lg'>"I am very happy with them. I'll <br/>
                                continue to use their services in <br/>
                                future & highly recommend them <br/>
                                to anyone,"
                              </h1>
                              <h1 className='text-lg font-bold text-gray-700'>Muhib Abrar</h1>
                            </div>
                           </div>

                           <div className='flex text-xl space-x-4'>
                            <div>
                               <img className='border-2 border-blue-600 rounded-full px-2 py-2' src='/Assets/Vector-3.png'/>
                            </div>
                            <div className='space-y-2'>
                              <h1 className='text-lg'>"Rama has a high level of integrity, <br/>
                                 intellect, knowledge of his <br/>
                                 business, resourcefulness and <br/>
                                 humanity,"
                              </h1>
                              <h1 className='text-lg font-bold text-gray-700'>Colin Saldahna</h1>
                            </div>
                           </div>

                           <div className='flex text-xl space-x-4'>
                            <div>
                               <img className='border-2 border-blue-600 rounded-full px-2 py-2' src='/Assets/Vector-3.png'/>
                            </div>
                            <div className='space-y-2'>
                              <h1 className='text-lg'>"Your advise was so complete that I <br/>
                                actually realized how beneficial <br/>
                                this would be to my clients and my <br/>
                                business.
                              </h1>
                              <h1 className='text-lg font-bold text-gray-700'>Mark Swann</h1>
                            </div>
                           </div>
                     
                </div>
                {/* 2nd col */}

                <div className='flex flex-col space-y-4 w-5/12 px-20'>

                <h1 className='text-black font-bold text-xl '>Get to know the whole us and <br/>
                        more of our services </h1>

                <div className='text-xl  text-gray-400'>
                  <p className='text-gray-800 font-bold'>Services</p>
                  <p>Products</p>
                  <p>Solutions</p>
                  <p>Assurance</p>
                  <p>FAQ</p>
                  <p>Working at Varal-Singhania</p>
                </div>

                <div className='text-xl  text-gray-400'>
                  <p className='text-gray-800 font-bold'>Policies</p>
                  <p>Privacy Policy</p>
                  <p>Terms & Conditions</p>
                </div>

                <div className='text-xl  text-gray-400'>
                  <p className='text-gray-800 font-bold'>About</p>
                  <p>About Us</p>
                  <p>Contact Us</p>
                </div>

                <div className='text-xl  text-gray-400'>
                  <p className='text-gray-800 font-bold'>Address</p>
                  <p>608 One Lake Plaza, Cluster T,
                    Al Sarayat Street, Jumeirah 
                    Lake Tower
                    Dubai
                    United Arab Emirates</p><br/>
                  <p>Office Hours: Sunday to <br/>
                     Thursday 8:30 AM to 6:30 PM <br/>
                     [GMT+4] <br/>
                     M: +971 55 794 2016 <br/>
                     O: +971 4 447 2061 <br/>
                  </p>
                </div>

                <div className='text-xl  text-gray-400'>
                  <p className='text-gray-800 font-bold'>Subscribe Now</p>
                  <p>Subscribe now to receive our <br/>
                     Newsletters about amazing <br/>
                     opportunities in Dubai</p>
                </div>

                <div className='flex'>
                  <input className='items-center w-3/4 h-14' type='email' placeholder='Enter email address'/>
                  <img className='h-14' src='/Assets/Group 34.png'/>
                </div>

                <div className='flex space-x-6'>
                  <img src='/Assets/Vector-5.png'/>
                  <img src='/Assets/Vector-6.png'/>
                  <img src='/Assets/Vector-7.png'/>
                  <img src='/Assets/Vector-8.png'/>
                </div>

                </div>

                

            </div>

            {/* End */}

            <div className='mx-auto mt-[60px] mb-[70px] text-lg font-semibold text-gray-400'>
                   <p>Varaluae 2021 C All Right Reserved</p>
                </div>

        
    </div>
  );
}

export default App;
