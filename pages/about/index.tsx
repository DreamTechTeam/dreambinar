import { Accordion, Button, Label, Textarea, TextInput } from "flowbite-react";
import Head from "next/head";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Layout, { siteTitle } from "../../components/Layout";
import DeveloperCard from "../../components/ui/DeveloperCard";
import Particle from "../../components/ui/Particle";
import { developersData } from "../../utils/data";

const pageTitle: String = `About Us | ${siteTitle}`;
const developers = developersData.data;

export default function About() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <div className="mx-auto max-w-[1325px]">
        {/* Hero About */}
        <section className="h-screen flex items-center relative">
          <div className="container absolute z-10">
            <div className="w-full mx-auto px-4 mt-10 md:mt-0">
              <h1 className="text-2xl md:text-3xl lg:text-[40px] xl:text-[42px] font-black font-sans flex flex-col text-center lg:gap-2">
                Know More
                <strong className="font-black text-green-700 block">
                  About Dreamtech
                </strong>
              </h1>
              <p className="max-w-xl mx-auto text-center mt-4 leading-relaxed text-base lg:text-lg text-gray-800">
                Dreamtech was formed by people who have the same vision and
                mission and are a form of our dedication as IT enthusiasts. We
                want to create a technology with innovation that can benefit the
                wider community and need it supported by the latest technology.
              </p>
            </div>
          </div>
          <Particle />
        </section>
        {/* End Hero */}

        {/* Developers */}
        <section>
          <div className="container">
            <div className="w-full px-4 mb-4 md:mb-8">
              <h1 className="text-2xl md:text-3xl font-black font-sans text-center mb-2">
                Meet Our Team
              </h1>
              <p className="text-center text-base lg:text-lg text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                dolores laborum <br /> labore provident impedit esse recusandae
                facere libero harum sequi.
              </p>
            </div>

            <div className="w-full px-4">
              <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-5 md:gap-3 lg:gap-4">
                {developers.map((developer, index) => (
                  <DeveloperCard key={index} {...developer} />
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* End Developers */}

        {/* Contact */}
        <section className="pt-14 md:pt-36">
          <div className="container">
            <div className="w-full px-4 mb-4 md:mb-8">
              <h1 className="text-2xl md:text-3xl font-black font-sans text-center mb-2">
                Let&apos;s Stay Connected
              </h1>
              <p className="text-center text-base lg:text-lg text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                dolores laborum <br /> labore provident impedit esse recusandae
                facere libero harum sequi.
              </p>
            </div>

            <div className="w-full px-4">
              {/* ====== Contact Section Start */}
              <section className="text-gray-800 body-font relative">
                <div className="flex sm:flex-nowrap flex-wrap">
                  <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                      width="100%"
                      height="100%"
                      className="absolute inset-0"
                      title="map"
                      loading="lazy"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15843.05719814062!2d106.9340928!3d-6.9187572!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x261f558445241e0c!2sUniversitas%20Muhammadiyah%20Sukabumi!5e0!3m2!1sen!2sid!4v1658061919459!5m2!1sen!2sid"
                      style={{
                        filter: "grayscale(1) contrast(1.2) opacity(0.4)",
                      }}
                    />
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                      <div className="lg:w-1/2 px-6">
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                          ADDRESS
                        </h2>
                        <a
                          href="https://g.page/ummi_sukabumi?share"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="mt-1 hover:text-blue-700"
                        >
                          Jl. R. Syamsudin, S.H. No. 50, Cikole, Kec. Cikole,
                          Kota Sukabumi, Jawa Barat 43113
                        </a>
                      </div>
                      <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                          EMAIL
                        </h2>
                        <a
                          href="mailto:admin@dreamtechteam.me"
                          className="leading-relaxed hover:text-blue-700"
                        >
                          admin@dreamtechteam.me
                        </a>
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-2">
                          WHATSAPP
                        </h2>
                        <a
                          href="https://wa.me/+6281234567890"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="leading-relaxed hover:text-blue-700"
                        >
                          +62 812 3456 7890
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-gray-900 text-lg mb-1 font-bold font-sans title-font">
                      Feedback
                    </h2>
                    <p className="leading-relaxed mb-3 text-gray-600"></p>

                    <form
                      className="flex flex-col gap-2"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div>
                        <div className="mb-2 block">
                          <Label htmlFor="fullName" value="Full Name*" />
                        </div>
                        <TextInput
                          color={errors.fullName && "failure"}
                          id="fullName"
                          type="text"
                          // disabled={feedbackQueries.isLoading}
                          {...register("fullName", { required: true })}
                        />
                        {errors.fullName && (
                          <p className="text-red-700 text-sm pt-1">
                            * This field is required
                          </p>
                        )}
                      </div>
                      <div>
                        <div className="mb-2 block">
                          <Label htmlFor="email" value="Email*" />
                        </div>
                        <TextInput
                          color={errors.email && "failure"}
                          id="email"
                          type="email"
                          {...register("email", { required: true })}
                        />
                        {errors.email && (
                          <p className="text-red-700 text-sm pt-1">
                            * This field is required
                          </p>
                        )}
                      </div>
                      <div>
                        <div className="mb-2 block">
                          <Label htmlFor="message" value="Message*" />
                        </div>
                        <Textarea
                          id="message"
                          color={errors.message && "failure"}
                          rows={4}
                          {...register("message", { required: true })}
                        />
                        {errors.message && (
                          <p className="text-red-700 text-sm pt-1">
                            * This field is required
                          </p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        style={{
                          width: "auto",
                          marginTop: ".5rem",
                        }}
                        color="success"
                      >
                        Submit
                      </Button>
                    </form>
                  </div>
                </div>
              </section>
              {/* ====== Contact Section End */}
            </div>
          </div>
        </section>
        {/* End Contact */}

        {/* FAQ */}
        <section className="py-14 md:py-36">
          <div className="container">
            <div className="w-full px-4 mb-4 md:mb-8">
              <h1 className="text-2xl md:text-3xl font-black font-sans text-center mb-2">
                Frequently Asked Questions
              </h1>
              <p className="text-center text-base lg:text-lg text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                dolores laborum <br /> labore provident impedit esse recusandae
                facere libero harum sequi.
              </p>
            </div>

            <div className="w-full px-4">
              <Accordion alwaysOpen={true}>
                <Accordion.Panel>
                  <Accordion.Title>What is Dreambinar?</Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Odit voluptatum porro repudiandae sequi veniam iusto saepe
                      necessitatibus suscipit repellendus nemo dolores aliquam
                      labore eum, veritatis dolor fugit corporis! Qui, dolorem.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Lorem ipsum dolor
                      <Link
                        href="/about"
                        className="text-blue-600 hover:underline dark:text-blue-500"
                      >
                        {" "}
                        sit amet consectetur
                      </Link>{" "}
                      adipisicing elit. Repellendus sed omnis quos repellat
                      corrupti reiciendis facere! Praesentium molestias, quis
                      possimus ex soluta molestiae labore placeat blanditiis id
                      libero voluptatem! Ducimus!
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title>
                    Is there a Free event available?
                  </Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Odit nostrum quas quos corrupti repellendus dicta! Ipsum
                      officia fuga officiis et? Accusamus libero veritatis iste
                      tempore aliquam dicta error? Rerum, perferendis.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title>
                    What are the differences between Dreambinar and Others?
                  </Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nesciunt maxime non sit. Aperiam recusandae nisi repellat
                      ex debitis culpa hic deserunt vitae, aut quidem magnam
                      sed, officia ipsa libero mollitia.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
          </div>
        </section>
        {/* End FAQ */}
      </div>
    </Layout>
  );
}
