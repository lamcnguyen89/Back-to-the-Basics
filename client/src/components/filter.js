import React from 'react';
// const Icons
// import { Header, Message, Button, Icon } from "semantic-ui-react";
// import { Link } from "react-router-dom";



function Filter({searchCategory}) {

    return(
        <div className="card" style="width: 18rem;">
            <div className="card-body">
              <h5 className="card-title">Filter</h5>
              <form action="/action_page.php">

                    {/* <!-- add the beach filter properties --> */}
                    <input 
                      type="checkbox" 
                      id="beachesCheckbox" 
                      name="beachesUser" 
                      value="beachesYes" 
                      onChange={e => searchCategory(e)}
                    />
                    <label for="beachesUser"> 
                        Beaches
                        <img className = "icon" src="../../public/images/icons/beach.jpg" style="width: 20px; height: 20px;" />
                    </label>
                    <br />

                    {/* <!-- filter for Weed --> */}
                    <input 
                      type="checkbox" 
                      id="weedCheckbox" 
                      name="weedUser" 
                      value="weedYes"
                      onChange={e => searchCategory(e)} 
                    />
                    <label for="weedUser"> 
                        Marijuana Dispensary
                        <img className = "icon" src="../../public/images/icons/weed.jpg" style="width: 20px; height: 20px;" />
                    </label>
                    <br />

                    {/* <!-- Filter for Guns --> */}
                    <input 
                      type="checkbox" 
                      id="gunCheckbox" 
                      name="gunUser" 
                      value="gunYes"
                      onChange={e => searchCategory(e)}  
                    />
                    <label for="gunUser"> 
                        Firearm Shops
                        <img className = "icon" src="../../public/images/icons/gun.jpg" style="width: 20px; height: 20px;" />
                    </label>
                    <br />

                    {/* <!-- Filter for National Parks --> */}
                    <input 
                      type="checkbox" 
                      id="nationalParksCheckbox" 
                      name="nationalParksUser" 
                      value="nationalParksYes" 
                      onChange={e => searchCategory(e)}
                    />
                    <label for="nationalParksUser"> 
                        National Parks
                        <img className = "icon" src="../../public/images/icons/nationalPark.png" style="width: 20px; height: 20px;" />
                    </label>
                    <br />

                    {/* <!-- Filter for Outdoor Stores --> */}
                    <input 
                      type="checkbox" 
                      id="outdoorStoresCheckbox" 
                      name="outdoorStoresUser" 
                      value="outdoorStoresCheckboxYes" 
                      onChange={e => searchCategory(e)}
                    />
                    <label for="outdoorStoresUser"> 
                        Outdoor Stores
                        <img className = "icon" src="../../public/images/icons/shopping.jpg" style="width: 20px; height: 20px;" />
                    </label>
                    <br />

                    {/* <!-- Filter for Outdoor Stores --> */}
                    <input 
                      type="checkbox" 
                      id="outdoorStoresCheckbox" 
                      name="outdoorStoresUser" 
                      value="outdoorStoresCheckboxYes"
                      onChange={e => searchCategory(e)} 
                    />
                    <label for="outdoorStoresUser"> 
                        Outdoor Stores
                        <img className = "icon" src="../../public/images/icons/shopping.jpg" style="width: 20px; height: 20px;" />
                    </label>
                    <br />

                     {/* <!-- submit button --> */}
                     <input type="submit" value="Submit" />

              </form>
            </div>
        </div>
            
    )
};


export default Filter;