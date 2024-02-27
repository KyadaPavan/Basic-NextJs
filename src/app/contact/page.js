import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div>
      <h1>I am contact page</h1>
      <div className="container">
        <Image
          height={380}
          width={600}
          src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-22798.jpg?size=626&ext=jpg&ga=GA1.1.171895579.1681935458&semt=ais"
        />
      </div>
    </div>
  );
};

export default page;
