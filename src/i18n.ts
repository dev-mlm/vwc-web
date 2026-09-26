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
        learnMore: 'Learn More',
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
      businessHours: {
        title: 'Hours of Operation',
        desc: 'Open seven days a week!',
        days: {
          monday: 'Monday',
          tuesday: 'Tuesday',
          wednesday: 'Wednesday',
          thursday: 'Thursday',
          friday: 'Friday',
          saturday: 'Saturday',
          sunday: 'Sunday',
          today: 'Today',
        },
      },
      mapView: {
        title: 'Location',
        infoWindow: {
          desc: 'Local chiropractic clinic focused on your wellness and health.'
        },
      },
      home: {
        section_hero: {
          title: "Your Journey to Health Begins Here",
          subtitle: "Fort Collins Chiropractic & Wellness",
          desc: "Helping patients of every age to grow stronger, healthier lives through spinal alignment, movement, and rehabilitative therapies that support the body’s natural ability to heal",
          staffCard: {
            title: 'Staff',
            desc: 'Learn more about our chiropractors!',
          },
          servicesCard: {
            title: 'Services',
            desc: 'Learn more about the chiropractic techniques we offer!',
          },
          saleCard: {
            title: 'New Patient Special',
            desc: 'Learn more about a great deal for new clients!',
          },
        },
        section_whyVida: {
          title: "Why Vida?",
          desc1: "At Vida Wellness Center, we believe a vibrant life starts with a healthy spine, beginning in the womb and continuing until you’re grey and full of wisdom.",
          desc2: "Our mission is to deliver targeted chiropractic adjustments, movement, and rehabilitative therapies that optimize spinal alignment and unlock the body's natural ability to heal. This vital care is designed for every generation — moms, kiddos, athletes, dads, and grandparents alike.",
          desc3: "By precisely aligning the spine, we remove interference to create a strong, resilient nervous system, ultimately empowering a stronger body and mind for patients of every age.",
        },
        section_reviews: {
          title: "What our customers are saying",
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
            shortDesc: "Personalized chiropractic care designed to identify the underlying causes of discomfort and restore proper function. Our tailored approach supports spinal health, mobility, and overall wellness.",
            desc1: "Our Chiropractic Care services are designed around your individual needs, goals, and overall health. We begin with a thorough evaluation to understand your symptoms, movement patterns, spinal health, and the factors that may be contributing to your discomfort. From there, we develop a personalized care approach using specific chiropractic techniques selected to match your condition, comfort level, and treatment goals.",
            desc2: "Chiropractic care commonly incorporates hands-on or instrument-assisted techniques designed to improve joint movement and function. Depending on your needs, treatment may include specific spinal adjustments, gentle mobilization, or other supportive therapies. Research suggests that spinal manipulation can provide modest improvements in pain and function for some people with acute or chronic low-back pain and may also be helpful for certain types of neck pain and headaches.",
            desc3: "Our goal is not simply to address where you feel discomfort, but to understand how your spine, joints, movement, and daily activities may be contributing to the problem. By combining individualized assessment with targeted chiropractic care, we strive to help you move more comfortably, improve physical function, and support your overall wellness.",
          },
          physio: {
            title: "Physiotherapy (PT)",
            shortDesc: "Customized physiotherapy programs designed to strengthen and stabilize muscles, improve flexibility, and address biomechanical imbalances. We help you move better, feel stronger, and work toward your wellness goals.",
            desc1: "Our Physiotherapy (PT) services focus on helping you build strength, improve mobility, and move with greater confidence and efficiency. Each program is customized to your individual needs and may address muscle weakness, reduced flexibility, movement limitations, posture, or biomechanical imbalances that can contribute to pain and difficulty performing everyday activities.",
            desc2: "Your program may incorporate targeted strengthening and stabilization exercises, flexibility and mobility work, movement retraining, and other therapeutic strategies based on your evaluation. Strengthening the muscles that support the spine, hips, and other areas of the body can help improve movement and function, while mobility and flexibility exercises can help you move more comfortably and effectively. For example, the American College of Obstetricians and Gynecologists notes that appropriately selected exercises can strengthen and stretch muscles that support the back and legs, promote posture, and help ease pregnancy-related back pain.",
            desc3: "We take a whole-person approach to rehabilitation, focusing not only on reducing discomfort but also on addressing the underlying movement and strength limitations that may affect your daily life. The goal is to help you develop the strength, mobility, and movement strategies needed to return to the activities you enjoy and work toward your long-term wellness goals.",
          },
          prenatal: {
            title: "Prenatal Care",
            shortDesc: "Specialized chiropractic care designed to help expecting mothers stay comfortable throughout pregnancy. Gentle, pregnancy-focused care supports pelvic balance, spinal alignment, and overall maternal wellness.",
            desc1: "Pregnancy brings significant changes to the body, including changes in posture, weight distribution, joint mobility, and the muscles and ligaments supporting the pelvis and spine. Our Prenatal Care services provide specialized chiropractic care designed to help expecting mothers navigate these changes comfortably and confidently.",
            desc2: "Our approach begins with an individualized assessment and uses pregnancy-appropriate techniques based on your stage of pregnancy, symptoms, and specific needs. Care may focus on the spine, pelvis, and surrounding joints and muscles to support comfortable movement and pelvic balance. Our team is Webster-certified and experienced in providing specialized care for pregnant patients, with techniques selected to prioritize comfort and minimize unnecessary stress on the body.",
            desc3: "Pregnancy-related low-back and pelvic pain are common, and research has investigated chiropractic and other manual therapies as potential options for managing these symptoms. Evidence regarding spinal manipulation specifically during pregnancy remains limited and inconclusive, so care should be individualized and coordinated appropriately with your obstetric or other prenatal healthcare provider.",
            desc4: "Our goal is to provide thoughtful, gentle, and personalized care throughout your pregnancy while supporting your comfort, mobility, and overall well-being. We work alongside your existing healthcare team when appropriate so that your care remains focused on a healthy pregnancy and a positive experience from pregnancy through postpartum recovery.",
          },
          chiroCycle: {
            title: "Chiro-cycle Program",
            shortDesc: "Specialized chiropractic care supporting women through every stage of their hormonal journey. Gentle, individualized care focuses on nervous system balance and relieving cycle-related discomfort.",
            desc1: "Our Chiro-Cycle Program is designed to support women through the physical changes that can occur throughout the menstrual cycle, reproductive years, and menopause. We recognize that hormonal transitions can be accompanied by changes in comfort, muscle tension, stress, sleep, and overall well-being, and our approach focuses on providing individualized chiropractic care throughout these different stages of life.",
            desc2: "Care begins with an assessment of your posture, movement, spinal and pelvic function, and individual concerns. Depending on your needs, we may use specific chiropractic adjustments and gentle techniques to support healthy joint movement and musculoskeletal function. Treatment is tailored to your comfort level and may evolve as your needs change throughout your cycle or during major hormonal transitions.",
            desc3: "Some patients seek chiropractic care as part of a broader approach to managing cycle-related discomfort. However, current evidence does not establish spinal manipulation as an effective treatment for menstrual cramps or other non-musculoskeletal conditions, so chiropractic care should be viewed as complementary rather than a replacement for appropriate gynecological or medical care.",
            desc4: "Our goal is to provide a supportive, individualized approach that helps you feel more comfortable in your body and maintain healthy movement throughout the many stages of your hormonal journey. When symptoms require medical evaluation, we encourage coordination with your physician or other qualified healthcare provider.",
          },
          decomp: {
            title: "Decompression",
            shortDesc: "Gentle spinal traction designed to reduce pressure on discs and nerves while supporting natural healing. Decompression may help relieve discomfort associated with disc issues, sciatica, and chronic lower back pain.",
            desc1: "Our Decompression service uses controlled, gentle traction to apply a stretching force to the spine. The goal is to provide a comfortable, targeted approach for patients experiencing certain types of back and leg discomfort, particularly when symptoms may be associated with spinal or disc-related conditions.",
            desc2: "During treatment, you are positioned comfortably while the decompression system applies carefully controlled traction to the targeted region of the spine. Treatment parameters can be adjusted based on your individual condition, tolerance, and goals. Decompression may be incorporated into a broader treatment plan alongside chiropractic care, therapeutic exercise, and other conservative approaches.",
            desc3: "Research on spinal traction and decompression has produced mixed results. Some studies suggest that traction may provide short-term improvements in pain and function for certain patients with low-back pain associated with a herniated disc, while broader reviews have found inconsistent evidence and have not established traction as universally effective.",
            desc4: "For this reason, we approach decompression as an individualized therapy rather than a one-size-fits-all treatment. After evaluating your condition and goals, our team can determine whether decompression is an appropriate component of your care plan and combine it with other therapies when beneficial.",
          },
          pediatric: {
            title: "Pediatric care",
            shortDesc: "Gentle, specialized chiropractic care designed to support healthy development in infants, children, and adolescents. Care focuses on spinal alignment, nervous system function, and overall childhood wellness.",
            desc1: "Our Pediatric Care services are designed to provide gentle, individualized chiropractic care for infants, children, and adolescents. Growing bodies experience continual changes as children develop, and our approach focuses on providing age-appropriate care that considers each child's stage of development, comfort, and individual needs.",
            desc2: "Pediatric chiropractic care may involve gentle, low-force techniques intended to address musculoskeletal and movement-related concerns. Our Gentle Pediatric Technique uses exceptionally light pressure and avoids the heavy twisting or high-force movements sometimes associated with adult chiropractic adjustments. When appropriate, other low-force or instrument-assisted techniques may also be considered based on the child's age, size, condition, and tolerance.",
            desc3: "Because children are different from adults and may present with unique developmental and medical considerations, a careful history and evaluation are important before treatment. Research on spinal manipulation in children is limited, and published literature has reported rare serious adverse events while also noting that the available data are insufficient to establish incidence or causation. Chiropractic care should therefore be individualized, and symptoms that may indicate an underlying medical condition should receive appropriate pediatric medical evaluation.",
            desc4: "Our goal is to create a comfortable, compassionate experience for children and their families while providing care that is appropriately gentle and tailored to the child's developmental stage. We work to make each visit a positive experience while keeping your child's safety and individual needs at the center of care.",
          },
        },
        section_techniques: {
          title: "Techniques",
          clickForMore: "Select a technique to learn more.",
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
        learnMore: 'Más información',
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
      businessHours: {
        title: 'Horario de atención',
        desc: '¡Abierto los siete días de la semana!',
        days: {
          monday: 'Lunes',
          tuesday: 'Martes',
          wednesday: 'Miércoles',
          thursday: 'Jueves',
          friday: 'Viernes',
          saturday: 'Sábado',
          sunday: 'Domingo',
          today: 'Hoy',
        },
      },
      mapView: {
        title: 'Ubicación',
        infoWindow: {
          desc: 'Clínica quiropráctica local centrada en su bienestar y salud.'
        },
      },
      home: {
        title: 'Bienvenido a Nuestra Aplicación',
        description: 'Su solución integral para servicios de calidad.',
        section_hero: {
          title: "Tu camino hacia la salud comienza aquí.",
          subtitle: "Quiropráctica y Bienestar en Fort Collins",
          desc: "Ayudamos a pacientes de todas las edades a vivir vidas más fuertes y sanas mediante alineación espinal, movimiento y terapias de rehabilitación que apoyan la sanación natural del cuerpo!",
          staffCard: {
            title: 'Personal',
            desc: '¡Conozca más sobre nuestros quiroprácticos!',
          },
          servicesCard: {
            title: 'Servicios',
            desc: '¡Obtenga más información sobre las técnicas quiroprácticas que ofrecemos!',
          },
          saleCard: {
            title: 'Oferta especial para nuevos pacientes',
            desc: '¡Obtenga más información sobre una excelente oferta para nuevos clientes!',
          },
        },
        section_whyVida: {
          title: "¿Por qué Vida?",
          desc1: "En Vida Wellness Center, creemos que una vida plena comienza con una columna vertebral sana, desde el vientre materno y a lo largo de toda la vida, hasta llegar a la etapa de las canas y la sabiduría.",
          desc2: "Nuestra misión es ofrecer ajustes quiroprácticos precisos, así como terapias de movimiento y rehabilitación, para optimizar la alineación de la columna y liberar la capacidad natural del cuerpo para sanar. Esta atención esencial está diseñada para todas las generaciones: desde madres, niños y atletas hasta padres y abuelos.",
          desc3: "Al alinear la columna vertebral con precisión, eliminamos las interferencias para crear un sistema nervioso fuerte y resiliente, fortaleciendo así el cuerpo y la mente de pacientes de todas las edades.",
        },
        section_reviews: {
          title: "Lo que nuestros clientes están diciendo",
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
            shortDesc: "Atención quiropráctica personalizada, diseñada para identificar las causas subyacentes de las molestias y restaurar el funcionamiento adecuado. Nuestro enfoque a medida favorece la salud de la columna vertebral, la movilidad y el bienestar general.",
            desc1: "Nuestros servicios de atención quiropráctica están diseñados en función de sus necesidades individuales, sus objetivos y su salud general. Comenzamos con una evaluación exhaustiva para comprender sus síntomas, patrones de movimiento, la salud de su columna vertebral y los factores que pueden estar contribuyendo a sus molestias. A partir de ahí, desarrollamos un enfoque de atención personalizado utilizando técnicas quiroprácticas específicas, seleccionadas para adaptarse a su afección, su nivel de comodidad y sus objetivos de tratamiento.",
            desc2: "La atención quiropráctica suele incorporar técnicas manuales o asistidas por instrumentos, diseñadas para mejorar el movimiento y la función de las articulaciones. Dependiendo de sus necesidades, el tratamiento puede incluir ajustes vertebrales específicos, movilizaciones suaves u otras terapias complementarias. Las investigaciones sugieren que la manipulación vertebral puede proporcionar mejoras moderadas en el dolor y la funcionalidad en algunas personas con lumbalgia aguda o crónica, y también puede resultar beneficiosa para ciertos tipos de dolor cervical y dolores de cabeza.",
            desc3: "Nuestro objetivo no es simplemente tratar la zona donde siente molestias, sino comprender cómo su columna vertebral, sus articulaciones, sus movimientos y sus actividades cotidianas pueden estar contribuyendo al problema. Al combinar una evaluación personalizada con una atención quiropráctica específica, nos esforzamos por ayudarle a moverse con mayor comodidad, mejorar su función física y favorecer su bienestar general.",
          },
          physio: {
            title: "Fisioterapia (FT)",
            shortDesc: "Programas de fisioterapia personalizados, diseñados para fortalecer y estabilizar los músculos, mejorar la flexibilidad y corregir desequilibrios biomecánicos. Le ayudamos a moverse mejor, sentirse más fuerte y avanzar hacia sus objetivos de bienestar.",
            desc1: "Nuestros servicios de fisioterapia se centran en ayudarle a ganar fuerza, mejorar la movilidad y moverse con mayor confianza y eficiencia. Cada programa se adapta a sus necesidades individuales y puede abordar la debilidad muscular, la falta de flexibilidad, las limitaciones de movimiento, la postura o los desequilibrios biomecánicos que contribuyen al dolor y a la dificultad para realizar actividades cotidianas.",
            desc2: "Su programa puede incluir ejercicios específicos de fortalecimiento y estabilización, trabajo de flexibilidad y movilidad, reeducación del movimiento y otras estrategias terapéuticas basadas en su evaluación. Fortalecer los músculos que sostienen la columna vertebral, las caderas y otras zonas del cuerpo ayuda a mejorar el movimiento y la funcionalidad, mientras que los ejercicios de movilidad y flexibilidad le permiten moverse con mayor comodidad y eficacia. Por ejemplo, el Colegio Americano de Obstetras y Ginecólogos señala que ciertos ejercicios seleccionados adecuadamente pueden fortalecer y estirar los músculos que sostienen la espalda y las piernas, favorecer una buena postura y ayudar a aliviar el dolor de espalda asociado al embarazo.",
            desc3: "Adoptamos un enfoque integral en la rehabilitación, centrándonos no solo en reducir las molestias, sino también en abordar las limitaciones subyacentes de movimiento y fuerza que pueden afectar a su vida diaria. El objetivo es ayudarle a desarrollar la fuerza, la movilidad y las estrategias de movimiento necesarias para retomar las actividades que disfruta y avanzar hacia sus metas de bienestar a largo plazo.",
          },
          prenatal: {
            title: "Atención prenatal",
            shortDesc: "Atención quiropráctica especializada, diseñada para ayudar a las futuras madres a sentirse cómodas durante todo el embarazo. Este cuidado suave y orientado al embarazo favorece el equilibrio pélvico, la alineación de la columna vertebral y el bienestar materno integral.",
            desc1: "El embarazo conlleva cambios significativos en el cuerpo, incluyendo modificaciones en la postura, la distribución del peso, la movilidad articular y los músculos y ligamentos que sostienen la pelvis y la columna vertebral. Nuestros servicios de atención prenatal ofrecen cuidados quiroprácticos especializados, diseñados para ayudar a las futuras madres a afrontar estos cambios con comodidad y confianza.",
            desc2: "Nuestro enfoque comienza con una evaluación personalizada y emplea técnicas adecuadas para el embarazo, basadas en la etapa de gestación, los síntomas y las necesidades específicas de cada paciente. El tratamiento puede centrarse en la columna vertebral, la pelvis y las articulaciones y músculos circundantes para favorecer un movimiento cómodo y el equilibrio pélvico. Nuestro equipo cuenta con la certificación Webster y amplia experiencia en la atención especializada a pacientes embarazadas, seleccionando técnicas que priorizan el bienestar y minimizan cualquier tensión innecesaria para el cuerpo.",
            desc3: "El dolor lumbar y pélvico asociado al embarazo es frecuente; diversas investigaciones han estudiado la quiropráctica y otras terapias manuales como posibles opciones para el manejo de estos síntomas. La evidencia científica sobre la manipulación vertebral específicamente durante el embarazo sigue siendo limitada y no concluyente, por lo que el tratamiento debe personalizarse y coordinarse adecuadamente con su obstetra o proveedor de atención prenatal.",
            desc4: "Nuestro objetivo es brindar una atención cuidadosa, suave y personalizada durante todo el embarazo, promoviendo su comodidad, movilidad y bienestar general. Colaboramos con su equipo médico actual cuando resulta oportuno, asegurando que la atención se centre en lograr un embarazo saludable y una experiencia positiva, desde la gestación hasta la recuperación posparto.",
          },
          chiroCycle: {
            title: "Programa Chiro-cycle",
            shortDesc: "Atención quiropráctica especializada que acompaña a la mujer en cada etapa de su evolución hormonal. Un enfoque suave y personalizado centrado en equilibrar el sistema nervioso y aliviar las molestias asociadas al ciclo.",
            desc1: "Nuestro programa Chiro-Cycle está diseñado para apoyar a las mujeres ante los cambios físicos que pueden surgir a lo largo del ciclo menstrual, la etapa reproductiva y la menopausia. Reconocemos que las transiciones hormonales pueden conllevar cambios en el bienestar físico, la tensión muscular, los niveles de estrés, el sueño y la salud general; por ello, nuestro enfoque se centra en brindar atención quiropráctica personalizada durante estas diversas etapas de la vida.",
            desc2: "La atención comienza con una evaluación de su postura, movilidad, funcionamiento de la columna y la pelvis, así como de sus inquietudes particulares. Según sus necesidades, podemos emplear ajustes quiroprácticos específicos y técnicas suaves para favorecer una movilidad articular saludable y el buen funcionamiento del sistema musculoesquelético. El tratamiento se adapta a su nivel de comodidad y puede evolucionar a medida que cambian sus necesidades a lo largo del ciclo o durante las transiciones hormonales importantes.",
            desc3: "Algunas pacientes recurren a la quiropráctica como parte de un enfoque más amplio para gestionar las molestias relacionadas con el ciclo. No obstante, la evidencia actual no establece la manipulación vertebral como un tratamiento eficaz para los cólicos menstruales u otras afecciones no musculoesqueléticas; por tanto, la atención quiropráctica debe considerarse un complemento, y no un sustituto, de la atención ginecológica o médica adecuada.",
            desc4: "Nuestro objetivo es ofrecer un enfoque personalizado y de apoyo que le ayude a sentirse más cómoda en su cuerpo y a mantener una movilidad saludable a lo largo de las distintas etapas de su evolución hormonal. Cuando los síntomas requieran una evaluación médica, recomendamos coordinar la atención con su médico u otro profesional de la salud cualificado.",
          },
          decomp: {
            title: "Descompresión",
            shortDesc: "Tracción espinal suave diseñada para reducir la presión sobre los discos y los nervios, favoreciendo al mismo tiempo la curación natural. La descompresión puede ayudar a aliviar las molestias asociadas a problemas discales, ciática y dolor lumbar crónico.",
            desc1: "Nuestro servicio de descompresión utiliza una tracción suave y controlada para aplicar una fuerza de estiramiento a la columna vertebral. El objetivo es ofrecer un enfoque cómodo y específico para pacientes que experimentan ciertas molestias en la espalda y las piernas, especialmente cuando los síntomas pueden estar relacionados con afecciones de la columna o de los discos intervertebrales.",
            desc2: "Durante el tratamiento, usted se coloca en una posición cómoda mientras el sistema de descompresión aplica una tracción cuidadosamente controlada en la zona específica de la columna. Los parámetros del tratamiento pueden ajustarse según su afección particular, su tolerancia y sus objetivos. La descompresión puede integrarse en un plan de tratamiento más amplio que incluya atención quiropráctica, ejercicio terapéutico y otros enfoques conservadores.",
            desc3: "Las investigaciones sobre la tracción y la descompresión vertebral han arrojado resultados diversos. Algunos estudios sugieren que la tracción puede proporcionar mejoras a corto plazo en el dolor y la funcionalidad en ciertos pacientes con lumbalgia asociada a una hernia discal; sin embargo, revisiones más amplias han encontrado evidencia inconsistente y no han logrado establecer la tracción como un tratamiento universalmente eficaz.",
            desc4: "Por este motivo, abordamos la descompresión como una terapia personalizada en lugar de un tratamiento estandarizado para todos los casos. Tras evaluar su estado y sus objetivos, nuestro equipo puede determinar si la descompresión es un componente adecuado para su plan de atención y combinarla con otras terapias cuando resulte beneficioso.",
          },
          pediatric: {
            title: "Atención pediátrica",
            shortDesc: "Atención quiropráctica especializada y delicada, diseñada para favorecer un desarrollo saludable en bebés, niños y adolescentes. El enfoque se centra en la alineación de la columna vertebral, el funcionamiento del sistema nervioso y el bienestar general durante la infancia.",
            desc1: "Nuestros servicios de atención pediátrica están diseñados para ofrecer cuidados quiroprácticos suaves y personalizados a bebés, niños y adolescentes. Los cuerpos en crecimiento experimentan cambios constantes durante el desarrollo infantil; por ello, nuestro enfoque se centra en brindar una atención adecuada a la edad, teniendo en cuenta la etapa de desarrollo, la comodidad y las necesidades individuales de cada niño.",
            desc2: "La atención quiropráctica pediátrica puede incluir técnicas suaves y de baja intensidad destinadas a abordar problemas musculoesqueléticos y relacionados con el movimiento. Nuestra técnica pediátrica suave emplea una presión excepcionalmente ligera y evita las torsiones intensas o los movimientos de gran fuerza que a veces se asocian con los ajustes quiroprácticos para adultos. Cuando resulta apropiado, también se pueden considerar otras técnicas de baja intensidad o asistidas por instrumentos, según la edad, el tamaño, la condición y la tolerancia del niño.",
            desc3: "Dado que los niños son diferentes a los adultos y pueden presentar particularidades médicas y de desarrollo únicas, es fundamental realizar una historia clínica y una evaluación minuciosas antes de iniciar el tratamiento. Las investigaciones sobre la manipulación vertebral en niños son limitadas; la literatura publicada ha reportado casos aislados de efectos adversos graves, señalando al mismo tiempo que los datos disponibles son insuficientes para determinar la incidencia o establecer una relación de causalidad. Por consiguiente, la atención quiropráctica debe personalizarse, y aquellos síntomas que puedan indicar una afección médica subyacente deben ser evaluados por un médico pediatra.",
            desc4: "Nuestro objetivo es crear una experiencia cómoda y cercana para los niños y sus familias, ofreciendo una atención delicada y adaptada a la etapa de desarrollo del niño. Nos esforzamos por hacer que cada visita sea una experiencia positiva, manteniendo siempre la seguridad y las necesidades individuales de su hijo como prioridad en la atención.",
          },
        },
        section_techniques: {
          title: "Técnicas",
          clickForMore: "Seleccione una técnica para obtener más información.",
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
