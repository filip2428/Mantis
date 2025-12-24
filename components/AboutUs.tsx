import { Highlight } from "./ui/hero-highlight";
import Author from "./AboutPaul";

export default function AboutUs() {
  return (
    <>
      <div className="container mx-auto rounded-3xl bg-mantis-green p-8 pt-12 shadow-mantis-card backdrop-blur-sm">
        <h1 className="mb-4 text-center text-3xl font-bold text-mantis-cream">
          {`Fă cunoștință cu ${"\t"}`}
          <Highlight className="text-mantis-bark">Asociația Mantis</Highlight>
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
      <div className="my-20 max-w-3xl px-4 text-mantis-bark/80 md:mx-auto">
        <p className="mb-8 text-center text-lg leading-relaxed">
          Asociația Mantis este o organizație non-guvernamentală care se implică
          în conservarea biodiversității, reconstrucția ecologică și promovarea
          educației pentru natură. Este formată din specialiști în domeniul
          științelor naturale și voluntari care își doresc râuri libere și pline
          de viață, un mediu mai sănătos și generații tinere implicate în
          conservare.
        </p>

        <p className="mb-6 text-center text-base font-semibold text-mantis-bark">
          Domeniile noastre prioritare:
        </p>

        <ul className="space-y-6 text-left">
          <li className="flex gap-4">
            <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-mantis-green/20 text-sm font-bold text-mantis-bark">
              1
            </span>
            <div>
              <h3 className="font-semibold text-mantis-bark">
                Râuri care să curgă liber (Dam Removal)
              </h3>
              <p className="mt-2 leading-relaxed">
                Suntem implicați în eliminarea de pe apele curgătoare a
                barierelor scoase din uz, care nu își mai îndeplinesc rolul
                pentru care au fost construite și care blochează deplasarea
                liberă a peștilor și a sedimentelor
              </p>
            </div>
          </li>

          <li className="flex gap-4">
            <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-mantis-green/20 text-sm font-bold text-mantis-bark">
              2
            </span>
            <div>
              <h3 className="font-semibold text-mantis-bark">
                Păstrăv în apele de munte
              </h3>
              <p className="mt-2 leading-relaxed">
                Inițiem proiecte de populare cu păstrăv a apelor de munte
                deoarece noi credem că, în felul acesta, zonele respective devin
                mai bogate – spiritual și economic. Implicăm copiii din
                comunitățile locale în acțiunile de eliberare a puietului și îi
                pregătim astfel să devină viitorii prieteni ai naturii
              </p>
            </div>
          </li>

          <li className="flex gap-4">
            <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-mantis-green/20 text-sm font-bold text-mantis-bark">
              3
            </span>
            <div>
              <h3 className="font-semibold text-mantis-bark">
                Educație pentru natură
              </h3>
              <p className="mt-2 leading-relaxed">
                Organizăm programe educaționale în natură pentru elevi, prin
                care construim experiențe ce motivează, transformă și inspiră.
                Centrul de Educație Mantis din localitatea Șiștarovăț ne ajută
                să ne pliem bine și pe nevoile de programe dedicate Săptămânii
                Verzi și Școlii Altfel
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
