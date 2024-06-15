import Layouts from "../../layouts";

const ContactPage = () => {
  return (
    <Layouts>
      <section id="education-exp" className="p-5 md:p-12">
        <div className="flex items-center gap-x-6 mb-3">
          <h1 className="font-bold text-[40px] text-black dark:text-white">Contact</h1>
          <div className="h-[3px] w-44 rounded-lg bg-primary"></div>
        </div>
      </section>
    </Layouts>
  );
};

export default ContactPage;
