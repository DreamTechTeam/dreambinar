import { Radio, TextInput } from "flowbite-react";
import Head from "next/head";
import { ChangeEvent, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Layout, { siteTitle } from "../../components/Layout";
import EventCard from "../../components/ui/EventCard";
import { categories, eventsData } from "../../utils/data";

const pageTitle = `Events | ${siteTitle}`;

/* TODO:
  - Add search functionality, using debouncing
  - Add filter functionality
  - Add pagination
  - Add sorting functionality
  - Conditional rendering of Category if there are no categories
  - Conditional rendering of Category if > 5 categories using "select dropdown", not radio buttons
*/

export default function Events() {
  const [keywords, setKeywords] = useState("");
  const [asideFilterToggled, setAsideFilterToggled] = useState(false);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeywords(e.target.value);

    if (e.target.value !== "") {
      console.log(e.target.value);
    }
  };

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <div>
        {/* Hero Events */}
        <section className="pt-14 md:pt-36">
          <div className="container">
            <div className="w-full px-4 mt-10 md:mt-0 text-center">
              <h1 className="text-2xl md:text-3xl lg:text-[40px] xl:text-[42px] font-black font-sans flex flex-col lg:gap-2">
                Find Insightful
                <strong className="font-extrabold text-green-700 block">
                  and Interesting Events.
                </strong>
              </h1>
              <p className="max-w-xl mx-auto text-center mt-4 leading-relaxed text-base lg:text-lg text-gray-800">
                Develop yourself, find insightful and interesting online events
                and webinars here.
              </p>
            </div>
          </div>
        </section>
        {/* End Hero */}

        {/* Main */}
        <section className="mt-8 md:mt-12 lg:mt-16 mb-14 md:mb-36">
          <div className="container">
            <div className="w-full px-4">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
                {/* Section Aside Start */}
                <div className="lg:sticky lg:top-24 mb-2 lg:mb-0">
                  {/* Filter */}
                  <div className="overflow-hidden border border-gray-200 rounded-lg none md:block">
                    {/* Aside Filter Header */}
                    <summary className="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden">
                      <span className="text-sm font-medium">
                        Toggle Filters
                      </span>
                      <button
                        className={`inline-flex items-center p-2 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 cursor-pointer text-lg`}
                        onClick={() => {
                          setAsideFilterToggled(!asideFilterToggled);
                        }}
                      >
                        <GiHamburgerMenu />
                      </button>
                    </summary>
                    {/* End Aside Filter Header */}

                    {/* Aside Filter Start */}
                    <form
                      className={`${
                        asideFilterToggled ? "hidden" : "block"
                      } lg:block border-t border-gray-200 lg:border-t-0`}
                      onSubmit={() => {}}
                    >
                      {/* Field Filter Category Start */}
                      <fieldset>
                        <legend className="block w-full px-5 py-3 text-base font-sans font-medium bg-gray-50">
                          Category
                        </legend>

                        <div className="px-5 py-6 space-y-2">
                          {categories.map(({ id, name }) => (
                            <div className="flex items-center" key={id}>
                              <Radio
                                color="success"
                                id={name}
                                name="categories"
                                value={name}
                                defaultChecked={false}
                              />
                              <label
                                htmlFor={name}
                                className="ml-3 text-sm font-medium"
                              >
                                {name}
                              </label>
                            </div>
                          ))}
                        </div>
                      </fieldset>
                      {/* Field Filter Category End */}

                      {/* Field Filter Paid or Free Start */}
                      <fieldset>
                        <legend className="block w-full px-5 py-3 text-base font-sans font-medium bg-gray-50">
                          Pricing
                        </legend>
                        <div className="px-5 py-6 space-y-2">
                          <div className="flex items-center">
                            <Radio
                              id="paid"
                              name="isPaid"
                              value="true"
                              defaultChecked={false}
                            />
                            <label
                              htmlFor="paid"
                              className="ml-3 text-sm font-medium"
                            >
                              Paid
                            </label>
                          </div>

                          <div className="flex items-center">
                            <Radio
                              id="free"
                              name="isPaid"
                              value="false"
                              defaultChecked={false}
                            />
                            <label
                              htmlFor="free"
                              className="ml-3 text-sm font-medium"
                            >
                              Free
                            </label>
                          </div>
                        </div>
                      </fieldset>
                      {/* Field Filter Paid or Free End */}

                      {/* Field Filter Type Start */}
                      <fieldset>
                        <legend className="block w-full px-5 py-3 text-base font-sans font-medium bg-gray-50">
                          Type
                        </legend>
                        <div className="px-5 py-6 space-y-2">
                          <div className="flex items-center">
                            <Radio
                              id="online"
                              name="isOnline"
                              value="true"
                              defaultChecked={false}
                            />
                            <label
                              htmlFor="online"
                              className="ml-3 text-sm font-medium"
                            >
                              Online
                            </label>
                          </div>

                          <div className="flex items-center">
                            <Radio
                              id="offline"
                              name="isOnline"
                              value="false"
                              defaultChecked={false}
                            />
                            <label
                              htmlFor="offline"
                              className="ml-3 text-sm font-medium"
                            >
                              Offline
                            </label>
                          </div>
                        </div>
                      </fieldset>

                      {/* Field Filter Type End */}
                      <div className="flex justify-between px-5 py-3 border-t border-gray-200">
                        <button
                          onClick={() => {}}
                          type="reset"
                          className="text-xs font-sans font-medium text-gray-600 hover:text-green-700 hover:font-bold rounded"
                        >
                          Reset All
                        </button>
                        <button
                          name="commit"
                          type="submit"
                          className="px-5 py-3 text-xs font-sans font-medium text-white bg-green-600 rounded"
                        >
                          Apply Filters
                        </button>
                      </div>
                    </form>
                    {/* Aside Filter End */}
                  </div>
                  {/* End Filter */}
                </div>
                {/* Section Aside End */}

                {/* Main */}
                <div className="lg:col-span-3">
                  {/* Section Search & Sort */}
                  <div className="grid grid-cols-3 grid-rows-1 items-center gap-4">
                    <div className="w-full col-span-2">
                      <TextInput
                        id="search"
                        type="text"
                        placeholder="Find Events ..."
                        value={keywords}
                        onChange={onSearchChange}
                      />
                    </div>
                    <div className="w-full">
                      <div id="select">
                        <select
                          id="countries"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          onChange={() => {}}
                        >
                          <option value="">Sort</option>
                          <option value="ASC">Event Name (A-Z)</option>
                          <option value="DESC">Event Name (Z-A)</option>
                          <option value="HIGH_PRICE">Price (High)</option>
                          <option value="LOW_PRICE">Price (Low)</option>
                          <option value="LATEST_EVENT">Latest Event</option>
                          <option value="OLDEST_EVENT">Oldest Event</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* End Section Search & Sort */}

                  {/* Event List */}
                  <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-3 lg:gap-4 items-stretch">
                    {eventsData.map((item, index) => (
                      <EventCard key={index} {...item} />
                    ))}
                  </div>
                  {/* End Event List */}

                  {/* Pagination */}
                  {/* End Pagination */}
                </div>
                {/* End Main */}
              </div>
            </div>
          </div>
        </section>
        {/* End Main */}
      </div>
    </Layout>
  );
}
