import Image from "next/image";
import backgroundImage from "../../public/background-image-publications.jpg";

export const metadata = {
  title: "Publications | RadiantLab",
  description:
    "Peer-reviewed journal/conference papers, conferences/workshops contributions, and datasets by the Daylighting Research Laboratory (RadiantLab) at Oregon State University.",
  openGraph: {
    url: "https://www.clotildepierson.com/publications",
    title: "Publications | RadiantLab",
    description:
      "Peer-reviewed journal/conference papers, conferences/workshops contributions, and datasets by the Daylighting Research Laboratory (RadiantLab) at Oregon State University.",
  },
  twitter: {
    title: "Publications | RadiantLab",
    description:
      "Peer-reviewed journal/conference papers, conferences/workshops contributions, and datasets by the Daylighting Research Laboratory (RadiantLab) at Oregon State University.",
  },
};

export default function Publications() {
  return (
    <>
      <picture className="overflow-hidden absolute left-0 right-0 w-screen h-[70vh]">
        <Image
          src={backgroundImage}
          alt="daylight in a bright library"
          fill={true}
          priority={true}
          placeholder="blur"
          className="object-cover object-[20%_50%]"
        ></Image>
      </picture>
      <div className="h-[70vh]"></div>
      <div className="my-8 prose prose-neutral dark:prose-invert mx-auto">
        <h1>Publications</h1>
        <h2>2023</h2>
        <p>
          Quek G., Jain S., Karmann C.,{" "}
          <span className="font-bold">Pierson C.</span>, Wienold J., Andersen M.
          (2023). Comparison of questionnaire items for discomfort glare studies
          in daylit spaces. Lighting Research & Technology, 1-29.{" "}
          <a
            href="https://doi.org/10.1177/14771535231203564"
            target="_blank"
            rel="noreferrer noopener"
          >
            DOI:10.1177/14771535231203564
          </a>
          <br></br>
          <a
            href="https://infoscience.epfl.ch/record/306185"
            target="_blank"
            rel="noreferrer noopener"
          >
            Paper available on Infoscience
          </a>
        </p>

        <p>
          Orman A., Safranek S., <span className="font-bold">Pierson C.</span>{" "}
          (2023). Implementation of a reconstructed spectral sky definition in a
          light simulation tool and comparison to measurements. CIE Quadrennial
          Session, Ljubljana, Slovenia, Sep. 18-20, 2023.
        </p>

        <p>
          Karmann C., <span className="font-bold">Pierson C.</span>, Danell M.,
          Wienold J., Barthelemes V., Khovaly D., Andersen M. (2023). Variation
          in photopic and melanopic lighting in Swiss offices: a field study.
          CIE Quadrennial Session, Ljubljana, Slovenia, Sep. 18-20, 2023.
        </p>

        <p>
          Balakrishnan P., Diakite-Kortlever A., Dumortier D., Hernández-Andrés
          J., Kenny P., Maskarenj M.,{" "}
          <span className="font-bold">Pierson C.</span>, Thorseth A., Xue P.,
          Knoop M. (2023). SkySpectra: an opensource data package of worldwide
          spectral daylight. CIE Quadrennial Session, Ljubljana, Slovenia, Sep.
          18-20, 2023.
        </p>
        <h2>2022</h2>
        <p>
          <span className="font-bold">Pierson C.</span>, Aarts M., Andersen M.
          (2022). Validation of spectral simulation tools in the context of
          ipRGC-influenced light responses of building occupants. Journal of
          Building Performance Simulation, 16(2), 179-197.{" "}
          <a
            href="https://doi.org/10.1080/19401493.2022.2125582"
            target="_blank"
            rel="noreferrer noopener"
          >
            DOI:10.1080/19401493.2022.2125582
          </a>
        </p>
        <p>
          Ko W. H., Schiavon S., et al. (2022) Window View Quality: Why It
          Matters and What We Should Do, LEUKOS, 18:3, 259-267.{" "}
          <a
            href="https://doi.org/10.1080/15502724.2022.2055428"
            target="_blank"
            rel="noreferrer noopener"
          >
            DOI:10.1080/15502724.2022.2055428
          </a>
        </p>
        <p>
          Gkaintatzi-Masouti M., <span className="font-bold">Pierson C.</span>,
          Van Duijnhoven J., Andersen M., Aarts M. (2022). A simulation tool for
          building and lighting design considering ipRGC-influenced light
          responses. BuildSim Nordic, Copenhagen, Denmark, Aug. 22-23, 2022.
        </p>
        <p>
          <span className="font-bold">Pierson, C.</span> (2022). Validation of
          Spectral Light Simulation Tools: Dataset of Simulated and Measured
          Indoor Light Exposure [Data set]. Zenodo.{" "}
          <a
            href="https://doi.org/10.5281/zenodo.5919054"
            target="_blank"
            rel="noreferrer noopener"
          >
            DOI:10.5281/zenodo.5919054
          </a>
        </p>
        <h2>2021</h2>
        <p>
          <span className="font-bold">Pierson C.</span>, Gkaintatzi-Masouti M.,
          Aarts M., Andersen M. (2021). Validation of Spectral Simulation Tools
          for the Prediction of Indoor Electric Light Exposure. CIE Midterm
          Session, Online, Sep. 27-29, 2021.{" "}
          <a
            href="http://dx.doi.org/10.25039/x48.2021.OP05"
            target="_blank"
            rel="noreferrer noopener"
          >
            DOI:10.25039/x48.2021.OP05
          </a>
          <br></br>
          <a
            href="https://infoscience.epfl.ch/record/291397"
            target="_blank"
            rel="noreferrer noopener"
          >
            Paper available on Infoscience
          </a>
        </p>
        <p>
          <span className="font-bold">Pierson C.</span>, Soto Magán V., Aarts
          M., Andersen M. (2021). A Conceptual Simulation Workflow to Guide
          Design Decisions Regarding the Effects of Daylight on Occupants&#39;
          Alertness. Journal of Physics: Conference Series 2042, CISBAT 2021
          Special issue.{" "}
          <a
            href="https://doi.org/10.1088/1742-6596/2042/1/012116"
            target="_blank"
            rel="noreferrer noopener"
          >
            DOI:10.1088/1742-6596/2042/1/012116
          </a>
        </p>
        <p>
          <span className="font-bold">Pierson C.</span>, Aarts M., Andersen M.
          (2021). Validation of Spectral Simulation Tools for the Prediction of
          Indoor Daylight Exposure. Building Simulation 2021, Bruges, Belgium,
          September 1-3, 2021. <br></br>
          <a
            href="https://infoscience.epfl.ch/record/291396"
            target="_blank"
            rel="noreferrer noopener"
          >
            Paper available on Infoscience
          </a>
        </p>
        <p>
          <span className="font-bold">Pierson C.</span>, Piderit B., Iwata T.,
          Bodart M., Wienold J. (2021). Is There a Difference in how People from
          Different Socio-Environmental Contexts Perceive Discomfort Due to
          Glare from Daylight? Lighting Research & Technology.{" "}
          <a
            href="https://doi.org/10.1177%2F1477153520983530"
            target="_blank"
            rel="noreferrer noopener"
          >
            DOI:10.1177/1477153520983530
          </a>
        </p>

        <h2>2020</h2>
        <p>
          Andersen M., Soto Magan V., Webler F.,{" "}
          <span className="font-bold">Pierson C.</span> (2020). Light Hygiene in
          the Built Environment. ANFA International Conference, Online,
          September 14-25, 2020.<br></br>
          <a
            href="https://infoscience.epfl.ch/record/282954"
            target="_blank"
            rel="noreferrer noopener"
          >
            Extended Abstract available on Infoscience
          </a>
        </p>
        <p>
          <span className="font-bold">Pierson C.</span>, Cauwerts C., Bodart M.,
          Wienold J. (2020). Tutorial: Luminance Maps for Daylighting Studies
          from High Dynamic Range Photography. LEUKOS, 14(3), 111-148.{" "}
          <a
            href="https://doi.org/10.1080/15502724.2019.1684319"
            target="_blank"
            rel="noreferrer noopener"
          >
            DOI:10.1080/15502724.2019.1684319
          </a>
        </p>

        <h2>2019</h2>
        <p>
          <span className="font-bold">Pierson C.</span> (2019). Discomfort glare
          perception from daylight : influence of the socio-environmental
          context. [Doctoral dissertation, Université catholique de Louvain].
          <br></br>
          <a
            href="http://hdl.handle.net/2078.1/222924"
            target="_blank"
            rel="noreferrer noopener"
          >
            Thesis available on DIAL
          </a>
        </p>
        <p>
          <span className="font-bold">Pierson C.</span>, Wienold J., Bodart M.
          (2019). Is Daylight Glare Perceived Differently by People from
          Different Cultures? VELUX Daylight Symposium, Paris, France, October
          09-10, 2019.<br></br>
          <a
            href="https://www.youtube.com/watch?v=T6bmLisPsTo"
            target="_blank"
            rel="noreferrer noopener"
          >
            Presentation recorded and available on YouTube
          </a>
        </p>
        <p>
          Wienold J., Iwata T., Sarey Khanie M., Erell E., Kraftan E., Rodriguez
          R., Yamin Garreton J.A., Tzempelikos T., Konstantzos I.,
          Christoffersen J., Kuhn T.E.,{" "}
          <span className="font-bold">Pierson C.</span>, Andersen M. (2019).
          Cross-Validation and Robustness of Daylight Glare Metrics. Lighting
          Research & Technology, 51(7), 983-1013.{" "}
          <a
            href="https://doi.org/10.1177%2F1477153519826003"
            target="_blank"
            rel="noreferrer noopener"
          >
            DOI:10.1177/1477153519826003
          </a>
        </p>
        <p>
          <span className="font-bold">Pierson C.</span>, Sarey Khanie M., Bodart
          M., Wienold J. (2019). Discomfort Glare Cut-Off Values from Field and
          Laboratory Studies. CIE Quadrennial Session, Washington D.C., USA,
          June 17-20, 2019.<br></br>
          <a
            href="https://infoscience.epfl.ch/record/274582"
            target="_blank"
            rel="noreferrer noopener"
          >
            Paper available on Infoscience
          </a>
        </p>

        <h2>2018</h2>
        <p>
          <span className="font-bold">Pierson C.</span>, Wienold J., Bodart M.
          (2018). Daylight Discomfort Glare Evaluation with Evalglare: Influence
          of Parameters and Methods on the Accuracy of Discomfort Glare
          Prediction. Buildings, 8(8), 94.{" "}
          <a
            href="https://doi.org/10.3390/buildings8080094"
            target="_blank"
            rel="noreferrer noopener"
          >
            DOI:10.3390/buildings8080094
          </a>
        </p>
        <p>
          <span className="font-bold">Pierson C.</span>, Wienold J., Bodart M.
          (2018). Daylight Discomfort Glare Evaluation with Evalglare: Influence
          of Parameters and Methods on the Accuracy of Discomfort Glare
          Prediction. International Radiance Workshop, Loughborough, UK, Sept.
          03-04, 2018.<br></br>
          <a
            href="https://www.radiance-online.org/community/workshops/2018-loughborough/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Workshops available on Radiance-Online
          </a>
          <br></br>
          <a
            href="https://www.radiance-online.org/community/workshops/2018-loughborough/presentations/25-EvalglareParameters.pdf"
            target="_blank"
            rel="noreferrer noopener"
          >
            Direct download of the presentation (pdf)
          </a>
          <br></br>
          <a
            href="https://www.radiance-online.org/community/workshops/2018-loughborough/audio/25-Clotilde_Pierson.mp3"
            target="_blank"
            rel="noreferrer noopener"
          >
            Direct download of the recorded audio (mp3)
          </a>
        </p>
        <p>
          <span className="font-bold">Pierson C.</span>, Wienold J., Bodart M.
          (2018). Review of Factors Influencing Discomfort Glare Perception from
          Daylight. LEUKOS, 14(3), 111-148.{" "}
          <a
            href="https://doi.org/10.1080/15502724.2018.1428617"
            target="_blank"
            rel="noreferrer noopener"
          >
            DOI:10.1080/15502724.2018.1428617
          </a>
          <br></br>
          <a
            href="http://hdl.handle.net/2078.1/196098"
            target="_blank"
            rel="noreferrer noopener"
          >
            Accepted manuscript available on DIAL
          </a>
        </p>
        <p>
          <span className="font-bold">Pierson C.</span>, Wienold J. (2018). High
          Dynamic Range Images Calibration for Luminance Maps Creation. CIE
          Expert Tutorial and Workshop on Research Methods for Human Factors in
          Lighting, Copen., Denmark, Aug. 13-14, 2018.
        </p>
        <p>
          <span className="font-bold">Pierson C.</span>, Wienold J., Altomonte
          S., Bodart M. (2018). Evaluation of Discomfort Glare through Glare
          Scales: What are we Really Measuring? CIE Expert Tutorial and Workshop
          on Research Methods for Human Factors in Lighting, Copenhagen,
          Denmark, Aug. 13-14, 2018.
        </p>

        <h2>2017</h2>
        <p>
          <span className="font-bold">Pierson C.</span>, Piderit M.B., Wienold
          J., Bodart M. (2017). Discomfort Glare from Daylighting: Influence of
          Culture on Discomfort Glare Perception. CIE Midterm Session, Jeju,
          South Korea, Oct. 20-28, 2017.<br></br>
          <a
            href="https://infoscience.epfl.ch/record/274581"
            target="_blank"
            rel="noreferrer noopener"
          >
            Paper available on Infoscience
          </a>
        </p>
        <p>
          <span className="font-bold">Pierson C.</span>, Wienold J., Bodart M.
          (2017). Discomfort Glare Perception in Daylighting: Influencing
          Factors. Energy Procedia, 122, 331-336.{" "}
          <a
            href="http://dx.doi.org/10.1016/j.egypro.2017.07.332"
            target="_blank"
            rel="noreferrer noopener"
          >
            DOI:10.1016/j.egypro.2017.07.332
          </a>
          .
        </p>
        <p>
          <span className="font-bold">Pierson C.</span>, Wienold J., Jacobs A.,
          Bodart M. (2017). Luminance Maps from High Dynamic Range Imaging:
          Calibrations and Adjustments for Visual Comfort Assessment. LuxEuropa,
          Ljubljana, Slovenia, Sept. 18-20, 2017.<br></br>
          <a
            href="https://infoscience.epfl.ch/record/274400"
            target="_blank"
            rel="noreferrer noopener"
          >
            Paper available on Infoscience
          </a>
        </p>
        <p>
          <span className="font-bold">Pierson C.</span>, Cauwerts C., Wienold
          J., Bodart M. (2017). Discomfort Glare from Daylighting: Study of
          Factors Influencing Discomfort Glare Perception and Validation of a
          Universal Discomfort Glare Index. VELUX Daylight Symposium, Berlin,
          Germany, May 02-04, 2017.
          <br></br>
          <a
            href="http://hdl.handle.net/2078.1/184657"
            target="_blank"
            rel="noreferrer noopener"
          >
            Poster available on DIAL
          </a>
        </p>

        <h2>2015</h2>
        <p>
          <span className="font-bold">Pierson C.</span>, Evrard A. (2015).
          Optimization of Facade Wall Building Systems in Walloon Region.
          International PLEA Conference, Bologna, Italy, Sept. 9-11, 2015.
          <br></br>
          <a
            href="http://hdl.handle.net/2078.1/168040"
            target="_blank"
            rel="noreferrer noopener"
          >
            Paper available on DIAL
          </a>
        </p>
      </div>
    </>
  );
}
