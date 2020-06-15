# INTRODUÇÃO

Devido alguns pedidos, criei esse repositório que consiste dos enunciados e resoluções do curso de nivelamento de programação e desenvolvimento oferecido pelo SantanderCoders.
Abaixo seguem os enunciados e os códigos podem ser verificados na raíz da árvore desse mesmo repositório.

# Séries favoritas

Suponha que queremos representar o conjunto de nossas séries favoritas. Como poderíamos fazer isso?

```
var seriesFavoritasDaAna = 
["Game of Thrones", "Breaking Bad", "House of Cards"];
var seriesFavoritasDoHeitor = ["Blindspot", "Blacklist"]

```

Como você pode ver, para representar um conjunto (Array) de strings, colocamos todas as strings que nos interessam, em colchetes (`[` e `]`) separados por vírgulas. Fácil, certo?

> Tente as seguintes consultas no terminal, para lhe ajudar já deixamos as variáveis declaradas:
> 
> -   `seriesFavoritasDaAna`
> -   `seriesFavoritasDoHeitor`
> -   `["olá","mundo!"]`
> -   `["olá","olá"]`

# Isso é uma matriz

O que acabamos de ver é que podemos facilmente modelar conjuntos de coisas. E isso porque em JavaScript, como acabamos de conhecer, temos dados do tipo _array_, também conhecido como vetor.

Matrizes podem ter vários elementos, não há limite!

E não é só isso, a ordem é importante! Por exemplo: “[" hello "," world "]” não é o mesmo que “[" world "," hello "]”, ambos têm os mesmos elementos, mas em diferentes posições.

Tente as seguintes consultas no terminal utilizando o console.log:

> -   `arraysIguais(["olá", "mundo"], ["mundo", "olá"])`
> -   `arraysIguais(["olá", "mundo"], ["olá", "mundo"])`
> -   `arraysIguais(["olá", "mundo"], ["olá", "todo", "o", "mundo"])`
> -   `arraysIguais(["olá"], ["olá", "mundo"])`
> -   `["olá", "mundo"] === ["mundo", "olá"]`
> -   `pessoas`
> -   `["mara", "juliana"] === pessoas`
> -   `pessoas === pessoas`
> 
> Que conclusões você pode tirar?

# Jogos de azar

Mas, podemos apenas criar matrizes de String? E se eu quiser, por exemplo, representar os números de loteria que saíram na semana passada? Ou os giros sucessivos de um dado? Ou se foi “cara ou coroa” em sucessivos giros de uma moeda?

```
var numerosDeLoteria = [2, 11, 17, 32, 36, 39];
var girosDeDado = [1, 6, 6, 2, 2, 4];
var saiuCara = [false, false, true, false];

```

Como você pode ver, também podemos representar conjuntos de números ou booleanos da mesma maneira: escrevê-los entre colchetes e separados por vírgulas. Podemos ter matrizes de números, strings, booleanos, etc. Poderíamos até ter matrizes de matrizes!

> Vamos ver se está claro, tente as seguintes consultas no terminal utilizando o console.log, para facilitar o seu entendimento já declaramos os arrays para você:
> 
> -   `numerosDeLoteria`
> -   `saiuCara`
> -   `[[1, 2, 3], [4, 5, 6]]`
> -   `girosDeDado`

# Matrizes vazias

Ótimo, parece que uma matriz pode conter qualquer tipo de elemento!

E não apenas isso, também podem conter qualquer quantidade de elementos: um, dois, quinze, centenas...

Podemos então ter matrizes vazias, isto é, sem elementos!

```
var umArrayVazio = []

```

> Tente escrever umArrayVazio no terminal

# Quantos elementos você tem?

Bem, já sabemos quais são as coisas que podemos representar com matrizes e como fazer isso. Mas o que podemos fazer com elas?

Vamos começar com o fácil: saiba quantos elementos estão no array. Podemos fazer isso usando a propriedade “length”, semelhante ao que fizemos com as strings. Para perguntar a um array quantos elementos ele possui, devemos indicar o array em questão seguido por um ”.” e a propriedade que queremos acessar ("length").

