import logo from "../assets/logo.png";
import Icon from '@mdi/react';

import { mdiNavigation } from '@mdi/js';

function Navbar() {
  return (
    <>
      <div className="flex  text-white justify-between ">
        <div className="p-2 flex ">
          <img src={logo} alt="logo" className=" h-14" />
          <h3
            className=" font-bold text-bjp-orange my-auto
             "
          >
            BHARTIYA JANTA PARTY
          </h3>
        </div>
        <div className="left flex ">
        <div className="flex divide-x-2  my-auto ">
          <div className="px-2 hover:text-bjp-orange">UPCOMING EVENTS</div>
          <div className="px-2 hover:text-bjp-orange">MEDIA RESOURCES</div>
          <div className="px-2 hover:text-bjp-orange">KAMAL SANDESH</div>
          <div className="px-2 hover:text-bjp-orange"> BJP LIVE</div>
          <div className=""></div>
           
        </div>
        <div className="flex px-2 ">

          <button className=" bg-bjp-orange m-5 px-10 rounded  "> JOIN BJP</button>
          <button className=" bg-bjp-saffron my-5 px-2 rounded "> MAKE A DONATION</button>
          <Icon className="my-auto " path={mdiNavigation} size={1} />
        </div>
        </div>

        
        
      </div>
    </>
  );
}
export default Navbar;
