import EventItem from "../../components/ui/EventCard";
import FooTer from "../../components/ui/footer";
import Head from "next/head";
import NavBar from "../../components/ui/navbar";
import { useRouter } from "next/router";
import { eventsData } from "../../utils/data";
import Image from "next/image";

export default function User() {
  const router = useRouter();
  const { id } = router.query;

  const userDetail = {
    id: 1,
    fullName: "Agnesia Aretina",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    email: "agnesia@example.com",
    avatar:
      "https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  };

  const userEvents = [...eventsData];

  return (
    <>
      <Head>
        <title>
          {`${
            userDetail.fullName?.length > 0
              ? userDetail.fullName
              : "User Not Found"
          }`}{" "}
          | Profile
        </title>
      </Head>

      <header>
        <NavBar />
      </header>

      <main className="m-auto">
        {/* Hero start */}
        <section>
          <div className="h-2/4 sm:h-64 xl:h-[22.5rem] overflow-hidden">
            <Image
              className="object-cover w-full"
              src="https://images.unsplash.com/photo-1502252430442-aac78f397426?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              loader={({ src }) => src}
              unoptimized={true}
              priority={true}
              alt="hero"
              width={1920}
              height={1080}
            />
          </div>
          <div className="container px-4 mx-auto mt-8 md:px-8 lg:px-12 xl:mt-12 xl:px-16">
            <div className="flex justify-start mb-5 -mt-20 lg:-mt-28 xl:-mt-32">
              <span>
                <Image
                  alt="User Image"
                  src={
                    userDetail.avatar ||
                    "https://avatarairlines.com/wp-content/uploads/2020/05/Male-placeholder.jpeg"
                  }
                  className="object-cover w-24 h-24 p-1 mx-auto bg-white rounded-lg lg:h-40 lg:w-40"
                  loader={({ src }) => src}
                  unoptimized={true}
                  priority={true}
                  width={150}
                  height={150}
                />
              </span>
            </div>
            <div className="mb-8">
              <div className="grid grid-cols-1 grid-rows-1 overflow-hidden lg:grid-cols-3 lg:gap-9">
                <div className="lg:col-span-2">
                  <h2 className="font-sans text-2xl font-black text-green-800 dark:text-gray-300">
                    {userDetail.fullName || "Unknown"}
                  </h2>
                  <p className="mt-2 text-md dark:text-gray-400 description-wrapper">
                    {userDetail.bio || "This user was not found"}
                  </p>
                </div>
                <div className="flex flex-col gap-1 lg:gap-4">
                  <div className="mt-4 border-2 border-gray-100 rounded-lg h-fit lg:mt-0">
                    <div className="block w-full p-2 lg:mt-0 lg:p-4">
                      <button
                        onClick={() =>
                          (window.location.href = `mailto:${
                            userDetail.email || ""
                          }`)
                        }
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 flex justify-center items-center rounded-lg font-bold font-sans px-5 py-2.5 w-full dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 text-center disabled:bg-opacity-70 disabled:cursor-not-allowed"
                        disabled={userDetail.email?.length > 0 ? false : true}
                        title={
                          userDetail.email?.length > 0
                            ? `Send email to ${userDetail.email}`
                            : ""
                        }
                      >
                        Email
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Hero end */}
        <div className="container px-4 mx-auto mt-8 md:px-8 lg:px-12 xl:mt-12 xl:px-16 md:mt-12 lg:mt-16">
          <h2 className="font-sans text-xl font-black underline underline-offset-8 decoration-wavy">
            Events
          </h2>
        </div>
        <div>
          <div className="container grid items-stretch grid-cols-1 gap-4 px-4 py-4 mx-auto mt-8 mb-6 md:px-12 lg:px-16 sm:grid-cols-2 lg:grid-cols-4 md:gap-3 lg:gap-4">
            {userEvents.map((event) => (
              <EventItem key={event.id} {...event} />
            ))}
          </div>
        </div>
        {/* Pagination */}
      </main>

      <footer>
        <FooTer />
      </footer>
    </>
  );
}
