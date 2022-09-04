import React from "react";

const Profile = () => {
  return (
    <div className="divide-y divide-gray-200 lg:col-span-9">
      {/* Profile section */}
      {/* <div className="py-6 px-4 sm:p-6 lg:pb-8">
                  <form
                    className="divide-y divide-gray-200 lg:col-span-9"
                    action="#"
                    method="POST"
                  >
                    <div>
                      <h2 className="text-lg leading-6 font-medium text-gray-900">
                        Profile
                      </h2>
                      <p className="mt-1 text-sm text-gray-500">
                        This information will be displayed publicly so be
                        careful what you share.
                      </p>
                    </div>

                    <div className="mt-6 grid grid-cols-12 gap-6">
                      <div className="col-span-12 sm:col-span-6">
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          id="company"
                          autoComplete="organization"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
                      <button
                        type="button"
                        className="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="ml-5 bg-sky-700 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div> */}

      {/* Profile section */}
      <div className="pt-6 divide-y divide-gray-200">
        <form
          className="divide-y divide-gray-200 lg:col-span-9"
          action="#"
          method="POST"
        >
          <div className="px-4 sm:px-6">
            <div>
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                Mon profil
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Ornare eu a volutpat eget vulputate. Fringilla commodo amet.
              </p>
            </div>
          </div>
          <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
            <button
              type="button"
              className="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-5 bg-sky-700 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
      <div className="pt-6 divide-y divide-gray-200">
        <form
          className="divide-y divide-gray-200 lg:col-span-9"
          action="#"
          method="POST"
        >
          <div className="px-4 sm:px-6">
            <div>
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                Mes adresses
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Ornare eu a volutpat eget vulputate. Fringilla commodo amet.
              </p>
            </div>
          </div>
          <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
            <button
              type="button"
              className="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-5 bg-sky-700 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
