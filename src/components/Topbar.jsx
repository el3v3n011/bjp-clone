import Icon from '@mdi/react';
import { mdiMagnify,mdiShareVariant,mdiAccount } from '@mdi/js';


function Topbar(){
return(
    <>
    
    <nav className=" text-white flex flex-wrap  justify-end  divide-x-2">
        <div className=" flex px-2  border-slate-600">
        <Icon path={mdiMagnify} size={1} />

            search</div>
        <div className=" flex px-2  border-slate-600">
        <Icon path={mdiShareVariant} size={1} />

        Share URL</div>
        <div className="px-2 flex border-slate-600">
        <Icon path={mdiAccount} size={1} />
Login</div>
        <div className="px-2  border-slate-600">State Websites</div>
        <div className="px-2  border-slate-600"> Contact Us</div>
        <div className="px-2  border-slate-600">English</div>
    </nav>

    </>
)
}
export default Topbar;