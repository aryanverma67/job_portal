import React from "react";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";

const Newsletter = () => {
  return (
    <div>
      <h3 className="text-lg font-bold mb2 flex items-center gap-2">
        <FaEnvelopeOpenText />
        Email for Jobs
      </h3>
      <p className="text-primary/75 mb-4 text-base">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam totam
        laborum eum dignissimos repellat laboriosam rem aut. Amet eaque
        laudantium, architecto doloribus totam reiciendis? Voluptatem minus,
      </p>
      <div className="w-full space-x-4 ">
        <input type="email" name="email " id="email" placeholder="email@gmail.com"  className="w-full block py-2 pl-3 border focus:outline-none" />
        <input type="submit" value={"subscribe"} className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"/>

      </div>
      <div className="mt-20">
      <h3 className="text-lg font-bold mb2 flex items-center gap-2">
        <FaRocket />
        Get noticed Faster
      </h3>
      <p className="text-primary/75 mb-4 text-base">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam totam
        laudantium, architecto doloribus totam reiciendis? Voluptatem minus,
      </p>
      <div className="w-full space-x-4">
        <input type="submit" value={"Uplod Your resume"} className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"/>
</div>
      </div>

    </div>
  );
};

export default Newsletter;
