import Image from "next/image";

export const MobilePreview = ({ backgroundImage, imageUrl }) => (
  <section
    className="flex z-0 gap-2.5 justify-center items-center p-1.5 w-[26rem]"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "25rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Image
      src={imageUrl}
      alt="Halaqr"
      width={300}
      height={100}
      priority
      className="object-contain z-10"
    />
  </section>
);
