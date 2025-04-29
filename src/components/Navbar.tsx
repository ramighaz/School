import Image from "next/image"

const Navbar = () => {
  return (
    <div className="flex item-center justify-between p-4">
        <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">{/* Search */}
        <Image src="/search.png" alt="searchicon" width={18} height={18} />
            <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none"/>
        </div>
        <div className="flex items-center gap-6 justify-end w-full">{/* Icon and user */}
          <div className="bg-white rounded-full w-7 h-7 flex item-center justify-center cursor-pointer">
            <Image src="/message.png" alt="msgicon" width={20} height={20}/>
          </div> 
          <div className="bg-white rounded-full w-7 h-7 flex item-center justify-center cursor-pointer relative">
            <Image src="/announcement.png" alt="announcmenticon" width={20} height={20}/>
            <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 rounded-full text-xs">1</div>
          </div> 
          <div className="flex flex-col">
            <span className="text-xs leading-3 font-medium">John doe</span>
            <span className="text-[10px] text-gray-500 text-right">admin</span>
          </div>
          <Image src="/avatar.png" alt="avataricon" width={36} height={36} className="rounded-full cursor-pointer"/>
    </div>
  </div>
  );
}

export default Navbar