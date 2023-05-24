import { useForm } from "react-hook-form";

const FormSubmit = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

  const onSubmit = async (e: any) => {
    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <form
      target="_blank"
      onSubmit={onSubmit}
      method="POST"
      action="https://formsubmit.co/82b325e9de59f57f3ea8db7fa7cf02bf"
    >
      <input
        className={`${inputStyles}`}
        type="text"
        placeholder="Name"
        {...(register("name"), { required: true, maxLength: 100 })}
      />

      {errors.name && (
        <p className="mt-1 text-primary-500">
          {errors.name.type === "required" && "Name is required"}
          {errors.name.type === "maxLength" && "Name is too long"}
        </p>
      )}

      <input
        className={`${inputStyles}`}
        type="email"
        placeholder="Email"
        {...(register("email"), { required: true })}
      />

      <textarea
        className={`${inputStyles}`}
        cols={5}
        rows={4}
        placeholder="Message"
        {...(register("message"), { required: true, maxLength: 2000 })}
      />

      {errors.message && (
        <p className="mt-1 text-primary-500">
          {errors.message.type === "required" && "Message is required"}
          {errors.message.type === "maxLength" && "Message is too long"}
        </p>
      )}

      <button
        type="submit"
        className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
      >
        Submit
      </button>
    </form>
  );
};

export default FormSubmit;
