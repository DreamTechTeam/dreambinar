import Head from "next/head";
import Image from "next/legacy/image";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import EventItem from "../../components/ui/EventCard";
import { eventsData } from "../../utils/data";

export default function User() {
  const router = useRouter();
  const { id } = router.query;

  const userDetail = {
    id: 1,
    fullName: "Kim Da-Mi",
    bio: "Kim Da-mi is a South Korean actress. Her name immediately skyrocketed and was known for her role in the action-mystery film The Witch: Part 1. The Subversion and was nicknamed 'Monster Rookie' by sweeping various Best New Actress awards.",
    email: "dami_kim@example.com",
    avatar:
      "https://kepoper.com/wp-content/uploads/2021/12/Kim-Da-Mi-758x547.png",
  };

  const userEvents = [...eventsData];
  const pageTitle =
    userDetail.fullName?.length > 0
      ? `${userDetail.fullName} | Profile`
      : `User Not Found | Profile`;

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <div>
        {/* Hero User */}
        <section className="pt-14 md:pt-24">
          <div className="container">
            <div className="w-full px-4 mt-10 md:mt-0">
              <div className="relative h-36 md:h-48 lg:h-80 overflow-hidden rounded-lg md:rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1502252430442-aac78f397426?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  loader={({ src }) => src}
                  unoptimized={true}
                  objectFit="cover"
                  alt="hero"
                  sizes="100%"
                  layout="fill"
                />
              </div>

              <div className="mt-8 px-4 md:px-8 lg:px-12 xl:mt-12 xl:px-16">
                <div className="flex justify-start mb-5 -mt-20 md:-mt-28 xl:-mt-32">
                  <div className="relative w-24 h-24 md:h-32 md:w-32 rounded-lg lg:h-40 lg:w-40 overflow-hidden border-4">
                    <Image
                      alt="User Image"
                      src={
                        userDetail.avatar ||
                        "https://avatarairlines.com/wp-content/uploads/2020/05/Male-placeholder.jpeg"
                      }
                      loader={({ src }) => src}
                      unoptimized={true}
                      objectFit="cover"
                      sizes="100%"
                      layout="fill"
                    />
                  </div>
                </div>
                <div className="mb-8">
                  <div className="grid grid-cols-1 grid-rows-1 overflow-hidden lg:grid-cols-3 lg:gap-9">
                    <div className="lg:col-span-2">
                      <h2 className="font-sans text-2xl font-black text-green-800 dark:text-gray-300">
                        {userDetail.fullName || "Unknown"}
                      </h2>
                      <p className="mt-2 text-base lg:text-md text-gray-800 description-wrapper">
                        {userDetail.bio || "This user was not found"}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 lg:gap-4">
                      <div className="mt-4 border-2 border-gray-300 rounded-xl h-fit lg:mt-0">
                        <div className="block w-full p-2 lg:mt-0 lg:p-4">
                          <button
                            onClick={() =>
                              (window.location.href = `mailto:${
                                userDetail.email || ""
                              }`)
                            }
                            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 flex justify-center items-center rounded-lg font-bold font-sans px-5 py-2.5 w-full dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 text-center disabled:bg-opacity-70 disabled:cursor-not-allowed"
                            disabled={
                              userDetail.email?.length > 0 ? false : true
                            }
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
            </div>
          </div>
        </section>
        {/* End Hero User */}

        {/* Events */}
        <section className="pt-3 md:pt-6 pb-16 md:pb-24">
          <div className="container">
            <div className="px-4 md:px-8 lg:px-12 xl:px-16">
              <div className="w-full px-4">
                <h2 className="font-sans text-xl font-black underline underline-offset-8 decoration-wavy">
                  Events
                </h2>
              </div>

              <div className="w-full grid items-stretch grid-cols-1 gap-4 px-4 py-4 mt-8 mb-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-3 lg:gap-4">
                {userEvents.map((event) => (
                  <EventItem key={event.id} {...event} />
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* End Events */}

        {/* Pagination */}
        {/* End Pagination */}
      </div>
    </Layout>
  );
}
