import { useTribute } from "../Context/TributeContext";

function Obituary() {
  const { bioRef } = useTribute();

  return (
    <section
      className=" hyphens-auto desktop:ml-36 desktop:mr-36 mobile:ml-20 mobile:mr-20 phone:mx-4 small:mx-3 mt-32 phone:mt-56 text-justify phone:text-justify "
      ref={bioRef}
    >
      <h1 className=" mb-4 font-bold text-2xl mt-8  text-center">BACKGROUND</h1>
      <p
        className="first-line:tracking-wide
  first-letter:text-4xl first-letter:font-bold first-letter:text-slate-900
   first-letter:pt-4 text-[1.2rem] leading-10"
      >
        <em>
          Christiana Titilayo, Aduke, Adunni, Laarin Sunmola (nee Adenuga)
        </em>
        , was born on 19th February 1980 to the family of late Mr Rufus Adeoye
        Adenuga JP and Mrs Cecilia Aderonke Adenuga in the city of Lagos
        Nigeria. The only daughter and third of four children, Titilayo grew up
        with her three brothers, James Adeyemi, Peter Adesola and Godwin
        Olusegun, who all doted on their only sister. She was a determined,
        strong-willed, passionate and focused lady with a deep sense of family
        ethos and love for God as she went through her educational, career
        development path and Church functional service commitments.
      </p>
      <h1 className=" mb-4 mt-16 font-bold text-2xl text-center">FAMILY</h1>
      <p className=" text-[1.2rem] leading-10">
        In August 2005, Titilayo got married to the boy next door, her
        sweetheart, Adesesan Sunmola and the union was blessed with three
        amazing children, Oluwademilade Enoch, Oluwabusolami Christabel and
        Onaopemipo Philip. Titilayo fiercely loved her Sessy and their children
        and would go to any length to do anything for them.
      </p>
      <h1 className=" mb-4 mt-16 font-bold text-2xl text-center">
        EDUCATION & OCCUPATION
      </h1>
      <p>
        <span className="text-[1.2rem] leading-10">
          Titilayo had her primary education at NAFRC Primary School Oshodi
          Lagos from 1985 to 1989. She completed her secondary education at
          Command Day Secondary School Ikeja from 1990 to 1995. Following that,
          she attended the Federal Polytechnic Ede (FPE) where she obtained her
          ND (1996 to 1998). She completed her industrial attachment in 1999 and
          her HND Accountancy in 2002 at Federal Polytechnic Ede (FPE). She
          served her country by completing her NYSC in Yola, Adamawa State in
          2003.
        </span>
      </p>
      <p className="mt-8">
        <span className=" text-[1.2rem] leading-10">
          Titilayo admirably qualified as a Chartered Accountant (ICAN-ACA) in
          2005, obtained a PgD in Education in 2013, and obtained her
          Master&apos;s degree in Banking & Finance at Ahmadu Bello University
          in 2014. She became a Chartered Banker (ACIB) in 2016.
        </span>
      </p>
      <p className="mt-8">
        <span className="text-[1.2rem] leading-10">
          Titilayo started her professional career at WAMCO (West Africa Milk
          Company) in 2001 as a Stock Control Officer before proceeding on to
          National Youth Service. She worked with the same company till she got
          married in August 2005 when she disengaged, to join her husband in
          Kaduna. Being a firm believer in ”all or nothing”, Titilayo did not
          want a long-distance marriage or home and she sacrificed her budding
          career to ensure the integrity of their hopes for a family. She
          lovingly served her new family as a housewife for about 18 months
          before she joined First Bank of Nigeria Plc in 2007 as a fresher at an
          entry-level position and rose to Head of Branch Services at the FBN
          Kaduna PPMC branch, where she served diligently until she went to be
          with the Lord.
        </span>
      </p>
      <h1 className=" mb-4 mt-16 font-bold text-center text-2xl">
        SERVICE TO HUMANITY
      </h1>
      <p>
        <span className=" text-[1.2rem]  leading-10">
          Titilayo was true to her name as forever joyful. She was a carrier and
          distributor of joy; she did this in so many ways as can be attested to
          by the many people she came in contact with throughout her life, from
          her family to her friends, colleagues and fellow workers in God&apos;s
          vineyard. Titilayo was known and proven to be a reliable and
          dependable “Sister” in good and bad times. She was a shoulder to the
          widows and widowers, a mother to the orphans, as well as a good and
          unfailing help to all around her. Christiana Titilayo was a passionate
          children&apos;s unit teacher; her love for children was unparalleled.
          A listening ear and counsellor to many children; to the teenagers, she
          was available to guide and leadthem in the way ofthe Lord; whilstto
          the adults, she was a shoulder for comfort. Titilayo was a marriage
          counsellor and role model to many families.
        </span>
      </p>
      <h1 className=" mb-4 mt-16 font-bold text-2xl text-center">
        SERVICE TO GOD
      </h1>
      <p>
        <span className=" text-[1.2rem]  leading-10 ">
          Titilayo was dogged in her faith in God and was, therefore, exemplary
          in her service to Him. She characterized such great Christian virtues,
          having a very large Heart for people. Being a devoted Christian woman,
          the house of God was her second home. Her faithfulness in the house of
          God is a great example for many to follow. She was always available
          for the Martha and Mary ministry. Very prayerful and diligent in
          participating in church events and programs; she was a leading light
          at When Women Pray Ministry, Kaduna and have attended many Christian
          programmes locally and nationally. Titilayo was a prayer warrior and
          true mother in Israel. She is survived by her Husband, 3 Children,
          Mother and family members.
        </span>
      </p>
    </section>
  );
}

export default Obituary;
