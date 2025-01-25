import React from 'react'
import { TbUserScan } from "react-icons/tb";
import { CiCalendarDate } from "react-icons/ci";
import { GoListOrdered } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const User_Dashboard = () => {
  return (
    <div> <div className="no-scrollbar overflow-auto mb-10 h-scren">
    <div className="grid grid-cols-3 grid-rows-3 gap-1.5">
      <div className="row-span-2 bg-white rounded-lg drop-shadow-md ">
        {" "}
        <div className="flex mx-8 my-6 gap-4">
          <h1 className="bg-select-sidebar rounded-full w-24 h-24"></h1>
          <p className=" grid gap-1.5 mx-2 my-6">
            <h1 className="font-semibold text-sm text-blue-950">
              Student Name
            </h1>
            <span className="text-xs font-normal text-gray-700">
              Department
            </span>
          </p>
        </div>
        <div className="flex justify-evenly ">
          <div>
            <p className="flex gap-2 items-center text-grey">
              <span className="bg-select-sidebar rounded-full w-[22px] h-[22px] px-1 py-1 ">
                {" "}
                <TbUserScan className=" size-[14px]" />
              </span>
              <h1 className="font-semibold text-xs">Gender</h1>
            </p>
            <h1 className=" font-normal text-xs mx-6 my-2 text-gray-500">
              Male
            </h1>
          </div>
          <div>
            <p className="flex gap-2 items-center text-grey">
              <span className="bg-select-sidebar rounded-full w-[22px] h-[22px]  px-1 py-1  ">
                {" "}
                <CiCalendarDate className="size-[14px]" />
              </span>
              <h1 className="font-semibold text-xs">Date Of Birth</h1>
            </p>
            <h1 className="font-normal text-xs mx-6 my-2 text-gray-500">
              11.07.1998
            </h1>
          </div>
          <div>
            <p className="flex gap-2 items-center text-grey ">
              <span className="bg-select-sidebar rounded-full  px-1 py-1">
                {" "}
                <GoListOrdered className="size-[14px]" />
              </span>
              <h1 className=" font-semibold text-xs">Age</h1>
            </p>
            <h1 className=" font-normal text-xs mx-6 my-2 text-gray-500">
              26
            </h1>
          </div>
        </div>
        <div className="flex justify-center gap-2 my-1 text-sm font-normal ">
          <p className="flex items-center justify-evenly rounded-lg bg-[#FF9500] bg-opacity-15 w-36 h-10   text-[#FF9500]">
            <FiPhone className="size-5" />
            0000000000
          </p>
          <p className="flex items-center justify-evenly rounded-lg bg-blue-900 bg-opacity-15 text-blue-900 w-40 h-10">
            <MdOutlineEmail className="size-5" />
            abc@gmail.com
          </p>
        </div>
        <div className="mx-8 text-xs font-normal  ">
          <h1 className="my-4 font-bold text-sm text-blue-950">Address</h1>
          <p className=" grid grid-cols-2 my-4">
            <h1 className="text-[#48505E]">Apartment</h1>
            <span className="text-center text-[#95A5A6]">Name</span>
          </p>
          <p className=" grid grid-cols-2 my-4">
            <h1 className="text-[#48505E]">State</h1>
            <span className="text-center text-[#95A5A6]">Tamilnadu</span>
          </p>
          <p className=" grid grid-cols-2 my-4">
            <h1 className="text-[#48505E]">City</h1>
            <span className="text-center text-[#95A5A6]">Chennai</span>
          </p>
          <p className=" grid grid-cols-2 my-4">
            <h1 className="text-[#48505E]">Pincode</h1>
            <span className="text-center text-[#95A5A6]">600001</span>
          </p>
        </div>
        <div>
          <p className="flex items-center justify-end mx-10 my-5">
            <h1 className="text-[#2B3674] font-bold text-sm mx-5">
              credit Balance
            </h1>
            <span className="bg-select-sidebar text-sm font-semibold text-blue-950 rounded-md px-5 py-3 ">
              100
            </span>
          </p>
        </div>
      </div>
      <div className="col-span-2 bg-white px-5 py-1.5 rounded-lg drop-shadow-md">
        {" "}
        <p className=" font-bold my-2 text-user-title-text font-Source_Sans_Pro">
          Description
        </p>
        <p className="text-user-text text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae,
          nobis minus facilis laborum quod soluta placeat necessitatibus totam
          asperiores ad excepturi ex eos expedita aspernatur nam molestiae
          veritatis sunt voluptates. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Assumenda nobis veritatis ex, unde illo maxime
          quibusdam vero veniam, ullam sint quis culpa error quo sed
          architecto animi, magnam perferendis. Error?. Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Pariatur aperiam ducimus
          repudiandae molestias amet blanditiis fuga, fugiat perspiciatis
          aspernatur vero inventore. Officiis aliquam dolores vero recusandae
          alias, ea dolorem quam?
        </p>
      </div>
      <div className="row-span-1 bg-white px-5 py-2.5 rounded-lg drop-shadow-md">
        <h3 className="text-base font-bold font-Source_Sans_Pro text-user-title-text my-2.5">
          Stronger Areas
        </h3>
        <ul className="list-disc list-inside overflow-y-auto text-user-text text-sm space-y-1">
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Sed fermentum imperdiet dignissim.</li>
          <li>Pretium phasellus fringilla eu purus.</li>
          <li>Adipiscing enim mi velit eget.</li>
          <li>Neque dignissim libero enim.</li>
          <li>Commodo adipiscing tincidunt.</li>
          <li>Commodo adipiscing tincidunt.</li>
        </ul>
      </div>
      <div className="col-span-1 bg-white px-5 py-2.5 rounded-lg drop-shadow-md">
        <h3 className="text-base font-bold font-Source_Sans_Pro text-user-title-text my-2.5">
          Area Need to Improve
        </h3>
        <ul className="list-disc list-inside overflow-y-auto text-user-text text-sm space-y-1">
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Sed fermentum imperdiet dignissim.</li>
          <li>Pretium phasellus fringilla eu purus.</li>
          <li>Adipiscing enim mi velit eget.</li>
          <li>Neque dignissim libero enim.</li>
          <li>Commodo adipiscing tincidunt.</li>
        </ul>
      </div>
      <div className="col-span-1 bg-white px-5 py-8 rounded-lg drop-shadow-md ">
        <h3 className="text-base font-bold font-Source_Sans_Pro text-user-title-text mb-2">
          Skills
        </h3>
        <div className="flex flex-wrap gap-2 justify-center my-8">
          <span className="bg-green-100 text-green-600 py-2 px-3 rounded-lg text-sm">
            Lorem ipsum dolor
          </span>
          <span className="bg-green-100 text-green-600 py-2 px-3 rounded-lg text-sm">
            Lorem ipsum dolor
          </span>
          <span className="bg-green-100 text-green-600 py-2 px-3 rounded-lg text-sm">
            Lorem ipsum dolor
          </span>
          <span className="bg-green-100 text-green-600 py-2 px-3 rounded-lg text-sm">
            Lorem ipsum dolor
          </span>
          <span className="bg-green-100 text-green-600 py-2 px-3 rounded-lg text-sm">
            Lorem ipsum dolor
          </span>
          <span className="bg-green-100 text-green-600 py-2 px-3 rounded-lg text-sm">
            Lorem ipsum dolor
          </span>
        </div>
      </div>
      <div className="col-span-1 bg-white px-5 py-8 rounded-lg drop-shadow-md">
        {" "}
        <h3 className="text-base font-bold mb-2 text-user-title-text">
          Emotional Status
        </h3>
        <ul className="list-disc list-inside text-sm text-user-text space-y-1">
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Sed fermentum imperdiet dignissim.</li>
          <li>Pretium phasellus fringilla eu purus.</li>
          <li>Adipiscing enim mi velit eget.</li>
          <li>Neque dignissim libero enim.</li>
          <li>Commodo adipiscing tincidunt.</li>
        </ul>
      </div>

      {/*  */}
      {/* <div className="bg-white flex items-center justify-center p-4 rounded-lg drop-shadow-md">
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={true}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div> */}
    </div>
  </div></div>
  )
}

export default User_Dashboard