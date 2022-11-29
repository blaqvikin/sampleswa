export default function Footer() {
  return (
    <>
      <footer className="bg-green-500 z-50 w-full p-5">
        <div
          className="ml-auto mr-auto flex sm:flex-row flex-col justify-between gap-5 items-start w-full max-w-[1500px]"
          id="mce-responses"
        >
          <div>
            <div className="bg-white w-24 p-2 rounded-md flex justify-center items-center">
              <img
                src="/images/icons/3rdi_logo.png"
                width={336}
                height={215}
                className="w-full"
                alt="3rdi_logo"
              />
            </div>
            <div className="flex">
              <a
                className=""
                href="https://www.linkedin.com/company/3rditech/about/"
              >
                <img
                  src="/images/icons/linkedin.png"
                  width={70}
                  className=""
                  height={70}
                  alt="3rdi_logo"
                />
              </a>
            </div>
          </div>
          <div id="mc_embed_signup">
            <form
              action="https://tech.us14.list-manage.com/subscribe/post?u=804b3c4181d7e9d410cc5bc69&amp;id=5282baacd4&amp;f_id=0034e4e0f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_self"
            >
              <div id="mc_embed_signup_scroll">
                <div className="indicates-required">
                  <p className="font-bold leading-3 md:leading-normal text-lg md:text-2xl">
                    Join our news letter
                  </p>
                  <small>Stay up to date about </small>
                </div>
                <div className="mc-field-group">
                  <input
                    type="email"
                    name="EMAIL"
                    placeholder="Email Address"
                    className="required email rounded-full p-3 pr-10"
                    id="mce-EMAIL"
                    required
                  />
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button bg-purple-400 py-3 font-medium text-white px-10 -ml-10 rounded-full"
                  />
                </div>
                <div hidden>
                  <input type="hidden" name="tags" value="7164015" />
                </div>
                <div id="mce-responses" className="clear">
                  <div
                    className="response hidden"
                    id="mce-error-response"
                  ></div>
                  <div
                    className="response hidden"
                    id="mce-success-response"
                  ></div>
                </div>
                {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                <div aria-hidden="true" className="absolute left-[-5000px]">
                  <input
                    type="text"
                    name="b_804b3c4181d7e9d410cc5bc69_5282baacd4"
                    tabIndex={-1}
                    value=""
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-10"></div>
      </footer>
    </>
  );
}
