import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        staff: 'Staff',
        services: 'Services',
        consultation: 'Book a Consultation',
        langToggle: 'Español',
      },
      common: {
        send: 'Send',
        sending: 'Sending...',
        cancel: 'Cancel',
      },
      consultation: {
        title: 'Book a Consultation',
        caption: 'Fill out the form and we will reach out to you as soon as possible.',
        firstName: 'First Name',
        firstNamePh: 'John',
        firstNameReq: 'First name is required',
        lastName: 'Last Name',
        lastNamePh: 'Doe',
        lastNameReq: 'Last name is required',
        email: 'Email',
        emailPh: 'johndoe@email.com',
        emailReq: 'Email is required',
        emailInvalid: 'Please enter a valid email',
        phoneNum: 'Phone Number',
        phoneNumReq: 'Phone number is required',
        phoneNumInvalid: 'Please enter a valid phone number',
        message: 'Reason for Visit',
        messagePh: 'Provide a brief description of what is going on.',
        messageReq: 'Reason for visit is required',
      },
      mapView: {
        infoWindow: {
          desc: 'Local chiropractic clinic focused on your wellness and health.'
        },
      },
      home: {
        title: 'Welcome to Our App',
        description: 'Your one-stop solution for quality services.',
        section_hero: {
          title: "",
          desc: "Helping patients of every age to grow stronger, healthier lives through spinal alignment, movement, and rehabilitative therapies that support the body’s natural ability to heal",
        },
        section_why: {
          title: "Why Chiropractic?",
          desc: "At Vida Wellness Center, we believe a vibrant life starts with a healthy spine, beginning in the womb and continuing until you’re grey and full of wisdom. Our mission is to deliver targeted chiropractic adjustments, movement, and rehabilitative therapies that optimize spinal alignment and unlock the body's natural ability to heal. This vital care is designed for every generation — moms, kiddos, athletes, dads, and grandparents alike. By precisely aligning the spine, we remove interference to create a strong, resilient nervous system, ultimately empowering a stronger body and mind for patients of every age.",
        },
      },
      staff: {
        title: 'Our Team',
        description: 'Meet the dedicated professionals behind our work.',
        section_jazmin: {
          title: "Dr. Jazmin Gonzalez, D.C",
          bio1: "Born and raised in Colorado, my journey into healthcare began at CSU where I graduated with a Bachelor's in science it 2022. Shortly afterwards, I moved to California and graduated from Life West Chiropractic College of Chiropractic in 2025.",
          bio2: "Our practice is dedicated to supporting all families through every season of life. I also specialize in Prenatal, pediatric and women care. I specialize in the full continuum of women’s health: from helping young women navigate painful menstrual cycles, to providing specialized prenatal and postnatal care as a Webster Certified practitioner, to guiding women smoothly through the transitions of menopause. I am also deeply passionate about pediatric care, giving little ones the healthiest possible start.",
          bio3: "Inclusivity is at the heart of my practice. I am fully trilingual, proudly serving our community in English, Spanish, and American Sign Language (ASL). No matter what chapter of life you or your child are in, I am here to empower your family’s wellness journey!",
        },
        section_zamir: {
          title: "Dr. Zamir Carballo, D.C.",
          bio1: "Originally born and raised in Southern California, I attended California State University, Fullerton for my undergraduate degree. I graduated with my Bachelors of Science in Kinesiology with a Minor in Aging Studies at CSUF in 2022.  A few months later, I decided to head to Northern California to attend Life Chiropractic College West and graduated in March 2026.",
          bio2: "Our practice is dedicated to supporting all families through every season of life. My focus is geared towards athletes and our lovely geriatrics. My philosophy is to heal all spines of all ages through specific, gentle adjustments in order to have more functional movement while being as pain-free as possible without the use of medication or surgery. I am here to help and encourage you to live your best life while addressing all spinal and extremity needs!",
        },
      },
      services: {
        title: 'Our Services',
        description: 'Explore what we have to offer.',
        section_services: {
          chiro: {
            title: "Chiropractic Care",
            desc: "Our chiropractic services specializes in addressing the unique needs of each patient. We focus on identifying the root cause of your discomfort and utilize tailored techniques to ensure optimal health and well-being. Experience personalized care that empowers you to live a pain-free life and enhance your overall wellness!",
          },
          physio: {
            title: "Physiotherapy (PT)",
            desc: "Our Physiotherapy service offers customized program that targets stabilizing muscles, enhances flexibility, and addresses biomechanical imbalances. We strive to strengthen and stabilize muscles, improve flexibility, and correct biomechanical imbalances. Experience a holistic approach to health that empowers you to live pain-free and achieve your wellness goals.",
          },
          prenatal: {
            title: "Prenatal Care",
            desc: "Our prenatal care services are dedicated to supporting expecting mothers through safe, specialized chiropractic care. We focus on alleviating pregnancy-related discomfort, improving pelvic balance, and enhancing overall maternal wellness. Trust our Webster-certified experienced team to provide the expert care you deserve for a healthier, more comfortable pregnancy journey.",
          },
          chiroCycle: {
            title: "Chiro-cycle Program",
            desc: "Our Chiro Cycle Program is dedicated to supporting women through every stage of their hormonal journey with safe, specialized chiropractic care. We focus on alleviating cycle-related discomfort—from painful cramps and irregular periods to the transitions of menopause—by regulating and balancing the nervous system. Trust our experienced team to provide the expert care you deserve to restore your natural rhythm and enhance your overall wellness.",
          },
          decomp: {
            title: "Decompression",
            desc: "Our Decompression service utilizes gentle traction to alleviate pressure on spinal discs and nerves, providing relief to patients suffering from herniated discs, sciatica, and chronic lower back pain. This innovative therapy is designed to promote healing and improve overall spinal health, aligning with our commitment to enhancing your wellness journey. Experience the benefits of targeted spinal care tailored to your needs.",
          },
          pediatric: {
            title: "Pediatric care",
            desc: "Our pediatric care services specialize in supporting the unique developmental needs of infants, toddlers, and adolescents through safe, gentle chiropractic care. We focus on enhancing nervous system function, promoting healthy spinal alignment, and supporting overall childhood wellness. Trust our experienced team to provide the expert, compassionate care your child needs to grow, thrive, and achieve optimal health.",
          },
        },
        section_techniques: {
          diversified: {
            title: "Diversified",
            desc: "This classic, hands-on method uses precise high-velocity manual thrusts to restore proper alignment and motion to restricted spinal joints.",
          },
          dropTable: {
            title: "Drop Table",
            desc: "This technique utilizes a specialized table with sections that gently drop a fraction of an inch to assist the adjustment with minimal force and maximum comfort.",
          },
          gonstead: {
            title: "Gonstead",
            desc: "A highly specific technique utilizing a detailed step analysis to pinpoint and correct the exact spinal segment requiring care.",
          },
          webster: {
            title: "Webster Technique",
            desc: "This approach uses a gentle, specific pelvic analysis and adjustment to restore optimal balance and alignment in the pelvis and sacrum.",
          },
          activator: {
            title: "Activator",
            desc: "This approach uses a gentle, handheld instrument to deliver a precise low-force, high-speed adjustment without any cracking sounds.",
          },
          pediatric: {
            title: "Gentle Pediatric Technique",
            desc: "This approach uses exceptionally light, sustained pressure—often no more than the touch used to test the ripeness of a tomato—to safely restore proper spinal alignment and nervous system function in infants and children without any heavy twisting or popping.",
          },
        },
      },
    },
  },
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        staff: 'Personal',
        services: 'Servicios',
        langToggle: 'English',
        consultation: 'Reserva Una Consulta',
      },
      common: {
        send: 'Enviar',
        sending: 'Envío...',
        cancel: 'Cancelar',
      },
      consultation: {
        title: 'Reserva una consulta',
        caption: 'Complete el formulario y nos pondremos en contacto con usted lo antes posible.',
        firstName: 'Nombre de pila',
        firstNamePh: 'John',
        firstNameReq: 'El nombre es obligatorio',
        lastName: 'Apellido',
        lastNamePh: 'Doe',
        lastNameReq: 'El apellido es obligatorio',
        email: 'Correo electrónico',
        emailPh: 'johndoe@email.com',
        emailReq: 'El correo electrónico es obligatorio',
        emailInvalid: 'Por favor, introduzca un correo electrónico válido',
        phoneNum: 'Número de teléfono',
        phoneNumReq: 'El número de teléfono es obligatorio',
        phoneNumInvalid: 'Por favor, introduzca un número de teléfono válido',
        message: 'Motivo de la visita',
        messagePh: 'Proporcione una breve descripción de lo que está sucediendo.',
        messageReq: 'El motivo de la visita es obligatorio',
      },
      mapView: {
        infoWindow: {
          desc: 'Clínica quiropráctica local centrada en su bienestar y salud.'
        },
      },
      home: {
        title: 'Bienvenido a Nuestra Aplicación',
        description: 'Su solución integral para servicios de calidad.',
        section_hero: {
          title: "",
          desc: "Ayudamos a pacientes de todas las edades a vivir vidas más fuertes y sanas mediante alineación espinal, movimiento y terapias de rehabilitación que apoyan la sanación natural del cuerpo!",
        },
        section_why: {
          title: "¿Por qué Quiropracita?",
          desc: "En Vida Wellness Center, creemos que una vida vibrante comienza con una columna sana, desde el útero hasta la vejez. Nuestra misión es brindar ajustes quiroprácticos específicos, movimiento y terapias de rehabilitación que optimizan la alineación espinal y activan la capacidad de autocuración del cuerpo. Este cuidado vital está diseñado para todas las generaciones: mamás, niños, atletas, papás y abuelos por igual. Al alinear la columna con precisión, eliminamos interferencias para crear un sistema nervioso fuerte y resistente, fortaleciendo el cuerpo y la mente de pacientes de todas las edades.",
        },
      },
      staff: {
        title: 'Nuestro Equipo',
        description: 'Conozca a los profesionales dedicados detrás de nuestro trabajo.',
        section_jazmin: {
          title: "Dr. Jazmin Gonzalez, D.C",
          bio1: "Nacida y criada en Colorado, mi trayectoria en el cuidado de la salud comenzó en CSU, donde me gradué con un Título en Biología en 2022. Poco después, me mudé a California y me gradué de Life West Chiropractic College of Chiropractic en 2025.",
          bio2: "Nuestra práctica se dedica a apoyar a todas las familias en cada etapa de la vida. También me especializo en atención prenatal, pediátrica y femenina. Me especializo en el espectro completo de la salud de la mujer: desde ayudar a las jóvenes a navegar ciclos menstruales dolorosos, hasta brindar atención prenatal y postnatal, y guiar a las mujeres sin problemas a través de las transiciones de la menopausia. También me apasiona profundamente el cuidado pediátrico, brindando a los más pequeños el comienzo más saludable posible.",
          bio3: "La inclusión es el corazón de mi práctica. Soy completamente trilingüe y sirvo con orgullo a nuestra comunidad en inglés, español y lenguaje de señas americano (ASL). ¡No importa en qué capítulo de la vida se encuentren usted o sus hijos, estoy aquí para potenciar el camino de bienestar de su familia!",
        },
        section_zamir: {
          title: "Dr. Zamir Carballo, D.C.",
          bio1: "Originalmente nacido y criado en el sur de California, asistí a la Universidad Estatal de California, Fullerton, para mi licenciatura. Me gradué con mi Licenciatura en Ciencias en Kinesiología con una subespecialidad en Estudios del Envejecimiento en CSUF en 2022. Unos meses después, decidí dirigirme al norte de California para asistir a Life Chiropractic College West y me gradué en marzo de 2026.",
          bio2: "Nuestra práctica se dedica a apoyar a todas las familias en cada etapa de la vida. Mi enfoque está dirigido a los atletas y a nuestros queridos adultos mayores. Mi filosofía es sanar todas las columnas de todas las edades a través de ajustes específicos y suaves para tener un movimiento más funcional y estar lo más libre de dolor posible sin el uso de medicamentos o cirugía. ¡Estoy aquí para ayudarle y animarle a vivir su mejor vida mientras atiendo todas las necesidades de la columna vertebral y las extremidades!",
        },
      },
      services: {
        title: 'Nuestros Servicios',
        description: 'Explore lo que tenemos para ofrecer.',
        section_services: {
          chiro: {
            title: "Atención Quiropráctica",
            desc: "Nuestros servicios de quiropráctica se especializan en atender las necesidades particulares de cada paciente. Nos enfocamos en identificar la causa raíz de sus molestias y empleamos técnicas personalizadas para garantizar una salud y un bienestar óptimos. ¡Disfrute de una atención personalizada que le permitirá vivir sin dolor y mejorar su bienestar integral!",
          },
          physio: {
            title: "Fisioterapia (FT)",
            desc: "Nuestro servicio de fisioterapia ofrece un programa personalizado enfocado en fortalecer los músculos, mejorar la flexibilidad y corregir la postura. Trabajamos para dar estabilidad a tu cuerpo, prevenir molestias y devolverte la libertad de movimiento. Siente un cuidado integral de tu salud que te permita vivir sin dolor y alcanzar tus metas de bienestar.",
          },
          prenatal: {
            title: "Atención prenatal",
            desc: "Nuestros servicios de atención durante el embarazo están enfocados en apoyar a las futuras mamás con cuidados quiroprácticos seguros y especializados. Nos dedicamos a aliviar las molestias del embarazo, mejorar la postura de la pelvis y cuidar tu salud integral. Confía en nuestro equipo experto y certificado en la técnica Webster para recibir la atención de calidad que mereces y disfrutar de un embarazo más cómodo y saludable.",
          },
          chiroCycle: {
            title: "Programa Chiro-cycle",
            desc: "Nuestro programa está dedicado a acompañar a las mujeres en cada etapa de su ciclo hormonal con atención quiropráctica segura y especializada. Nos enfocamos en aliviar las molestias del ciclo —desde los cólicos fuertes y los periodos irregulares hasta los cambios de la menopausia— equilibrando tu sistema nervioso. Confía en nuestro equipo experto para recibir la atención de calidad que mereces, restaurar tu ritmo natural y mejorar tu bienestar.",
          },
          decomp: {
            title: "Descompresión",
            desc: "Nuestro servicio de descompresión usa un estiramiento suave para aliviar la presión en los discos de la espalda y los nervios, ayudando a quienes sufren de hernias discales, ciática y dolor de espalda crónico. Esta terapia moderna está diseñada para facilitar tu recuperación y mejorar la salud de tu columna, en línea con nuestro compromiso de cuidar tu bienestar. Siente los beneficios de una atención pensada y adaptada a tus necesidades.",
          },
          pediatric: {
            title: "Atención pediátrica",
            desc: "Nuestros servicios de atención pediátrica se especializan en cuidar el desarrollo de bebés, niños y adolescentes mediante una atención quiropráctica segura y suave. Nos enfocamos en mejorar el funcionamiento del sistema nervioso, promover una buena alineación de la columna y cuidar la salud de tu hijo durante su infancia. Confía en nuestro equipo experto para brindar la atención de calidad y humana que tu hijo necesita para crecer, desarrollarse y estar sano.",
          },
        },
        section_techniques: {
          diversified: {
            title: "Diversificada",
            desc: "Este método clásico y manual utiliza empujes manuales precisos a alta velocidad para restaurar la alineación y el movimiento articular.",
          },
          dropTable: {
            title: "Mesa de caída",
            desc: "Esta técnica utiliza una mesa especializada con secciones que caen suavemente una fracción de pulgada para ayudar al ajuste con mínima fuerza.",
          },
          gonstead: {
            title: "Gonstead",
            desc: "Una técnica muy específica que utiliza un análisis detallado de pasos para identificar y corregir el segmento espinal exacto necesitado.",
          },
          webster: {
            title: "Técnica de Webster",
            desc: "Este enfoque utiliza un análisis y ajuste pélvico suave y específico para restaurar el equilibrio y la alineación óptima en la pelvis y sacro.",
          },
          activator: {
            title: "Activador",
            desc: "Este enfoque utiliza un instrumento manual suave para ofrecer un ajuste preciso de baja fuerza y alta velocidad sin sonidos de chasquidos.",
          },
          pediatric: {
            title: "Técnica pediátrica suave",
            desc: "Este enfoque utiliza una presión excepcionalmente ligera y sostenida, a menudo no más que el toque usado para probar la madurez de un tomate, para restaurar con seguridad la alineación espinal y la función del sistema nervioso en bebés y niños sin giros bruscos.",
          },
        },
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already safe from XSS
    },
  });

export default i18n;
