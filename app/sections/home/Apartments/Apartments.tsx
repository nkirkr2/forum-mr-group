import { ApartmentsData } from './type';
import useIsMobile from '@/app/hooks/useIsMobile';
import ClientApartments from './ClientApartments';



type ApartmentsProps = {
  apartmentsData: ApartmentsData;
}

function Apartments({ apartmentsData }: ApartmentsProps) {

  const slides = apartmentsData.slides;
  const texts = slides.map(el => el.text);
    
  return (
    <>
    <h2 className="visually-hidden">{apartmentsData.title}</h2>
    <div className="visually-hidden">
        {texts?.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>
      <section>
        <div className="container">
          <ClientApartments apartmentsData={apartmentsData} />
          </div>
      </section>
    </>
  );
}

export default Apartments;
