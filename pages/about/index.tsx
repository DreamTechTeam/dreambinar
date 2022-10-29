import Head from "next/head";
import NavBar from "../../components/ui/navbar/index";
import AboutList from "../../components/ui/about/AboutList";
import { Button, Label, TextInput, Textarea, Accordion } from "flowbite-react";
import { useForm } from "react-hook-form";
import Footer from "../../components/ui/footer";
import { developersData } from "../../utils/data";

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
    <>
      <Head>
        <title>About Us | Dreambinar</title>
      </Head>

      <header>
        <NavBar />
      </header>

      <div className="container mx-auto px-4 mt-8 md:px-8 lg:px-12 xl:mt-12 xl:px-16">
        <section className="mx-auto lg:items-center lg:flex">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-3xl font-black font-sans sm:text-5xl flex flex-col justify-center items-center">
              Know More
              <strong className="font-extrabold text-green-700 block">
                About Dreamtech.
              </strong>
            </h1>
            <p className="mt-4 sm:leading-relaxed sm:text-lg">
              Dreamtech was formed by people who have the same vision and
              mission and are a form of our dedication as IT enthusiasts. We
              want to create a technology with innovation that can benefit the
              wider community and need it supported by the latest technology.
            </p>
          </div>
        </section>

        <div className="mt-8 md:mt-12 lg:mt-16">
          <div className="mb-4 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-black font-sans text-center mb-2">
              Meet Our Team
            </h1>
            <p className="text-center text-base md:text-lg font-light">
              lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <AboutList developers={developersData.data} />
        </div>

        <div className="mt-8 md:mt-12 lg:mt-16">
          <div className="mb-4 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-black font-sans text-center mb-2">
              Let&apos;s Stay Connected
            </h1>
            <p className="text-center text-base md:text-lg font-light ">
              lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          {/* ====== Contact Section Start */}
          <section className="text-gray-600 body-font relative">
            <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
              <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  title="map"
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15843.05719814062!2d106.9340928!3d-6.9187572!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x261f558445241e0c!2sUniversitas%20Muhammadiyah%20Sukabumi!5e0!3m2!1sen!2sid!4v1658061919459!5m2!1sen!2sid"
                  style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
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
                      Jl. R. Syamsudin, S.H. No. 50, Cikole, Kec. Cikole, Kota
                      Sukabumi, Jawa Barat 43113
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

        <div className="mt-8 md:mt-12 lg:mt-16 mb-8 md:mb-12 lg:mb-16">
          <div className="mb-4 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-black font-sans text-center mb-2">
              Frequently asked questions
            </h1>
            <p className="text-center text-base md:text-lg font-light">
              lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <Accordion alwaysOpen={true}>
            <Accordion.Panel>
              <Accordion.Title>What is Dreambinar?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                  voluptatum porro repudiandae sequi veniam iusto saepe
                  necessitatibus suscipit repellendus nemo dolores aliquam
                  labore eum, veritatis dolor fugit corporis! Qui, dolorem.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor
                  <a
                    href="/about"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    {" "}
                    sit amet consectetur
                  </a>{" "}
                  adipisicing elit. Repellendus sed omnis quos repellat corrupti
                  reiciendis facere! Praesentium molestias, quis possimus ex
                  soluta molestiae labore placeat blanditiis id libero
                  voluptatem! Ducimus!
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                Is there a Free event available?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
                  nostrum quas quos corrupti repellendus dicta! Ipsum officia
                  fuga officiis et? Accusamus libero veritatis iste tempore
                  aliquam dicta error? Rerum, perferendis.
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
                  Nesciunt maxime non sit. Aperiam recusandae nisi repellat ex
                  debitis culpa hic deserunt vitae, aut quidem magnam sed,
                  officia ipsa libero mollitia.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
