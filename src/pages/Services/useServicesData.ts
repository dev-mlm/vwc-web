import chiroCare from '../../assets/services/Chiro-Care.png';
import physiotherapy from '../../assets/services/Physiotherapy.png';
import prenatalCare from '../../assets/services/Prenatal-Care.png';
import chiroCycle from '../../assets/services/Chiro-Cycle.png';
import decompression from '../../assets/services/Decompression.png';
import pediatricCare from '../../assets/services/Pediatric-Care.png';
import JazminOne from '../../assets/services/Jazmin-1.png';
import JazminTwo from '../../assets/services/Jazmin-2.png';
import JazminThree from '../../assets/services/Jazmin-3.png';
import JazminFour from '../../assets/services/Jazmin-4.png';
import ZamirOne from '../../assets/services/Zamir-1.png';
import ZamirTwo from '../../assets/services/Zamir-2.png';
import Activator from '../../assets/services/Activator.png';
import { useTranslation } from 'react-i18next';
import { type ServiceDialogData } from '../../components/molecules/ServiceDialog';

// -----------------------------------------------------------------------------
//  Types
// -----------------------------------------------------------------------------

export interface ServiceItem {
  id: string;
  title: string;
  image: string;
  imageTitle: string;
  shortDesc: string;
  dialogData: ServiceDialogData
}

// -----------------------------------------------------------------------------
//  useServicesData Hook
// -----------------------------------------------------------------------------

export const useServicesData = () => {
  const { t } = useTranslation();

  const services: ServiceItem[] = [
    {
      id: '1',
      title: t('services.section_services.chiro.title'),
      image: chiroCare,
      imageTitle: "Chiropractic Care Image",
      shortDesc: t('services.section_services.chiro.shortDesc'),
      dialogData: {
        title: t('services.section_services.chiro.title'),
        desc: [
          t('services.section_services.chiro.desc1'),
          t('services.section_services.chiro.desc2'),
          t('services.section_services.chiro.desc3'),
        ],
        image: JazminFour,
        techs: [
          {
            title: t('services.section_techniques.diversified.title'),
            desc: t('services.section_techniques.diversified.desc'),
          },
          {
            title: t('services.section_techniques.dropTable.title'),
            desc: t('services.section_techniques.dropTable.desc'),
          },
          {
            title: t('services.section_techniques.gonstead.title'),
            desc: t('services.section_techniques.gonstead.desc'),
          },
          {
            title: t('services.section_techniques.activator.title'),
            desc: t('services.section_techniques.activator.desc'),
          },
        ],
      },
    },
    {
      id: '2',
      title: t('services.section_services.physio.title'),
      image: physiotherapy,
      imageTitle: "Physiotherapy (PT) Image",
      shortDesc: t('services.section_services.physio.shortDesc'),
      dialogData: {
        title: t('services.section_services.physio.title'),
        desc: [
          t('services.section_services.physio.desc1'),
          t('services.section_services.physio.desc2'),
          t('services.section_services.physio.desc3'),
        ],
        image: ZamirTwo,
      },
    },
    {
      id: '3',
      title: t('services.section_services.prenatal.title'),
      image: prenatalCare,
      imageTitle: "Prenatal Care Image",
      shortDesc: t('services.section_services.prenatal.shortDesc'),
      dialogData: {
        title: t('services.section_services.prenatal.title'),
        desc: [
          t('services.section_services.prenatal.desc1'),
          t('services.section_services.prenatal.desc2'),
          t('services.section_services.prenatal.desc3'),
          t('services.section_services.prenatal.desc4'),
        ],
        image: JazminThree,
        techs: [
          {
            title: t('services.section_techniques.dropTable.title'),
            desc: t('services.section_techniques.dropTable.desc'),
          },
          {
            title: t('services.section_techniques.webster.title'),
            desc: t('services.section_techniques.webster.desc'),
          },
          {
            title: t('services.section_techniques.activator.title'),
            desc: t('services.section_techniques.activator.desc'),
          },
        ],
      },
    },
    {
      id: '4',
      title: t('services.section_services.chiroCycle.title'),
      image: chiroCycle,
      imageTitle: "Chiro-cycle Program Image",
      shortDesc: t('services.section_services.chiroCycle.shortDesc'),
      dialogData: {
        title: t('services.section_services.chiroCycle.title'),
        desc: [
          t('services.section_services.chiroCycle.desc1'),
          t('services.section_services.chiroCycle.desc2'),
          t('services.section_services.chiroCycle.desc3'),
          t('services.section_services.chiroCycle.desc4'),
        ],
        image: JazminOne,
        techs: [
          {
            title: t('services.section_techniques.diversified.title'),
            desc: t('services.section_techniques.diversified.desc'),
          },
          {
            title: t('services.section_techniques.gonstead.title'),
            desc: t('services.section_techniques.gonstead.desc'),
          },
          {
            title: t('services.section_techniques.activator.title'),
            desc: t('services.section_techniques.activator.desc'),
          },
          {
            title: t('services.section_techniques.dropTable.title'),
            desc: t('services.section_techniques.dropTable.desc'),
          },
        ],
      },
    },
    {
      id: '5',
      title: t('services.section_services.decomp.title'),
      image: decompression,
      imageTitle: "Decompression Image",
      shortDesc: t('services.section_services.decomp.shortDesc'),
      dialogData: {
        title: t('services.section_services.decomp.title'),
        desc: [
          t('services.section_services.decomp.desc1'),
          t('services.section_services.decomp.desc2'),
          t('services.section_services.decomp.desc3'),
          t('services.section_services.decomp.desc4'),
        ],
        image: ZamirOne,
      },
    },
    {
      id: '6',
      title: t('services.section_services.pediatric.title'),
      image: pediatricCare,
      imageTitle: "Pediatric Care Image",
      shortDesc: t('services.section_services.pediatric.shortDesc'),
      dialogData: {
        title: t('services.section_services.pediatric.title'),
        desc: [
          t('services.section_services.pediatric.desc1'),
          t('services.section_services.pediatric.desc2'),
          t('services.section_services.pediatric.desc3'),
          t('services.section_services.pediatric.desc4'),
        ],
        image: Activator,
        techs: [
          {
            title: t('services.section_techniques.activator.title'),
            desc: t('services.section_techniques.activator.desc'),
          },
          {
            title: t('services.section_techniques.pediatric.title'),
            desc: t('services.section_techniques.pediatric.desc'),
          },
          {
            title: t('services.section_techniques.dropTable.title'),
            desc: t('services.section_techniques.dropTable.desc'),
          },
        ],
      },
    },
  ];

  // ---------------------------------------------
  //  Return Object
  // ---------------------------------------------

  return {
    services,
  };
};
