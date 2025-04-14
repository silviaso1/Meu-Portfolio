const translations = {
    pt: {
        // Navbar
        inicio: "Início",
        sobre: "Sobre",
        experiencia: "Experiência",
        projetos: "Projetos",
        formacao: "Formação",
        certificados: "Certificados",
        habilidades: "Habilidades",
        contato: "Contato",
        
        // Hero Section
        heroTitle: "Transformando Dados em <span>Soluções</span>",
        heroText: "Sou <strong>Silvia</strong>, Analista de Dados com encanto pelo processo de organizar e interpretar informações.",
        verProjetos: "Ver Projetos",
        enviarContato: "Contato",
        verCurriculo: "Currículo",
        
        // About Section
        aboutSubtitle: "Sobre Mim",
        aboutTitle: "Conheça a profissional por trás dos dados",
        aboutText1: "Minha jornada na área começou com a curiosidade em entender como as informações ao nosso redor podem ser transformadas em conhecimento útil. Ao longo do tempo, fui descobrindo o potencial dos dados para revelar padrões, responder perguntas e ajudar na construção de soluções mais inteligentes. Desde então, venho me dedicando a aprofundar minhas habilidades em análise, visualização e interpretação de dados, sempre com o objetivo de tornar essas informações mais claras e aplicáveis no dia a dia.",
        aboutText2: "Gosto de unir lógica e criatividade para encontrar respostas que realmente façam sentido — e, principalmente, que possam ser colocadas em prática.",
        
        // Experience Section
        experienceSubtitle: "Trajetória Profissional",
        experienceTitle: "Minha Experiência",
        experienceDescription: "Minha jornada profissional com as principais responsabilidades.",
        exp1Title: "Aprendiz",
        exp1Company: "Pensi - Colégio e Curso",
        exp1Date: "2024 - Atual",
        exp1Role1: "Desenvolvimento de Software",
        exp1Desc1: "Fui responsável por desenvolver, do zero, um sistema de controle de estoque totalmente adaptado às necessidades da empresa. Esse sistema facilita o registro, o acompanhamento e a atualização dos produtos, trazendo mais controle e eficiência à operação.",
        exp1Role2: "Desenvolvimento Web",
        exp1Desc2: "Contribuo com atualizações no site institucional. Com isso, ajudo a manter as informações sempre atualizadas e alinhadas com os processos internos.",
        exp1Role3: "Otimização de Processos e Análise de Dados",
        exp1Desc3: "Acompanho de perto os dados e métricas que mostram como a escola está evoluindo, especialmente no que diz respeito às matrículas de alunos. Pra facilitar o dia a dia, automatizo processos manuais em planilhas — tanto no Google Sheets, usando Google Apps Script, quanto no Excel com VBA. Com isso, deixo as rotinas de atualização, controle de dados e geração de relatórios muito mais rápidas e organizadas.",
        
        // Projects Section
        projectsSubtitle: "Trabalho Real",
        projectsTitle: "Projetos Destacados",
        projectsDescription: "Seleção de projetos que demonstram minha abordagem e habilidades na solução de problemas com dados.",
        project1Title: "Análise Quantitativa de Iniciação Científica",
        project1Desc: "Desenvolvido na II Conferência Nacional de Defesa e Difusão da Ciência (CNDC 2025). O projeto é uma análise exploratória, baseada em dados simulados, a fim de investigar possíveis relações entre a participação em programas de iniciação científica e indicadores objetivos de desempenho profissional após a graduação.",
        project2Title: "Análise de Proteção e adoção de Animais- em breve",
        project2Desc: "O projeto propõe uma análise exploratória e comparativa de dois conjuntos de dados: um internacional, contendo informações sobre animais para adoção; e outro nacional, com dados sobre políticas públicas de proteção animal em municípios e estados brasileiros.",
        project3Title: "Dashboard - em breve",
        project3Desc: "Dashboard interativo para análise de dados educacionais com visualizações personalizadas e filtros dinâmicos.",
        demo: "Demo",
        codigo: "Código",
        caseStudy: "Case Study",
        notebook: "Notebook",
        screenshots: "Screenshots",
        dax: "DAX",
        
        // Education Section
        educationSubtitle: "Jornada Acadêmica",
        educationTitle: "Minha Formação",
        educationDescription: "Uma trajetória de aprendizado contínuo e especialização em análise de dados e tecnologias relacionadas.",
        edu1Degree: "Graduação em Análise e Desenvolvimento de Sistemas",
        edu1Institution: "Faculdade de Educação Técnológica do Estado do Rio de Janeiro (FAETERJ)",
        edu1Date: "2023 - Atual",
        edu1Description: "Formação voltada para as principais áreas da computação. A grade curricular abrange disciplinas como programação orientada a objetos, desenvolvimento web, bancos de dados, estrutura de dados e engenharia de software, além de fundamentos em redes de computadores, sistemas operacionais, análise de requisitos e ciência de dados.",
        
        // Publication Section
        publicationSubtitle: "Publicação",
        publicationTitle: "Big Data: Transformando Informação em Valor",
        publicationDescription: "Minha pesquisa sobre aplicações de Big Data.",
        pub1Title: "Os modelos preditivos na indústria: Como a Big Data e a Inteligência Artificial estão redefinindo os setores",
        pub1Date: "Publicado em: 27/03/2025",
        pub1Text1: "Esta publicação explora como as empresas podem utilizar Big Data e Inteligência Artificial para aprimorar a tomada de decisões e impulsionar a inovação nos setores industriais. O estudo aborda desde os conceitos fundamentais dessas tecnologias até os impactos práticos em diferentes setores.",
        pub1Text2: "O uso de Big Data e IA tem transformado a forma como as empresas operam, possibilitando modelos preditivos que antecipam tendências, otimizam operações e melhoram a experiência do cliente. Neste trabalho, analiso como a integração dessas tecnologias está redefinindo estratégias e criando vantagens competitivas.",
        pub1Topics: "Principais tópicos abordados:",
        pub1Topic1: "Aplicações de modelos preditivos nos setores industrial e comercial",
        pub1Topic2: "Big Data e IA na otimização da tomada de decisões",
        pub1Topic3: "Casos de sucesso e desafios na implementação dessas tecnologias",
        pub1Topic4: "Impacto no desenvolvimento de novos produtos e serviços",
        lerPesquisa: "Ler Pesquisa Completa",
        baixarPDF: "Baixar PDF",
        lattes: "Lattes",
        
        // Certificates Section
        certificatesSubtitle: "Conhecimento Validado",
        certificatesTitle: "Certificações Destacadas",
        certificatesDescription: "Investimento contínuo em educação e validação de habilidades através de certificações.",
        curso: "Curso",
        certificacao: "Certificação",
        cert1Title: "Gestão Empresarial",
        cert1Issuer: "Speed Treinamentos",
        cert1Desc: "Fundamentos de Marketing Analytics, Análise de mercado e Estratégias de Promoção, Organização de recursos, Planejamento e Tomada de Decisão",
        cert2Title: "Business Intelligence",
        cert2Issuer: "FIAP",
        cert2Desc: "Gerenciamento e a manipulação de dados, com ênfase na criação e manutenção de bancos de dados, análise de grandes volumes de informações e implementação de processos de ETL (Extração, Transformação e Carga).",
        cert3Title: "Data Science",
        cert3Issuer: "Ada Tech",
        cert3Desc: "Formação focada em coleta, análise e interpretação de dados para geração de insights e apoio à tomada de decisão. Abrange fundamentos de estatística, programação (com Python), visualização de dados, machine learning, bancos de dados (SQL), além de técnicas de análise exploratória e manipulação de grandes volumes de dados.",
        verCredencial: "Ver Credencial",
        
        // Skills Section
        skillsSubtitle: "Competências",
        skillsTitle: "Habilidades Técnicas",
        skillsDescription: "Domínio de diversas tecnologias e metodologias para análise de dados.",
        dbSkills: "Bancos de Dados",
        vizSkills: "Análise & Visualização",
        progSkills: "Programação",
        
        // Contact Section
        contactSubtitle: "Vamos Conversar",
        contactTitle: "Entre em Contato",
        contactDescription: "Estou sempre aberta a novas oportunidades ou simplesmente para bater um papo sobre dados e tecnologia.",
        enviarEmail: "Enviar Email",
        
        // Footer
        footerText: "Transformando dados em decisões estratégicas.",
        copyright: "Todos os direitos reservados."
    },
    en: {
        // Navbar
        inicio: "Home",
        sobre: "About",
        experiencia: "Experience",
        projetos: "Projects",
        formacao: "Education",
        certificados: "Certificates",
        habilidades: "Skills",
        contato: "Contact",
        
        // Hero Section
        heroTitle: "Transforming Data into <span>Solutions</span>",
        heroText: "I'm <strong>Silvia</strong>, a Data Analyst passionate about organizing and interpreting information.",
        verProjetos: "View Projects",
        enviarContato: "Contact",
        verCurriculo: "Resume",
        
        // About Section
        aboutSubtitle: "About Me",
        aboutTitle: "Meet the professional behind the data",
        aboutText1: "My journey began with curiosity about how information around us can be transformed into useful knowledge. Over time, I discovered the potential of data to reveal patterns, answer questions, and help build smarter solutions. Since then, I've been dedicated to deepening my skills in data analysis, visualization, and interpretation, always with the goal of making this information clearer and more applicable in everyday life.",
        aboutText2: "I enjoy combining logic and creativity to find answers that truly make sense - and, most importantly, that can be put into practice.",
        
        // Experience Section
        experienceSubtitle: "Professional Path",
        experienceTitle: "Data Analysis Experience",
        experienceDescription: "My professional journey with key responsibilities.",
        exp1Title: "Apprentice",
        exp1Company: "Pensi - School and Course",
        exp1Date: "2024 - Present",
        exp1Role1: "Software Development",
        exp1Desc1: "I was responsible for developing from scratch an inventory control system fully adapted to the company's needs. This system facilitates product registration, tracking, and updating, bringing more control and efficiency to operations.",
        exp1Role2: "Web Development",
        exp1Desc2: "I contribute with updates to the institutional website. This helps keep information always updated and aligned with internal processes.",
        exp1Role3: "Process Optimization and Data Analysis",
        exp1Desc3: "I closely monitor data and metrics that show how the school is evolving, especially regarding student enrollments. To make daily tasks easier, I automate manual processes in spreadsheets - both in Google Sheets using Google Apps Script and in Excel with VBA. This makes update routines, data control, and report generation much faster and more organized.",
        
        // Projects Section
        projectsSubtitle: "Real Work",
        projectsTitle: "Featured Projects",
        projectsDescription: "Selection of projects demonstrating my approach and skills in solving problems with data.",
        project1Title: "Quantitative Analysis of Scientific Initiation",
        project1Desc: "Developed at the II National Conference on Defense and Dissemination of Science (CNDC 2025). The project is an exploratory analysis, based on simulated data, to investigate possible relationships between participation in scientific initiation programs and objective indicators of professional performance after graduation.",
        project2Title: "Animal Protection and Adoption Analysis - coming soon",
        project2Desc: "The project proposes an exploratory and comparative analysis of two datasets: one international, containing information about animals for adoption; and another national, with data on public policies for animal protection in Brazilian municipalities and states.",
        project3Title: "Dashboard - coming soon",
        project3Desc: "Interactive dashboard for educational data analysis with customized visualizations and dynamic filters.",
        demo: "Demo",
        codigo: "Code",
        caseStudy: "Case Study",
        notebook: "Notebook",
        screenshots: "Screenshots",
        dax: "DAX",
        
        // Education Section
        educationSubtitle: "Academic Journey",
        educationTitle: "My Education",
        educationDescription: "A path of continuous learning and specialization in data analysis and related technologies.",
        edu1Degree: "Systems Analysis and Development",
        edu1Institution: "Faculdade de Educação Técnológica do Estado do Rio de Janeiro (FAETERJ)",
        edu1Date: "2023 - Present",
        edu1Description: "A higher education degree focused on the core areas of computer science. The curriculum includes object-oriented programming, web development, databases, data structures, and software engineering, along with foundational knowledge in computer networks, operating systems, requirements analysis, and data science.",
        
        // Publication Section
        publicationSubtitle: "Publication",
        publicationTitle: "Big Data: Transforming Information into Value",
        publicationDescription: "My research on Big Data applications.",
        pub1Title: "Predictive Models in Industry: How Big Data and Artificial Intelligence Are Redefining Sectors",
        pub1Date: "Published on: 03/27/2025",
        pub1Text1: "This publication explores how companies can use Big Data and Artificial Intelligence to improve decision-making and drive innovation in industrial sectors. The study covers from the fundamental concepts of these technologies to their practical impacts in different sectors.",
        pub1Text2: "The use of Big Data and AI has transformed how companies operate, enabling predictive models that anticipate trends, optimize operations, and improve customer experience. In this work, I analyze how the integration of these technologies is redefining strategies and creating competitive advantages.",
        pub1Topics: "Main topics covered:",
        pub1Topic1: "Applications of predictive models in industrial and commercial sectors",
        pub1Topic2: "Big Data and AI in decision-making optimization",
        pub1Topic3: "Success cases and challenges in implementing these technologies",
        pub1Topic4: "Impact on the development of new products and services",
        lerPesquisa: "Read Full Research",
        baixarPDF: "Download PDF",
        lattes: "Lattes",
        
        // Certificates Section
        certificatesSubtitle: "Validated Knowledge",
        certificatesTitle: "Highlighted Certifications",
        certificatesDescription: "Continuous investment in education and skill validation through certifications.",
        curso: "Course",
        certificacao: "Certification",
        cert1Title: "Business Management",
        cert1Issuer: "Speed Treinamentos",
        cert1Desc: "Fundamentals of Marketing Analytics, Market Analysis and Promotion Strategies, Resource Organization, Planning and Decision Making",
        cert2Title: "Business Intelligence",
        cert2Issuer: "FIAP",
        cert2Desc: "Data management and manipulation, with emphasis on database creation and maintenance, analysis of large volumes of information, and implementation of ETL (Extraction, Transformation, and Load) processes.",
        cert3Title: "Data Science",
        cert3Issuer: "Ada Tech",
        cert3Desc: "Training focused on data collection, analysis, and interpretation to generate insights and support decision-making. Covers fundamentals of statistics, programming (with Python), data visualization, machine learning, databases (SQL), as well as exploratory analysis techniques and manipulation of large data volumes.",
        verCredencial: "View Credential",
        
        // Skills Section
        skillsSubtitle: "Competencies",
        skillsTitle: "Technical Skills",
        skillsDescription: "Mastery of various technologies and methodologies for data analysis.",
        dbSkills: "Databases",
        vizSkills: "Analysis & Visualization",
        progSkills: "Programming",
        
        // Contact Section
        contactSubtitle: "Let's Talk",
        contactTitle: "Get in Touch",
        contactDescription: "I'm always open to new opportunities or just to chat about data and technology.",
        enviarEmail: "Send Email",
        
        // Footer
        footerText: "Transforming data into strategic decisions.",
        copyright: "All rights reserved."
    },
    es: {
        // Navbar
        inicio: "Inicio",
        sobre: "Sobre",
        experiencia: "Experiencia",
        projetos: "Proyectos",
        formacao: "Formación",
        certificados: "Certificados",
        habilidades: "Habilidades",
        contato: "Contacto",
        
        // Hero Section
        heroTitle: "Transformando Datos en <span>Soluciones</span>",
        heroText: "Soy <strong>Silvia</strong>, Analista de Datos apasionada por organizar e interpretar información.",
        verProjetos: "Ver Proyectos",
        enviarContato: "Contacto",
        verCurriculo: "Currículum",
        
        // About Section
        aboutSubtitle: "Sobre",
        aboutTitle: "Conoce a la profesional detrás de los datos",
        aboutText1: "Mi viaje en este campo comenzó con la curiosidad por entender cómo la información que nos rodea puede transformarse en conocimiento útil. Con el tiempo, descubrí el potencial de los datos para revelar patrones, responder preguntas y ayudar a construir soluciones más inteligentes. Desde entonces, me he dedicado a profundizar mis habilidades en análisis, visualización e interpretación de datos, siempre con el objetivo de hacer esta información más clara y aplicable en el día a día.",
        aboutText2: "Disfruto combinar lógica y creatividad para encontrar respuestas que realmente tengan sentido y, lo más importante, que puedan ponerse en práctica.",
        
        // Experience Section
        experienceSubtitle: "Trayectoria Profesional",
        experienceTitle: "Experiencia en Análisis de Datos",
        experienceDescription: "Mi recorrido profesional con las principales responsabilidades.",
        exp1Title: "Aprendiz",
        exp1Company: "Pensi - Colegio y Curso",
        exp1Date: "2024 - Actualidad",
        exp1Role1: "Desarrollo de Software",
        exp1Desc1: "Fui responsable de desarrollar desde cero un sistema de control de inventario totalmente adaptado a las necesidades de la empresa. Este sistema facilita el registro, seguimiento y actualización de productos, aportando más control y eficiencia a las operaciones.",
        exp1Role2: "Desarrollo Web",
        exp1Desc2: "Contribuyo con actualizaciones en el sitio web institucional. Esto ayuda a mantener la información siempre actualizada y alineada con los procesos internos.",
        exp1Role3: "Optimización de Procesos y Análisis de Datos",
        exp1Desc3: "Superviso de cerca los datos y métricas que muestran cómo evoluciona la escuela, especialmente en lo que respecta a las matriculaciones de estudiantes. Para facilitar las tareas diarias, automatizo procesos manuales en hojas de cálculo, tanto en Google Sheets usando Google Apps Script como en Excel con VBA. Esto hace que las rutinas de actualización, control de datos y generación de informes sean mucho más rápidas y organizadas.",
        
        // Projects Section
        projectsSubtitle: "Trabajo Real",
        projectsTitle: "Proyectos Destacados",
        projectsDescription: "Selección de proyectos que demuestran mi enfoque y habilidades para resolver problemas con datos.",
        project1Title: "Análisis Cuantitativo de Iniciación Científica",
        project1Desc: "Desarrollado en la II Conferencia Nacional de Defensa y Difusión de la Ciencia (CNDC 2025). El proyecto es un análisis exploratorio, basado en datos simulados, para investigar posibles relaciones entre la participación en programas de iniciación científica e indicadores objetivos de desempeño profesional después de la graduación.",
        project2Title: "Análisis de Protección y Adopción de Animales - próximamente",
        project2Desc: "El proyecto propone un análisis exploratorio y comparativo de dos conjuntos de datos: uno internacional, que contiene información sobre animales para adopción; y otro nacional, con datos sobre políticas públicas de protección animal en municipios y estados brasileños.",
        project3Title: "Dashboard - próximamente",
        project3Desc: "Panel interactivo para análisis de datos educativos con visualizaciones personalizadas y filtros dinámicos.",
        demo: "Demo",
        codigo: "Código",
        caseStudy: "Estudio de Caso",
        notebook: "Notebook",
        screenshots: "Capturas",
        dax: "DAX",
        
        // Education Section
        educationSubtitle: "Recorrido Académico",
        educationTitle: "Mi Formación",
        educationDescription: "Un camino de aprendizaje continuo y especialización en análisis de datos y tecnologías relacionadas.",
        edu1Degree: " Análisis y Desarrollo de Sistemas",
        edu1Institution: "Faculdade de Educação Técnológica do Estado do Rio de Janeiro (FAETERJ)",
        edu1Date: "2023 - Actualidad",
        edu1Description: "Formación enfocada en las principales áreas de la informática. El plan de estudios abarca asignaturas como programación orientada a objetos, desarrollo web, bases de datos, estructuras de datos e ingeniería de software, además de fundamentos de redes de computadoras, sistemas operativos, análisis de requisitos y ciencia de datos.",
        
        // Publication Section
        publicationSubtitle: "Publicación",
        publicationTitle: "Big Data: Transformando Información en Valor",
        publicationDescription: "Mi investigación sobre aplicaciones de Big Data.",
        pub1Title: "Modelos Predictivos en la Industria: Cómo Big Data e Inteligencia Artificial están Redefiniendo los Sectores",
        pub1Date: "Publicado el: 27/03/2025",
        pub1Text1: "Esta publicación explora cómo las empresas pueden utilizar Big Data e Inteligencia Artificial para mejorar la toma de decisiones e impulsar la innovación en los sectores industriales. El estudio abarca desde los conceptos fundamentales de estas tecnologías hasta sus impactos prácticos en diferentes sectores.",
        pub1Text2: "El uso de Big Data e IA ha transformado la forma en que operan las empresas, permitiendo modelos predictivos que anticipan tendencias, optimizan operaciones y mejoran la experiencia del cliente. En este trabajo, analizo cómo la integración de estas tecnologías está redefiniendo estrategias y creando ventajas competitivas.",
        pub1Topics: "Principales temas abordados:",
        pub1Topic1: "Aplicaciones de modelos predictivos en sectores industriales y comerciales",
        pub1Topic2: "Big Data e IA en la optimización de la toma de decisiones",
        pub1Topic3: "Casos de éxito y desafíos en la implementación de estas tecnologías",
        pub1Topic4: "Impacto en el desarrollo de nuevos productos y servicios",
        lerPesquisa: "Leer Investigación Completa",
        baixarPDF: "Descargar PDF",
        lattes: "Lattes",
        
        // Certificates Section
        certificatesSubtitle: "Conocimiento Validado",
        certificatesTitle: "Certificaciones Destacadas",
        certificatesDescription: "Inversión continua en educación y validación de habilidades a través de certificaciones.",
        curso: "Curso",
        certificacao: "Certificación",
        cert1Title: "Gestión Empresarial",
        cert1Issuer: "Speed Treinamentos",
        cert1Desc: "Fundamentos de Marketing Analytics, Análisis de mercado y Estrategias de Promoción, Organización de recursos, Planificación y Toma de Decisiones",
        cert2Title: "Business Intelligence",
        cert2Issuer: "FIAP",
        cert2Desc: "Gestión y manipulación de datos, con énfasis en la creación y mantenimiento de bases de datos, análisis de grandes volúmenes de información e implementación de procesos ETL (Extracción, Transformación y Carga).",
        cert3Title: "Ciencia de Datos",
        cert3Issuer: "Ada Tech",
        cert3Desc: "Formación enfocada en la recolección, análisis e interpretación de datos para generar insights y apoyar la toma de decisiones. Cubre fundamentos de estadística, programación (con Python), visualización de datos, machine learning, bases de datos (SQL), así como técnicas de análisis exploratorio y manipulación de grandes volúmenes de datos.",
        verCredencial: "Ver Credencial",
        
        // Skills Section
        skillsSubtitle: "Competencias",
        skillsTitle: "Habilidades Técnicas",
        skillsDescription: "Dominio de diversas tecnologías y metodologías para el análisis de datos.",
        dbSkills: "Bases de Datos",
        vizSkills: "Análisis & Visualización",
        progSkills: "Programación",
        
        // Contact Section
        contactSubtitle: "Hablemos",
        contactTitle: "Contacto",
        contactDescription: "Siempre estoy abierta a nuevas oportunidades o simplemente para charlar sobre datos y tecnología.",
        enviarEmail: "Enviar Email",
        
        // Footer
        footerText: "Transformando datos en decisiones estratégicas.",
        copyright: "Todos los derechos reservados."
    }
};

