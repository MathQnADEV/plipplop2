"use client";
import axios from "@/libs/axios";
import Image from "next/image";
import React, { useState } from "react";

const NewProfile = ({ data }) => {
  const options = [
    { value: "", text: "Choose a gender" },
    { value: "laki_laki", text: "Laki - Laki" },
    { value: "perempuan", text: "Perempuan" },
  ];

  const handleGenderChange = (event) => {
    setFormData({
      ...formData,
      gender: event.target.value,
    });
  };

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: data.email,
    gender: data.gender || options[0].value,
    date_of_birth: data.date_of_birth || "",
    profile_picture: data.image,
  });

  const handleChangeForm = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(formData);
    await axios.post("/userPlipPlop", formData).then(() => {
      window.location.replace("/users/dashboard");
    });
  };

  return (
    <div className="container z-10 mx-auto mt-8 flex items-center px-4 md:mt-16">
      <div className="mb-16 mt-8 flex w-full flex-row items-start justify-start md:mb-16 md:mt-32 md:gap-5">
        <div className="flex w-1/2 flex-col items-center justify-center">
          <Image
            src={data.profile_picture}
            alt="profile user"
            width={350}
            height={350}
            className="rounded-full text-center"
          />
          <h1 className="mt-5 text-3xl font-semibold">
            {data.first_name} {data.last_name}
          </h1>
        </div>
        <form
          className="flex w-full flex-col"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="flex w-full flex-row gap-10">
            <div className="flex w-1/2 flex-col">
              <p className="text-xl font-semibold">Nama Depan</p>
              <input
                type="text"
                name="first_name"
                placeholder={data.first_name}
                onChange={handleChangeForm}
                value={formData.first_name}
                className="mt-4 w-full rounded-md border-4 bg-white py-2 pl-5 text-black outline-[#FFB52D] transition-all hover:border-[#FFB52D] hover:shadow-2xl"
              />
            </div>
            <div className="flex w-1/2 flex-col">
              <p className="text-xl font-semibold">
                Nama Belakang
                <span className="text-sm font-normal"> (Opsional)</span>
              </p>
              <input
                type="text"
                name="last_name"
                placeholder={data.last_name}
                onChange={handleChangeForm}
                value={formData.last_name}
                className="mt-4 w-full rounded-md border-4 bg-white py-2 pl-5 text-black outline-[#FFB52D] transition-all hover:border-[#FFB52D] hover:shadow-2xl"
              />
            </div>
          </div>
          <div className="mt-6 flex flex-col">
            <p className="text-xl font-semibold">Email</p>
            <input
              readOnly
              name="email"
              placeholder={data.email}
              onChange={handleChangeForm}
              value={data.email}
              className="mt-4 w-full rounded-md border-4 bg-white py-2 pl-5 text-black outline-[#FFB52D] transition-all hover:border-[#FFB52D] hover:shadow-2xl"
            />
          </div>
          <div className="mt-6 flex w-full flex-row gap-10">
            <div className="flex w-1/2 flex-col">
              <p className="text-xl font-semibold">Jenis Kelamin</p>
              <select
                name="gender"
                onChange={handleGenderChange}
                value={formData.gender}
                placeholder={data.gender}
                className="mt-4 w-full rounded-md border-4 bg-white py-2 pl-5 text-black outline-[#FFB52D] transition-all hover:border-[#FFB52D] hover:shadow-2xl"
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex w-1/2 flex-col">
              <p className="text-xl font-semibold">Tanggal Lahir</p>
              <input
                type="date"
                name="date_of_birth"
                value={formData.date_of_birth}
                onChange={handleChangeForm}
                className="mt-4 w-full rounded-md border-4 bg-white py-2 pl-5 text-black outline-[#FFB52D] transition-all hover:border-[#FFB52D] hover:shadow-2xl"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-10 w-full rounded-md bg-[#FFB52D] py-3 text-center text-white transition-all hover:shadow-2xl"
          >
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewProfile;
