"use client";

import type { ContractFormData } from '@/app/page';

type ContractProps = {
  data: Partial<ContractFormData>;
};

const Clause = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const titleStyle: React.CSSProperties = {
    fontFamily: 'Times New Roman, serif',
    fontSize: '12pt',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'left',
    marginTop: '1.5rem',
    marginBottom: '0.5rem',
  };

  return (
    <section>
      <h2 style={titleStyle}>{title}</h2>
      <div>{children}</div>
    </section>
  );
};

const Contract = ({ data }: ContractProps) => {
  const {
    razaoSocial = '[razão social]',
    cnpjCpf = '[CNPJ/CPF]',
    endereco = '[endereço]',
    cidade = '[cidade]',
    uf = '[uf]',
    cep = '[CEP]',
  } = data;

  const filledValueStyle: React.CSSProperties = {
    color: 'hsl(var(--primary))',
    fontWeight: '600',
    
  };

  const textStyle: React.CSSProperties = {
    fontFamily: 'Times New Roman, serif',
    fontSize: '12pt',
    lineHeight: '1.5',
    textAlign: 'justify',
  };
  
  const headerStyle: React.CSSProperties = {
    fontFamily: 'Times New Roman, serif',
    fontSize: '14pt',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: '2.5rem',
  };


  return (
    <div id="contract-preview" className="bg-white text-black p-8 md:p-12">
      <h1 style={headerStyle}>Contrato de Licença de Uso de Software (ERP)</h1>
      
      <p style={textStyle}>
        <strong>Razão Social:</strong> <span style={filledValueStyle}>{razaoSocial}</span> - pessoa física ou jurídica de direito privado, regularmente inscrita no CNPJ/CPF sob o número: <span style={filledValueStyle}>{cnpjCpf}</span> com endereço: <span style={filledValueStyle}>{endereco}</span> Cidade: <span style={filledValueStyle}>{cidade}</span> Estado: <span style={filledValueStyle}>{uf}</span>, CEP: <span style={filledValueStyle}>{cep}</span>, doravante denominado(a) CONTRATANTE; e MARCIO SILVA DE OLIVEIRA ME, pessoa jurídica de direito privado com sede na Rua Pedro Gomes de Carvalho, Nº 758, Oficinas, Tubarão /SC, inscrita no CNPJ sob o n.º 14473125/0001-43, doravante denominada CONTRATADA. Em conjunto, CONTRATANTE e CONTRATADA denominadas “Partes” e, isoladamente, “Parte”, conferem forma regular e estável ao presente CONTRATO EMPRESARIAL (USO SISTEMA HIPER) (“Contrato”), mediante as seguintes cláusulas e condições.
      </p>

      <Clause title="CLÁUSULA PRIMEIRA – DEFINIÇÕES">
        <p style={textStyle}>1.1. Para os efeitos deste instrumento os vocábulos e expressões abaixo têm as seguintes definições:</p>
        <div style={{...textStyle, display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
            <p style={textStyle}><strong>1.1.1. Multiusuário:</strong> termo que define um sistema operacional que permite acesso simultâneo de múltiplos usuários;</p>
            <p style={textStyle}><strong>1.1.2. HIPER:</strong> Sistema Integrado de Gestão Empresarial (“Enterprise Resource Planning”), software multiusuário de planejamento de recursos empresariais online e ou Desktop, que possui módulos de gerenciamento de processos relacionados a finanças (gestão financeira, gestão de compras e relatórios), controle de vendas e serviços (gestão de vendas, gestão fiscal (PDV com cupom NFCe e CFe SAT), de propriedade da empresa ( HIPER SOFTWARE CNPJ 12.605.982/0001-24) detentora dos direitos autorais do código fonte do sistema , não desenvolvidos por encomenda do(a) CONTRATADA , representando sistema genérico de uso não exclusivo;</p>
            <p style={textStyle}><strong>1.1.3. HIPER:</strong> software destinado à comercialização, na forma de revenda, de Sistemas.</p>
            <p style={textStyle}><strong>1.1.4. Backup:</strong> cópia de dados de um dispositivo de armazenamento a outra base de dados para que possam ser restaurados em caso da perda dos dados originais;</p>
            <p style={textStyle}><strong>1.1.5. Suporte:</strong> serviço de atendimento para esclarecimento de dúvidas e auxílio atinentes ao funcionamento e à utilização de software;</p>
            <p style={textStyle}><strong>1.1.6. Licença de uso:</strong> autorização concedida para uso do software, por prazo determinado conforme proposta comercial apresentada ao CONTRATANTE contendo os módulos a serem utilizados conforme necessidade da CONTRATANTE;</p>
            <p style={textStyle}><strong>1.1.7. Versão:</strong> o conjunto de características estruturais e funcionais do software em determinado estágio;</p>
            <p style={textStyle}><strong>1.1.8. Customização:</strong> personalização ou adaptação de funcionalidades de software, a fim de alterar ou ampliar suas funcionalidades (módulos/rotinas) originárias.</p>
            <p style={textStyle}><strong>1.1.9 Proposta comercial:</strong> documento enviado ao USUÁRIO com preços, condições de pagamento, detalhamento do produto contratado e implantação que faz parte do presente contrato. Em caso de contradição entre a proposta comercial e o presente termo, prevalecem as disposições da proposta comercial.</p>
            <p style={textStyle}><strong>1.1.10. Uptime:</strong> Tempo em que a aplicação se encontra operando normalmente, sem nenhum problema ou queda no servidor.</p>
            <p style={textStyle}><strong>1.1.11 CONTRATADA –</strong> É a Empresa responsável pela venda e manutenção do software</p>
            <p style={textStyle}><strong>1.1.12 CONTRATANTE –</strong> É a Empresa que está contratando serviços</p>
        </div>
      </Clause>
      
      <Clause title="CLÁUSULA SEGUNDA – DO OBJETO">
        <p style={{...textStyle, marginTop: '0.5rem'}}>2.1 pelo presente instrumento, A CONTRATADA formaliza a venda da licença do PROGRAMA em favor do CONTRATANTE, bem como demais componentes do produto.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}><strong>Parágrafo único:</strong> As partes acordam que a relação comercial de compra e venda se restringe somente entre o A CONTRATADA e o CONTRATANTE, isentando a HIPER de qualquer responsabilidade consumerista, bem como de prestação de serviço de suporte a CONTRATANTE.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>2.1.2. O presente Contrato tem por objeto a licença para utilização software conforme Proposta comercial enviada ao CONTRATANTE com preços condições de pagamento detalhamento do produto contratado e implantação que faz parte do presente termo de uso. Em caso de contradição entre a proposta comercial e o presente contrato prevalece as disposições da proposta comercial.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>2.1.3 A CONTRATADA não garante que o Sistema HIPER atenderão todas as necessidades e especificidades demandadas pelo (a) CONTRATANTE; a ausência de determinada qualificação no HIPER não obrigará a CONTRATADA e/ou HIPER a customizá-los.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>2.1.4 O HIPER poderá vir a ter novas versões, resultantes de modificações em suas atuais características, por razões técnicas de compatibilização com a evolução de seus recursos e plataformas de geração e operação, e principalmente, objetivando as suas próprias evoluções</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>2.1.5 O HIPER será fornecido por meio eletrônico, sem mídias, para garantir que o (a) CONTRATANTE tenham sempre as competentes versões mais atualizadas.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>2.1.6 Não estão incluídos no presente contrato o fornecimento de softwares e a prestação de serviços que não estejam especificados neste Instrumento ou proposta comercial; porém poderão ser detalhados em proposição comercial separada, que poderá ser objeto de aditivo contratual ou contratação própria, autônoma e específica.</p>
      </Clause>

      <Clause title="CLÁUSULA TERCEIRA – DAS OBRIGAÇÕES E RESPONSABILIDADES">
        <p style={{...textStyle, marginTop: '0.5rem'}}>3.1. A CONTRATADA garante o perfeito funcionamento do HIPER ERP, em condições normais de funcionamento e sob o cumprimento das orientações especificações técnicas de utilização, excetuando-se assim problemas causados por falha nos equipamentos ou má utilização, ou problemas causados por ausência de atualizações de versões e/ou erros relacionados às plataformas eletrônicas do (a) CONTRATANTE.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>3.1.2 A CONTRATADA JUNTO A HIPER garante a CONTRATANTE um Uptime mensal de 99,00 % para a aplicação HIPER, disponibilizando o acompanhamento e a consulta através do link que deverá ser fornecido ao CONTRATANTE.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>3.1.3 A CONTRATADA não intermedia, não edita, não audita, não fiscaliza e não monitora o uso do HIPER ERP pelo (a) CONTRATANTE salvo para fins técnicos e estatísticos, sem divulgação ou registro da identidade dos usuários e de dados do (a) CONTRATANTE.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>3.2. A CONTRATADA não se responsabiliza por danos decorrentes de mau uso ou inabilidade do (a) CONTRATANTE em relação ao HIPER ERP.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>3.3. A CONTRATADA não se responsabiliza pela integração desautorizada do HIPER ERP com outros softwares e/ou com o ambiente computacional do (a) CONTRATANTE que possam gerar ineficiência ou distorções de dados.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>3.4. O (A) CONTRATANTE e responsáveis pela manutenção, alimentação dos dados (cadastramento), preservação e back-up do HIPER ERP.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>3.5. A CONTRATADA não é responsável pela configuração de equipamentos e funcionalidades operacionais que sejam vinculados, direta e indiretamente, às funcionalidades do HIPER ERP, tais como mikrotik, access points, servidores de proxy, servidores de DNS, servidores web, servidores FTP etc.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>A CONTRATANTE Poderá solicitar serviços extras a CONTRATADA que não seja objeto deste contrato podendo ou não ser formalizado um novo contrato de serviços de manutenção em computadores e redes interna.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>3.6. Para fins deste Contrato, as Partes reconhecem que o HIPER ERP WEB são seguros, todavia, assim como ocorre em quaisquer ambientes virtuais, estão sujeitos a ameaças e violação criminosa, sendo estas causas excludentes da responsabilidade da CONTRATADA.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>3.7. As tecnologias web são suportadas por serviços de comunicação, tais como, internet e rede de telecomunicações, não oferecidos pela CONTRATADA e que podem impactar no funcionamento do HIPER ERP, sendo fato excludente da responsabilidade da CONTRATADA pelo funcionamento do HIPER ERP.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>3.8. O (A) CONTRATANTE está ciente de que é indispensável que o terminal onde o sistema será utilizado tenha acesso à internet e navegador moderno (tais como: Google Chrome, Mozilla Firefox, Safari), devidamente atualizado, para o preciso funcionamento HIPER GESTÃO.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>3.9. É proibido qualquer procedimento realizado pelo (a) CONTRATANTE que implique no aluguel, arrendamento, cessão, empréstimo, seja total ou parcial, do HIPER ERP a terceiros.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>3.10. A CONTRATADA não se responsabilizará pelos resultados produzidos pelo HIPER ERP, caso estes sejam afetados por algum tipo de programa externo, como aqueles conhecidos popularmente como vírus, ou por falha de operação.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>3.11. A CONTRATADA não se responsabilizará, ainda, por: (i) Integração do HIPER ERP com qualquer outro software de terceiros ou do (a) CONTRATANTE; (ii) operação do HIPER ERP por pessoas não autorizadas; (iii) qualquer defeito decorrente de culpa exclusiva do(a) CONTRATANTE ; e (iv) pelos danos ou prejuízos decorrentes de decisões administrativas, gerenciais ou comerciais tomadas com base nas informações fornecidas pelo HIPER ERP.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>3.12. Respeitadas as previsões legais relativas a esta espécie de contrato, a CONTRATADA não será responsabilizada pelo uso abusivo, ou uso em desacordo com as especificações técnicas aplicáveis, ou em razão de modificações ou ajustes sistêmicos realizados (inclusive combinação, conexão, operação ou uso de qualquer componente com equipamento ou documentação não fornecido pela CONTRATADA), do HIPER ERP pelo(a) CONTRATANTE ou por qualquer terceiro não autorizado pela CONTRATADA, inclusive por lucros cessantes, perda de dados, descontinuidade de negócios, relacionados ao uso ou mau uso do HIPER ERP, mesmo nos casos em que a CONTRATADA tenha sido comunicada.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>3.13. A CONTRATADA não será responsabilizada por quaisquer atrasos ou falha no cumprimento de suas obrigações, caso sejam resultantes de fatos alheios à vontade das partes, ou ainda em razão de fatores que fujam de seu controle sistêmico, incluindo casos fortuitos e/ou eventos de força maior.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>3.14. Qualquer prejuízo que o(a) CONTRATANTE vierem a experimentar, pelo uso inadequado do HIPER ERP, pelo cadastramento incorreto de quaisquer dados nas plataformas da CONTRATADA ou pelas informações constantes em boletos bancários/notas fiscais que foram fornecidas pelo(a) CONTRATANTE; não serão suportados pela CONTRATADA.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>3.15 Utilizar do SISTEMA fornecido ERP, de forma ilegal, propiciando a sonegação fiscal de impostos.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}><strong>Parágrafo único:</strong> A CONTRATANTE se responsabiliza isoladamente pelo uso indevido ou inadequado do SISTEMA, bem como por quaisquer atos cometidos contrariamente ao disposto no caput, obrigando-se inclusive a indenizar a CONTRATADA, por qualquer desembolso que porventura esta seja compelida a realizar, motivada por demandas judiciais ou fiscais, originárias do mau uso do SISTEMA conforme o paragrafo 3.15.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>3.16. É permitido à CONTRATADA suspender imediatamente, sem prévio aviso, todos os serviços prestados, caso constatadas práticas ilícitas e/ou abusivas relacionadas aos softwares contratados; bem como caso a CONTRATANTE utilize linguagem inadequada e/ou atos ofensivos de qualquer natureza perante os agentes de atendimento da CONTRATADA.</p>
      </Clause>

      <Clause title="CLÁUSULA QUARTA – SUPORTE E CUSTOMIZAÇÃO">
        <p style={{...textStyle, marginTop: '0.5rem'}}>4.1. O Suporte a ser prestado diretamente ao (à) CONTRATANTE, poderá ser prestado pela CONTRATADA, devendo ser solicitado por meio dos e-mails ou chat online whasapp através de ferramenta disponibilizada em nosso endereço eletrônico https://www.digitalmk.com.br</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>4.2. Ressalvadas condições especiais, o atendimento para Suporte será disponibilizado em dias úteis e horário comercial, com resposta em tempo compatível com a complexidade do questionamento Horário Comercial: de segunda a Sexta – Feira das 08h30min às 12hmin 13h30min as 18h00min Sábado das 08:30 as 12:00 horário de Brasília excerto feriados municipais e federais.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>4.3. O Suporte será prestado pela CONTRATADA por meio de profissionais habilitados, de forma online, para manter a agilidade e baixo custo ao (à) CONTRATANTE.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>4.4. A CONTRATANTE Autoriza para os devidos fins a CONTRATADA realizar remotamente operações dentro de seus computadores para melhor utilização do software. O cliente está totalmente ciente sobre o funcionamento desta operação, reconhecendo que o mesmo não representa qualquer perigo à integridade de seus equipamentos e/ou softwares, assim como reconhece a competência técnica e idoneidade da e de seus colaboradores para efetuar tal procedimento.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>4.5. O Treinamento poderá ser feito presencial pela CONTRATADA desde que conste na proposta comercial conforme item 1.1.9 deste contrato.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>4.6. Em caso de necessidade de Suporte além do padrão, este deverá ser solicitado pelo (a) CONTRATANTE, que deverá aprovar o preço adicional para consecução dos competentes serviços</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>4.7. Os serviços de Customização poderão ser contratados, mediante o pagamento de preço adicional, pelos mesmos meios de comunicação do serviço de Suporte, podendo, porém, a CONTRATADA, a seu exclusivo critério, exigir a formalização da prestação de serviço em instrumento jurídico apropriado.</p>
      </Clause>

      <Clause title="CLÁUSULA QUINTA – CONDIÇÕES COMERCIAIS">
        <p style={{...textStyle, marginTop: '0.5rem'}}>5.1. A aceitação deste Contrato dar-se-á mediante adesão eletrônica, por meio da rede mundial de computadores, sendo enviado por e-mail para a CONTRATANTE.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>5.2 pelo licenciamento e utilização do HIPER ERP (a) CONTRATANTE pagará a CONTRATADA o valor dividido conforme consta na proposta comercial apresenta a CONTRATANTE com seus respectivos módulos.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>5.3. O valor inicialmente contratado poderá ser alterado em razão de eventual renovação do licenciamento e utilização do HIPER ERP ou novas liberações de módulos não constates na proposta inicial apresentada.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>5.4. O presente instrumento contratual vigorará pelo prazo mínimo de 6 (seis meses) meses, podendo ser rescindido pela CONTRATADA caso a CONTRATANTE não repasse os valores conforme estabelecido na cláusula 5.2 deste contrato.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>5.5. Transcorrido o período da contratação entabulado, caso não haja expressa manifestação em sentido contrário da CONTRATANTE, a ser exercida na forma escrita ou da própria CONTRATADA, enviará as competentes notas fiscais ao(à) CONTRATANTE depois de perfectibilizada a quitação dos preços; serão enviadas para e-mail cadastrado pelo(a) CONTRATANTE, tão somente na sua versão eletrônica (NFS-e).</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>5.9. Concorda o (a) CONTRATANTE que as contratações/aquisições de licenças, plugins e quaisquer outros serviços (inclusive de terceiros), necessários para o devido funcionamento do HIPER ERP, não abrange à presente contratação; de modo que deverão ser arcados pelo (a) próprio (a) CONTRATANTE, sem qualquer direito à reembolso.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>5.10. O inadimplemento de quaisquer valores devidos em razão deste Contrato, na data estipulada, ensejará a aplicação de multa na ordem de 2% (dois por cento) sobre o valor da parcela inadimplida, bem como de juros de moratório de 1% (um por cento) ao mês, calculados “pro rata die”, e correção monetária pela variação positiva do IGPM/FGV.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>5.11 A falta de pagamento de duas parcelas, consecutivas ou aleatórias, acarretará na rescisão do presente contrato e o imediato bloqueio de acesso e funcionamento do PROGRAMA caso não tenha backup poderá haver pedada de arquivos, bem ainda a cobrança de eventual valor inadimplido de forma administrativa ou judicial, independente de prévia comunicação judicial ou extrajudicial.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>5.12. O inadimplemento dos valores devidos à CONTRATADA autoriza o registro do nome do (a) CONTRATANTE e de eventuais devedores solidários nos cadastros de inadimplência, bem como o pronto protesto dos competentes títulos e a cobrança extrajudicial e/ou judicial do crédito.</p>
      </Clause>

      <Clause title="CLÁUSULA SEXTA – PROPRIEDADE INTELECTUAL">
        <p style={{...textStyle, marginTop: '0.5rem'}}>6.1. A CONTRATADA Não é proprietária e detentora dos direitos autorais sobre o código-fonte do HIPER ERP, além das demais tecnologias desenvolvidas no âmbito deste Contrato, sendo todos protegidos e regulados pela Lei 9.609/98 a empresa desenvolvedora em comum acordo com a CONTRATADA.</p>
      </Clause>
      
      <Clause title="CLÁUSULA SÉTIMA – SIGILO DE INFORMAÇÕES">
        <p style={{...textStyle, marginTop: '0.5rem'}}>7.1. O HIPER GESTÃO fica armazenados na nuvem, em um servidor da Amazon, sendo que os dados inseridos pelo (a) CONTRATante serão protegidos, com segurança conforme a lei LGPD (Lei Geral de Proteção dos Dados).</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>7.2. A CONTRATADA poderá coletar e usar informações técnicas que sejam fornecidas pelo (a) CONTRATANTE relacionados ao objeto do presente instrumento; porém, as aludidas informações somente poderão ser utilizadas para o aprimoramento do ERP, ou para o fornecimento de serviços tecnológicos personalizados, sendo vedada a divulgação da identidade do (a) CONTRATANTE.</p>
      </Clause>

      <Clause title="CLÁUSULA OITAVA – DA RESCISÃO">
        <p style={{...textStyle, marginTop: '0.5rem'}}>8.1 O presente instrumento contratual vigorará pelo prazo mínimo de 6 (seis meses) , podendo ser rescindido pela CONTRATADA caso a CONTRATANTE não repasse os valores conforme estabelecido na proposta comercial apresentada.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>8.2 Rescindido o presente instrumento antes do lapso temporal de vigência do licenciamento contratado, por opção ou culpa da CONTRATANTE antes dos 6 meses , esta perderá em desfavor da CONTRATADA o valor que já pago, além de ter de pagar em favor da CONTRATADA as parcelas que compõe o preço devidas até a data da rescisão contratual e, a título de multa, a quantia correspondente a 30% (trinta por cento) sobre o valor das parcelas vincendas que compõem o preço total do contrato dentro do período de 6 meses.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>8.3 Passados 6 (seis meses) a CONTRATANTE poderá a qualquer tempo solicitar o cancelamento do contrato sem que lhe seja aplicada multas.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>8.4. A CONTRATADA não estará obrigada a armazenar informações do (a) CONTRATANTE em suas bases de dados por mais de 45 dias a partir da expiração das competentes licenças ou da inatividade de pagamentos, salvo a guarda por 06(seis) meses dos Registros de Acesso, nos termos do artigo 15 da Lei 12.965/2014. 3.17. A CONTRATADA não se responsabilizará pelo armazenamento quaisquer dados do (a) CONTRATANTE depois de perfectibilizada a rescisão contratual.</p>
        <p style={{...textStyle, marginTop: '0.5rem'}}>8.5 Caso a CONTRATADA, por qualquer motivo, deixe de atuar no mercado, especialmente deixando de prestar os serviços relativos a venda de Software será indicada novos representantes para que o Suporte seja continuamente prestado, assegurando ao (à) CONTRATANTE a continuidade do adequado funcionamento/manutenção daquele, consideradas as suas especificações, durante o prazo de validade técnica da respectiva versão CONTRATADA, nos moldes do artigo 8º da Lei 9.609/98.</p>
      </Clause>

      <Clause title="CLÁUSULA NONA – DISPOSIÇÕES GERAIS">
        <p style={{...textStyle, marginTop: '0.5rem'}}>9.1 O presente instrumento contratual é celebrado em caráter irrevogável e irretratável, valendo entre as Partes, herdeiros ou sucessores a qualquer título, sendo vedado ao(à) CONTRATANTE transferir os direitos e obrigações impostos por este instrumento, sem a prévia e expressa anuência, por escrito, da CONTRATADA.</p>
      </Clause>
      
      <Clause title="CLÁUSULA DÉCIMA – DO FORO">
        <p style={{...textStyle, marginTop: '0.5rem'}}>10.1 As partes elegem o Foro da Comarca de Tubarão - SC, para dirimirem quaisquer dúvidas concernentes ao presente instrumento.</p>
      </Clause>
    </div>
  );
};

export default Contract;

    