> Realize as seguintes consultas no terminal utilizando o console.log, para facilitar o seu entendimento nos já declaramos o array  **numerosDeLoteria**  para você:
> 
> -   “[] .length”
> -   “numerosDeLoteria.length”
> -   “[4, 3].length”

# Adicionando itens

Os arrays são muito úteis para conter vários elementos e nos ajudam a consultar quantos elementos eles contêm. Mas há outra coisa: podemos também adicionar elementos a qualquer momento, o que resolvemos usando o método `push`. Novamente, para adicionar um elemento a um array, devemos indicar o array seguido por um '.' e o método `push` com o elemento que queremos adicionar entre parenteses. Por exemplo:

```
var pertences = ["espada", "escudo", "tocha"];
//pertences.length aqui vale 3;

pertences.push ("amuleto mágico");
//agora pertences.length vale 4

```

Como podemos ver, o “push” adiciona um elemento à lista, o que faz com que seu tamanho aumente. Mas em que parte da lista você adiciona? No princípio? Ao final? No meio?

> Crie uma variável do tipo array chamada pertences que contém as strings "espada","escudo","crossbow" e imprima o array utilizando o **console.log.**
> 
> Utilize o método push para adicionar a string "cross", após adicionar a string imprima o array novamente com o  **console.log**.

# Mover

Bem, nós conversamos o suficiente; Chegou a hora da ação: !

> Declarar uma função chamada “mover”, que recebe dois arrays, remove o último elemento do primeiro e adiciona-o ao segundo.
> 
> Exemplo:
> 
> ```
> var umArray = [1, 2, 3];
> var outroArray = [4, 5];
> 
> mover(umArray, outroArray);
> 
> umArray //deveria ser [1, 2]
> outroArray //deveria ser [4, 5, 3]
> ```

# E onde está?

Outro método útil dos arrays é o “indexOf”, que nos diz em que posição um elemento está dentro do array:

```
var meuArray = ["a", "la", "grande", "le", "puse", "cuca"]
var posicao = meuArray.indexOf("grande"); //devolve 2

var diasDeTrabalho = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira"]
var umDia = diasDeTrabalho.indexOf ("segunda-feira"); // retorna 0

```

Como você pode ver, a “curiosidade” do método "indexOf" é que ele sempre retorna um número à menos que o esperado. Será que os criadores de JavaScript estavam errados? o.O

Não, é que em JavaScript, como em muitas linguagens, as posições das matrizes começam em 0: o primeiro elemento é a posição 0, a segunda é a posição 1, a terceira 2 e assim por diante.

> E o que acontece se você passar por parâmetro para `indexOf` um elemento que não tem? Descubra você mesmo!
> 
> Tente o seguinte no console:
> 
> ```
> diasDeTrabalho.indexOf ("osvaldo")
> ```

# Contém

Escreva a função  **contem(array, numero)**  que nos diz se um array contém um determinado elemento.

```
 contem([1, 6, 7, 6], 7)
true
 contem([1, 6, 7, 6], 6)
true
 contem([], 7)
false
 contem([8, 5], 7)
false
```

# Enésimo elemento

Por outro lado, com o “indexOf” (que nos diz a posição de um elemento em particular), existe um operador para descobrir qual elemento está em uma determinada posição:

```
 mesesDoAno[0]
"janeiro"
 ["esse", "cachorro", "tem", "a", "cauda", "peluda"][1]
"cachorro"

```

Atenção! O índice que você passa deve ser menor que o tamanho da matriz, ou coisas ruins podem acontecer.

> Tente você mesmo no console: o que acontece se você pedir o item 0 de uma lista vazia?
> 
> Ou se você perguntar ao item 48 por uma lista de 2 itens?
> 
> Depois de tentar usar o console.log para treinar, basta clicar em Executar resposta com o console vazio.
# Mais prêmios

