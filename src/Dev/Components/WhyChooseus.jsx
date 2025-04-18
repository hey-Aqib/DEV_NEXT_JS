import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/Dev/Components/ui/accordion"


const WhyChooseus = () => {
    return (
        <>
            <section className="w-full text-white body-font">
                <h1 className="text-center py-10 text-6xl font-bold">Why Choose us</h1>
                <div className="container mx-auto flex gap-10 max-sm:gap-10 px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <video
                            src="https://cdn.prod.website-files.com/660b9ff56cc1437adb553c40%2F66a3956e49d8a96e28ec7e12_111-transcode.mp4"
                            className="object-cover object-center rounded w-full h-full"
                            muted
                            autoPlay
                            loop
                            playsInline
                        />
                    </div>

                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left   max-sm:px-8">
                        <h1 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                            Get to the Top Page of Search Engines
                            {/* <br className="hidden lg:inline-block" /> */}
                            With Targeted Revenue Growth
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            In the fast-paced digital marketplace, visibility is everything.
                            Corecentrix Business Solutions stands at the forefront of SEO
                            excellence, empowering businesses across the USA to dominate
                            search engine rankings and achieve unparalleled revenue growth.
                            Our expert SEO strategies are not just about climbing to the top
                            page—they're about driving measurable results that translate
                            into tangible profits for your business.
                        </p>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="hover:none">
                                    Is it accessible?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Is it styled?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It comes with default styles that matches the other
                                    components&apos; aesthetic.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Is it animated?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It's animated by default, but you can disable it if you
                                    prefer.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyChooseus