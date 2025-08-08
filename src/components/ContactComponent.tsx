import Button from './Button';

export default function ContactComponent() {
  return (
    <>
      <div slot="head">
        <title>Contact me | OTG</title>
      </div>
      <div className="mx-auto max-w-screen-md px-4 pt-28">
        <h1 className="h1 mytext-base mb-4 text-center">Contact Me</h1>
        <h2 className="h2 mytext-muted sm:h2 mb-8 text-center lg:mb-16">
          Please only do so if you want to hire me.
        </h2>

        <form
          action="https://formspree.io/f/mvgqvlkq"
          method="POST"
          className="space-y-8"
          onSubmit={() => alert('Thanks for your message!')}
        >
          <div>
            <label htmlFor="email" className="mytext-muted p mb-2 block">
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border-muted bg-light mytext-base p-small focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border p-2.5 shadow-sm"
              placeholder="name@offthegrid.com"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="mytext-muted p mb-2 block">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="p-small mytext-base border-muted bg-light focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border p-3 shadow-sm"
              placeholder="If you must. Say what you have to say."
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="p mytext-base mb-2 block">
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="p-small mytext-base border-muted bg-light focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border p-2.5 shadow-sm"
              placeholder="Leave a comment..."
              required
            ></textarea>
          </div>

          <Button text="Send message" />
        </form>
      </div>
    </>
  );
}