Se você pedir por um elemento em uma posição que seja igual ou maior que o tamanho da matriz, você receberá `undefined`. Não parece uma coisa terrível, mas o problema é que com algo indefinido você não pode fazer nada realmente útil.

Então você está avisado: não exagere!

> Escreva a função “medalhaDeAcordoComPosto(numero)”, que recebe um número como parâmetro. Usando apenas o máximo de um “if” apenas. Talvez os arrays possam ser úteis aqui.
> 
> Você tem que devolver a medalha que corresponde às primeiras posições de uma competição:
> 
> ```
>  medalhaDeAcordoComPosto (1)
> "ouro"
>  medalhaDeAcordoComPosto (2)
> "prata"
>  medalhaDeAcordoComPosto (3)
> "bronze"
> medalhaDeAcordoComPosto (4)
> "nada"
>  medalhaDeAcordoComPosto (5)
> "nada"
> ```

# Soma, primeira parte

Ana, contadora de uma empresa bem conhecida, contabiliza os lucros de cada mês em uma matriz. Por exemplo, para o último semestre do ano passado registrou o seguinte:

```
//Em julho ganhou $ 50, em agosto perdeu $ 12, etc.
var lucroUltimoSemestre = [50, -12, 1000, 300, 200, 0];

```

E ela acabou de nos perguntar: _"posso saber o lucro de todo **um semestre**?"_

_"Óbvio"_, nós dissemos, e escrevemos o seguinte código:

```
function somaLucroSemestre(umSemestre) {
  return umSemestre[0] + umSemestre[1] +
        umSemestre[2] + umSemestre[3] +
        umSemestre[4] + umSemestre[5];
}

```

_"Muito Obrigada"_, Ana disse, e os lucros foram calculados usando a função que passamos para ela. Mas pouco tempo depois, ele voltou dizendo que também registrou os lucros do primeiro trimestre deste ano:

```
//Em janeiro a empresa faturou $80, em fevereiro, $453, em março $1.000
var lucrosPrimeiroTrimestre = [80, 453, 1000];

```

E ela nos perguntou: _ "Você poderia usar essa função que você me deu para calcular os ganhos do primeiro trimestre?"_

E estamos pensando .

> Tem algum problema na função `somaLucroSemestre` que escrevemos anteriormente? Funcionará com trimestres? E com quadrimestres?
> 
> Experimente testar a função no terminal utilizando o **console.log**, fazendo diferentes impressões na tela!
> 
> Lembre-se de testar no mínimo 3 vezes o console.

# Soma, segunda parte

A função `somaLucroSemestre` anterior tem dois problemas:

1.  É muito repetitiva e tediosa para escrever. Temos que fazer muitas somas à mão!
2.  E não é genérica, serve apenas para arrays de 6 elementos:

-   se tiver mais de seis elementos, só adiciona os seis primeiros;
-   se você tem menos, retorne coisas bizarras (você se lembra quando nós dissemos que se você fosse indexar coisas ruins poderiam acontecer ?).

O que gostaríamos é adicionar todos os elementos do array de uma forma genérica, não importa quantos realmente existam: queremos uma função `lucroTotal`, que pode adicionar períodos de qualquer tamanho: semestres, trimestres, etc. Que difícil!

> Nós já fizemos nossa versão; teste com as seguintes consultas e mostre seus resultados pelo console com **console.log**  para avançar:
> 
> ```
>  lucroTotal([2, 3])
>  lucroTotal([2, 3, 1, 8, 8, -1])
>  lucroTotal([])
> 
> ```
> 
> Você pode chamar a função lucroTotal diretamente, ela já foi escrita em um arquivo dentro do sistema mesmo que você não à veja.

# Soma, terceira parte

_Agora que já sabemos o que queremos (`lucroTotal`), podemos descobrir como fazer isso ..._

Vamos aos poucos: se a matriz não tivesse elementos, quanto deveria ser a soma? 0!

