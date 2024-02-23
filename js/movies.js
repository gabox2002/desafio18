const movies = [
        {
            title: 'Parasite',
            description: 'La familia Kim, el matrimonio y dos hijos, malvive en un semisótano de condiciones insalubres. Ninguno tiene trabajo fijo, pero son especialistas en supervivencia y picaresca, desde conseguir wifi gratis a...',
            year: 2019,
            image : './images/parasite.png'
    
        },
        {
            title: 'Brave Heart',
            description: 'Siguiendo los pasos de Kevin Costner con su Bailando con lobos, Mel Gibson también recreó un drama histórico de más de dos horas de duración, protagonizado y producido por él y con un gran despliegue de...',
            year: 1997,
            image : './images/braveheart.png'
        },
        {
            title: 'Todo a la vez en todas partes',
            description: 'Una película fascinante, una película irritante. Diferente, aunque los multiversos se han colado masivamente en el mundo de los superhéroes, y puede que lo que hoy es novedad, pronto nos resulte cansino. ',
            year: 2022,
            image : './images/todo-a-la-vez-en-todas-partes.png'
        },
        {
            title: 'Birdman',
            description: 'Riggan Thomas, actor de cine que se convirtió en icono de masas años atrás al encarnar al famoso superhéroe Birdman, trata de reinventarse montando en Nueva York una obra teatral seria basada en un texto de...',
            year: 2014,
            image : './images/birdman.png'
        },
        {
            title: 'The Artist',
            description: 'Hollywood, 1927. George Valentin es una gran estrella del cine mudo, sus películas son garantía de entretenimiento y una máquina de ganar dinero. Lo que no impide que viva en un matrimonio infeliz. Conocerá...',
            year: 2011,
            image : './images/the-artist.png'
        },
        {
            title: 'Slumdog Millionaire',
            description: 'El inglés Danny Boyle se dio a conocer al gran público en 1996, tras dirigir Trainspotting, impactante película sobre el mundo de las drogas. Fue el comienzo de una filmografía no demasiado extensa, pero...',
            year: 2008,
            image : './images/slumdog-millionaire.png'
        },
        {
            title: 'Infiltrados',
            description: 'Cuatro años después de que Wai Keung Lau y Siu Fai Mak sorprendieran con el magnífico thriller hongkonita Juego sucio (2002), Martin Scorsese entrega un brillante remake. Ciertamente la historia le viene al...',
            year: 2006,
            image : './images/infiltrados.png'
        },
        {
            title: 'Crash',
            description: '¡Qué difícil es juzgar bien a las personas...! Y sin embargo, día a día, los seres humanos parece que no podemos sustraernos a emitir juicios críticos acerca de tal o cual actuación de nuestros...',
            year: 2004,
            image : './images/crash.png'
        },
        {
            title: 'El Señor de los Anillos',
            description: 'Cuando una película forma parte de una trilogía, y hace la número tres, un desafío importante para el cineasta es iniciarla con buen pie. Ese tercer título tiene ya a sus espaldas un pasado, un puñado de...',
            year: 2003,
            image : './images/el-senor-de-los-anillos-el-retorno-del-rey.png'
        },
        {
            title: 'Gladiator',
            description: 'Ave, Ridley, los que van a disfrutar te lo agradecen. Así, con esta licencia descarada, nos permitimos abordar una de las películas que más sensación han causado esta temporada, no sólo por su...',
            year: 2000,
            image : './images/gladiator.png'
        },
        {
            title: 'Shakespeare enamorado',
            description: 'El joven autor William Shakespeare está preparando una obra de teatro que piensa titular "Romeo y Ethel, la hija del pirata". Pero no se encuentra demasiado inspirado. Hasta que se presenta a los ensayos un...',
            year: 1998,
            image : './images/shakespeare-enamorado.png'
        },
        {
            title: 'Titanic',
            description: 'Durante meses, el rodaje de Titanic fue el más comentado por la prensa especializada. Y lo que se decía no era bueno: retrasos en el rodaje, supe­ración del presupuesto, discusiones de la productora con...',
            year: 1997,
            image : './images/titanic.png'
        },
        {
            title: 'El paciente inglés',
            description: 'En los años de la Segunda Guerra Mundial, un inglés sobrevive milagrosamente a un accidente aéreo. Aparentemente amnésico, con el rostro desfigurado, el conde Laszlo de Almassy recuerda su apasionada...',
            year: 1997,
            image : './images/el-paciente-ingles.png'
        },
        {
            title: 'Forrest Gump',
            description: 'Forrest Gump (Tom Hanks) es una persona con un coeficiente intelectual bajo. Es sincero, honesto y muy infantil. Vive bajo la excesiva protección de su madre, que fue abandonada por su padre. Ella quiere que...',
            year: 1994,
            image : './images/forrest-gump.png'
        },
        {
            title: 'El silencio de los corderos',
            description: 'Se busca a un asesino psicópata. ¿Qué mejor ayuda para la agente Clarice que la de un asesino psiquiatra? El doctor Hannibal Lecter está encerrado en una prisión de máxima seguridad, pues tiene la...',
            year: 1991,
            image : './images/el-silencio-de-los-corderos.png'
        },
        {
            title: 'Bailando con lobos',
            description: 'En plena conquista de los territorios inexplorados del Oeste en 1860, un intrépido soldado de la Unión decide visitar la frontera con los indios antes de que esta desaparezca. Allí, entra en contacto con una...',
            year: 1990,
            image : './images/bailando-con-lobos.png'
        },
        {
            title: 'Rocky',
            description: 'Los suburbios de Filadelfia ven pasar a diario a Rocky Balboa. Él es un boxeador vocacional que subsiste como puede. Sin embargo, su mediocre vida va a dar un vuelco. Inesperadamente, es elegido para...',
            year: 1976,
            image : './images/rocky.png'
        },
        {
            title: 'El padrino II',
            description: 'Una segunda parte que rompe el tópico de segundas partes nunca fueron buenas. Es cuestionable si es mejor o peor que la genial primera parte pero, como poco, se queda a la misma altura. Cuenta la vida del...',
            year: 1974,
            image : './images/el-padrino-ii.png'
        },
        {
            title: 'La forma del agua',
            description: 'Los años de la guerra fría en Estados Unidos. Elisa Esposito es una mujer muda, con un sencillo trabajo como limpiadora en unas instalaciones militares supersecretas del gobierno, lo que no le impide tener un...',
            year: 2017,
            image : './images/the-shape-of-water.png'
        }
];
