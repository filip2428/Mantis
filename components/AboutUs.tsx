import { Highlight } from "./ui/hero-highlight";
import Author from "./AboutPaul";

export default function AboutUs() {
  return (
    <section id="despre" className="scroll-mt-40">
      <div className="container mx-auto rounded-3xl bg-white/80 p-8 pt-24 shadow-mantis-card backdrop-blur-sm">
        <h1 className="mb-4 text-center text-3xl font-bold text-mantis-bark">
          Fă cunoștință cu
          <Highlight>Asociația Mantis</Highlight>
        </h1>
        <Author
          name="Paul Hac"
          role="Fondator & creatorul proiectului"
          imageSrc="/paul-hac.jpeg"
          bio="Sunt pasionat de educația în natură și dezvoltarea de programe care conectează școala cu mediul real. La Mantis creez resurse și experiențe practice pentru profesori și elevi."
          className="mt-12 px-4"
          //   imageWidth={140} // mai mic
          //   imageRounded="xl" // sau "full" pentru avatar rotund
        />

        {/* <p className="mb-10 text-center text-sm text-zinc-500">
          For demo purpose we have kept the position as{" "}
          <span className="font-medium">Sticky</span>. Keep in mind that this
          component is <span className="font-medium">fixed</span> and will not
          move when scrolling.
        </p> */}
      </div>
      <div className="my-20 max-w-3xl px-4 text-center text-lg text-mantis-bark/80 md:mx-auto">
        <p className="leading-relaxed">
          Asociația Mantis este o organizație non-guvernamentală dedicată
          promovării educației în aer liber și a dezvoltării personale prin
          experiențe practice în natură. Fondată în 2015, Mantis a crescut
          constant, ajungând să ofere programe educaționale pentru mii de elevi
          și profesori din întreaga țară.
        </p>
        <p className="mt-4 leading-relaxed">
          Misiunea noastră este să cultivăm curiozitatea și caracterul tinerilor
          prin activități care îi conectează cu mediul înconjurător și îi învață
          să aprecieze frumusețea și complexitatea naturii. Credem că educația
          nu se limitează la sălile de clasă și că experiențele reale în natură
          pot transforma modul în care elevii înțeleg lumea și pe ei înșiși.
        </p>
        <p className="mt-4 leading-relaxed">
          Echipa Mantis este formată din profesioniști pasionați, inclusiv
          educatori, biologi, ghizi montani și voluntari dedicați. Colaborăm
          strâns cu școli, organizații și comunități locale pentru a dezvolta
          programe adaptate nevoilor și intereselor participanților.
        </p>
        <p className="mt-4 leading-relaxed">
          Pe lângă programele educaționale, Mantis organizează și evenimente
          comunitare, campanii de conștientizare și proiecte de conservare a
          mediului. Suntem mândri de impactul pe care l-am avut până acum și
          suntem entuziasmați să continuăm să creștem și să inspirăm noi
          generații de exploratori și protectori ai naturii.
        </p>
      </div>
    </section>
  );
}
