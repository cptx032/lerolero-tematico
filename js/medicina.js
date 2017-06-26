/*
Gerador de Lero Lero
*/

var dicionario_medicina = {
	conjuncoes: new Array(
		"Assim, ",
		"Por outro lado, ",
		"Assim mesmo, ",
		"No entanto, não podemos esquecer que ",
		"Do mesmo modo, ",
		"A tradição embriológica prova que ",
		"Nunca é demais lembrar o peso e o significado destes problemas, uma vez que ",
		"E os métodos posturais nos ajudam a ver que ",
		"Acima de tudo, é fundamental ressaltar que ",
		"O incentivo das instituições e o avanço tecnológico, assim como ",
		"Não obstante, ",
		"Todas estas questões, devidamente ponderadas, levantam dúvidas se ",
		"Porque além disso ",
		"Então, se supõe que ",
		"Ainda assim, existem dúvidas a respeito de como ",
		"É importante enfatizar que ",
		"Todavia, ",
		"Existem estudos que mostram que ",
		"O empenho em analisar ",
		"Percebemos, cada vez mais, que ",
		"Numa fisioentomologia magneticoelétrica, ",
		"É importante questionar o quanto ",
		"Neste sentido, ",
		"Evidentemente, ",
		"Por conseguinte, ",
		"É claro que ",
		"Podemos já vislumbrar o modo pelo qual ",
		"Desta maneira, ",
		"O cuidado em identificar a presença d",
		"A criação de critérios que nos auxiliam a tratar com "
	),
	substantivos: new Array(
			"a fleborrafia aplicada na região da bacia ",
			"a bacilemia congênita dos pacientes dos estudos feitos entre 2007 e 2009 ",
			"o bexigoma intravenoso presente na parte ocipital do cérebro ",
			"a bronquiectasia causada pelo método cirúrgico ",
			"o uso das novas ferramentas médicas, que são a causa de acromatúrias de grau 3, ",
			"o desenvolvimento contínuo de distintas formas de babesioses ",
			"o estado pluricelular cianótico da carótida ",
			"a cefaléia cardiomegálica ",
			"a disidrose ",
			"a disdiadococinesia que vemos comumente ",
			"o uso constante do estetoscópio na região intravascular respiratória ",
			"a ecstasia esplenomegálica ",
			"o glioma maligno de um sistema nervoso saudável ",
			"o modo que a literatura tem visto a questão da Hepatomegalia ",
			"a hepatomegalia como um fenômeno que deve ser estudado com mais profundidade ",
			"o aumento do índices de histerectomia ",
			"a crescente integração diferencial do miocárdio ",
			"o percentual de ocorrência dos I.A.M.s ",
			"a forma como temos feitos icterícias nos pacientes ",
			"as vilosidades presentes na parte interna do delgado e do jejuno ",
			"a aplicação do Kalium isótopo 74b74a ",
			"a petéquia hemorrágica excessiva ",
			"a poliúria com pústulas evidenciadas ",
			"a úlcera varicosa ",
			"a vesícula externo-muscular subcutânea ",
			"o orgão genital xântico por meio da xerofagia moderada ",
			"um caso particular de xifóide xifópago xerazídico xantocrômico ",
			"o entendimento da proposta do yin-yang que o yogurte causa no metabolismo ",
			"o uso da zeína prolamina na decomposição do levedo ",
			"a zimose do zimogênio "
		),
	verbos:  new Array(
			"nos obriga à análise ",
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
			"ainda não demonstrou convincentemente que vai participar na recriação ",
			"talvez venha a ressaltar a relatividade ",
			"prepara-nos para enfrentar situações atípicas decorrentes ",
			"maximiza as possibilidades do médico-cirurgião por causa ",
			"desafia a capacidade de equalização ",
			"põe em cheque o objeto ",
			"é uma das consequências ",
			"promove a alavancagem ",
			"não pode mais se dissociar ",
			"possibilita uma melhor visão geral ",
			"estimula o desejo ",
			"aponta para a evolução ",
			"faz parte de um processo de auto decisão ",
			"causa impacto na concepção incestual ",
			"apresenta tendências no sentido de aprovar o sentido ",
			"estende o alcance e a importância ",
			"deve passar por modificações independentemente ",
			"afeta positivamente a correta previsão "
		),
	complementos: new Array(
			"das afagias e amblipsias que temos observado no estudo de BORIS, 2003.",
			"dos aneurismas inflamatórios da parte interna da estrutura mitocondrial.",
			"da atrofia e astenia crônica das aplicações do cloro e flúor perto do nervo cariôntico.",
			"da enxertia cutânea que paralisa os membros peridurais.",
			"de uma instabilidade hemodinâmica que compromete o pescoço e os rins.",
			"da espessura da lesão quando se utiliza choques térmicos para limpeza séptica.",
			"da hipermeabilidade da nitrofurazona 0,2% à 0,1 com uma variação de 0,124 Hertz.",
			"das pomadas enzimáticas que controlam o fluxo de ATP e dos trifosfatos.",
			"dos graus de toxidade dos fibroblastos que, para a bactéria, são inerentes à sua estrutura osmótica.",
			"das PVP-I (1:1000) e do radical ativo sulfridrila.",
			"das bactérias gram-positivas nas soluções de cloreditina.",
			"da ação da P. aeruginosa e S. mutans em adolescentes entre 8 e 17 anos.",
			"das reações de hipersensibilidade por causa do potencial tóxico do benzato orto-pentil-3-4-avitaminado.",
			"das aplicações de poliuretano sulfametoxazol trimetoprima 50.000 U.",
			"de outros produtos de silicone e espuma de poliuretano semipermeável.",
			"desse tipo de cobertura que adere à pele e o leito cruento.",
			"dos efeitos da ingestão de mel que a literatura ainda desconhece.",
			"dos materiais que são aplicados na pele para cura de lesões graves.",
			"dos mais de 49% que utilizaram SPSS 10.0.",
			"das hemoculturas por punção venosa com técnica asséptica.",
			"das principais bactérias causadoras desse tipo de anomalia.",
			"do fluxo de pseudomonas das sepses cancerígenas.",
			"das abordagens endovasculares que o presente artigo está tratando.",
			"dos homens acima de 30 anos e mulheres acima dos 45.",
			"das vias pérvias que são diminuídas gradualmente pela ingestão desse tipo de acetil.",
			"dos pacientes assintomáticos que contabilizam 70% dos casos.",
			"das radiografias abdominais fleborrágicas poliformes.",
			"dos choques hipovolêmicos com redução da taxa respiratória.",
			"dos vasos femorais e transreversos do paciente.",
			"da escolha do método cirúrgico adequado."
		)
};