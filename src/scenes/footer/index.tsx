import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="Logo" />
          <p className="my-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis rem rerum nostrum expedita impedit! Exercitationem
            itaque sequi esse officiis voluptas asperiores maiores eligendi
            voluptates, quia culpa, sint eaque tenetur consequuntur!
          </p>
          <p>@ Evogym All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamocorer vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestats.</p>
          <p>(333)425-5555</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
