// lazyload 주석을 해제하고 실행하면 됩니다.
// import LazyLoad from "react-lazy-load";

import { useEffect, useRef, useState } from "react";

// const MyComponent = () => (
//   <div>
//     Scroll to load images.
//     <div className="filler" />
//     <LazyLoad height={762} offsetVertical={300}>
//       <img src="http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg" />
//     </LazyLoad>
//     <div className="filler" />
//     <LazyLoad height={683} offsetTop={200}>
//       <img src="http://apod.nasa.gov/apod/image/1502/2015_02_20_conj_bourque1024.jpg" />
//     </LazyLoad>
//     <div className="filler" />
//     <LazyLoad height={480} offsetHorizontal={50}>
//       <img src="http://apod.nasa.gov/apod/image/1502/MarsPlume_jaeschke_480.gif" />
//     </LazyLoad>
//     <div className="filler" />
//     <LazyLoad
//       height={720}
//       onContentVisible={() => console.log("look ma I have been lazyloaded!")}
//     >
//       <img src="http://apod.nasa.gov/apod/image/1502/ToadSky_Lane_1080_annotated.jpg" />
//     </LazyLoad>
//     <div className="filler" />
//   </div>
// );

// export default MyComponent;

export default function Quiz() {
  const divRef = useRef<HTMLDivElement>(null);
  const [img, setImg] = useState<HTMLImageElement>();

  useEffect(() => {
    const img = new Image();
    img.src = "/aaa.png";
    img.onload = () => {
      setImg(img);
    };
  }, []);

  const onClickPreload = () => {
    if (img) {
      divRef.current?.appendChild(img);
    }
  };

  return (
    <div>
      <div ref={divRef}></div>
      <button onClick={onClickPreload}>이미지 보여주기</button>
    </div>
  );
}
