export default function Navbar() {
  return (
    <>
      <div className="absolute top-0 left-0 font-poppins px-6 min-w-[95%]">
        <nav className="flex items-center justify-between flex-row bg-transparent p-4">
          <div className="min-w-[85%]">
            <h1 className="text-2xl font-medium text-white">Akira</h1>
          </div>
          <div className="flex justify-between gap-6 ">
            <h1 className="text-1xl font-normal text-white ">About</h1>
            <h1 className="text-1xl font-normal text-white">Skills</h1>
            <h1 className="text-1xl font-normal text-white">Project</h1>
            <h1 className="text-1xl font-normal text-white">Contact</h1>
          </div>
            <div className="">
          </div>
        </nav>
      </div>
    </>
  );
}
