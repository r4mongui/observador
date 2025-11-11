Alunos: Pedro de Oliveira Mota e Guilherme Ramon 

Padrão de Projeto: Observador
Esse projeto usa o padrão observador em typescript, que simula uma estação de meteorologia, notificando de forma automática vários dispositivos quando a temperatura é alterada.

Como funciona:
O padrão utilizado permite que vários objetos recebem uma notificação automática quando o valor de outro objeto se altera, porém, sem criar dependência direta entre os dois.

Neste projeto:
O "WeatherStation" é o sujeito que guarda os valores de temperatura já o "DisplayDevice e AlertSystem são os observadores que reagem as mudanças dele.

Benefícios:
- Desacoplamento: O sujeito não precisa saber os detalhes dos observadores.
- Escalabilidade: É possível adicionar  observadores novos sem alterar o código já criado.
- Reatividade: É o ideal para esse tipo de sistema que depende de atualizações em tempo real.

Para clonar e executar:
git clone https://github.com/r4mongui/observador.git
cd observador
npm install