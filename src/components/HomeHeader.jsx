import * as React from "react";

function MyComponent() {
    return (
        <>
            <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/414673d927415944c60e994cb0994705066bf5f38ea8abc3323e3a90b71deca4?apiKey=cdb8dc9c93f54e298256cff8de470047&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/414673d927415944c60e994cb0994705066bf5f38ea8abc3323e3a90b71deca4?apiKey=cdb8dc9c93f54e298256cff8de470047&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/414673d927415944c60e994cb0994705066bf5f38ea8abc3323e3a90b71deca4?apiKey=cdb8dc9c93f54e298256cff8de470047&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/414673d927415944c60e994cb0994705066bf5f38ea8abc3323e3a90b71deca4?apiKey=cdb8dc9c93f54e298256cff8de470047&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/414673d927415944c60e994cb0994705066bf5f38ea8abc3323e3a90b71deca4?apiKey=cdb8dc9c93f54e298256cff8de470047&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/414673d927415944c60e994cb0994705066bf5f38ea8abc3323e3a90b71deca4?apiKey=cdb8dc9c93f54e298256cff8de470047&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/414673d927415944c60e994cb0994705066bf5f38ea8abc3323e3a90b71deca4?apiKey=cdb8dc9c93f54e298256cff8de470047&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/414673d927415944c60e994cb0994705066bf5f38ea8abc3323e3a90b71deca4?apiKey=cdb8dc9c93f54e298256cff8de470047&"
                className="img"
            />
            <style jsx>{`
        .img {
          aspect-ratio: 3.45;
          object-fit: auto;
          object-position: center;
          width: 100%;
          fill: linear-gradient(
              90deg,
              rgba(242, 90, 90, 0) 0%,
              rgba(242, 90, 90, 0.2) 100%
            ),
            linear-gradient(
              90deg,
              rgba(0, 174, 133, 0.2) 28.38%,
              rgba(77, 0, 240, 0.2) 40.11%,
              rgba(0, 0, 0, 0.2) 50%
            ),
            url(<path-to-image>),
            lightgray 722.419px -402.088px / 49.046% 292.709% no-repeat;
          background-blend-mode: normal, normal, soft-light;
          mix-blend-mode: darken;
        }
      `}</style>
        </>
    );
}


