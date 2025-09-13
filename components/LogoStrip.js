import Image from "next/image";

export default function LogoStrip() {
  return (
    <section className="bg-black mt-34 py-10">
      <div className="container mx-auto flex flex-wrap justify-center items-center gap-12">
        {/* Each logo can be text or an image */}
        <span className="text-white text-xl font-semibold">
          Powering Ambitions
        </span>

        <span className="text-white text-xl font-normal">CyberAssure</span>

        <span className="text-green-500 text-xl font-bold">
          C₹EDIT GHAR
        </span>

        <span className="text-white text-xl font-bold">
          EVENT GRAPHIA
        </span>

        <span className="text-yellow-600 text-xl font-bold">
          handpickd
        </span>

        <span className="text-white text-xl font-bold">DRIZZ</span>
      </div>
    </section>
  );
}
