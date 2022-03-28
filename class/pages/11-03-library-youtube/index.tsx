import ReactPlayer from "react-player";

// Render a YouTube video player

export default function LibraryYoutubePage() {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      width={500}
      height={500}
    />
  );
}

// 위드랑 하이트는 속성으로
