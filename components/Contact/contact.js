import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { Controller, useForm } from "react-hook-form";
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CartContext } from "../../context/ShopContext";
import { XIcon } from "@heroicons/react/outline";
import axios from "axios";

const schema = object({
  firstName: string().required("Veuillez entrer votre prénom"),
  lastName: string().required("Veuillez entrer votre nom"),
  email: string().required("Veuillez entrer votre email"),
  subject: string().required("Veuillez entrer le sujet de votre message"),
  message: string().required("Veuillez entrer votre message"),
});

export default function Contact({ open, setOpen, object }) {
  const cancelButtonRef = useRef(null);

  async function onSubmit(values) {
    setIsLoading(true);
    // assign each line of the message to an array element
    var message = values.message.split("\n");
    message = message
      .map((line) => {
        if (line == "") {
          return "<br/>";
        } else {
          return "<p>" + line + "</p>";
        }
      })
      .join("");

    sendEmail(
      values.email,
      "Message à Emovin : " + values.subject,
      "<p>Voici une copie du message envoyé à Emovin, nous reviendrons vers vous au plus vite :</p><br/>" +
        message
    );

    sendEmail(
      "contact@emovin.fr",
      values.subject,
      "Message de " +
        values.firstName +
        " " +
        values.lastName +
        ", " +
        values.email +
        " : " +
        message
    );
    setIsLoading(false);
    setOpen(false);
  }

  const sendEmail = async (email, subject, message) => {
    try {
      const resp = await axios.get("/api/send-mail", {
        params: {
          email: email,
          subject: subject,
          message: message,
        },
      });
      setMessage("");
      setSubject("");
      // TODO notify user of success
    } catch (err) {
      // TODO Handle Error Here notify user
      console.error(err);
    }
  };

  const {
    register,
    handleSubmit,
    control,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const { user } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(object ? object : "");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
    }
  }, [user]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-2xl lg:max-w-3xl xl:max-w-5xl m-auto">
                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                  <div className="ml-3 flex justify-end h-7 items-center">
                    <button
                      ref={cancelButtonRef}
                      type="button"
                      className="-m-2 p-2 text-gray-400 hover:text-gray-500 focus:outline-none"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Fermer le formulaire</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  <h3 className="text-lg font-medium text-warm-gray-900">
                    Nous contacter
                  </h3>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                  >
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-warm-gray-900"
                      >
                        Prénom
                      </label>
                      <div className="mt-1">
                        <Controller
                          name="firstName"
                          control={control}
                          render={({
                            field: { value, onChange, onBlur, ...field },
                          }) => (
                            <input
                              {...field}
                              type="text"
                              autoComplete="given-name"
                              {...register("firstName")}
                              value={firstName}
                              onChange={({ target: { value } }) => {
                                onChange(value);
                                setFirstName(value);
                              }}
                              className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-redWine focus:border-redWine border-warm-gray-300 rounded-md"
                            />
                          )}
                        />
                      </div>
                      <span
                        htmlFor="firstName"
                        className="block text-sm font-medium text-orange-600"
                      >
                        {errors?.firstName?.message}
                      </span>
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-warm-gray-900"
                      >
                        Nom
                      </label>
                      <div className="mt-1">
                        <Controller
                          name="lastName"
                          control={control}
                          render={({
                            field: { value, onChange, onBlur, ...field },
                          }) => (
                            <input
                              {...field}
                              type="text"
                              autoComplete="family-name"
                              {...register("lastName")}
                              value={lastName}
                              onChange={({ target: { value } }) => {
                                onChange(value);
                                setLastName(value);
                              }}
                              className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-redWine focus:border-redWine border-warm-gray-300 rounded-md"
                            />
                          )}
                        />
                      </div>
                      <span
                        htmlFor="lastName"
                        className="block text-sm font-medium text-orange-600"
                      >
                        {errors?.lastName?.message}
                      </span>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-warm-gray-900"
                      >
                        Email
                      </label>
                      <div className="mt-1">
                        <Controller
                          name="email"
                          control={control}
                          render={({
                            field: { value, onChange, onBlur, ...field },
                          }) => (
                            <input
                              {...field}
                              type="email"
                              autoComplete="enail"
                              {...register("email")}
                              value={email}
                              onChange={({ target: { value } }) => {
                                onChange(value);
                                setEmail(value);
                              }}
                              className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-redWine focus:border-redWine border-warm-gray-300 rounded-md"
                            />
                          )}
                        />
                      </div>
                      <span
                        htmlFor="email"
                        className="block text-sm font-medium text-orange-600"
                      >
                        {errors?.email?.message}
                      </span>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-warm-gray-900"
                      >
                        Objet
                      </label>
                      <div className="mt-1">
                        <Controller
                          name="subject"
                          control={control}
                          render={({
                            field: { value, onChange, onBlur, ...field },
                          }) => (
                            <input
                              {...field}
                              type="text"
                              {...register("subject")}
                              value={subject}
                              onChange={({ target: { value } }) => {
                                onChange(value);
                                setSubject(value);
                              }}
                              className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-redWine focus:border-redWine border-warm-gray-300 rounded-md"
                            />
                          )}
                        />
                      </div>
                      <span
                        htmlFor="subject"
                        className="block text-sm font-medium text-orange-600"
                      >
                        {errors?.subject?.message}
                      </span>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-warm-gray-900"
                        >
                          Message
                        </label>
                        {/* <span
                          id="message-max"
                          className="text-sm text-warm-gray-500"
                        >
                          Max. 500 characters
                        </span> */}
                      </div>
                      <div className="mt-1">
                        <Controller
                          name="message"
                          control={control}
                          render={({
                            field: { value, onChange, onBlur, ...field },
                          }) => (
                            <textarea
                              {...field}
                              {...register("message")}
                              value={message}
                              onChange={({ target: { value } }) => {
                                onChange(value);
                                setMessage(value);
                              }}
                              rows={4}
                              className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-redWine focus:border-redWine border border-warm-gray-300 rounded-md"
                              aria-describedby="message-max"
                            />
                          )}
                        />
                      </div>
                      <span
                        htmlFor="message"
                        className="block text-sm font-medium text-orange-600"
                      >
                        {errors?.message?.message}
                      </span>
                    </div>
                    <div className="sm:col-span-2 sm:flex sm:justify-end flex-col md:flex-row">
                      {isLoading ? (
                        <>
                          <div className="md:mr-2 mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-redWine sm:w-auto">
                            <svg
                              role="status"
                              className="inline mr-3 w-4 h-4 text-white animate-spin"
                              viewBox="0 0 100 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="#E5E7EB"
                              />
                              <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentColor"
                              />
                            </svg>
                            Chargement...
                          </div>
                          <div className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-redWine hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-redWine sm:w-auto">
                            <svg
                              role="status"
                              className="inline mr-3 w-4 h-4 text-white animate-spin"
                              viewBox="0 0 100 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="#E5E7EB"
                              />
                              <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentColor"
                              />
                            </svg>
                            Chargement...
                          </div>
                        </>
                      ) : (
                        <>
                          <button
                            type="button"
                            className="md:mr-2 mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-redWine sm:w-auto"
                            onClick={() => setOpen(false)}
                          >
                            Annuler
                          </button>
                          <button
                            type="submit"
                            className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-redWine hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-redWine sm:w-auto"
                          >
                            Envoyer
                          </button>
                        </>
                      )}
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
