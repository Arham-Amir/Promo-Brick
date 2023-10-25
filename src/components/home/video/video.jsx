import React from 'react';

const Video = () => {
  return (
    <section className='w-screen h-screen bg-bg'>
      <section className='mx-auto xs:w-11/12 h-full p-10'>
        <iframe className={`w-full h-full rounded-3xl`} src={"https://www.youtube.com/embed/VKFADBNbcAU"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </section>
    </section>
  );
}

export default Video;
