import React from 'react';

export const LeaveRequest = () => {
  return (
    <div class="bg-white shadow overflow-hidden sm:rounded-lg max-w-7xl mt-24 mx-auto ">
      <div class="px-4 py-5 sm:px-6">
        <h3 class=" leading-6 text-gray-900 font-bold text-2xl">
          Leave Applicant Information
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
          Personal details and application.
        </p>
      </div>
      <div class="border-t border-gray-200">
        <dl>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="  text-gray-500 font-semibold text-sm">Full name</dt>
            {/* <!-- <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Prajjwal Suhane</dd> --> */}
            <input type="text" placeholder="Enter your name" />
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm  text-gray-500 font-semibold">
              Leave request for
            </dt>
            {/* <!-- <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">2 Months Intership in DRDO</dd> --> */}
            <input type="text" placeholder="Reason for Leave" />
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-semibold text-gray-500">Email address</dt>
            {/* <!-- <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">LIT2021017 --> */}
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your college mail ID"
            />

            {/* </dd> */}
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-semibold text-gray-500">
              Expected leave dates
            </dt>
            {/* <!-- <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">$120,000</dd> --> */}
            <input type="text" placeholder="example - 24/06/22-29/06/22" />
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-semibold text-gray-500">Description</dt>
            {/* <!-- <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</dd> --> */}
            <input
              type="text"
              placeholder="....................... IF ANY ......................"
            />
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-semibold text-gray-500">Attachments</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul
                role="list"
                class="border border-gray-200 rounded-md divide-y divide-gray-200"
              >
                <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div class="w-0 flex-1 flex items-center">
                    {/* <!-- Heroicon name: solid/paper-clip --> */}
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <input type="text" name="" id="" />
                    {/* <!-- <span class="ml-2 flex-1 w-0 truncate"> File:  </span> --> */}
                  </div>
                  <div class="ml-4 flex-shrink-0">
                    <input type="file" name="" id="" placeholder="JPEG/PDF" />
                    <a
                      href="#"
                      class="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      {' '}
                      Upload{' '}
                    </a>
                  </div>
                </li>
                <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div class="w-0 flex-1 flex items-center">
                    {/* <!-- Heroicon name: solid/paper-clip --> */}
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <input type="text" name="" id="" />
                    {/* <!-- <span class="ml-2 flex-1 w-0 truncate"> coverletter_back_end_developer.pdf </span> --> */}
                  </div>
                  <div class="ml-4 flex-shrink-0">
                    <input type="file" name="" id="" placeholder="JPEG/PDF" />
                    <a
                      href="#"
                      class="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      {' '}
                      Upload{' '}
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
          <div class="flex justify-around">
            <button class="bg-green-600 text-white rounded-2xl px-12 lg:px-24 h-10 my-6 cursor-pointer  ">
              Submit
            </button>
            <button class="bg-red-600 text-white rounded-2xl px-12 lg:px-24 h-10 my-6 cursor-pointer ">
              Clear
            </button>
          </div>
        </dl>
      </div>
    </div>
  );
};