let currentLang = 'pt';

const languageBtn = document.querySelector('.language-btn');
const languageDropdown = document.querySelector('.language-dropdown');
const languageOptions = languageDropdown.querySelectorAll('a');

// Toggle dropdown
languageBtn.addEventListener('click', () => {
    languageDropdown.classList.toggle('active');
});

// Função para atualizar todas as traduções
function updateTranslations() {
    // Atualiza os textos dos elementos com data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });

    // Atualiza os links da navbar
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks[0].textContent = translations[currentLang].inicio;
    navLinks[1].textContent = translations[currentLang].sobre;
    navLinks[2].textContent = translations[currentLang].experiencia;
    navLinks[3].textContent = translations[currentLang].projetos;
    navLinks[4].textContent = translations[currentLang].formacao;
    navLinks[5].textContent = translations[currentLang].habilidades;
    navLinks[6].textContent = translations[currentLang].certificados;
    navLinks[7].textContent = translations[currentLang].contato;
}

// Lógica de troca de idioma
languageOptions.forEach(option => {
    option.addEventListener('click', (e) => {
        e.preventDefault();
        const text = option.textContent.trim().toLowerCase();

        if (text.includes('português')) currentLang = 'pt';
        else if (text.includes('english')) currentLang = 'en';
        else if (text.includes('español')) currentLang = 'es';

        // Atualiza o botão principal com o novo idioma
        languageBtn.innerHTML = `<i class="fas fa-globe"></i> ${currentLang.toUpperCase()}`;

        // Marca o idioma selecionado com o check
        languageOptions.forEach(opt => {
            opt.innerHTML = opt.innerHTML.replace('<i class="fas fa-check"></i>', '<i class="fas fa-globe"></i>');
        });
        option.innerHTML = `<i class="fas fa-check"></i> ${option.textContent.trim().replace(/^✔️?\s*/, '')}`;

        // Atualiza todas as traduções
        updateTranslations();

        // Fecha o dropdown
        languageDropdown.classList.remove('active');
    });
});

// Inicializa as traduções
updateTranslations();