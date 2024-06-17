import Layouts from "../../layouts";

const ContactPage = () => {
  return (
    <Layouts>
      <section id="education-exp" className="p-5 md:p-12">
        <div className="flex items-center gap-x-6 mb-5">
          <h1 className="font-bold text-[40px] text-black dark:text-white">Contact</h1>
          <div className="h-[3px] w-44 rounded-lg bg-primary"></div>
        </div>
        <div className=" bg-[#f8fbfb] dark:bg-[#0d0d0d] px-8 rounded-lg py-10">
          <h1 className="text-black dark:text-white font-semibold text-2xl">Feel free to reach me for any inquiries or collaboration opportunities!</h1>
          
        </div>
      </section>
    </Layouts>
  );
};

export default ContactPage;
