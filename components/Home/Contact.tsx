import ContactContext from "@/data/ContactData";
import ContactCard from "./ContactCard";

const Contact = () => {
  return (
    <div className="mt-15">
      <p className="text-3xl">Contact Me</p>

      <div className="flex flex-wrap justify-between gap-5 pt-5 ">
        {ContactContext.map((contact) => (
          <ContactCard
            link={contact.link}
            icon={contact.icon}
            key={contact.id}
            name={contact.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;
