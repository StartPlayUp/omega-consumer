const Header = () => {
  return (
    <header>
      <nav className="w-full h-16 border-b-2">
        <div className="flex mt-3 w-full">
          <ul className="flex ml-16 ">
            <li className="text-5xl">OmegaComsumer</li>
            <li className="text-2xl m-3 px-16">공지사항</li>
            <li className="text-2xl m-3">게시판</li>
          </ul>
          <ul>
            <li className="right-0">로그인</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
