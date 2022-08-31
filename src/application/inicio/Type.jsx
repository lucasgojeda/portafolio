import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <Typewriter
      options={{

        strings: [
          "React developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,

      }}
    />
  );
}
