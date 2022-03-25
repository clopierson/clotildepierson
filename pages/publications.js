import Layout from "../components/layout";
import Image from "next/image";
import backgroundImage from "../public/background-image-publications-2.jpg";

export default function Publications() {
  return (
    <Layout
      pageTitle="Publications | Integrated Research on Daylighting Lab"
      pageDescription="Publications"
    >
      <div class="overflow-hidden absolute top-18 left-0 w-screen h-[70vh] -z-1 ">
        <Image
          src={backgroundImage}
          alt="Urban Daylight"
          placeholder="blur"
          layout="fill"
          objectFit="cover"
          quality={100}
        ></Image>
      </div>
      <div class="h-[70vh]"></div>
      <div class="my-8 prose dark:prose-invert mx-auto">
        <h1>Publications</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit
          amet consectetur adipiscing elit. Integer vitae justo eget magna
          fermentum iaculis eu non. Nisl condimentum id venenatis a condimentum
          vitae sapien pellentesque. Dolor sit amet consectetur adipiscing elit
          pellentesque habitant morbi tristique. Justo eget magna fermentum
          iaculis eu non diam phasellus. Adipiscing tristique risus nec feugiat
          in fermentum posuere urna. Amet nisl suscipit adipiscing bibendum est
          ultricies integer quis. Felis imperdiet proin fermentum leo vel orci
          porta non pulvinar. Vulputate eu scelerisque felis imperdiet. Pharetra
          magna ac placerat vestibulum. Leo integer malesuada nunc vel risus. Eu
          lobortis elementum nibh tellus molestie nunc. Vitae purus faucibus
          ornare suspendisse sed nisi lacus sed viverra. At quis risus sed
          vulputate odio. Sed tempus urna et pharetra pharetra massa. Accumsan
          lacus vel facilisis volutpat est. Non curabitur gravida arcu ac tortor
          dignissim convallis aenean et. Bibendum enim facilisis gravida neque
          convallis. Egestas diam in arcu cursus euismod quis viverra. Dui nunc
          mattis enim ut tellus elementum. Cursus turpis massa tincidunt dui.
          Aliquam purus sit amet luctus. Elementum sagittis vitae et leo duis
          ut. Mattis ullamcorper velit sed ullamcorper. Vel fringilla est
          ullamcorper eget nulla facilisi etiam. Risus nec feugiat in fermentum
          posuere urna. Elit pellentesque habitant morbi tristique senectus et
          netus et malesuada. Ullamcorper morbi tincidunt ornare massa eget
          egestas. Quisque id diam vel quam elementum pulvinar etiam non. Vitae
          aliquet nec ullamcorper sit amet risus nullam eget. Egestas quis ipsum
          suspendisse ultrices gravida dictum fusce. Auctor urna nunc id cursus
          metus aliquam eleifend mi in. Diam sit amet nisl suscipit adipiscing
          bibendum. Aliquam sem fringilla ut morbi tincidunt augue interdum.
          Dignissim sodales ut eu sem. Velit euismod in pellentesque massa
          placerat. Imperdiet massa tincidunt nunc pulvinar. Non sodales neque
          sodales ut etiam sit. Lacus laoreet non curabitur gravida arcu. Nunc
          non blandit massa enim nec. A pellentesque sit amet porttitor eget
          dolor morbi. Ac odio tempor orci dapibus ultrices in iaculis nunc.
          Morbi enim nunc faucibus a pellentesque sit. Sapien et ligula
          ullamcorper malesuada proin libero nunc consequat. Vulputate ut
          pharetra sit amet. Dolor sit amet consectetur adipiscing elit
          pellentesque habitant morbi tristique. Adipiscing diam donec
          adipiscing tristique risus. Sed adipiscing diam donec adipiscing
          tristique risus nec feugiat in. Montes nascetur ridiculus mus mauris
          vitae ultricies leo integer. Nulla pellentesque dignissim enim sit
          amet venenatis urna cursus. Cras semper auctor neque vitae tempus quam
          pellentesque nec nam. Sed vulputate mi sit amet mauris commodo quis
          imperdiet. Dignissim diam quis enim lobortis scelerisque fermentum dui
          faucibus. Egestas maecenas pharetra convallis posuere. Integer enim
          neque volutpat ac tincidunt vitae semper quis lectus. Libero id
          faucibus nisl tincidunt eget nullam non nisi est. Dictumst vestibulum
          rhoncus est pellentesque elit. Malesuada proin libero nunc consequat
          interdum varius. Amet est placerat in egestas erat imperdiet sed.
          Ullamcorper sit amet risus nullam eget felis eget. Ipsum faucibus
          vitae aliquet nec ullamcorper sit amet. Posuere morbi leo urna
          molestie at elementum eu facilisis sed. Mattis vulputate enim nulla
          aliquet porttitor lacus luctus accumsan. Tortor vitae purus faucibus
          ornare suspendisse sed nisi. Id diam vel quam elementum pulvinar. Eget
          aliquet nibh praesent tristique magna sit amet purus gravida. Leo urna
          molestie at elementum eu facilisis sed. Ullamcorper dignissim cras
          tincidunt lobortis feugiat vivamus at augue. At risus viverra
          adipiscing at in tellus integer feugiat scelerisque. Donec adipiscing
          tristique risus nec feugiat in fermentum posuere urna. Nibh ipsum
          consequat nisl vel. Id velit ut tortor pretium. Massa tincidunt nunc
          pulvinar sapien et ligula ullamcorper malesuada. Ac feugiat sed lectus
          vestibulum mattis ullamcorper velit sed ullamcorper.
        </p>
      </div>
    </Layout>
  );
}
