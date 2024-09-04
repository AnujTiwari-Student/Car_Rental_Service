import React from 'react'

function NewsLetterComponent() {
  return (
    <section className="section mt-50">
                    <div className="container">
                        <div className="box-newsletter box-newsletter-2">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-7 m-auto text-center xl:w-6/12 text-lg"><span className="font-lg color-brand-1">Newsletter</span>
                                    <h2 className="color-brand-1 mb-15 mt-5 text-2xl md:text-4xl xl:text-5xl text-[#024430] font-bold">Subscribe our newsletter</h2>
                                    <p className="font-md color-grey-500 my-3">Do not miss the latest information from us about the trending in the market. By clicking the button, you are agreeing with our Term &amp; Conditions</p>
                                    <div className="form-newsletter mt-30">
                                        <form action="#">
                                            <input type="text" placeholder="Enter you mail .." />
                                            <button className="btn btn-submit-newsletter bg-[#024430] px-4 rounded-sm" type="submit">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="#FFE7BB" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
  )
}

export default NewsLetterComponent