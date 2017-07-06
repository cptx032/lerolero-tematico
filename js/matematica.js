/*
Gerador de Lero Lero
*/

var dicionario_matematica = {
	conjuncoes: new Array(
		"Assim, ",
		"Por outro lado, ",
		"Assim mesmo, ",
		"No entanto, não podemos esquecer que ",
		"Do mesmo modo, ",
		"Da mesma maneira que ",
		"Nunca é demais lembrar o peso e o significado destes problemas, uma vez que ",
		"Uma construção difusa ∇²φ é polinomial se e se somente se ",
		"Acima de tudo, é fundamental ressaltar que ",
		"É possível perceber então que ",
		"Um elemento a é inversível se e somente se a e n são primos. Logo, ",
		"Suponhamos que ]ae > P(t)^1] é inversível, então ",
		"Porque além disso ",
		"Então, se supõe que ",
		"Ainda assim, existem dúvidas a respeito de como ",
		"É importante enfatizar que ",
		"Todavia, ",
		"Existem estudos que mostram que ",
		"O empenho em analisar ",
		"Notem que, pelos cálculos, ",
		"Assim, provamos que ",
		"É importante questionar o quanto ",
		"Neste sentido, ",
		"Evidentemente, ",
		"Por conseguinte, ",
		"É claro que ",
		"Sejam os anéis (A, +, .) e (B, #, *). Se ",
		"Desta maneira, ",
		"Seja D um domínio de integridade. Qualquer que seja ",
		"A criação de critérios que nos auxiliam a tratar com "
	),
	substantivos: new Array(
			"o teorema da incompletude de Gödel ",
			"o espaço de Hilbert dentro de um sistema formal abstrato algébrico ",
			"o paradoxo de Bertrand Russell dentro do espaço Bose-Einstein ",
			"a formalidade da demostração que um conjunto U tem uma propriedade ~P ",
			"a indecibilidade do problema da parada numa lógica de grau n ",
			"uma generalização para a aplicação do conceito zênico numa curvatura n-dimensional num plano zeta de Riemann ",
			"uma esfera (n − 1)-dimensional S encrustrada dentro de uma esfera n-dimensional S^n ",
			"uma linha geodésica que parte de plano curvo P ∈ R | p(P) onde p é conjunto das partes de r(T) (r' de T(lim Z-1)) ",
			"o plano simplético curvo de PI/2-n de p' dimensões ",
			"um sistema dinâmico integrável em {f, H} ",
			"o uso de variantes nos gradientes pela interseção de um anel de Cantor ",
			"o grupo abeliano monoide de um corpo racional ",
			"a teoria dos anéis com subanéis em Q não unitário em h, k ",
			"o conjunto dos números hiper-reais como extensão da definição de Edwin Hewitt ",
			"o estudo de uma recursão infinita no universo de von Neumann ",
			"o uso do princípio da indução transfinita (ZFC) ",
			"a prova que f(k) = h(f, y1, y2, ...) é comutativo no ponto (y2, f) ",
			"o abuso das notações f' em 2ℵ, ℵ0 e ℵ1 ",
			"a hipótese do contínuo ",
			"a base de uma inferência subjuntiva de um conjunto das partes ",
			"a prova que ℵ1 < |A| < 2ℵ0 ",
			"uma integral de Riemann e a sua reformulação na integral de Lebesque ",
			"o uso da transformada de Fourier numa função de Dirichlet ",
			"a logarítmica de um espaço de probabilidade E para todo a < b ",
			"uma função não integrável no sentido de Riemann sobre [0, 1], não importando o sentido da curva, ",
			"a importância das funções que são iguais em todas as partes de seu domínio ",
			"a medida nula e a função da derivada de Laplace ",
			"a hipótese de B. Russell na teoria dos números ",
			"o uso de um anel izomórfico distributivo sob a forma: (n + 1) x = n x + x (definição por indução) ",
			"um caso de simplectomorfismo de um conjunto imaginário dentro de um número transfinito "
		),
	verbos:  new Array(
			"nos ajuda a calcular com precisão o plano vetorial dH(Y) = ω(XH,Y) ",
			"cumpre um papel essencial na formulação ",
			"exige a precisão e a definição ",
			"auxilia a preparação e a composição ",
			"garante a contribuição de um grupo importante na determinação ",
			"assume importantes posições no estabelecimento ",
			"facilita a criação ",
			"obstaculiza a apreciação da importância ",
			"oferece uma interessante oportunidade para verificação ",
			"acarreta um processo de reformulação e modernização ",
			"pode nos levar a considerar a reestruturação ",
			"representa uma abertura para a melhoria ",
			"varia no intervalo aberto ]0,+∞[ dentro de uma secção fechada de um espaço Hilbert euleriano ",
			"talvez venha a ressaltar a relatividade ",
			"nos mostra claramente o método que devemos usar para calcular a integral dupla ",
			"evidencia que ∑(n-2)^PI / Lim(+∞) x ⊃ T(z) = P(t(u)) se o plano formar uma singularidade ",
			"desafia a capacidade de equalização ",
			"põe em cheque o objeto ",
			"é uma das consequências ",
			"integra em f'(x) / ∑∰ em módulo e em valor do quantificador ",
			"não pode mais se dissociar ",
			"possibilita uma melhor visão ",
			"demonstra que os números sob a forma M(n) = 2^n-1 (números de Mersenne) integram a modularização ",
			"aponta para a evolução de um primo de Goldbach ",
			"faz parte de um processo para encontrar o ℤ - 1 / mod(|r1 - r2|)",
			"causa impacto no valor da divisibilidade ",
			"apresenta a prova desejada ",
			"estende o alcance ",
			"deve passar por modificações independentemente ",
			"afeta positivamente a correta probabilidade "
		),
	complementos: new Array(
			"das propriedades de um conjunto que não pertence a si mesmo sob a forma (R ∉ R) ⊃ (R ∈ R).",
			"da integral derivada de uma negação lógica exprimível ou não num espaço topológico Z de t.",
			"do isomorfismo determinístico de um gradiente normalizado.",
			"de um espaço tangente de uma variedade de Kahler-Hamilton.",
			"de uma topologia algébrica.",
			"de uma geometria algébrica representativa.",
			"da teoria das representações lineares.",
			"das propriedades de interseção de conjuntos definidos por equações polinomiais a várias variáveis.",
			"do impulso inicial na busca de soluções inteiras e racionais de equações diofantinas.",
			"dos Números Algébricos que deram origem à Álgebra Comutativa.",
			"do caso de variedades suaves ou holomorfas.",
			"dos prefeixes em X que formam uma categoria F' de T de x com x -> +inf.",
			"das funções injetivas no plano semi-aberto de Lie.",
			"dos funtores consistentes em famílias canônicas de morfismos.",
			"das particularidades do plano projetivo X, como mostramos anteriormente.",
			"desse tipo de equivalência no talo Yx*Xy.",
			"dos volumes sobrejetores dos functores.",
			"de uma atribuição hTop -> set.",
			"do teorema de Freyd.",
			"dos subobjetos abelianos.",
			"das álgebras k-associativas.",
			"da relação entre o conjunto imagem e o domínio do feixe do conúcleo.",
			"das abordagens usadas por Bohn para criação de uma categoria Sch em Sch spec.",
			"de um manifóide.",
			"das pilhas/stacks de co-homologia.",
			"de um gerador lambda de um anel de Gaitsgory-Lurie.",
			"de uma super-álgebra de Bool.",
			"dos choques entre os super-centros do gradiente.",
			"da teoria proposta por Whitehead.",
			"da escolha do produto da razão de uma curva orto-simplética."
		)
};