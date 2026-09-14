import whyChoose from "@/assets/images/why-choose.jpg";

const steps = [
  {
    n: "1",
    title: "Erat at semper",
    body: "Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum",
  },
  {
    n: "2",
    title: "Urna nec vivamus risus duis arcu",
    body: "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper",
  },
  {
    n: "3",
    title: "Lobortis euismod imperdiet tempus",
    body: "Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisl cras nunc luctus viverra nisi",
  },
  {
    n: "4",
    title: "Cras nulla aliquet nam eleifend amet et",
    body: "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer. Quisque eleifend tincidunt vulputate libero",
  },
];

export function WhyChoose() {
  return (
    <section className="page-wrap grid items-center gap-10 py-[60px] lg:grid-cols-2 lg:gap-[110px]">
      <img
        src={whyChoose}
        alt=""
        className="h-[320px] w-full rounded-[20px] object-cover sm:h-[420px] lg:h-[549px]"
      />
      <div className="flex flex-col gap-7">
        {steps.map((step) => (
          <div key={step.n} className="flex flex-col gap-5">
            <div className="flex items-end gap-4">
              <span className="flex size-8 items-center justify-center rounded-full bg-brand text-base font-semibold text-white">
                {step.n}
              </span>
              <h3 className="text-xl font-semibold">{step.title}</h3>
            </div>
            <p className="text-base text-black/60">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
