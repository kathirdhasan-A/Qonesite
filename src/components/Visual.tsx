
import YouTube, { YouTubeProps } from "react-youtube";
import { IoCloudOutline } from "react-icons/io5";
import { GoShieldLock } from "react-icons/go";
import { MdExitToApp } from "react-icons/md";
import { PiCreditCardLight } from "react-icons/pi";

export default function Visual() {
  const opts: YouTubeProps["opts"] = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="md:h-screen pt-20 md:pt-0 back px-2 flex flex-col justify-center items-center">
      <div className="md:h-[70%] md:w-[70%] p-2 border-3 rounded-lg border-[#5d3fd326] shadow-[0_14px_50px_#5d3fd326] flex justify-center items-center cursor-pointer">
        <YouTube videoId="NfQ-dwkuMx8" className="w-full h-full " opts={opts} />
      </div>
      <div className="hidden justify-evenly md:flex md:w-[60%] mt-5">
        <div className="flex gap-3 items-center">
            <PiCreditCardLight className="h-7 w-7 text-[#5D3FD3]  shadow-[#5D3FD3] "/>
            <p>Secure Purchase</p>
        </div>
        <div className="flex gap-3 items-center">
            <MdExitToApp className="h-7 w-7 text-[#5D3FD3]  shadow-[#5D3FD3] "/>
             <p>Instant Access</p>
        </div>
        <div className="flex gap-3 items-center">
            <GoShieldLock className="h-7 w-7 text-[#5D3FD3]  shadow-[#5D3FD3] "/>
             <p>Quality</p>
        </div>
        <div className="flex gap-3 items-center">
            <IoCloudOutline className="h-7 w-7 text-[#5D3FD3]  shadow-[#5D3FD3] "/>
             <p>Constant Updates</p>
        </div>
      </div>
    </div>
  );
}
