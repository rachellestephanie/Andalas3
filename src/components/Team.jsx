import React from "react";

const Team = () => {
  const teamMenbers = [
    {
      name: "Genaldi Ikhsan",
      designation: "Informatika",
      img: "src/assets/gege.jpg",
    },
    {
      name: "Malvin Wijaya",
      designation: "Informatika",
      img: "src/assets/malpin.jpg",
    },
    {
      name: "Anastasia",
      designation: "Informatika",
      img: "src/assets/anast.jpg",
    },
    {
      name: "Rachell",
      designation: "Informatika",
      img: "src/assets/rachael.jpg",
    },
  ];

  return (
    <section className="bg-gray-400 py-20 mt-10">
      <div className="w-[70%] mx-auto">
        <div className="flex flex-col gap-3 justify-center items-center w-[50%] mx-auto text-center">
          <h2 className="text-5xl text-black font-semibold ">Tim Kami</h2>
          <p className="text-black text-lg">
            Kami terdiri dari berpengalaman dengan semangat untuk perjalanan dan
            komitmen kepada pembaca.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 py-20">
          {teamMenbers.map((member) => {
            return (
              <div className=" flex-col gap-4 justify-center items-center bg-gray-50 py-0 px-0">
                <div>
                  <img src={member.img} alt={member.name} />
                </div>
                <div className="text-center flex flex-col gap-2">
                  <h1 className="text-3xl font-semibold text-black">
                    {member.name}
                  </h1>
                  <h3 className="text-black  text-lg">{member.designation}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
