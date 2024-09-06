

function montarPlanilhaDeTreino() {
    const tipoTreino = document.getElementById('tipoTreino').value;
    let resultado = "";
  
    switch(tipoTreino) {
      case 'forca':
          resultado += "<h3>Treino de Força</h3>";
          resultado += "<p>Objetivo: Aumentar a força máxima dos músculos.</p>";
          resultado += "<p>Tempo Médio: 60-90 minutos</p>";
          resultado += "<p>Séries e Repetições: 3-4 séries de 6-8 repetições</p>";
          resultado += "<li>Agachamento        - <iframe width='560' height='315' src='https://www.youtube.com/embed/s7i94Okznns' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li>";
          resultado += "<li>Levantamento Terra - <iframe width='560' height='315' src='https://www.youtube.com/embed/50AkPBZwACQ' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li>";
          resultado += "<li>Supino             - <iframe width='560' height='315' src='https://www.youtube.com/embed/EZMYCLKuGow' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li>";
          resultado += "<li>Desenvolvimento    - <iframe width='560' height='315' src='https://www.youtube.com/embed/EuQAfhXBEvs' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li>";
          resultado += "<li>Barra Fixa         - <iframe width='560' height='315' src='https://www.youtube.com/embed/thg6cGXSlvY' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li>";
          resultado += "<li>Flexão de Braços   - <iframe width='560' height='315' src='https://www.youtube.com/embed/dHgoYiCraCw' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li>";
          resultado += "<li>Exercícios com halteres e máquinas - <iframe width='560' height='315' src='https://www.youtube.com/embed/uqwuTzSnRWY' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li></ul>";
          break;
      case 'hipertrofia':
          resultado += "<h3>Treino de Hipertrofia</h3>";
          resultado += "<p>Objetivo: Aumentar a massa muscular.</p>";
          resultado += "<p>Tempo Médio: 60-90 minutos</p>";
          resultado += "<p>Séries e Repetições: 3-4 séries de 8-12 repetições</p>";
          resultado += "<ul><li>Os mesmos do treino de força, porém com maior volume e intensidade.</li>";
          resultado += "<li>Exercícios isolados para músculos específicos - <iframe width='560' height='315' src='https://www.youtube.com/embed/KNdAtzCwPcY' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li></ul>";
          break;
      case 'resistencia':
          resultado += "<h3>Treino de Resistência Muscular</h3>";
          resultado += "<p>Objetivo: Aumentar a capacidade dos músculos de realizar um esforço prolongado.</p>";
          resultado += "<p>Tempo Médio: 45-60 minutos</p>";
          resultado += "<p>Séries e Repetições: 3-4 séries de 15-20 repetições</p>";
          resultado += "<ul><li>Corrida - <iframe width='560' height='315' src='https://www.youtube.com/embed/rJWAU6qknY4' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li>";
          resultado += "<li>Natação     - <iframe width='560' height='315' src='https://www.youtube.com/embed/eWTuNX9Advo' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li>";
          resultado += "<li>Ciclismo    - <iframe width='560' height='315' src='https://www.youtube.com/embed/5k1UlGk4-XY' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li>";
          resultado += "<li>Exercícios com peso livre ou máquinas - <iframe width='560' height='315' src='https://www.youtube.com/embed/uqwuTzSnRWY' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li></ul>";
          break;
      case 'funcional':
          resultado += "<h3>Treino Funcional</h3>";
          resultado += "<p>Objetivo: Melhorar a coordenação, equilíbrio e estabilidade.</p>";
          resultado += "<p>Tempo Médio: 45-60 minutos</p>";
          resultado += "<p>Séries e Repetições: 3-4 séries de 12-15 repetições</p>";
          resultado += "<ul><li>Agachamento Búlgaro   - <iframe width='560' height='315' src='https://www.youtube.com/embed/3szn2u-GfFc' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li>";
          resultado += "<li>Burpee                    - <iframe width='560' height='315' src='https://www.youtube.com/embed/QyuQSvEuzAc' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li>";
          resultado += "<li>Flexão com Toque no Ombro - <iframe width='560' height='315' src='https://www.youtube.com/embed/197ZjRI1auU' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li>";
          resultado += "<li>Prancha                   - <iframe width='560' height='315' src='https://www.youtube.com/embed/qNRqGqESAWU' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li>";
          resultado += "<li>Kettlebell Swings         - <iframe width='560' height='315' src='https://www.youtube.com/embed/RU88iqRVunk' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li></ul>";
          break;
      case 'hiit':
          resultado += "<h3>Treino HIIT (High-Intensity Interval Training)</h3>";
          resultado += "<p>Objetivo: Queimar calorias e melhorar a capacidade cardiovascular.</p>";
          resultado += "<p>Tempo Médio: 30-45 minutos</p>";
          resultado += "<p>Séries e Repetições: Intervalos de 30 segundos de esforço máximo e 30 segundos de descanso, por 15-20 minutos</p>";
          resultado += "<ul><li>Sprint        - <iframe width='560' height='315' src='https://www.youtube.com/embed/Hf4cSl3i5Qo' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li>";
          resultado += "<li>Jump Squat        - <iframe width='560' height='315' src='https://www.youtube.com/embed/YGGq0AE5Uyc' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li>";
          resultado += "<li>Mountain Climber  - <iframe width='560' height='315' src='https://www.youtube.com/embed/y7i3yIKi0ps' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li>";
          resultado += "<li>Kettlebell Swings - <iframe width='560' height='315' src='https://www.youtube.com/embed/RU88iqRVunk' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li></ul>";
          break;
      case 'definicao':
          resultado += "<h3>Treino de Definição</h3>";
          resultado += "<p>Objetivo: Reduzir a gordura corporal e definir os músculos.</p>";
          resultado += "<p>Tempo Médio: 60-75 minutos</p>";
          resultado += "<p>Séries e Repetições: Combinação de 3-4 séries de 10-15 repetições de força e 30-40 minutos de cardio</p>";
          resultado += "<ul><li>Combinação de Exercícios de Força e Aeróbicos - <iframe width='560' height='315' src='https://www.youtube.com/embed/watch?v=KmDdhjOEly8&pp=ygUjZXhlcmNpY2lvcyBkZSBkZWZpbmnDp8OjbyBtdXNjdWxhciA%3D' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li></ul>";
          break;
      default:
          resultado += "<p>Selecione um tipo de treino válido.</p>";
    }
  
    document.getElementById('exercicios-list').innerHTML = resultado;
  }
  

