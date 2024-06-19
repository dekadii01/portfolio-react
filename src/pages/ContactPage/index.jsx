import Footer from "../../components/Footer";
import Layouts from "../../layouts";

const ContactPage = () => {
  return (
    <Layouts>
      <section id="education-exp" className="p-5 md:p-12">
        <div className="flex items-center gap-x-6 mb-5">
          <h1 className="font-bold text-[40px] text-black dark:text-white">Contact</h1>
          <div className="h-[3px] w-44 rounded-lg bg-primary"></div>
        </div>
        <div className=" bg-[#f8fbfb] dark:bg-[#0d0d0d] px-5 rounded-lg py-10">
          <h1 className="text-black dark:text-white font-semibold text-3xl ">
            Feel free to{" "}
            <a href="mailto:dekjawa8@gmail.com" className="inline-block underline hover:text-primary">
              reach me
            </a>{" "}
            for any inquiries or collaboration opportunities!
          </h1>
        </div>
        <Footer />
      </section>
    </Layouts>
  );
};

export default ContactPage;
