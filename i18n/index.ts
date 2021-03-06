import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
  
i18n
.use(initReactI18next)
.init({
    fallbackLng: 'en',
    // lng: 'fr',
    debug: true,


    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    interpolation: {
      escapeValue: false
    },
    resources: {
        en: {
            translations: {
                general: {
                    notFoundTitle: 'This screen doesn\'t exist.',
                    goToHome: 'Go to home screen.',
                    home: 'Home',
                    scrollResume: 'Resume with scrolling',
                    dropdownResume: 'Dropdown resume',
                    clickBelowToContinue: 'Navigate to different formats of resume by using the buttons below.',
                    pressToOpenCollapsingSections: 'Press on the sections titles to uncollapse and show their content.'
                },
                generalInformationTitles: {
                    contact: 'Contact',
                    languages: 'Languages',
                    skills: 'Skills',
                    softwares: 'Softwares'
                },
                contact: {
                    firstname: 'Alexandre',
                    lastname: 'Poirier',
                    title: 'Developer\n',
                    emailTitle: 'Email',
                    email: 'alex481poirier@hotmail.com',
                    linkedInTitle: 'LinkedIn',
                    linkedIn: 'https://www.linkedin.com/in/profilalexandrepoirier',
                },
                languages: {
                    language1: 'English',
                    language2: 'French',
                },
                ratings: {
                    oneStarDescription: 'poor',
                    twoStarsDescription: 'average',
                    threeStarsDescription: 'good',
                    fourStarsDescription: 'very good',
                    fiveStarsDescription: 'excellent',
                    oneStar: '???????????????',
                    twoStars: '???????????????',
                    threeStars: '???????????????',
                    fourStars: '???????????????',
                    fiveStars: '???????????????',
                },
                skills: {
                    skill1: 'GraphQL, Nexus and Prisma ORM',
                    skill2: 'Java, GWT, D3.js, Node.js and express.js',
                    skill3: 'DevOps and development process automation',
                    skill4: 'PostgreSQL and MySQL RDBMS',
                    skill5: 'Drupal and Worpress web integration',
                },
                softwares: {
                    software: 'Visual Studio Code, Git and Jira',
                },
                experienceHistory: {
                    description: 'Self-motivated, bilingual, Web Developer with 5 years of experience in cloud-based web development. Adaptable, diligent and experienced in TypeScript, Java and fullstack web development. \n\nNote: The source code of this react.js, web-based resume can be found on my Github page here: ',
                    workHistoryTitle: 'Work History',
                    workTitle1: 'Backend Developer',
                    date1: '2020-08 ??? Current',
                    date2: '2016-01 ??? 2020-03',
                    date3: '2013-05 - 2013-08',
                    date4: '2011-08 - 2017-04',
                    date5: '2009-09 - 2010-12',
                    workItalicTitle1: 'Usewalter, Montr??al, Qu??bec',
                    work1Item1: '???  Fixed some issues in our react.js web frontends web applications.\n\n',
                    work1Item2: '???  Worked on refactoring and maintained the code base used to do third party data integrations.\n\n',
                    work1Item3: '???  Added 2 new third party data provider integrations to the backend.\n\n',
                    work1Item4: '???  Added missing configuration panels in our frontend web application in relation to third party configurations.\n\n',
                    work1Item5: '???  Worked on upgrading our ORM called prisma js from version 1 to version 2. Also worked on implementing GraphQL queries and mutations using nexus framework.\n\n',
                    work1Item6: '???  Worked on adding typing and updating the backend\'s code base to transition from using JavaScript into using TypeScript.\n\n',
                    work1Item7: '???  Helped improve the automated test coverage of the backend using mocha, sinon and chaijs.\n\n',
                    work1Item8: '???  Monitored the health status of our third party integrations through monitoring and logging tools such as datadog and Google Cloud\s kubernetes logs.\n\n',
                    workTitle2: 'Developer',
                    workItalicTitle2: 'SuccessFinder, Montr??al, Qu??bec',
                    work2Item1: '???  Developed and worked on over 5 complex configuration panels and more than 10 interactive sections in 2 front-end applications.\n\n',
                    work2Item2: '???  Worked on web page responsiveness and improved mobile display of 2 front-end applications.\n\n',
                    work2Item3: '???  Worked on 1 report printing back-end microservice.\n\n',
                    work2Item4: '???  Contributed to 3 major programming language version upgrade and integrated 1 new web framework in 1 back-end application.\n\n',
                    work2Item5: '???  Created 1 localhost development utility script and 1 deployment automation utility script.\n\n',
                    work2Item6: '???  Used 2 static and dynamic code scan tools and produced over 10 performance analysis reports using 2 specialized performance metric tools. Also monitored and helped resolve more than 10 incidents reported by cloud platform logs.\n\n',
                    work2Item7: '???  Maintained source code repository branches up to date.\n\n',
                    work2Item8: '???  Did full stack development of 2 new report features.\n\n',
                    workTitle3: 'Systems Developer',
                    workItalicTitle3: 'Standard Life, Montr??al, Qu??bec',
                    work3Item1: 'Developed and worked on over 5 complex configuration panels and more than 10 interactive sections in 2 front-end applications.',
                    work3Item2: 'Worked on web page responsiveness and improved mobile display of 2 front-end applications.',
                    work3Item3: 'Worked on 1 report printing back-end microservice.',
                    educationSectionTitle: 'Education',
                    educationTitle1: 'Bachelor of Science: Computer Science And Software Engineering',
                    educationItalicTitle1: 'Universit?? Du Qu??bec ?? Montr??al - Montr??al',
                    educationTitle2: 'Bachelor of Science: Actuarial Science',
                    educationItalicTitle2: 'Universit?? Du Qu??bec ?? Montr??al - Montr??al',
                    educationTitle2Description: 'I\'ve changed program after 3 sessions in 2011.',
                    freelanceProjectTitle: 'Freelance project',
                    freeLanceProject: 'Built and currently maintaining a commercial web portal for an insurance broker. This project has so far involved deploying a drupal CMS, installing and customizing the appearance of a paid third-party web template and connecting a custom domain with the website and a professional email. The website has since been changed to use Wordpress CMS with a new template.'
                }
            }
        },
        fr: {
            general: {
                notFoundTitle: 'Cette page n\'existe pas.',
                goToHome: 'Retourner ?? l\'??cran d\'accueil',
                home: 'Accueil',
                scrollResume: 'CV par d??filement',
                dropdownResume: 'CV par menu d??roulant',
                clickBelowToContinue: 'Acc??dez aux differents formats de CV en utilisant les boutons ci-dessous.',
                pressToOpenCollapsingSections: 'Appuyez sur les titres de section pour faire d??rouler leur section correspondantes.'
            },
            translations: {
                generalInformationTitles: {
                    contact: 'Contact',
                    languages: 'Langues',
                    skills: 'Comp??tences',
                    softwares: 'Logiciels'
                },
                contact: {
                    firstname: 'Alexandre',
                    lastname: 'Poirier',
                    title: 'D??veloppeur\n',
                    emailTitle: 'Courriel',
                    email: 'alex481poirier@hotmail.com',
                    linkedInTitle: 'LinkedIn',
                    linkedIn: 'https://www.linkedin.com/in/profilalexandrepoirier',
                },
                languages: {
                    language1: 'Anglais',
                    language2: 'Fran??ais',
                    oneStar: '???????????????',
                    twoStars: '???????????????',
                    threeStars: '???????????????',
                    fourStars: '???????????????',
                    fiveStars: '???????????????',
                },
                ratings: {
                    oneStarDescription: 'pauvre',
                    twoStarsDescription: 'moyen',
                    threeStarsDescription: 'bien',
                    fourStarsDescription: 'tr??s bien',
                    fiveStarsDescription: 'excellent',
                    oneStar: '???????????????',
                    twoStars: '???????????????',
                    threeStars: '???????????????',
                    fourStars: '???????????????',
                    fiveStars: '???????????????',
                },
                skills: {
                    skill1: 'GraphQL, Nexus et Prisma ORM',
                    skill2: 'Java, GWT, D3.js, Node.js et express.js',
                    skill3: 'DevOps et automatisation de proc??d??s de d??veloppement',
                    skill4: 'PostgreSQL et MySQL RDBMS',
                    skill5: 'Int??grations web en Drupal et Worpress',
                },
                softwares: {
                    software: 'Visual Studio Code, Git et Jira',
                },
                experienceHistory: {
                    description: 'D??veloppeur Web motiv??, bilingue et avec 5 ans d\'exp??rience dans le d??veloppement Web bas?? sur le cloud. Flexible, assidu et poss??dant de l???exp??rience en TypeScript, Java et d??veloppement web fullstack. \n\nNote: Le code source de ce CV web construit ?? l\'aide de react.js se retrouve sur ma page Github: ',
                    workHistoryTitle: 'Historique de travail',
                    date1: '2020-08 ??? ?? ce jour',
                    date2: '2016-01 ??? 2020-03',
                    date3: '2013-05 - 2013-08',
                    date4: '2011-08 - 2017-04',
                    date5: '2009-09 - 2010-12',
                    workTitle1: 'D??veloppeur Backend',
                    workItalicTitle1: 'Usewalter, Montr??al, Qu??bec',
                    work1Item1: '???  Correction de quelques probl??mes dans nos applications web frontends react.js.\n\n',
                    work1Item2: '???  Refactorisation et maintenance de la base de code utilis??e pour faire des int??grations de donn??es tierces.\n\n',
                    work1Item3: '???  Ajout de 2 nouvelles int??grations de fournisseurs de donn??es tiers au backend.\n\n',
                    work1Item4: '???  Ajout de panneaux de configuration manquants dans notre application Web frontale en relation avec les configurations tierces.\n\n',
                    work1Item5: '???  Mise ?? niveau de notre ORM appel?? prisma js de la version 1 ?? la version 2. J\'ai aussi travaill?? ?? l\'impl??mentation de requ??tes et mutations GraphQL ?? l\'aide du framework nexus.\n\n',
                    work1Item6: '???  Travail sur le typage et la mise ?? jour de la base de code du backend pour passer de l\'utilisation de JavaScript ?? l\'utilisation de TypeScript.\n\n',
                    work1Item7: '???  Aide pour l???am??lioration des tests automatis??s du backend en utilisant mocha, sinon et chaijs.\n\n',
                    work1Item8: '???  Surveillance de l?????tat de sant?? de nos int??grations tierces gr??ce ?? des outils de surveillance et de journalisation tels que datadog et les journaux kubernetes de Google Cloud.\n\n',
                    workTitle2: 'D??veloppeur',
                    workItalicTitle2: 'SuccessFinder, Montr??al, Qu??bec',
                    work2Item1: '???  D??veloppement et travail sur plus de 5 panneaux de configuration complexes et plus de 10 sections interactives dans 2 applications web frontend.\n\n',
                    work2Item2: '???  Travail sur la r??activit?? et am??lioration de l???affichage mobile de 2 applications web frontend.\n\n',
                    work2Item3: '???  Contribution ?? 3 mises ?? niveau majeure de langage de programmation et int??gration d???un nouveau Framework web dans 1 application backend.\n\n',
                    work2Item4: '???  Cr??ation d???un script utilitaire de d??veloppement local et et d???un script utilitaire d\'automatisation de d??ploiement.\n\n',
                    work2Item5: '???  Utilisation de 2 outils d???analyse de code statiques et dynamiques et production de plus de 10 rapports d\'analyse de performance ?? l\'aide de 2 outils d\'analyse de performance sp??cialis??s.\n\n',
                    work2Item6: '???  Surveillance et aide ?? r??soudre plus de 10 incidents signal??s par les journaux de la plate-forme cloud.\n\n',
                    work2Item7: '???  Maintenance des branches de d??p??t de code source ?? jour.\n\n',
                    work2Item8: '???  A fait le d??veloppement ?? full stack ?? de 2 nouvelles fonctionnalit??s de rapport.\n\n',
                    workTitle3: 'D??veloppeur syst??mes',
                    workItalicTitle3: 'Standard Life, Montr??al, Qu??bec',
                    work3Item1: '???  Travail sur 1 application intranet ??crite en Java, JavaScript, HTML et XML utilis??e ayant pour but de centraliser les informations connues sur les outils, les serveurs et les ??quipes de support.\n\n',
                    work3Item2: '???  Cr??ation d???une application g??n??rique ??crite en Java, XML et SQL afin d???extraire des donn??es de feuilles Excel et afin de les ins??rer dans des bases de donn??es SQL.\n\n',
                    work3Item3: '???  Aide ?? migrer plus de 200 applications de Windows XP ?? Windows 7 en cat??gorisant les probl??mes, en recherchant des solutions simples, en faisant des tests moi-m??me sur les outils de d??veloppeur et en aidant les testeurs qui avaient des difficult??s avec leur plan de test.\n\n',
                    educationSectionTitle: '??tudes',
                    educationTitle1: 'Baccalaur??at en informatique et g??nie logiciel',
                    educationItalicTitle1: 'Universit?? Du Qu??bec ?? Montr??al - Montr??al',
                    educationTitle2: 'Baccalaur??at en actuariat',
                    educationItalicTitle2: 'Universit?? Du Qu??bec ?? Montr??al - Montr??al',
                    educationTitle2Description: 'Changement de programme apr??s trois sessions en 2011.',
                    freelanceProjectTitle: 'Projet ind??pendant',
                    freeLanceProject: 'Construction et maintenances d???un portail Web commercial pour un courtier d\'assurance. Ce projet a jusqu\'?? pr??sent consist?? ?? d??ployer un CMS Drupal, ?? installer, ?? personnaliser l\'apparence d\'un mod??le Web payant et ?? connecter un domaine personnalis?? avec le site Web et un courriel professionnel. Le site a depuis ??t?? refait en Wordpress avec un nouveau template.'
                }
            }
        }
    }
});


export default i18n;