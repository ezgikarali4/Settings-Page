import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faXmarkCircle,
} from "@fortawesome/free-regular-svg-icons";
import emailLogo from "../assets/email.png";
import telegramLogo from "../assets/telegram.png";

const Tabs = () => {
  return (
    <div className="mx-10 my-5">
      <h1 className=" text-3xl text-bold">Settings</h1>
      <p className="text-gray-500 pb-5">Adjust your exchange accounts.</p>
      <ul
        className=" nav nav-tabs flex flex-col md:flex-row flex-wrap list-none  pl-0 mb-4 "
        id="tabs-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <a
            href="#tabs-home"
            className="
      nav-link
      block
      font-medium
      text-xm
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    "
            id="tabs-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-home"
            role="tab"
            aria-controls="tabs-home"
            aria-selected="true"
          >
            Profile
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#tabs-profile"
            className="
      nav-link
      block
      font-medium
      text-xm
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
            id="tabs-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-profile"
            role="tab"
            aria-controls="tabs-profile"
            aria-selected="false"
          >
            Notifications
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#tabs-messages"
            className="
      nav-link
      block
      font-medium
      text-xm
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
            id="tabs-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-messages"
            role="tab"
            aria-controls="tabs-messages"
            aria-selected="false"
          >
            Security
          </a>
        </li>
      </ul>
      <div className="tab-content" id="tabs-tabContent">
        <div
          className="tab-pane fade show active"
          id="tabs-home"
          role="tabpanel"
          aria-labelledby="tabs-home-tab"
        >
          <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
            <div className=" flex flex-col justify-left md:items-start w-full px-2 py-5">
              <h1 className="text-1xl text-gray-300 md:flex mb-5">
                GENERAL INFORMATION
              </h1>
              <div className="flex items-center">
                <div className="flex ">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    class="rounded-full w-32 mr-10 mb-10"
                    alt="Avatar"
                  />
                </div>
                <div className="flex flex-col  justify-items-start">
                  <h1 className="text-gray-700">Add a profile picture</h1>
                  <p className="py-2 text-sm font-medium text-gray-300">
                    Please upload a square image (1:1 aspect ratio).
                  </p>

                  <a
                    href="#!"
                    class="py-3 text-xl text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out mb-4"
                  >
                    <FontAwesomeIcon
                      icon={faArrowAltCircleDown}
                      className="pr-2 "
                    />
                    Upload
                  </a>
                </div>
              </div>
              <label
                for="input"
                className="py-2 block mb-2 text-sm font-medium text-gray-700 "
              >
                Enter your trader name{" "}
              </label>
              <input
                type="text"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput1"
                placeholder="Username"
                maxlength="30"
              />
              <p className="py-2 mb-10 text-gray-500">
                This will be displayed as your creator name on the Marketplace.
              </p>
              <label
                for="message"
                className="py-2 block mb-2 text-sm font-medium text-gray-700 "
              >
                Your message
              </label>
              <input
                type="text"
                id="large-input"
                class="form-control font-normal block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-solid border-gray-300 bg-clip-padding sm:text-md  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Tell us a little about yourself..."
                maxlength="500"
              ></input>{" "}
              <p className="py-2 mb-10  text-gray-500">
                This will be displayed as to all users an followers on the
                Marketplace.
              </p>
              <button
                type="button"
                class="mb-2 w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Update my profile
              </button>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="tabs-profile"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab"
        >
          <div className="grid md:grid-cols-2 max-w-[1240px] m-auto ">
            <div className="flex flex-col  justify-left md:items-start w-full px-2 py-8 border-r border-gray-200">
              <h1 className="py-3 text-2xl md:text-3xl font-bold ">
                Your Notifications{" "}
              </h1>
              <div className="grid md:grid-cols-2  border-t border-b border-gray-200">
                <div className="flex flex-col  justify-left md:items-start w-full   py-5 ">
                  <p className="text-md ">
                    Notification: General Account Information
                  </p>
                  <p className="pt-2 text-sm text-gray-400">
                    Delivered By:Email{" "}
                  </p>
                </div>
                <div
                  className="justify-right md:items-start w-full px-10  py-6 scale-125

"
                >
                  <FontAwesomeIcon icon={faXmarkCircle} />
                </div>
              </div>

              <div className="grid md:grid-cols-2 ">
                <div className=" flex flex-col justify-left md:items-start w-full py-8">
                  <select
                    id="countries"
                    class="bg-gray-50 border border-gray-300  text-sm rounded-lg pr-10  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700  "
                  >
                    <option selected>Live Bot Order Information</option>
                    <option value="a">Bot Info</option>
                    <option value="b">Bot Info</option>
                    <option value="c">Bot Info</option>
                    <option value="d">Bot Info</option>
                  </select>
                </div>
                <div className=" flex flex-col justify-right md:items-start w-full pl-4 py-8 ">
                  <select
                    id="countries"
                    class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700   "
                  >
                    <option selected>Delivery Method</option>
                    <option value="a">Email</option>
                    <option value="b">Telegram</option>
                    <option value="c">Twitter</option>
                    <option value="d">Discord</option>
                  </select>
                </div>
              </div>
              <p>Information related on your live bots orders</p>
              <button
                type="button"
                class="my-4 inline-block px-6 py-3 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
              >
                Save Preferences
              </button>
            </div>

            <div className="flex flex-col  justify-left md:items-start w-full px-2 py-8 ">
              <h1 className="py-3 text-2xl md:text-3xl font-bold ">
                Your Delivery Methods{" "}
              </h1>
              <div className="grid md:grid-cols-2  border-t border-b border-gray-200">
                <div className="flex flex-col  justify-left md:items-start w-full   py-5 ">
                  <div class="flex items-center flex-row">
                    <img
                      src={emailLogo}
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      class="w-10 h-8 text-center mr-5"
                      role="img"
                      viewBox="0 0 448 512"
                    ></img>
                    Email
                  </div>
                </div>
                <div className="flex flex-col  justify-right md:items-start w-full   py-5 ">
                  <button
                    type="button"
                    class="text-gray-900 px-10 ml-20 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-md  py-2.5  mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    Set Up
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2  ">
                <div className="flex flex-col  justify-left md:items-start w-full   py-5 ">
                  <div class="flex items-center flex-row">
                    <img
                      src={telegramLogo}
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      class="w-10 h-8 text-center mr-5"
                      role="img"
                      viewBox="0 0 448 512"
                    ></img>
                    Telegram
                  </div>
                </div>
                <div className="flex flex-col  justify-right md:items-start w-full   py-5 ">
                  <button
                    type="button"
                    class="text-gray-900 px-10 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-md py-2.5 ml-20 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    Set Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="tabs-messages"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab"
        >
          <div className="grid md:grid-cols-2 max-w-[1240px] m-auto text-gray-500 ">
            <div className="flex flex-col  justify-left md:items-start w-full px-2 py-8 border-r border-gray-200">
              <p className="py-3 text-md md:text-xl font-bold ">PASSWORD </p>
              <p className="text-sm">Change your password to a new one.</p>
              <button
                type="button"
                class=" my-4 inline-block px-6 py-3 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
              >
                Change password
              </button>{" "}
            </div>
            <div className="flex flex-col  justify-left md:items-start w-full px-2 py-8 ">
              <p className="py-3 text-md md:text-xl font-bold ">
                MULTI-FACTOR AUTHENTICATION{" "}
              </p>
              <p className="text-sm">Setup or remove MFA devices.</p>
              <button
                type="button"
                class=" my-4 inline-block px-6 py-3 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
              >
                Setup or Remove
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
