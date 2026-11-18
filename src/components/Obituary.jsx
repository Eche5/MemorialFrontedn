import PropTypes from "prop-types";
import { useTribute } from "../Context/TributeContext";

function Section({ title, children }) {
  return (
    <section className="mt-16 first:mt-0">
      <h2 className="text-center font-serif text-3xl font-medium text-ink">
        {title}
      </h2>
      <div className="ornament mb-8 mt-4">
        <span className="h-1 w-1 rounded-full bg-current" />
      </div>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

function Obituary() {
  const { bioRef } = useTribute();

  return (
    <article
      ref={bioRef}
      className="mx-auto max-w-2xl scroll-mt-20 px-5 py-16 text-[1.0625rem] leading-8 text-ink-soft sm:text-lg sm:leading-9"
    >
      <Section title="Background">
        <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-6xl first-letter:leading-[0.8] first-letter:text-gold">
          <em className="text-ink">
            Christiana Titilayo, Aduke, Adunni, Laarin Sunmola (nee Adenuga)
          </em>
          , was born on 19th February 1980 to the family of late Mr Rufus
          Adeoye Adenuga JP and Mrs Cecilia Aderonke Adenuga in the city of
          Lagos Nigeria. The only daughter and third of four children, Titilayo
          grew up with her three brothers, James Adeyemi, Peter Adesola and
          Godwin Olusegun, who all doted on their only sister. She was a
          determined, strong-willed, passionate and focused lady with a deep
          sense of family ethos and love for God as she went through her
          educational, career development path and Church functional service
          commitments.
        </p>
      </Section>

      <Section title="Family">
        <p>
          In August 2005, Titilayo got married to the boy next door, her
          sweetheart, Adesesan Sunmola and the union was blessed with three
          amazing children, Oluwademilade Enoch, Oluwabusolami Christabel and
          Onaopemipo Philip. Titilayo fiercely loved her Sessy and their
          children and would go to any length to do anything for them.
        </p>
      </Section>

      <Section title="Education & Occupation">
        <p>
          Titilayo had her primary education at NAFRC Primary School Oshodi
          Lagos from 1985 to 1989. She completed her secondary education at
          Command Day Secondary School Ikeja from 1990 to 1995. Following that,
          she attended the Federal Polytechnic Ede (FPE) where she obtained her
          ND (1996 to 1998). She completed her industrial attachment in 1999
          and her HND Accountancy in 2002 at Federal Polytechnic Ede (FPE). She
          served her country by completing her NYSC in Yola, Adamawa State in
          2003.
        </p>
        <p>
          Titilayo admirably qualified as a Chartered Accountant (ICAN-ACA) in
          2005, obtained a PgD in Education in 2013, and obtained her
          Master&apos;s degree in Banking & Finance at Ahmadu Bello University
          in 2014. She became a Chartered Banker (ACIB) in 2016.
        </p>
        <p>
          Titilayo started her professional career at WAMCO (West Africa Milk
          Company) in 2001 as a Stock Control Officer before proceeding on to
          National Youth Service. She worked with the same company till she
          got married in August 2005 when she disengaged, to join her husband
          in Kaduna. Being a firm believer in &ldquo;all or nothing&rdquo;,
          Titilayo did not want a long-distance marriage or home and she
          sacrificed her budding career to ensure the integrity of their hopes
          for a family. She lovingly served her new family as a housewife for
          about 18 months before she joined First Bank of Nigeria Plc in 2007
          as a fresher at an entry-level position and rose to Head of Branch
          Services at the FBN Kaduna PPMC branch, where she served diligently
          until she went to be with the Lord.
        </p>
      </Section>

      <Section title="Service to Humanity">
        <p>
          Titilayo was true to her name as forever joyful. She was a carrier
          and distributor of joy; she did this in so many ways as can be
          attested to by the many people she came in contact with throughout
          her life, from her family to her friends, colleagues and fellow
          workers in God&apos;s vineyard. Titilayo was known and proven to be a
          reliable and dependable &ldquo;Sister&rdquo; in good and bad times.
          She was a shoulder to the widows and widowers, a mother to the
          orphans, as well as a good and unfailing help to all around her.
        </p>
        <p>
          Christiana Titilayo was a passionate children&apos;s unit teacher;
          her love for children was unparalleled. A listening ear and
          counsellor to many children; to the teenagers, she was available to
          guide and lead them in the way of the Lord; whilst to the adults,
          she was a shoulder for comfort. Titilayo was a marriage counsellor
          and role model to many families.
        </p>
      </Section>

      <Section title="Service to God">
        <p>
          Titilayo was dogged in her faith in God and was, therefore,
          exemplary in her service to Him. She characterized such great
          Christian virtues, having a very large Heart for people. Being a
          devoted Christian woman, the house of God was her second home. Her
          faithfulness in the house of God is a great example for many to
          follow. She was always available for the Martha and Mary ministry.
          Very prayerful and diligent in participating in church events and
          programs; she was a leading light at When Women Pray Ministry, Kaduna
          and have attended many Christian programmes locally and nationally.
          Titilayo was a prayer warrior and true mother in Israel.
        </p>
        <p className="rounded-2xl border border-line bg-gold-tint/60 px-6 py-5 text-center font-serif text-xl italic leading-relaxed text-ink">
          She is survived by her Husband, 3 Children, Mother and family
          members.
        </p>
      </Section>
    </article>
  );
}

export default Obituary;