```
function lucroTotal0(umPeriodo) {
  var soma = 0;
  return soma;
}

```

E se eu tivesse exatamente um item? Este ... 0 .... mais esse elemento? Exatamente!

```
function lucroTotal1(umPeriodo) {
  var soma = 0;
  soma = soma + umPeriodo[0];
  return soma;
}

```

E se eu tivesse 2 elementos?

```
function lucroTotal2(umPeriodo) {
  var soma = 0;
  soma = soma + umPeriodo[0];
  soma = soma + umPeriodo[1];
  return soma ;
}

```

E se eu tivesse 3 elementos?

```
function lucroTotal3(umPeriodo) {
  var soma = 0;
  soma = soma + umPeriodo[0];
  soma = soma + umPeriodo[1];
  soma = soma + umPeriodo[2];
  return soma ;
}

```

> Você começa a ver um padrão? Tente escrever `lucroTotal4` que funciona para 4 itens.
# Soma, quarta parte

Então temos que repetir a operação de acumulação várias vezes, uma para cada elemento do array. Isso não só nos deixa desarrumados, mas também muito repetitivos!

Não havia uma estrutura que vimos anteriormente que nos permitisse repetir uma ação várias vezes?

Sim, é o `for`!

E como posso pedir que ele repita essa ação dinamicamente para todos os elementos?

Perguntando o `length` para o array!

Exemplo:

```
function lucroTotal(umPeriodo) {
  var soma= 0;
  var mes = 0;
  for (var i=0; i<umPeriodo.length; i++) {
    mes = umPeriodo[i];
    soma= soma+ mes;
  }
  return soma;
}

```

> Ainda não está convencido? Tente novamente, todas as 5 expressões seguintes no terminal utilizando o console.log:
> 
> Lembre-se de declarar a função lucroTotal exemplificada acima(não se preocupe, você pode copiar igual o exemplo).
> 
> -   `lucroTotal([])`
> -   `lucroTotal([100])`
> -   `lucroTotal([100, 2])`
> -   `lucroTotal([2, 10, -20])`
> -   `lucroTotal([2, 10, -20, 0, 0, 10, 10])`

# Contagens

_"Ah, mas isso não acaba aqui"_ - disse Ana _"Eu quero saber em quantos meses houve lucro, ou seja, o saldo foi maior que zero"_.

> Complete a função `quantidadeDeMesesComLucro`. Se você prestar atenção, notará que tem uma estrutura semelhante ao problema anterior

Exemplo:

```
function quantidadeDeMesesComLucro(umPeriodo) {
  
```

# Mais contagens

Ana, vendo que somos tão produtivos, nos perguntou algo mais: agora ela quer saber quantos meses de um período houve perda.

Dizemos que há uma perda em um período em que o saldo é menor que zero.

> Escreva a função `quantidadeDeMesesComPerda`. A estrutura da função é semelhante às que temos feito, vamos lá!
> 
> Para lhe ajudar já iniciamos a função para você, você só precisa preencher as lacunas.

# Filtrados

Bem na hora! , Ana nos deixou com um problema mais interessante: quer saber o saldo dos meses com lucro .

```
 saldosDeMesesComLucro([100, 20, 0, -10, 10])
[100, 20, 10]

```

> Escreva a função `saldoDeMesesComLucro`. Você pode usar a mesma estrutura do exercício dos exercícios anteriores, porém não tão rápido! Mas lembre-se que esta função precisa **retornar um array**.

# Naipe de truco

Vamos terminar essa sessão com um desafio

Queremos escrever uma função `naipeDeTruco`, que dado um naipe, devolva uma lista de strings, uma por cada carta desse naipe seguindo as cartas do truco:

```
 naipeDeTruco("espadas")
["1 de espadas", "2 de espadas", "3 de espadas" ..., "12 de espadas"]

```

Lembre-se que as cartas de truco incluem todas as cartas numeradas de 1 a 12, com exceção das cartas 8 e 9

> escreva a função `naipeDeTruco`