import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="content-area">
        <div id="first-section" className="container p-30">
          <Image alt="" src="/offer/logo.png" width={0}
            height={0}
            sizes="100vw"
            unoptimized
            style={{ width: 'auto', height: '41px' }} />
          <h1>Hej<br></br>Jakob</h1>
          <h2>Tak fordi vi måtte<br></br> sende Jer et <u>tilbud.</u></h2>
          <Image alt="" className="soren" src="/offer/soren-solee2.png"
            width={0}
            height={0}
            sizes="100vw"
            unoptimized
            style={{ width: 'auto', height: '100%' }} />
          <Image alt="" className="graph-element-1" src="/offer/graph-element-1.svg"
            width={0}
            height={0}
            sizes="100vw"
            unoptimized
            style={{ width: 'auto', height: '138px' }} />
        </div>
      </div>
    </main>
  );
}