let exercicios = {
    'agachamento': {
        descricao: 'O agachamento é um dos melhores exercícios para fortalecer as pernas e glúteos...',
        link: 'https://gauchazh.clicrbs.com.br/donna/fitness/noticia/2024/02/sete-razoes-para-incluir-o-agachamento-na-rotina-de-exercicios-cls50fyzv002501l76hza73zs.html#:~:text=Agachar%20fortalece%20o%20seu%20core,com%20mais%20seguran%C3%A7a%20e%20efic%C3%A1cia.',
        video: 'https://www.youtube.com/embed/s7i94Okznns' 
    },
    'supino': {
        descricao: 'O supino é um exercício fundamental para o desenvolvimento dos músculos do peito, ombros e tríceps.',
        link: 'https://blog.integralmedica.com.br/supino-reto',
        video: 'https://www.youtube.com/embed/EZMYCLKuGow'
    },
    'levantamento terra': {
        descricao: 'O levantamento terra é um exercício que trabalha todo o corpo, com foco especial nos músculos das pernas, glúteos e lombar.',
        link: 'https://www.fiberoficial.com.br/blogs/novidades/tudo-o-que-voce-precisa-saber-sobre-o-levantamento-terra-para-que-serve-e-como-executar?srsltid=AfmBOopGqN9FMQ7lKv1w_XLNRy2Gw6w_OJt2eKD0iwMv6pBsE2_hoSH9',
        video: 'https://www.youtube.com/embed/50AkPBZwACQ'
    },
    'barra fixa': {
        descricao: 'A barra fixa é excelente para trabalhar a musculatura das costas e dos braços, especialmente bíceps e dorsais.',
        link: 'https://www.netshoes.com.br/blog/treino/post/barra-fixa-aprenda-exercicios-simples-e-eficientes?srsltid=AfmBOorFb-HfWAi8Npw-YnHSQtjvlTRvrxehGjXKqySr69AyNcSxEWDj',
        video: 'https://www.youtube.com/embed/thg6cGXSlvY'
    },
    'flexão de braços': {
        descricao: 'A flexão de braços é um exercício básico, porém eficaz, para fortalecer o peitoral, tríceps e ombros.',
        link: 'https://pratiquefitness.com.br/blog/quais-sao-os-beneficios-da-flexao-de-braco/#:~:text=%C3%89%20um%20exerc%C3%ADcio%20simples%2C%20que,e%20aumentar%20a%20resist%C3%AAncia%20f%C3%ADsica.',
        video: 'https://www.youtube.com/embed/dHgoYiCraCw'
    },
    'rosca direta': {
        descricao: 'A rosca direta é um dos principais exercícios para isolar e desenvolver os músculos do bíceps.',
        link: 'https://blog.totalpass.com.br/atividade-fisica/rosca-direta-aprenda-a-fortalecer-o-biceps/',
        video: 'https://www.youtube.com/embed/Q8TqfD8E7BU'
    },
    'leg press': {
        descricao: 'O leg press é um excelente exercício para fortalecer as pernas, especialmente quadríceps, glúteos e panturrilhas.',
        link: 'https://www.smartfit.com.br/news/fitness/leg-press-o-que-e/',
        video: 'https://www.youtube.com/embed/nY8UsiAqwds'
    },
    'remada curvada': {
        descricao: 'A remada curvada é um exercício eficiente para o desenvolvimento das costas, trabalhando músculos como os dorsais e os rombóides.',
        link: 'https://boaforma.abril.com.br/movimento/remada-curvada',
        video: 'https://www.youtube.com/embed/TfxJMertfsw'
    },
    'kettlebell swings': {
        descricao: 'Os kettlebell swings são ótimos para trabalhar a força explosiva, além de ativar os músculos do core, glúteos e quadríceps.',
        link: 'https://www.yopro.com.br/10-exercicios-com-kettlebell-para-intensificar-seus-treinos/#:~:text=O%20kettlebell%20swing%20ajuda%20a,do%20quadril%20e%20do%20core.',
        video: 'https://www.youtube.com/embed/RU88iqRVunk'
    },
    'burpee': {
        descricao: 'O burpee é um exercício que envolve todo o corpo, aumentando a resistência cardiovascular e trabalhando múltiplos grupos musculares.',
        link: 'https://blog.gsuplementos.com.br/exercicio-burpee/',
        video: 'https://www.youtube.com/embed/QyuQSvEuzAc'
    },
    'prancha': {
        descricao: 'A prancha é um exercício isométrico que fortalece o core, melhorando a estabilidade e a postura.',
        link: 'https://vitat.com.br/prancha-abdominal/',
        video:'https://www.youtube.com/embed/qNRqGqESAWU'
    }
};
function pesquisarExercicio() {
    const exercicio = document.getElementById('pesquisaExercicio').value.toLowerCase();
    let resultado = "";

    if (exercicios[exercicio]) {
        resultado += `<h3>${exercicio.charAt(0).toUpperCase() + exercicio.slice(1)}</h3>`;
        resultado += `<p>${exercicios[exercicio].descricao}</p>`;
        resultado += `<a href="${exercicios[exercicio].link}" target="_blank">Saiba mais sobre o ${exercicio.charAt(0).toUpperCase() + exercicio.slice(1)}</a>`;
        resultado += `<div class="mt-3"><iframe width="560" height="315" src="${exercicios[exercicio].video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
    } else {
        resultado += "<p>Exercício não encontrado. Tente pesquisar outro.</p>";
    }

    document.getElementById('resultadoExercicio').innerHTML = resultado;
}
