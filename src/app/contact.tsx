const Contact = () => {
  return(
    <>
      <div className="px-8 lg:px-12">
        <h2>Contact me</h2>
        <div className="py-8">
          <form>
            <div className="w-full md:w-1/2 xl:w-1/3">
              <label htmlFor="name" className="block">Your name</label>
              <input className="form-input" placeholder="Your name" id="name" name="name" />
              <label htmlFor="email" className="block">Your e-mail</label>
              <input className="form-input" type="email" placeholder="Your e-mail" id="email" name="email" />
              <label htmlFor="message" className="block">Message</label>
              <textarea className="form-input" placeholder="Type your message here" id="message" name="message" rows={6}></textarea>
              <button className="btn btn-main btn-green mt-6 mb-6 w-full">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact